"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InvestorFormProps {
  initialData?: Record<string, string>;
  onSubmit?: (data: FormData) => void;
}

export function InvestorForm({ initialData, onSubmit }: InvestorFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(new FormData(e.currentTarget));
      }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Investor Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input id="full_name" name="full_name" label="Full Name" placeholder="John Doe" defaultValue={initialData?.full_name} required />
            <Input id="email" name="email" label="Email" type="email" placeholder="john@example.com" defaultValue={initialData?.email} required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input id="company_name" name="company_name" label="Company" placeholder="Acme Capital" defaultValue={initialData?.company_name} />
            <Input id="phone" name="phone" label="Phone" type="tel" placeholder="(555) 000-0000" defaultValue={initialData?.phone} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Property Access</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            After creating the investor, you can assign them to properties and set ownership percentages.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline" type="button">Cancel</Button>
        <Button type="submit">Save Investor</Button>
      </div>
    </form>
  );
}
