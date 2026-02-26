"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";
import { Plus } from "lucide-react";

const mockReports = [
  { id: "1", title: "Q3 2024 Report - The Meridian", report_type: "quarterly", property: "The Meridian", status: "published", published_at: "Oct 15, 2024" },
  { id: "2", title: "Q3 2024 Report - Harbour View", report_type: "quarterly", property: "Harbour View", status: "draft", published_at: null },
  { id: "3", title: "Annual 2023 - Portfolio Summary", report_type: "annual", property: "All Properties", status: "published", published_at: "Feb 1, 2024" },
];

const columns = [
  { key: "title", header: "Report", render: (item: Record<string, unknown>) => (
    <span className="font-medium">{String(item.title)}</span>
  )},
  { key: "property", header: "Property" },
  { key: "report_type", header: "Type", render: (item: Record<string, unknown>) => (
    <Badge variant={item.report_type === "annual" ? "info" : "default"}>{String(item.report_type)}</Badge>
  )},
  { key: "status", header: "Status", render: (item: Record<string, unknown>) => (
    <Badge variant={item.status === "published" ? "success" : "warning"}>{String(item.status)}</Badge>
  )},
  { key: "published_at", header: "Published", render: (item: Record<string, unknown>) => item.published_at ? String(item.published_at) : "—" },
];

export default function AdminReportsPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="mt-1 text-gray-500">Create and manage investor reports.</p>
        </div>
        <Link href="/admin/reports/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={mockReports}
        emptyMessage="No reports yet. Create your first report."
        onRowClick={(item) => router.push(`/admin/reports/${item.id}`)}
      />
    </div>
  );
}
