import { createFileRoute } from "@tanstack/react-router";
import { Snowflake, Flame, Droplets, Zap, Wind, Wrench, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HVAC, Plumbing & Electrical | Home Service Pro LLC" },
      { name: "description", content: "Full home service in Greensboro: AC repair & install, heating, plumbing, water heaters, electrical panels, and more." },
      { property: "og:title", content: "Services — Home Service Pro LLC" },
      { property: "og:description", content: "HVAC, plumbing, and electrical service across the Greensboro area." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Snowflake,
    title: "Air Conditioning",
    items: ["AC repair & diagnostics", "New system installation", "Seasonal tune-ups", "Refrigerant & coil service", "Smart thermostat setup"],
  },
  {
    icon: Flame,
    title: "Heating",
    items: ["Furnace repair", "Heat pump service", "Full system replacement", "Air handler installation", "Annual safety inspections"],
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    items: ["Duct inspection & sealing", "Air purifiers & filtration", "Humidifiers", "Vent cleaning", "Mold prevention"],
  },
  {
    icon: Droplets,
    title: "Plumbing",
    items: ["Leak detection & repair", "Water heater install", "Faucet & fixture replacement", "Drain cleaning", "Re-piping"],
  },
  {
    icon: Zap,
    title: "Electrical",
    items: ["Panel upgrades", "Outlet & switch installs", "Lighting design", "EV charger wiring", "Code & safety inspections"],
  },
  {
    icon: Wrench,
    title: "Maintenance Plans",
    items: ["Priority scheduling", "Discounted parts & labor", "Annual system check", "Filter replacement", "Peace of mind year-round"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-[image:var(--gradient-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Everything your home needs — under one roof.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From a noisy AC to a flickering breaker, our licensed pros take care of
            the messy, technical, and urgent stuff so you don't have to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <article key={g.title} className="group rounded-2xl border border-border bg-card p-7 transition hover:shadow-[var(--shadow-card)]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-card)]">
                <g.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">{g.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
