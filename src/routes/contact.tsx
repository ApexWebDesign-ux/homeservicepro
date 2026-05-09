import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Home Service Pro | (336) 281-9855" },
      { name: "description", content: "Call (336) 281-9855 or request a quote online. Serving Greensboro and the Triad with HVAC, plumbing, and electrical." },
      { property: "og:title", content: "Contact Home Service Pro" },
      { property: "og:description", content: "Reach our Greensboro team for HVAC, plumbing, and electrical service." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[88rem] px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">· Contact / Get in touch</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.04em]">
            Tell us what's<br />
            <span className="italic text-muted-foreground/80">going on.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-5">
            <ul className="space-y-px overflow-hidden rounded-3xl border border-border bg-border">
              <li className="bg-background p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">· Call</p>
                <a href="tel:+13362819855" className="mt-4 flex items-center justify-between gap-4 font-display text-3xl font-semibold tracking-tight transition hover:text-accent sm:text-4xl">
                  (336) 281-9855
                  <Phone className="h-5 w-5" />
                </a>
              </li>
              <li className="bg-background p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">· Visit</p>
                <p className="mt-4 font-display text-xl font-medium leading-snug tracking-tight">
                  4807-A West Gate City Blvd<br />Greensboro, NC 27407
                </p>
                <a
                  href="https://www.google.com/maps/dir//Home+Service+Pro+llc./data=!4m8!4m7!1m0!1m5!1m1!1s0x29678ef74b9825e1:0x461593a3b829c437!2m2!1d-79.870649!2d36.027190999999995"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
                >
                  <MapPin className="h-4 w-4" /> Directions <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li className="bg-background p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">· Hours</p>
                <p className="mt-4 font-display text-xl font-medium leading-snug tracking-tight">
                  Mon – Fri · 8AM – 5PM
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" /> Closed weekends
                </p>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[var(--ink)] p-8 text-background sm:p-12 grain">
              {sent ? (
                <div className="flex min-h-[400px] flex-col items-start justify-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">· Received</p>
                  <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl">
                    Thanks — we'll be<br />
                    <span className="italic text-background/70">in touch shortly.</span>
                  </h2>
                  <p className="mt-6 max-w-md text-background/70">
                    For anything urgent, give us a ring at (336) 281-9855.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">· Request a quote</p>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />

                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/60">Service needed</label>
                    <select
                      name="service"
                      className="mt-3 w-full appearance-none border-0 border-b border-background/20 bg-transparent pb-3 text-lg font-medium text-background outline-none transition focus:border-accent"
                    >
                      <option className="bg-[var(--ink)]">HVAC — heating or cooling</option>
                      <option className="bg-[var(--ink)]">Plumbing</option>
                      <option className="bg-[var(--ink)]">Electrical</option>
                      <option className="bg-[var(--ink)]">Maintenance plan</option>
                      <option className="bg-[var(--ink)]">Not sure — please advise</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/60">How can we help?</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Briefly describe what's going on…"
                      className="mt-3 w-full resize-none border-0 border-b border-background/20 bg-transparent pb-3 text-lg text-background outline-none transition placeholder:text-background/30 focus:border-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition hover:scale-[1.02]"
                  >
                    Send request
                    <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-background/20 bg-transparent pb-3 text-lg text-background outline-none transition placeholder:text-background/30 focus:border-accent"
      />
    </div>
  );
}
