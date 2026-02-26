import { Building2, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2332] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              About Chelsea Partners
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Founded on the belief that real estate investment should be transparent,
              accessible, and consistently rewarding for our partners.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Chelsea Partners was founded with a clear mission: to bring institutional-quality
                real estate investment management to a select group of aligned partners. We believe
                that great investments are built on trust, transparency, and rigorous analysis.
              </p>
              <p>
                Our team combines decades of experience in real estate acquisition, asset management,
                and financial operations. We focus on high-growth markets with strong demographic
                tailwinds, targeting value-add multifamily and commercial properties that deliver
                consistent cash flow and long-term appreciation.
              </p>
              <p>
                Every investor in our portfolio receives the same level of reporting and access
                that institutional investors expect — because we believe transparency is the
                foundation of lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Investment Philosophy
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Disciplined Approach",
                description:
                  "We evaluate hundreds of opportunities to select only those that meet our rigorous underwriting criteria.",
              },
              {
                icon: Building2,
                title: "Active Management",
                description:
                  "Hands-on asset management drives value creation through operational improvements and strategic capital deployment.",
              },
              {
                icon: Users,
                title: "Aligned Interests",
                description:
                  "We invest alongside our partners, ensuring our interests are always aligned with yours.",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description:
                  "Consistent returns across market cycles, with a focus on capital preservation and income generation.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a2332]">
                  <value.icon className="h-6 w-6 text-[#c9a96e]" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900">Leadership Team</h2>
            <p className="mt-4 text-gray-600">
              Experienced professionals dedicated to delivering results for our investors.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Managing Partner",
                role: "Founder & CEO",
                bio: "20+ years in real estate investment and asset management across multifamily and commercial properties.",
              },
              {
                name: "Director of Operations",
                role: "COO",
                bio: "Oversees property operations, investor relations, and financial reporting across the portfolio.",
              },
              {
                name: "Head of Acquisitions",
                role: "VP, Acquisitions",
                bio: "Leads deal sourcing and underwriting, with deep market knowledge in high-growth Southeast markets.",
              },
            ].map((member) => (
              <div key={member.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-[#c9a96e]">{member.role}</p>
                <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
