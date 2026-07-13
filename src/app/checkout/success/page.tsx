import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { createOrderNumber } from "@/lib/orders";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false, follow: false },
};

type CheckoutSuccessPageProps = {
  searchParams?: { session_id?: string | string[] };
};

async function getOrderSummary(sessionId: string | undefined) {
  if (!sessionId || !sessionId.startsWith("cs_")) {
    return null;
  }

  const stripe = getStripe();
  if (!stripe) {
    return null;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      orderNumber: createOrderNumber(session),
      customerEmail: session.customer_details?.email || null,
    };
  } catch (error) {
    console.error("Unable to load Checkout Session for success page:", error);
    return null;
  }
}

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const sessionId =
    typeof searchParams?.session_id === "string" ? searchParams.session_id : undefined;
  const orderSummary = await getOrderSummary(sessionId);

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
        {orderSummary && (
          <div className="mt-6 rounded-2xl bg-parchment px-5 py-4 text-left text-sm leading-7 text-sage">
            <p>
              <span className="font-bold text-olive">Order number:</span>{" "}
              {orderSummary.orderNumber}
            </p>
            {orderSummary.customerEmail && (
              <p>
                <span className="font-bold text-olive">Confirmation email:</span>{" "}
                {orderSummary.customerEmail}
              </p>
            )}
          </div>
        )}
        <p className="mt-3 text-sm leading-6 text-sage">
          Please keep your Baba&apos;s Bees and Stripe confirmation emails for your records.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary">Return home</Link>
          <Link href="/contact" className="button-secondary">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
