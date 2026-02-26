import { PropertyOverviewCard } from "@/components/portal/property-overview-card";

const mockProperties = [
  {
    id: "1",
    name: "The Meridian",
    location: "Austin, TX",
    type: "Multifamily",
    status: "active",
    currentValuation: 4200000,
    ownershipPercentage: 8.5,
  },
  {
    id: "2",
    name: "Harbour View Apartments",
    location: "Charleston, SC",
    type: "Multifamily",
    status: "active",
    currentValuation: 3100000,
    ownershipPercentage: 12.0,
  },
  {
    id: "3",
    name: "Summit Ridge",
    location: "Denver, CO",
    type: "Multifamily",
    status: "active",
    currentValuation: 2800000,
    ownershipPercentage: 5.0,
  },
];

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
        <p className="mt-1 text-gray-500">All properties in your investment portfolio.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProperties.map((property) => (
          <PropertyOverviewCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
