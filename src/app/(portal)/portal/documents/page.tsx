import { DocumentList } from "@/components/portal/document-list";

export default function AllDocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
        <p className="mt-1 text-gray-500">All documents across your investments.</p>
      </div>
      <DocumentList documents={[]} />
    </div>
  );
}
