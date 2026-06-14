import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, LeafIcon, QuoteIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

const trustPoints = [
  "Family-run",
  "Birmingham based",
  "Natural honey",
  "Carefully produced",
  "Secure Stripe checkout",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-parchment">
        <div className="absolute inset-0 bg-grain" />
        <div className="site-container relative grid min-h-[690px] items-center gap-12 py-14 lg:grid-cols-[1.03fr_.97fr] lg:py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/20 bg-cream/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber">
              <LeafIcon className="h-4 w-4" />
              From our family in Birmingham
            </div>
            <h1 className="mt-7 max-w-2xl font-serif text-5xl leading-[.98] tracking-[-0.035em] text-olive sm:text-7xl lg:text-[5.4rem]">
              Honey with a real family story.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-sage">
              Honest, carefully produced honey shaped by Baba&apos;s lifelong respect for bees,
              his experience, and his simple standard: it should be good enough for his own table.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="button-primary gap-3">
                Shop our honey <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link href="/about" className="button-secondary">Meet the beekeeper</Link>
            </div>
            <p className="mt-6 text-sm text-sage">UK delivery £3.49 · Secure checkout with Stripe</p>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -left-5 bottom-9 z-10 hidden rounded-2xl bg-cream p-5 shadow-warm sm:block">
              <p className="font-serif text-2xl text-olive">Pure & simple</p>
              <p className="mt-1 text-xs uppercase tracking-[0.17em] text-sage">Nothing fussy</p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/70 bg-honey shadow-warm">
              <Image
                src="/images/hero-honey.svg"
                alt="Baba's Bees honey jar surrounded by warm natural details"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-olive/10 bg-cream">
        <div className="site-container grid grid-cols-2 gap-x-4 gap-y-6 py-7 sm:grid-cols-3 lg:grid-cols-5">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-sm font-semibold text-olive">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-honey/15 text-amber">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">From the hive</p>
              <h2 className="mt-4 font-serif text-4xl text-olive sm:text-5xl">Find your favourite jar</h2>
            </div>
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-amber">
              Shop all honey <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} checkout={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-20 text-cream sm:py-28">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-parchment">
              <Image
                src="/images/beekeeper-story.svg"
                alt="Warm illustration representing Baba's years of beekeeping experience"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-honey px-6 py-5 text-olive sm:right-7">
              <p className="font-serif text-3xl">A lifelong craft</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em]">Learned with patience</p>
            </div>
          </div>
          <div>
            <p className="eyebrow !text-honey">The beekeeper behind the jar</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              It started with Baba&apos;s fascination for bees.
            </h2>
            <p className="mt-6 text-base leading-8 text-parchment/75">
              His interest began when he was young in Iran and grew into years of practical
              knowledge, quiet confidence, and genuine respect for the hive. Working calmly
              around bees comes naturally to him because he understands their behaviour.
            </p>
            <p className="mt-4 text-base leading-8 text-parchment/75">
              Baba&apos;s Bees brings that experience to a small family business here in
              Birmingham, offering honey made to the same standards he has always valued himself.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-honey">
              Read our family story <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-parchment py-20 sm:py-28">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Kind words</p>
            <h2 className="mt-4 font-serif text-4xl text-olive sm:text-5xl">Shared around the table</h2>
            <p className="mt-5 leading-7 text-sage">
              We&apos;re just getting started online. These spaces are ready for words from our
              customers as Baba&apos;s Bees grows.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["“Beautifully rich honey and such a lovely family story.”", "Customer review"],
              ["“Carefully packed, quickly delivered, and delicious.”", "Customer review"],
              ["“The honeycomb jar makes a wonderful gift.”", "Customer review"],
            ].map(([quote, author]) => (
              <figure key={quote} className="rounded-[2rem] bg-cream p-7">
                <QuoteIcon className="h-7 w-8 text-honey/50" />
                <blockquote className="mt-7 font-serif text-2xl leading-9 text-olive">{quote}</blockquote>
                <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.17em] text-sage">
                  {author} · Placeholder
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="site-container">
          <div className="overflow-hidden rounded-[2.5rem] bg-honey px-7 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive/65">From Birmingham to your door</p>
              <h2 className="mt-4 font-serif text-4xl text-olive">UK delivery for £3.49</h2>
              <p className="mt-4 max-w-xl leading-7 text-olive/70">
                Every order is packed carefully. Based nearby? Contact us to ask about collection
                or local delivery options around Birmingham and the West Midlands.
              </p>
            </div>
            <Link href="/delivery" className="button-primary mt-8 shrink-0 lg:mt-0">
              Delivery details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
