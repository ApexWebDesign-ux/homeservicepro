import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Wind } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--surface-deep)] text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-hero)]">
              <Wind className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Home Service Pro LLC</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-background/70">
            Your one-stop solution for HVAC, plumbing, and electrical service in
            the Greensboro area. Licensed, experienced, and ready when you need us.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
            Visit
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />4807-A West Gate City Blvd, Greensboro, NC 27407</li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href="tel:+13362819855" className="hover:text-background">(336) 281-9855</a></li>
            <li className="flex gap-2.5"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Mon–Fri · 8:00 AM – 5:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-background/70">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-background">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-background/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Home Service Pro LLC. All rights reserved.</p>
          <p>Licensed · Insured · 70+ years combined experience</p>
        </div>
      </div>
    </footer>
  );
}
