import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar } from "lucide-react";
import { DOCUMENT_TYPE_LABELS } from "@/lib/constants";
import { format } from "date-fns";

interface DocumentItem {
  id: string;
  title: string;
  document_type: string;
  file_size?: number;
  created_at: string;
  period_start?: string;
  period_end?: string;
}

interface DocumentListProps {
  documents: DocumentItem[];
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function DocumentList({ documents }: DocumentListProps) {
  if (documents.length === 0) {
    return (
      <Card className="p-12 text-center">
        <FileText className="mx-auto h-12 w-12 text-gray-300" />
        <h3 className="mt-4 text-sm font-medium text-gray-900">No documents</h3>
        <p className="mt-2 text-sm text-gray-500">
          Documents will appear here once they are published.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      {documents.map((doc) => (
        <Card key={doc.id} className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <FileText className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">{doc.title}</h4>
              <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                <Badge variant="default">
                  {DOCUMENT_TYPE_LABELS[doc.document_type] || doc.document_type}
                </Badge>
                {doc.file_size && <span>{formatFileSize(doc.file_size)}</span>}
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {format(new Date(doc.created_at), "MMM d, yyyy")}
                </span>
              </div>
            </div>
          </div>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <Download className="h-4 w-4" />
          </button>
        </Card>
      ))}
    </div>
  );
}
