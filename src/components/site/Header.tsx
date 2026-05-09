import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-[88rem] px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between rounded-full border border-border/70 bg-background/70 pl-5 pr-2 backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
              <span className="block h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Home Service Pro
            </span>
            <span className="ml-1 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              / NC
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href="tel:+13362819855"
              className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-[var(--ink-soft)] sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              (336) 281-9855
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl border border-border bg-background p-3 shadow-[var(--shadow-card)] md:hidden">
            <div className="flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="tel:+13362819855"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background"
              >
                <Phone className="h-4 w-4" /> (336) 281-9855
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
