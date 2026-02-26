"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-[#1a2332] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">Contact Us</h1>
            <p className="mt-6 text-lg text-gray-300">
              Interested in learning more about our investment opportunities?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="p-8">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">Message Sent</h3>
                    <p className="mt-2 text-gray-600">
                      Thank you for your interest. We&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input id="firstName" label="First Name" placeholder="John" required />
                      <Input id="lastName" label="Last Name" placeholder="Doe" required />
                    </div>
                    <Input id="email" label="Email" type="email" placeholder="john@example.com" required />
                    <Input id="phone" label="Phone" type="tel" placeholder="(555) 000-0000" />
                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="flex w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#1a2332]/20"
                        placeholder="Tell us about your investment interests..."
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "invest@chelseapartners.com" },
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                { icon: MapPin, label: "Office", value: "123 Investment Ave\nSuite 400\nCharleston, SC 29401" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1a2332]">
                    <item.icon className="h-5 w-5 text-[#c9a96e]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.label}</div>
                    <div className="mt-1 whitespace-pre-line text-sm text-gray-600">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
