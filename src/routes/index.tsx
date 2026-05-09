import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, Star, Wrench, Flame, Snowflake, Droplets, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Service Pro LLC — HVAC, Plumbing & Electrical in Greensboro, NC" },
      { name: "description", content: "Greensboro's one-stop home service team. Licensed HVAC, plumbing, and electrical pros. Same-week appointments. Call (336) 281-9855." },
      { property: "og:title", content: "Home Service Pro LLC — Greensboro Home Services" },
      { property: "og:description", content: "Licensed HVAC, plumbing, and electrical service across the Triad." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Snowflake, title: "Air Conditioning", desc: "Install, repair, and tune-ups for cool, efficient summers." },
  { icon: Flame, title: "Heating", desc: "Furnace and heat pump service so winter never catches you off guard." },
  { icon: Droplets, title: "Plumbing", desc: "Leaks, fixtures, water heaters, and full re-pipes done right." },
  { icon: Zap, title: "Electrical", desc: "Panels, outlets, lighting, and safe code-compliant upgrades." },
];

const stats = [
  { k: "70+", v: "Years combined experience" },
  { k: "4.8★", v: "Google review average" },
  { k: "1-Day", v: "Typical response time" },
  { k: "100%", v: "Licensed & insured" },
];

const reviews = [
  { name: "Aaron Cook", text: "Jeremy from Home Service Pro came out and fixed my heat pump very quickly. Almost in and out — no problems at all.", rating: 5 },
  { name: "Local Homeowner", text: "Full AC system replacement done cleanly and on time. The new unit is quieter and our bills are noticeably lower.", rating: 5 },
  { name: "Greensboro Customer", text: "Honest quote, professional crew, and they cleaned up after themselves. Hard to find that combo these days.", rating: 5 },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Greensboro · NC
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Home repairs,
              <span className="block bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
                handled by pros.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              HVAC, plumbing, and electrical — one trusted team for the whole house.
              Licensed, experienced, and on the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+13362819855"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-[var(--shadow-card)] transition hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" /> (336) 281-9855
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[image:var(--gradient-hero)] opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elevated)]">
              <img
                src={heroImg}
                alt="Home Service Pro HVAC technician inspecting an outdoor AC unit in Greensboro"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold">4.8 / 5 on Google</div>
                  <div className="text-xs text-muted-foreground">Verified business profile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">One team. Every system in your home.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-card)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why homeowners pick us</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Skip the juggling act.
              <br />
              We handle the whole house.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              No more coordinating between three different companies. Home Service Pro
              brings a team of licensed HVAC, plumbing, and electrical specialists
              under one roof — with one quote, one schedule, and one number to call.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, t: "Licensed & insured", d: "Every job done to code, every tech vetted." },
              { icon: Clock, t: "On-time arrivals", d: "We respect your schedule and confirm windows." },
              { icon: Wrench, t: "Repair or replace", d: "Honest options — never an upsell push." },
              { icon: Star, t: "5-star reviewed", d: "4.8 average across verified Google reviews." },
            ].map((b) => (
              <li key={b.t} className="rounded-2xl border border-border bg-card p-5">
                <b.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 font-display text-base font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Real reviews</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Trusted across the Triad</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
