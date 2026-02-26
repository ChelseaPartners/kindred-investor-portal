import { Card } from "@/components/ui/card";
import { FinancialSummary } from "@/components/portal/financial-summary";
import { DollarSign } from "lucide-react";

export default async function PropertyFinancialsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Financial Statements</h1>
        <p className="mt-1 text-gray-500">View financial performance and statements.</p>
      </div>

      <FinancialSummary />

      <Card className="p-12 text-center">
        <DollarSign className="mx-auto h-12 w-12 text-gray-300" />
        <h3 className="mt-4 text-sm font-medium text-gray-900">No financial statements</h3>
        <p className="mt-2 text-sm text-gray-500">
          Financial statements will be available once they are uploaded and published.
        </p>
      </Card>
    </div>
  );
}
