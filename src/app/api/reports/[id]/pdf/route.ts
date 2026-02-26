import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: report, error: fetchError } = await supabase
      .from("reports")
      .select("*, property:properties(*)")
      .eq("id", id)
      .single();

    if (fetchError || !report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    // Placeholder for PDF generation
    // In production, use a library like puppeteer, @react-pdf/renderer, or a service
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head><title>${report.title}</title></head>
        <body>
          <h1>${report.title}</h1>
          <p>Report type: ${report.report_type}</p>
          <p>Property: ${report.property?.name || "N/A"}</p>
          <p>Generated on: ${new Date().toLocaleDateString()}</p>
          <hr />
          <p>Full PDF generation will be implemented with a rendering engine.</p>
        </body>
      </html>
    `;

    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
