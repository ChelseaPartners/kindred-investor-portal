import { PropertyForm } from "@/components/admin/property-form";

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Property</h1>
        <p className="mt-1 text-gray-500">Update property details and information.</p>
      </div>
      <PropertyForm
        initialData={{
          name: "The Meridian",
          property_type: "multifamily",
          status: "active",
          address_line1: "123 Main Street",
          city: "Austin",
          state: "TX",
          zip: "78701",
          units: "128",
          year_built: "2005",
        }}
      />
    </div>
  );
}
