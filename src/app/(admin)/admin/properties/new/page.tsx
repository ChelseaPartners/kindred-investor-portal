import { PropertyForm } from "@/components/admin/property-form";

export default function NewPropertyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Add New Property</h1>
        <p className="mt-1 text-gray-500">Enter the details for the new property.</p>
      </div>
      <PropertyForm />
    </div>
  );
}
