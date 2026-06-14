import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { BuyButton } from "@/components/buy-button";

type ProductCardProps = {
  product: Product;
  checkout?: boolean;
  priority?: boolean;
};

export function ProductCard({ product, checkout = true, priority = false }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-olive/10 bg-white shadow-[0_10px_35px_rgba(72,45,13,0.06)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
        {product.badge && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-cream px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber shadow-sm">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage">{product.size}</p>
            <h2 className="mt-2 font-serif text-2xl leading-tight text-olive">{product.shortName}</h2>
          </div>
          <p className="font-serif text-2xl text-amber">{product.priceDisplay}</p>
        </div>
        <p className="mt-4 min-h-[84px] text-sm leading-7 text-sage">{product.description}</p>
        <div className="mt-6">
          {checkout ? (
            <BuyButton productId={product.id} />
          ) : (
            <Link href="/shop" className="button-primary block text-center">
              View in shop
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
