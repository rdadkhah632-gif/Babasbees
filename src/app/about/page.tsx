import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet the family and beekeeper behind Baba's Bees, a small honey business based in Birmingham, West Midlands.",
};

const values = [
  ["Experience", "Years spent understanding bees, their behaviour, and the rhythms of the hive."],
  ["Honesty", "Straightforward honey and a family story told without unnecessary claims or fuss."],
  ["Care", "Personal standards, careful handling, and attention given to every jar and order."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our family story"
        title="Baba knows bees."
        description="Baba's Bees is built around one dad's lifelong fascination with the hive, and a family's wish to share the honey he is proud to put on his own table."
      />
      <section className="py-16 sm:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-parchment">
            <Image
              src="/images/beekeeper-story.svg"
              alt="Illustration representing Baba's long experience with bees"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Where it began</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-olive sm:text-5xl">
              A young interest in Iran became a lifelong craft.
            </h2>
            <p className="mt-6 leading-8 text-sage">
              Baba first became interested in beekeeping when he was young in Iran. Over the
              years, curiosity became practical experience and a deep familiarity with the way
              bees live and behave.
            </p>
            <p className="mt-4 leading-8 text-sage">
              He can work calmly and confidently around a hive because he respects the bees and
              understands their signals. That ease is not a trick; it comes from patience, time,
              and the kind of knowledge that is learned by doing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-olive py-16 text-cream sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow !text-honey">Why Baba&apos;s Bees</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Honey made to a personal standard.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-parchment/75">
              Baba genuinely loves honey. He cares about producing something that reflects his
              own taste, experience, and preference for quality. Our aim is modest and clear:
              offer honest, carefully produced honey with a real family behind it.
            </p>
            <p className="mt-5 leading-8 text-parchment/75">
              Today, Baba&apos;s Bees is based in Birmingham in the West Midlands. We are a small
              family business, which means the details matter to us, from the honey itself to the
              way your jar is packed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(([title, description]) => (
              <article key={title} className="rounded-[2rem] border border-olive/10 bg-white p-8">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-honey/15 text-amber">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 font-serif text-3xl text-olive">{title}</h2>
                <p className="mt-4 leading-7 text-sage">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/shop" className="button-primary gap-3">
              Shop Baba&apos;s honey <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
