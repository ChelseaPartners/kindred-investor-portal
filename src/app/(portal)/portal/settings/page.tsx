"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-gray-500">Manage your account and preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar name="Investor User" size="lg" />
            <Button variant="outline" size="sm">Change Photo</Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Input id="fullName" label="Full Name" placeholder="John Doe" />
            <Input id="email" label="Email" type="email" placeholder="john@example.com" disabled />
            <Input id="company" label="Company" placeholder="Acme Capital" />
            <Input id="phone" label="Phone" type="tel" placeholder="(555) 000-0000" />
          </div>

          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "New reports published", description: "Get notified when a new investor report is published" },
              { label: "Document uploads", description: "Get notified when new documents are available" },
              { label: "Distribution notices", description: "Get notified about upcoming distributions" },
            ].map((pref) => (
              <div key={pref.label} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{pref.label}</p>
                  <p className="text-sm text-gray-500">{pref.description}</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#1a2332] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-2 peer-focus:ring-[#1a2332]/20"></div>
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
