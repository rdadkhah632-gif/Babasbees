import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-olive text-cream">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-parchment/70">
            Honest, carefully produced honey from a small family business in Birmingham,
            West Midlands.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-honey">Explore</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-parchment/75">
            <Link href="/shop" className="hover:text-white">Shop honey</Link>
            <Link href="/about" className="hover:text-white">Our story</Link>
            <Link href="/delivery" className="hover:text-white">Delivery & returns</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-honey">Get in touch</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-parchment/75">
            <a href="mailto:rdadkhah632@gmail.com" className="break-all hover:text-white">
              rdadkhah632@gmail.com
            </a>
            <a href="tel:+447366327593" className="hover:text-white">07366 327593</a>
            <span>Birmingham, West Midlands</span>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="site-container flex flex-col gap-3 py-6 text-xs text-parchment/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Baba&apos;s Bees. All rights reserved.</p>
          <p>Small batch. Family run. Made with care.</p>
        </div>
      </div>
    </footer>
  );
}
