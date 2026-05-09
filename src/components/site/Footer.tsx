import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[var(--ink)] text-background grain">
      <div className="mx-auto max-w-[88rem] px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">
              · 001 / Greensboro NC
            </p>
            <h3 className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl">
              Comfort,
              <br />
              <span className="italic text-accent">handled.</span>
            </h3>
            <a
              href="tel:+13362819855"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:scale-[1.02]"
            >
              (336) 281-9855
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <FooterCol
            label="Sitemap"
            links={[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "Studio" },
              { to: "/contact", label: "Contact" },
            ]}
          />

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">Visit</p>
            <p className="mt-5 text-sm leading-relaxed text-background/80">
              4807-A West Gate City Blvd<br />
              Greensboro, NC 27407
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">Hours</p>
            <p className="mt-5 text-sm leading-relaxed text-background/80">
              Mon–Fri · 8AM – 5PM<br />
              Sat–Sun · Closed
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-[11px] font-mono uppercase tracking-[0.18em] text-background/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Home Service Pro LLC</span>
          <span>Licensed · Insured · 70+ yrs combined</span>
        </div>
      </div>

      <div
        aria-hidden
        className="select-none whitespace-nowrap text-center font-display text-[22vw] font-semibold leading-[0.85] tracking-[-0.06em] text-background/[0.05]"
      >
        SERVICE&nbsp;PRO
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  links,
}: {
  label: string;
  links: { to: "/" | "/services" | "/about" | "/contact"; label: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">{label}</p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-background/80 transition hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
