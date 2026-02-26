import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify admin role
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const propertyId = formData.get("property_id") as string;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!propertyId) {
      return NextResponse.json({ error: "No property_id provided" }, { status: 400 });
    }

    // Upload file to Supabase Storage
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${propertyId}/${Date.now()}-${file.name}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("documents")
      .upload(fileName, fileBuffer, {
        contentType: file.type,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    // Create upload record
    const { data: uploadRecord, error: recordError } = await supabase
      .from("uploads")
      .insert({
        property_id: propertyId,
        uploaded_by: user.id,
        file_path: uploadData.path,
        original_filename: file.name,
        file_size: file.size,
        mime_type: file.type,
        status: "pending",
      })
      .select()
      .single();

    if (recordError) {
      return NextResponse.json({ error: recordError.message }, { status: 500 });
    }

    return NextResponse.json({ upload: uploadRecord });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
