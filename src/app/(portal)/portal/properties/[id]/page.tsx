import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FinancialSummary } from "@/components/portal/financial-summary";
import { DocumentList } from "@/components/portal/document-list";
import { ReportViewer } from "@/components/portal/report-viewer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Calendar, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      {/* Property Header */}
      <div className="flex items-start gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a2332] to-[#243044]">
          <Building2 className="h-10 w-10 text-[#c9a96e]/50" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">The Meridian</h1>
            <Badge variant="success">Active</Badge>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Austin, TX
            </span>
            <span className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              Multifamily &middot; 128 units
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Acquired Jan 2022
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-gray-500">Your Investment</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">{formatCurrency(350000)}</p>
            <p className="mt-1 text-sm text-gray-500">8.5% ownership</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-gray-500">Current Valuation</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">{formatCurrency(4200000)}</p>
            <p className="mt-1 text-sm text-green-600">+18.2% since acquisition</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-gray-500">Last Distribution</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">{formatCurrency(4250)}</p>
            <p className="mt-1 text-sm text-gray-500">Q3 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <FinancialSummary
            totalRevenue={285000}
            totalExpenses={195000}
            noi={90000}
            occupancy={94}
          />
          <div className="mt-6">
            <Card className="p-8 text-center">
              <p className="text-sm text-gray-500">
                Charts and detailed analytics will be displayed here once connected to live data.
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financials">
          <Card className="p-8 text-center">
            <DollarSign className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-4 text-sm font-medium text-gray-900">No financial data yet</h3>
            <p className="mt-2 text-sm text-gray-500">
              Financial statements will appear here once published.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <DocumentList documents={[]} />
        </TabsContent>

        <TabsContent value="reports">
          <ReportViewer reports={[]} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
