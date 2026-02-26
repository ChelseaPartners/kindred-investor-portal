"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { month: "Jan", noi: 72000 },
  { month: "Feb", noi: 75000 },
  { month: "Mar", noi: 78000 },
  { month: "Apr", noi: 74000 },
  { month: "May", noi: 82000 },
  { month: "Jun", noi: 85000 },
  { month: "Jul", noi: 88000 },
  { month: "Aug", noi: 90000 },
  { month: "Sep", noi: 87000 },
  { month: "Oct", noi: 92000 },
  { month: "Nov", noi: 89000 },
  { month: "Dec", noi: 95000 },
];

export function NOITrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>NOI Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(Number(value))
                }
              />
              <Line
                type="monotone"
                dataKey="noi"
                stroke="#1a2332"
                strokeWidth={2}
                dot={{ fill: "#1a2332", r: 4 }}
                activeDot={{ fill: "#c9a96e", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
