import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Baba's Bees handles personal information for online honey orders, contact enquiries, payment, and delivery.",
};

const sections = [
  {
    title: "Who controls your data",
    body: "Baba's Bees is responsible for the personal information we use to handle orders and enquiries. You can contact us about privacy questions at rdadkhah632@gmail.com.",
  },
  {
    title: "Information we collect",
    body: "When you order, Stripe collects checkout details such as your name, email address, phone number, billing information, payment status, and shipping address. If you contact us, we receive the details you choose to send, such as your name, email address, phone number, and message.",
  },
  {
    title: "How we use it",
    body: "We use personal information to process orders, take payment, arrange delivery, respond to enquiries, handle returns or refunds, keep business records, prevent fraud, and meet legal or accounting duties.",
  },
  {
    title: "Who we share it with",
    body: "We only share information where needed to run the order. This can include Stripe for payments, Vercel for hosting, Royal Mail or another delivery provider for postage, email providers for communication, and professional advisers where needed for legal, tax, or accounting reasons.",
  },
  {
    title: "Payment details",
    body: "Card details are handled by Stripe and are not stored by Baba's Bees. Stripe may process your information under its own privacy terms when you use Checkout.",
  },
  {
    title: "How long we keep it",
    body: "We keep order and payment records for as long as needed for customer service, tax, accounting, fraud prevention, and legal record-keeping. General enquiries are kept only for as long as needed to respond and follow up.",
  },
  {
    title: "Your rights",
    body: "You can ask to access, correct, delete, or restrict the personal information we hold about you, subject to legal record-keeping requirements. Contact us by email and we will respond as reasonably as we can.",
  },
  {
    title: "Cookies and analytics",
    body: "The site currently uses only the cookies and storage needed for the website, hosting, and Stripe Checkout to work. We are not currently running advertising or analytics cookies on the Baba's Bees site.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="How we handle your details."
        description="A plain-English summary of the information used when you order honey or contact Baba's Bees."
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
            <h2 className="font-serif text-3xl text-olive">Questions or requests</h2>
            <p className="mt-4 max-w-3xl leading-8 text-sage">
              Email us if you want to ask about your information or an order connected to your
              details.
            </p>
            <Link href="/contact" className="button-primary mt-6">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
