import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyOverviewCard } from "@/components/portal/property-overview-card";
import { Building2, DollarSign, TrendingUp, FileText } from "lucide-react";

const mockStats = [
  { label: "Total Properties", value: "3", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Total Invested", value: "$1.2M", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
  { label: "Est. Portfolio Value", value: "$1.8M", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Pending Reports", value: "2", icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
];

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
];

export default function PortalDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="mt-1 text-gray-500">Here&apos;s an overview of your investments.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">Your Properties</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProperties.map((property) => (
            <PropertyOverviewCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
}
