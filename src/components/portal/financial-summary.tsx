import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

interface FinancialSummaryProps {
  totalRevenue?: number;
  totalExpenses?: number;
  noi?: number;
  occupancy?: number;
}

export function FinancialSummary({
  totalRevenue = 0,
  totalExpenses = 0,
  noi = 0,
  occupancy = 0,
}: FinancialSummaryProps) {
  const metrics = [
    {
      label: "Total Revenue",
      value: formatCurrency(totalRevenue),
      icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Total Expenses",
      value: formatCurrency(totalExpenses),
      icon: TrendingDown,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      label: "Net Operating Income",
      value: formatCurrency(noi),
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Occupancy",
      value: `${occupancy}%`,
      icon: BarChart3,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.label}</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${metric.bg}`}>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
