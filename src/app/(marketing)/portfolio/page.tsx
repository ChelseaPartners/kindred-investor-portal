import { PropertyCard } from "@/components/marketing/property-card";

const properties = [
  { name: "The Meridian", location: "Austin, TX", type: "Multifamily", units: 128, status: "Active" },
  { name: "Oakwood Business Park", location: "Nashville, TN", type: "Industrial", status: "Active" },
  { name: "Harbour View Apartments", location: "Charleston, SC", type: "Multifamily", units: 96, status: "Active" },
  { name: "Summit Ridge", location: "Denver, CO", type: "Multifamily", units: 64, status: "Active" },
  { name: "Parkside Plaza", location: "Raleigh, NC", type: "Retail", status: "Under Contract" },
  { name: "Riverfront Lofts", location: "Savannah, GA", type: "Mixed Use", units: 48, status: "Sold" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#1a2332] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">Our Portfolio</h1>
            <p className="mt-6 text-lg text-gray-300">
              A diversified portfolio of high-quality real estate assets across
              high-growth markets in the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-6 sm:grid-cols-3">
            {[
              { metric: "6", label: "Total Properties" },
              { metric: "336+", label: "Total Units" },
              { metric: "5", label: "Markets" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <div className="text-2xl font-bold text-[#1a2332]">{stat.metric}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
