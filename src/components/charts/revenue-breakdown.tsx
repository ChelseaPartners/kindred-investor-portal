"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const mockData = [
  { name: "Rental Income", value: 245000 },
  { name: "Parking", value: 18000 },
  { name: "Laundry", value: 8500 },
  { name: "Late Fees", value: 4200 },
  { name: "Other", value: 9300 },
];

const COLORS = ["#1a2332", "#c9a96e", "#4a6fa5", "#7fb069", "#e07a5f"];

export function RevenueBreakdownChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {mockData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(Number(value))
                }
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
