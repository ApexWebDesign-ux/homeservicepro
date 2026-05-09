import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Home Service Pro LLC | (336) 281-9855" },
      { name: "description", content: "Call (336) 281-9855 or request a quote online. Serving Greensboro and the Triad with HVAC, plumbing, and electrical." },
      { property: "og:title", content: "Contact Home Service Pro LLC" },
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
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Tell us what's going on.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The fastest way to get help is to call. Prefer to send a message?
            Use the form and we'll get back to you within one business day.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call</div>
                <a href="tel:+13362819855" className="mt-1 block font-display text-xl font-bold hover:text-primary">
                  (336) 281-9855
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Visit</div>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  4807-A West Gate City Blvd<br />Greensboro, NC 27407
                </p>
                <a
                  href="https://www.google.com/maps/dir//Home+Service+Pro+llc./data=!4m8!4m7!1m0!1m5!1m1!1s0x29678ef74b9825e1:0x461593a3b829c437!2m2!1d-79.870649!2d36.027190999999995"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-xs font-semibold text-primary hover:underline"
                >
                  Get directions →
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  Mon–Fri · 8:00 AM – 5:00 PM<br />Sat–Sun · Closed
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                <Send className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold">Message sent!</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thanks for reaching out. We'll be in touch within one business day.
                For urgent issues, please call (336) 281-9855.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="font-display text-2xl font-bold">Request a quote</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required icon={<Mail className="h-4 w-4" />} />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service needed</label>
                <select
                  name="service"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  <option>HVAC — heating or cooling</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Maintenance plan</option>
                  <option>Not sure — please advise</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">How can we help?</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Briefly describe what's going on…"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-[var(--shadow-card)] transition hover:scale-[1.01] sm:w-auto"
              >
                Send request <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="relative mt-2">
        {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className={`w-full rounded-xl border border-border bg-background ${icon ? "pl-10" : "pl-4"} pr-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30`}
        />
      </div>
    </div>
  );
}
