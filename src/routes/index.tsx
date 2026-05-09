import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Snowflake, Flame, Droplets, Zap, Star, Plus } from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";
import workImg from "@/assets/work-detail.jpg";
import thermoImg from "@/assets/thermostat.jpg";
import { CTASection } from "@/components/site/CTASection";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Service Pro LLC — HVAC, Plumbing & Electrical · Greensboro NC" },
      { name: "description", content: "Greensboro's modern home service studio. Licensed HVAC, plumbing, and electrical pros. Call (336) 281-9855." },
      { property: "og:title", content: "Home Service Pro — Greensboro Home Services" },
      { property: "og:description", content: "Modern HVAC, plumbing, and electrical service across the Triad." },
    ],
  }),
  component: HomePage,
});

const services = [
  { n: "01", icon: Snowflake, title: "Cooling", tag: "AC · Heat pumps" },
  { n: "02", icon: Flame, title: "Heating", tag: "Furnaces · Tune-ups" },
  { n: "03", icon: Droplets, title: "Plumbing", tag: "Leaks · Heaters · Drains" },
  { n: "04", icon: Zap, title: "Electrical", tag: "Panels · Lighting · EV" },
];

const reviews = [
  { name: "Aaron C.", text: "Jeremy fixed my heat pump very quickly. Almost in and out — no problems at all." },
  { name: "Local homeowner", text: "Full AC system replacement done cleanly and on time. Quieter unit, lower bills." },
  { name: "Greensboro resident", text: "Honest quote, professional crew, cleaned up after themselves. Hard to find that combo." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[88rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
          {/* Top meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>· Est. Greensboro · NC</span>
            <span className="hidden sm:inline">★ 4.8 / 5 verified Google rating</span>
            <span>· Open Mon–Fri 8–5</span>
          </div>

          {/* Display headline */}
          <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-20">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.04em]">
                Home repairs,
                <br />
                <span className="italic text-muted-foreground/80">handled by</span>
                <br />
                <span className="relative inline-block">
                  <span>actual pros</span>
                  <span className="absolute -bottom-2 right-0 h-3 w-3 translate-x-3 rounded-full bg-accent sm:h-4 sm:w-4" />
                </span>
                .
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                One studio for HVAC, plumbing, and electrical. Licensed
                technicians, transparent quotes, and a phone someone actually
                answers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+13362819855"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-[var(--ink-soft)]"
                >
                  <Phone className="h-4 w-4" />
                  Call now
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </a>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  Services
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </div>

          {/* Editorial image grid */}
          <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="relative overflow-hidden rounded-3xl bg-card lg:col-span-8">
              <img
                src={heroImg}
                alt="Modern outdoor HVAC condenser at golden hour beside a contemporary home"
                className="h-[60vh] min-h-[420px] w-full object-cover"
                width={1600}
                height={1920}
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Field Work · Aug 2025
              </div>
              <div className="absolute bottom-5 right-5 max-w-[16rem] rounded-2xl bg-background/90 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-accent">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-2 font-display text-sm font-medium leading-snug">
                  "Almost in and out — no problems at all."
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  · Aaron C. / Verified
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-4 lg:gap-6">
              <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] p-6 text-background grain">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/60">· Coverage</p>
                <p className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight">
                  Greensboro<br /><span className="text-accent">+ The Triad</span>
                </p>
                <p className="mt-4 text-sm text-background/70">
                  Same-week appointments across Guilford, Forsyth, and surrounding counties.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={thermoImg}
                  alt="Modern smart thermostat on a clean white wall"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                  width={1200}
                  height={1500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="mt-24">
        <Marquee items={["HVAC", "Plumbing", "Electrical", "Maintenance", "Installs", "Smart Home", "Indoor Air"]} />
      </div>

      {/* SERVICES INDEX */}
      <section className="mx-auto max-w-[88rem] px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· 002 / Practice</p>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[0.95] tracking-tight">
              Four trades.<br />
              <span className="italic text-muted-foreground/80">One team.</span>
            </h2>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
              See full services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="lg:col-span-8">
            {services.map((s) => (
              <li key={s.n} className="group border-t border-border py-6 transition first:border-t-0">
                <Link to="/services" className="grid grid-cols-[3rem_1fr_auto] items-center gap-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.n}</span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight transition group-hover:translate-x-1 sm:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.tag}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
                    <Plus className="h-5 w-5 text-muted-foreground transition group-hover:rotate-90 group-hover:text-foreground" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-[var(--ink)] text-background grain">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={workImg}
                alt="Detailed shot of HVAC technician working with copper refrigerant lines"
                loading="lazy"
                className="h-full w-full object-cover"
                width={1200}
                height={1500}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">· 003 / Manifesto</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
              We don't juggle. <span className="italic text-accent">We finish.</span>
            </h2>
            <p className="mt-6 max-w-xl text-background/70">
              Most home repair gets messy because nobody owns the whole picture.
              We're a single team of licensed HVAC, plumbing, and electrical pros
              with 70+ years of combined experience — so the right specialist
              shows up the first time, every time.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-background/10 pt-8">
              {[
                { k: "70+", v: "Years combined" },
                { k: "4.8★", v: "Google rated" },
                { k: "1-Day", v: "Response time" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-4xl font-semibold sm:text-5xl">{s.k}</dt>
                  <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-background/50">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-[88rem] px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· 004 / Field notes</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1] tracking-tight">
              Trusted across<br /><span className="italic text-muted-foreground/80">the Triad.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> 4.8 / 5 · Google
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-background p-8">
              <div className="flex gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-6 font-display text-xl font-medium leading-snug tracking-tight">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                · {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
