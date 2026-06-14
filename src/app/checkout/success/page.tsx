import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <section className="site-container grid min-h-[65vh] place-items-center py-20">
      <div className="max-w-2xl rounded-[2.5rem] border border-olive/10 bg-white p-8 text-center shadow-warm sm:p-14">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-honey/20 text-amber">
          <CheckIcon className="h-8 w-8" />
        </span>
        <p className="eyebrow mt-7">Payment successful</p>
        <h1 className="mt-4 font-serif text-4xl text-olive sm:text-5xl">Thank you for your order.</h1>
        <p className="mt-5 leading-8 text-sage">
          Stripe has confirmed your payment. We will prepare your honey with care using the order
          and delivery details provided at checkout.
        </p>
        <p className="mt-3 text-sm leading-6 text-sage">
          Please keep your Stripe confirmation email for your records.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary">Return home</Link>
          <Link href="/contact" className="button-secondary">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
