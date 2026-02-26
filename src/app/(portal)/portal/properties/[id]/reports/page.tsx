import { ReportViewer } from "@/components/portal/report-viewer";

export default async function PropertyReportsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="mt-1 text-gray-500">Published investor reports for this property.</p>
      </div>
      <ReportViewer reports={[]} />
    </div>
  );
}
