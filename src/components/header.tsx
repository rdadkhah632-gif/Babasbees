"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { MenuIcon } from "@/components/icons";

const navigation = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our story" },
  { href: "/delivery", label: "Delivery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-olive/10 bg-cream/95 backdrop-blur">
      <div className="site-container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-amber ${
                pathname === item.href ? "text-amber" : "text-olive"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/shop" className="button-primary !px-5 !py-3">
            Buy honey
          </Link>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-olive/20 text-olive md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-olive/10 bg-cream px-5 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-olive/10 py-4 text-base font-semibold text-olive"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/shop" className="button-primary mt-5 text-center" onClick={() => setOpen(false)}>
              Buy honey
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
