import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import workImg from "@/assets/work-detail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Home Service Pro LLC | Greensboro NC" },
      { name: "description", content: "Locally owned, licensed, built on 70+ years of combined HVAC, plumbing and electrical experience in the Triad." },
      { property: "og:title", content: "About Home Service Pro" },
      { property: "og:description", content: "Greensboro's one-stop home service team — licensed pros you can trust." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { n: "01", t: "Craftsmanship", d: "We take the time to do it right — the first time, every time." },
  { n: "02", t: "Honesty", d: "Straightforward quotes, real options, no high-pressure upsells." },
  { n: "03", t: "Community", d: "We live here too. Your neighbors are our neighbors." },
  { n: "04", t: "Care", d: "Drop cloths, clean boots, and respect for your home — always." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[88rem] px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Studio / About</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
            Built on <span className="italic text-muted-foreground/80">seventy years</span> of doing it right.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={workImg}
                alt="HVAC technician hands working on copper lines"
                loading="lazy"
                className="h-full w-full object-cover"
                width={1200}
                height={1500}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Origin</p>
            <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Home Service Pro started with a simple idea: homeowners shouldn't
              have to juggle three different contractors to keep one house running.
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground">
              We brought together licensed HVAC, plumbing, and electrical
              specialists into one team — so every call ends with the right pro at
              your door. Today we serve Greensboro and the surrounding Triad with
              the same promise: show up on time, do excellent work, leave the
              place cleaner than we found it.
            </p>

            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
              {[
                { k: "70+", v: "Years combined" },
                { k: "1-Stop", v: "HVAC + Plumbing + Electrical" },
                { k: "4.8★", v: "Google rated" },
                { k: "NC", v: "Greensboro local" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.k}</dt>
                  <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper-warm)]">
        <div className="mx-auto max-w-[88rem] px-4 py-24 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Principles</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-tight">
            What shows up <span className="italic text-muted-foreground/80">on every job.</span>
          </h2>

          <ul className="mt-14">
            {principles.map((p) => (
              <li key={p.n} className="grid items-baseline gap-6 border-t border-border py-8 sm:grid-cols-[6rem_1fr_2fr]">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">/ {p.n}</span>
                <h3 className="font-display text-3xl font-semibold tracking-tight">{p.t}</h3>
                <p className="text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="h-24" />
      <CTASection />
    </>
  );
}
