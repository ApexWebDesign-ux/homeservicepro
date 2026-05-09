import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Heart, Sparkles } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Home Service Pro LLC | Greensboro, NC" },
      { name: "description", content: "Locally owned, licensed, and built on 70+ years of combined HVAC, plumbing, and electrical experience in the Triad." },
      { property: "og:title", content: "About Home Service Pro LLC" },
      { property: "og:description", content: "Greensboro's one-stop home service team — licensed pros you can trust." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Craftsmanship", desc: "We take the time to do it right — the first time, every time." },
  { icon: Heart, title: "Honesty", desc: "Straightforward quotes. Real options. No high-pressure upsells." },
  { icon: Users, title: "Community", desc: "We live here too. Your neighbors are our neighbors." },
  { icon: Sparkles, title: "Care", desc: "Drop cloths, clean boots, and respect for your home — always." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-[image:var(--gradient-soft)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Built on 70+ years of combined experience.
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Home Service Pro started with a simple idea: homeowners shouldn't have
              to juggle three different contractors to keep one house running. We
              brought together licensed HVAC, plumbing, and electrical specialists
              into one team, so every call ends with the right pro at your door.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Today we serve Greensboro and the surrounding Triad with the same
              promise — show up on time, do excellent work, and leave the place
              cleaner than we found it.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { k: "70+", v: "Years combined experience" },
                  { k: "1-Stop", v: "HVAC · Plumbing · Electrical" },
                  { k: "4.8★", v: "Google rating" },
                  { k: "Local", v: "Greensboro, NC" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-3xl font-bold">{s.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we stand for</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Values that show up on every job.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
