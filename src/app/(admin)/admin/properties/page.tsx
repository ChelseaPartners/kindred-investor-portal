"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";
import { Plus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const mockProperties = [
  { id: "1", name: "The Meridian", city: "Austin", state: "TX", property_type: "Multifamily", units: 128, status: "active", current_valuation: 4200000 },
  { id: "2", name: "Oakwood Business Park", city: "Nashville", state: "TN", property_type: "Industrial", units: null, status: "active", current_valuation: 6800000 },
  { id: "3", name: "Harbour View Apartments", city: "Charleston", state: "SC", property_type: "Multifamily", units: 96, status: "active", current_valuation: 3100000 },
  { id: "4", name: "Summit Ridge", city: "Denver", state: "CO", property_type: "Multifamily", units: 64, status: "active", current_valuation: 2800000 },
  { id: "5", name: "Parkside Plaza", city: "Raleigh", state: "NC", property_type: "Retail", units: null, status: "under_contract", current_valuation: 1500000 },
];

const columns = [
  { key: "name", header: "Property", render: (item: Record<string, unknown>) => (
    <span className="font-medium">{String(item.name)}</span>
  )},
  { key: "location", header: "Location", render: (item: Record<string, unknown>) => `${item.city}, ${item.state}` },
  { key: "property_type", header: "Type" },
  { key: "units", header: "Units", render: (item: Record<string, unknown>) => item.units ? String(item.units) : "—" },
  { key: "current_valuation", header: "Valuation", render: (item: Record<string, unknown>) => formatCurrency(item.current_valuation as number) },
  { key: "status", header: "Status", render: (item: Record<string, unknown>) => {
    const s = item.status as string;
    const v = s === "active" ? "success" : s === "under_contract" ? "warning" : "default";
    return <Badge variant={v}>{s.replace("_", " ")}</Badge>;
  }},
];

export default function AdminPropertiesPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
          <p className="mt-1 text-gray-500">Manage your property portfolio.</p>
        </div>
        <Link href="/admin/properties/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={mockProperties}
        emptyMessage="No properties yet. Add your first property to get started."
        onRowClick={(item) => router.push(`/admin/properties/${item.id}`)}
      />
    </div>
  );
}
