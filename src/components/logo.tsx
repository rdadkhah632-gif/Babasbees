import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Baba's Bees home">
      <span
        className={`grid h-10 w-10 place-items-center rounded-full border ${
          light ? "border-honey/50 text-honey" : "border-amber/30 text-amber"
        }`}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M16 5 25.5 10.5v11L16 27l-9.5-5.5v-11L16 5Z" stroke="currentColor" />
          <path d="M16 5v22M6.5 10.5l19 11M25.5 10.5l-19 11" stroke="currentColor" opacity=".6" />
        </svg>
      </span>
      <span>
        <span
          className={`block font-serif text-xl font-semibold leading-none tracking-tight ${
            light ? "text-cream" : "text-olive"
          }`}
        >
          Baba&apos;s Bees
        </span>
        <span
          className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.27em] ${
            light ? "text-parchment/60" : "text-sage"
          }`}
        >
          Family honey
        </span>
      </span>
    </Link>
  );
}
