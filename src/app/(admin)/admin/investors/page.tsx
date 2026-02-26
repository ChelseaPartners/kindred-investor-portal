"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";
import { Plus } from "lucide-react";

const mockInvestors = [
  { id: "1", full_name: "John Smith", email: "john@example.com", company_name: "Smith Capital", properties: 3, total_invested: "$450,000" },
  { id: "2", full_name: "Jane Doe", email: "jane@example.com", company_name: "Doe Ventures", properties: 2, total_invested: "$320,000" },
  { id: "3", full_name: "Robert Johnson", email: "robert@example.com", company_name: "RJ Holdings", properties: 1, total_invested: "$175,000" },
  { id: "4", full_name: "Sarah Williams", email: "sarah@example.com", company_name: null, properties: 2, total_invested: "$280,000" },
];

const columns = [
  { key: "full_name", header: "Name", render: (item: Record<string, unknown>) => (
    <span className="font-medium">{String(item.full_name)}</span>
  )},
  { key: "email", header: "Email" },
  { key: "company_name", header: "Company", render: (item: Record<string, unknown>) => item.company_name ? String(item.company_name) : "—" },
  { key: "properties", header: "Properties", render: (item: Record<string, unknown>) => (
    <Badge variant="info">{String(item.properties)}</Badge>
  )},
  { key: "total_invested", header: "Total Invested" },
];

export default function AdminInvestorsPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Investors</h1>
          <p className="mt-1 text-gray-500">Manage investor accounts and access.</p>
        </div>
        <Link href="/admin/investors/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Investor
          </Button>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={mockInvestors}
        emptyMessage="No investors yet. Add your first investor to get started."
        onRowClick={(item) => router.push(`/admin/investors/${item.id}`)}
      />
    </div>
  );
}
