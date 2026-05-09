import { Phone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] px-6 py-14 text-primary-foreground shadow-[var(--shadow-elevated)] sm:px-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Need help today?</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Call the pros and get your home back to comfortable.
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Same-week appointments across the Triad. Honest quotes, clean work,
              and technicians you can actually trust.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="tel:+13362819855"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 font-semibold text-foreground shadow-[var(--shadow-card)] transition hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> (336) 281-9855
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
