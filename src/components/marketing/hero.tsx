import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a2332] to-[#243044]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Real Estate Investment,{" "}
            <span className="text-[#c9a96e]">Elevated</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Kindred Capital delivers institutional-quality real estate investments
            with transparent reporting, consistent distributions, and hands-on
            asset management across high-growth markets.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            {
              icon: Building2,
              title: "Curated Properties",
              description: "Carefully selected assets in high-growth markets with strong fundamentals",
            },
            {
              icon: TrendingUp,
              title: "Consistent Returns",
              description: "Track record of delivering above-market returns with quarterly distributions",
            },
            {
              icon: Shield,
              title: "Full Transparency",
              description: "Institutional-quality reporting with 24/7 access to your investment data",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <feature.icon className="mx-auto h-8 w-8 text-[#c9a96e]" />
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
