"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROPERTY_TYPE_LABELS, PROPERTY_STATUS_LABELS } from "@/lib/constants";

interface PropertyFormProps {
  initialData?: Record<string, string>;
  onSubmit?: (data: FormData) => void;
}

export function PropertyForm({ initialData, onSubmit }: PropertyFormProps) {
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
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            id="name"
            name="name"
            label="Property Name"
            placeholder="e.g., The Meridian"
            defaultValue={initialData?.name}
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <select
                name="property_type"
                defaultValue={initialData?.property_type || "multifamily"}
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#1a2332]/20"
              >
                {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                defaultValue={initialData?.status || "active"}
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#1a2332]/20"
              >
                {Object.entries(PROPERTY_STATUS_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input id="address_line1" name="address_line1" label="Address Line 1" placeholder="123 Main St" defaultValue={initialData?.address_line1} />
          <Input id="address_line2" name="address_line2" label="Address Line 2" placeholder="Suite 100" defaultValue={initialData?.address_line2} />
          <div className="grid gap-4 sm:grid-cols-3">
            <Input id="city" name="city" label="City" placeholder="Austin" defaultValue={initialData?.city} />
            <Input id="state" name="state" label="State" placeholder="TX" defaultValue={initialData?.state} />
            <Input id="zip" name="zip" label="ZIP" placeholder="78701" defaultValue={initialData?.zip} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <Input id="units" name="units" label="Units" type="number" placeholder="128" defaultValue={initialData?.units} />
            <Input id="square_footage" name="square_footage" label="Square Footage" type="number" placeholder="150000" defaultValue={initialData?.square_footage} />
            <Input id="year_built" name="year_built" label="Year Built" type="number" placeholder="2005" defaultValue={initialData?.year_built} />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Input id="acquisition_date" name="acquisition_date" label="Acquisition Date" type="date" defaultValue={initialData?.acquisition_date} />
            <Input id="acquisition_price" name="acquisition_price" label="Acquisition Price" type="number" placeholder="3500000" defaultValue={initialData?.acquisition_price} />
            <Input id="current_valuation" name="current_valuation" label="Current Valuation" type="number" placeholder="4200000" defaultValue={initialData?.current_valuation} />
          </div>
          <div className="space-y-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="flex w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#1a2332]/20"
              placeholder="Property description..."
              defaultValue={initialData?.description}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline" type="button">Cancel</Button>
        <Button type="submit">Save Property</Button>
      </div>
    </form>
  );
}
