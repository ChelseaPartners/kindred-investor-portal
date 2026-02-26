import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Upload } from "lucide-react";
import Link from "next/link";

export default function AdminDocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="mt-1 text-gray-500">Manage all uploaded documents across properties.</p>
        </div>
        <Link href="/admin/upload">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Documents
          </Button>
        </Link>
      </div>

      <Card className="p-12 text-center">
        <FolderOpen className="mx-auto h-12 w-12 text-gray-300" />
        <h3 className="mt-4 text-sm font-medium text-gray-900">No documents yet</h3>
        <p className="mt-2 text-sm text-gray-500">
          Upload financial statements, tax documents, and other files to get started.
        </p>
        <div className="mt-4">
          <Link href="/admin/upload">
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Upload Files
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
