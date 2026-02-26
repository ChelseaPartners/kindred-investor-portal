import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Eye } from "lucide-react";
import { format } from "date-fns";

interface ReportItem {
  id: string;
  title: string;
  report_type: string;
  status: string;
  published_at?: string;
  created_at: string;
}

interface ReportViewerProps {
  reports: ReportItem[];
}

export function ReportViewer({ reports }: ReportViewerProps) {
  if (reports.length === 0) {
    return (
      <Card className="p-12 text-center">
        <FileText className="mx-auto h-12 w-12 text-gray-300" />
        <h3 className="mt-4 text-sm font-medium text-gray-900">No reports yet</h3>
        <p className="mt-2 text-sm text-gray-500">
          Reports will appear here once they are published by your fund manager.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {reports.map((report) => (
        <Card key={report.id} className="transition-shadow hover:shadow-md">
          <CardContent className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332]">
                <FileText className="h-6 w-6 text-[#c9a96e]" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{report.title}</h4>
                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <Badge
                    variant={report.report_type === "annual" ? "info" : "default"}
                  >
                    {report.report_type}
                  </Badge>
                  {report.published_at && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(report.published_at), "MMM d, yyyy")}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <Eye className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
