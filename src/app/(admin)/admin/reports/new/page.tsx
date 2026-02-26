import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewReportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create New Report</h1>
        <p className="mt-1 text-gray-500">Set up a new investor report.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input id="title" label="Report Title" placeholder="e.g., Q3 2024 Report - The Meridian" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Property</label>
              <select className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#1a2332]/20">
                <option value="">Select a property...</option>
                <option>The Meridian</option>
                <option>Harbour View Apartments</option>
                <option>Summit Ridge</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Report Type</label>
              <select className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#1a2332]/20">
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Create Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
