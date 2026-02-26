import { DocumentList } from "@/components/portal/document-list";

export default async function PropertyDocumentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
        <p className="mt-1 text-gray-500">All documents related to this property.</p>
      </div>
      <DocumentList documents={[]} />
    </div>
  );
}
