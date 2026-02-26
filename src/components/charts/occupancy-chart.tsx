"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { month: "Jan", occupancy: 92 },
  { month: "Feb", occupancy: 93 },
  { month: "Mar", occupancy: 94 },
  { month: "Apr", occupancy: 95 },
  { month: "May", occupancy: 94 },
  { month: "Jun", occupancy: 96 },
  { month: "Jul", occupancy: 97 },
  { month: "Aug", occupancy: 96 },
  { month: "Sep", occupancy: 95 },
  { month: "Oct", occupancy: 94 },
  { month: "Nov", occupancy: 93 },
  { month: "Dec", occupancy: 95 },
];

export function OccupancyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Occupancy Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                domain={[85, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="occupancy" fill="#1a2332" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
