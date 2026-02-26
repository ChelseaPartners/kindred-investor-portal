import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Upload, FileText, Activity } from "lucide-react";

const stats = [
  { label: "Total Properties", value: "6", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Total Investors", value: "24", icon: Users, color: "text-green-600", bg: "bg-green-50" },
  { label: "Pending Uploads", value: "3", icon: Upload, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Published Reports", value: "18", icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
];

const recentActivity = [
  { action: "Uploaded Q3 financials for The Meridian", time: "2 hours ago" },
  { action: "Published quarterly report for Harbour View", time: "1 day ago" },
  { action: "Added new investor: Jane Smith", time: "2 days ago" },
  { action: "Updated property valuation for Summit Ridge", time: "3 days ago" },
  { action: "Uploaded insurance documents for Oakwood", time: "5 days ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-1 text-gray-500">Overview of your portfolio and operations.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <p className="text-sm text-gray-900">{item.action}</p>
                <span className="shrink-0 text-xs text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
