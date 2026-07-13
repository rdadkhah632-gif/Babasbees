import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Baba's Bees terms for online honey orders, delivery, cancellation, returns, and refunds.",
};

const sections = [
  {
    title: "Who we are",
    body: "Baba's Bees is a small family-run honey business based in Birmingham, West Midlands. You can contact us at rdadkhah632@gmail.com or on 07366 327593 for order questions, delivery questions, cancellations, returns, or complaints.",
  },
  {
    title: "Products and prices",
    body: "Product descriptions, sizes, and prices are shown on the shop page. Prices are in GBP. UK delivery is charged at £3.49 per order and is shown again at Stripe Checkout before payment.",
  },
  {
    title: "Payment and order confirmation",
    body: "Payments are processed securely by Stripe. Your order is placed when Stripe confirms successful payment. If we cannot fulfil an order because of stock, pricing, address, or availability issues, we will contact you and arrange a refund where needed.",
  },
  {
    title: "Delivery",
    body: "We currently deliver within the UK. We aim to dispatch orders within 2 working days, with delivery usually estimated at 2-5 business days after dispatch. If a tracked Royal Mail service is used, we will share the tracking reference after postage is purchased.",
  },
  {
    title: "Cancellation and returns",
    body: "For online orders, tell us within 14 days after delivery if you want to cancel. You then have another 14 days to return the goods. Returned jars should be unopened, sealed, and handled only as much as needed to inspect them. We cannot normally accept opened or unsealed food products for change-of-mind returns unless they are faulty, damaged, or not as described.",
  },
  {
    title: "Refunds",
    body: "Where a refund is due, we will refund the eligible amount to the original payment method within 14 days of receiving the returned goods, or within 14 days of agreeing a refund where a return is not needed. If you paid for standard delivery as part of a cancelled order, this will be handled in line with your statutory rights.",
  },
  {
    title: "Damaged, faulty, or incorrect orders",
    body: "Please contact us promptly if your order arrives damaged, incorrect, missing, or not as described. Include your order details and photographs where helpful. We will review the issue and resolve it fairly, which may include a replacement or refund depending on the circumstances.",
  },
  {
    title: "Contact before returning",
    body: "Please contact us before sending anything back so we can confirm the correct return address and match the parcel to your order.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Straightforward order terms."
        description="The practical details for buying from Baba's Bees: payment, delivery, returns, refunds, and how to get help."
      />
      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[2rem] bg-cream p-7 sm:p-9">
                <h2 className="font-serif text-3xl text-olive">{section.title}</h2>
                <p className="mt-4 leading-8 text-sage">{section.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-parchment p-8 sm:p-10">
            <h2 className="font-serif text-3xl text-olive">Need help?</h2>
            <p className="mt-4 max-w-3xl leading-8 text-sage">
              If anything is unclear, contact us before ordering and we will be happy to help.
            </p>
            <Link href="/contact" className="button-primary mt-6">
              Contact Baba&apos;s Bees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
