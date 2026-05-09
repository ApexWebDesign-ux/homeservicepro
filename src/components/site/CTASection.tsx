import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] px-6 py-16 text-background grain sm:px-14 sm:py-20">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-96 w-96 rounded-full bg-[oklch(0.4_0.15_245)]/30 blur-3xl" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              · Ready when you are
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              Your house called.
              <br />
              <span className="italic text-background/70">We'll pick up.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+13362819855"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition hover:scale-[1.02]"
            >
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> (336) 281-9855</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between gap-3 rounded-full border border-background/20 bg-background/5 px-6 py-4 text-sm font-semibold text-background backdrop-blur transition hover:bg-background/10"
            >
              <span>Request a quote</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
