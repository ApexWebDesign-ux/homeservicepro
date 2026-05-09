export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-[var(--paper-warm)] py-6">
      <div className="marquee">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl font-semibold tracking-tight text-foreground/80 sm:text-4xl">
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
