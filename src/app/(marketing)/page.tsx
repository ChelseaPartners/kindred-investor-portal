import { Hero } from "@/components/marketing/hero";
import { PropertyCard } from "@/components/marketing/property-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredProperties = [
  {
    name: "The Meridian",
    location: "Austin, TX",
    type: "Multifamily",
    units: 128,
    status: "Active",
  },
  {
    name: "Oakwood Business Park",
    location: "Nashville, TN",
    type: "Industrial",
    units: undefined,
    status: "Active",
  },
  {
    name: "Harbour View Apartments",
    location: "Charleston, SC",
    type: "Multifamily",
    units: 96,
    status: "Active",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Value Proposition */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Invest With Chelsea
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine deep market expertise with institutional-quality operations
              to deliver exceptional risk-adjusted returns.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { metric: "$150M+", label: "Assets Under Management" },
              { metric: "12+", label: "Properties Managed" },
              { metric: "18%", label: "Avg. Annual Return" },
              { metric: "100%", label: "Distributions Paid On Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#1a2332]">{stat.metric}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Featured Properties
              </h2>
              <p className="mt-2 text-gray-600">
                A selection from our current portfolio
              </p>
            </div>
            <Link href="/portfolio" className="hidden sm:block">
              <Button variant="outline" size="sm">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/portfolio">
              <Button variant="outline">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2332] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Invest?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join our growing network of investors and gain access to
            institutional-quality real estate opportunities.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
