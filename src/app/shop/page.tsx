import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { CheckIcon } from "@/components/icons";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Honey",
  description:
    "Shop pure honey and honey with real honeycomb from Baba's Bees in Birmingham. UK delivery for £3.49.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop Baba's Bees"
        title="Good honey, kept simple."
        description="Choose your jar, then check out securely with Stripe. Every order is carefully packed by our family and delivered across the UK."
      />
      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-7 md:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index === 0} />
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] border border-olive/10 bg-parchment p-7 sm:flex sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="font-serif text-2xl text-olive">One flat delivery price</h2>
              <p className="mt-2 text-sm leading-6 text-sage">
                UK delivery is £3.49 per order, added at secure checkout.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 sm:mt-0">
              {["Carefully packed", "Secure payment", "Family-run"].map((point) => (
                <span key={point} className="flex items-center gap-2 text-sm font-semibold text-olive">
                  <CheckIcon className="h-4 w-4 text-amber" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
