import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Baba's Bees in Birmingham for honey questions, bulk orders, and local collection or delivery enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Baba's Bees"
        title="Talk to the family."
        description="Ask us about our honey, bulk orders, or possible collection and local delivery around Birmingham and the West Midlands."
      />
      <section className="py-16 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-3xl text-olive">We&apos;d be glad to hear from you.</h2>
            <p className="mt-4 leading-8 text-sage">
              For the quickest conversation, send a WhatsApp message or email. As a small family
              business, we may sometimes be away from the phone, but we will get back to you.
            </p>
            <dl className="mt-10 space-y-7">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-amber">Email</dt>
                <dd className="mt-2">
                  <a className="break-all font-serif text-xl text-olive hover:text-amber" href="mailto:rdadkhah632@gmail.com">
                    rdadkhah632@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-amber">Phone / WhatsApp</dt>
                <dd className="mt-2">
                  <a className="font-serif text-xl text-olive hover:text-amber" href="https://wa.me/447366327593">
                    07366 327593
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-amber">Based in</dt>
                <dd className="mt-2 font-serif text-xl text-olive">Birmingham, West Midlands</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
