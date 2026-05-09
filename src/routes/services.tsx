import { createFileRoute } from "@tanstack/react-router";
import { Snowflake, Flame, Droplets, Zap, Wind, Wrench, ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HVAC, Plumbing & Electrical | Home Service Pro" },
      { name: "description", content: "AC repair & install, heating, plumbing, water heaters, electrical panels and more — across Greensboro and the Triad." },
      { property: "og:title", content: "Services — Home Service Pro" },
      { property: "og:description", content: "HVAC, plumbing, and electrical service across the Greensboro area." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  { n: "01", icon: Snowflake, title: "Air Conditioning", items: ["Repair & diagnostics", "New system installation", "Seasonal tune-ups", "Refrigerant & coil service", "Smart thermostat setup"] },
  { n: "02", icon: Flame, title: "Heating", items: ["Furnace repair", "Heat pump service", "Full system replacement", "Air handler installation", "Annual safety inspections"] },
  { n: "03", icon: Wind, title: "Indoor Air Quality", items: ["Duct inspection & sealing", "Air purifiers & filtration", "Humidifiers", "Vent cleaning", "Mold prevention"] },
  { n: "04", icon: Droplets, title: "Plumbing", items: ["Leak detection & repair", "Water heater install", "Faucet & fixture replacement", "Drain cleaning", "Re-piping"] },
  { n: "05", icon: Zap, title: "Electrical", items: ["Panel upgrades", "Outlet & switch installs", "Lighting design", "EV charger wiring", "Code & safety inspections"] },
  { n: "06", icon: Wrench, title: "Maintenance Plans", items: ["Priority scheduling", "Discounted parts & labor", "Annual system check", "Filter replacement", "Year-round peace of mind"] },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[88rem] px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Services / Index</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
            Everything your<br />
            <span className="italic text-muted-foreground/80">house needs.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <article key={g.n} className="group bg-background p-8 transition hover:bg-[var(--paper-warm)]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">/ {g.n}</span>
                <g.icon className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
              </div>
              <h2 className="mt-10 font-display text-3xl font-semibold tracking-tight">{g.title}</h2>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex items-baseline gap-3">
                    <span className="text-accent">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transition group-hover:opacity-100">
                Request a quote <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
