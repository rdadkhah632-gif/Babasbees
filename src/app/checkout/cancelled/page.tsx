import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelledPage() {
  return (
    <section className="site-container grid min-h-[65vh] place-items-center py-20">
      <div className="max-w-2xl rounded-[2.5rem] border border-olive/10 bg-white p-8 text-center shadow-warm sm:p-14">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-parchment font-serif text-3xl text-amber">
          ×
        </span>
        <p className="eyebrow mt-7">Checkout cancelled</p>
        <h1 className="mt-4 font-serif text-4xl text-olive sm:text-5xl">No payment was taken.</h1>
        <p className="mt-5 leading-8 text-sage">
          Your checkout was cancelled and your order has not been placed. Your chosen honey is
          still waiting in the shop whenever you are ready.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/shop" className="button-primary">Return to shop</Link>
          <Link href="/contact" className="button-secondary">Need help?</Link>
        </div>
      </div>
    </section>
  );
}
