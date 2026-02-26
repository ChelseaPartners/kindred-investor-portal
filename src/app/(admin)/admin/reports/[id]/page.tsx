import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Send, Download } from "lucide-react";

export default async function EditReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Q3 2024 Report - The Meridian</h1>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="warning">Draft</Badge>
            <span className="text-sm text-gray-500">Last edited 2 hours ago</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button size="sm">
            <Send className="mr-2 h-4 w-4" />
            Publish
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            Report editor will be implemented here. This will support structured sections
            with financial summaries, charts, commentary, and attachments.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
