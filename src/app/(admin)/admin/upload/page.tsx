import { UploadDropzone } from "@/components/admin/upload-dropzone";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Upload Financials</h1>
        <p className="mt-1 text-gray-500">
          Upload Excel or PDF financial statements for parsing and review.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Files</CardTitle>
        </CardHeader>
        <CardContent>
          <UploadDropzone />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            No recent uploads. Upload a file above to get started.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
