import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { parseExcelFile } from "@/lib/parsing/excel-parser";
import { parsePdfFile } from "@/lib/parsing/pdf-parser";
import { mapFields } from "@/lib/parsing/field-mapper";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { upload_id } = await request.json();

    if (!upload_id) {
      return NextResponse.json({ error: "No upload_id provided" }, { status: 400 });
    }

    // Get upload record
    const { data: upload, error: fetchError } = await supabase
      .from("uploads")
      .select("*")
      .eq("id", upload_id)
      .single();

    if (fetchError || !upload) {
      return NextResponse.json({ error: "Upload not found" }, { status: 404 });
    }

    // Update status to processing
    await supabase
      .from("uploads")
      .update({ status: "processing" })
      .eq("id", upload_id);

    // Download file from storage
    const { data: fileData, error: downloadError } = await supabase.storage
      .from("documents")
      .download(upload.file_path);

    if (downloadError || !fileData) {
      await supabase
        .from("uploads")
        .update({ status: "failed", error_message: "Failed to download file" })
        .eq("id", upload_id);
      return NextResponse.json({ error: "Failed to download file" }, { status: 500 });
    }

    const buffer = Buffer.from(await fileData.arrayBuffer());

    // Parse based on file type
    let result;
    if (upload.mime_type?.includes("pdf")) {
      result = await parsePdfFile(buffer);
    } else {
      result = await parseExcelFile(buffer);
    }

    if (!result.success || !result.data) {
      await supabase
        .from("uploads")
        .update({ status: "failed", error_message: result.error })
        .eq("id", upload_id);
      return NextResponse.json({ error: result.error }, { status: 422 });
    }

    // Map fields
    const mappedItems = mapFields(result.data.line_items);
    result.data.line_items = mappedItems;

    // Update upload with parsed data
    await supabase
      .from("uploads")
      .update({
        status: "completed",
        parsed_data: result.data,
        processed_at: new Date().toISOString(),
      })
      .eq("id", upload_id);

    return NextResponse.json({ data: result.data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
