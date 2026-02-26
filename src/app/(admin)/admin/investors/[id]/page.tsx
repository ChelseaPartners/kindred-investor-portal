import { InvestorForm } from "@/components/admin/investor-form";

export default async function EditInvestorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Investor</h1>
        <p className="mt-1 text-gray-500">Update investor details and property access.</p>
      </div>
      <InvestorForm
        initialData={{
          full_name: "John Smith",
          email: "john@example.com",
          company_name: "Smith Capital",
          phone: "(555) 123-4567",
        }}
      />
    </div>
  );
}
