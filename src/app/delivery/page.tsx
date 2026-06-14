import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Delivery & Returns",
  description:
    "UK honey delivery, local Birmingham collection options, and fair returns information for Baba's Bees orders.",
};

const details = [
  {
    number: "01",
    title: "UK delivery",
    body: "UK delivery is £3.49 per order. This is added clearly at Stripe Checkout before you pay. We will add an estimated dispatch and delivery timeframe here before the shop launches.",
  },
  {
    number: "02",
    title: "Packed with care",
    body: "Glass jars need a little extra attention. Every order is packed carefully to help it arrive safely and in the condition we would expect ourselves.",
  },
  {
    number: "03",
    title: "Local options",
    body: "If you are in Birmingham or the wider West Midlands, contact us before ordering to ask whether collection or a local delivery arrangement is available.",
  },
  {
    number: "04",
    title: "If something is wrong",
    body: "Please contact us promptly if your order arrives damaged, incorrect, or has another problem. Include your order details and, where helpful, photographs so we can review it and resolve the issue fairly.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery & returns"
        title="Carefully packed, fairly handled."
        description="We want receiving your honey to feel as considered as the product itself. Here is the straightforward version of how delivery and order issues work."
      />
      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-olive/10 bg-olive/10 md:grid-cols-2">
            {details.map((detail) => (
              <article key={detail.number} className="bg-cream p-8 sm:p-10">
                <p className="font-serif text-4xl text-honey">{detail.number}</p>
                <h2 className="mt-6 font-serif text-3xl text-olive">{detail.title}</h2>
                <p className="mt-4 leading-8 text-sage">{detail.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-parchment p-8 sm:p-10">
            <h2 className="font-serif text-3xl text-olive">Returns and refunds</h2>
            <p className="mt-4 max-w-4xl leading-8 text-sage">
              Because honey is a food product, returns for a simple change of mind may not always
              be appropriate once an order has been delivered. This does not affect your legal
              rights. If there is a genuine issue with your order, we will handle it reasonably
              and fairly, which may include a replacement or refund depending on the circumstances.
            </p>
            <p className="mt-4 max-w-4xl text-sm font-semibold leading-7 text-amber">
              Launch note: this is sensible placeholder wording and should be reviewed alongside
              final dispatch times, courier arrangements, and the business&apos;s full terms before launch.
            </p>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sage">Have a delivery question or need help with an order?</p>
            <Link href="/contact" className="button-primary mt-5">Contact our family</Link>
          </div>
        </div>
      </section>
    </>
  );
}
