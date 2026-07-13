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
    body: "UK delivery is £3.49 per order. This is added clearly at Stripe Checkout before you pay. We aim to dispatch orders within 2 working days, with delivery usually estimated at 2-5 business days after dispatch.",
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
    body: "Please contact us promptly if your order arrives damaged, incorrect, missing, or has another problem. Include your order details and, where helpful, photographs so we can review it and resolve the issue fairly.",
  },
];

const returns = [
  {
    title: "Change of mind",
    body: "For online orders, please tell us within 14 days after delivery if you want to cancel. You then have another 14 days to return the goods. Returned jars should be unopened, sealed, and handled only as much as needed to inspect them.",
  },
  {
    title: "Food safety",
    body: "Because honey is a food product, we cannot normally accept a jar back for change of mind if it has been opened, unsealed, damaged, or tampered with. This does not affect your rights if the product is faulty, damaged, or not as described.",
  },
  {
    title: "Refund timing",
    body: "Where a refund is due, we will refund the eligible amount to the original payment method within 14 days of receiving the returned goods, or within 14 days of agreeing a refund where a return is not needed.",
  },
  {
    title: "Returning an order",
    body: "Contact us before sending anything back so we can confirm the return address and match the parcel to your order. We may ask for photos first if the issue is damage or an incorrect order.",
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
              We want this to be straightforward. These notes explain how we usually handle
              cancellations, returns, damaged parcels, and refunds for online orders.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {returns.map((item) => (
                <article key={item.title} className="rounded-2xl bg-cream p-6">
                  <h3 className="font-serif text-2xl text-olive">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-sage">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-[2rem] border border-olive/10 bg-white p-8 sm:p-10">
            <h2 className="font-serif text-3xl text-olive">Tracking</h2>
            <p className="mt-4 max-w-4xl leading-8 text-sage">
              We currently fulfil orders manually. If your Royal Mail service includes a tracking
              reference, we will send it to you after postage is purchased. Some lower-cost services
              may not include full end-to-end tracking.
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
