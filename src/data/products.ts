export type Product = {
  id: "honey-500g" | "honey-1kg" | "honeycomb-500g";
  name: string;
  shortName: string;
  size: string;
  price: number;
  priceDisplay: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  stripePriceEnv:
    | "STRIPE_PRICE_HONEY_500G"
    | "STRIPE_PRICE_HONEY_1KG"
    | "STRIPE_PRICE_HONEYCOMB_500G";
};

export const products: Product[] = [
  {
    id: "honey-500g",
    name: "500g Pure Honey Jar",
    shortName: "Pure Honey",
    size: "500g",
    price: 10,
    priceDisplay: "£10.00",
    description:
      "A generous jar of smooth, naturally sweet honey for toast, porridge, tea, baking, or a simple spoonful.",
    image: "/images/honey-500g.svg",
    imageAlt: "Illustration of a 500g jar of Baba's Bees pure honey",
    badge: "Everyday favourite",
    // This product uses the Stripe Price ID in STRIPE_PRICE_HONEY_500G.
    stripePriceEnv: "STRIPE_PRICE_HONEY_500G",
  },
  {
    id: "honey-1kg",
    name: "1kg Pure Honey Jar",
    shortName: "Pure Honey",
    size: "1kg",
    price: 20,
    priceDisplay: "£20.00",
    description:
      "Our family-size jar, made for homes that never like to run out. The same honest honey in a larger helping.",
    image: "/images/honey-1kg.svg",
    imageAlt: "Illustration of a 1kg jar of Baba's Bees pure honey",
    badge: "Family size",
    // This product uses the Stripe Price ID in STRIPE_PRICE_HONEY_1KG.
    stripePriceEnv: "STRIPE_PRICE_HONEY_1KG",
  },
  {
    id: "honeycomb-500g",
    name: "Pure Honey with Real Honeycomb",
    shortName: "Honey & Honeycomb",
    size: "500g",
    price: 19.99,
    priceDisplay: "£19.99",
    description:
      "Golden honey paired with a piece of real honeycomb for a beautifully textured, indulgent taste of the hive.",
    image: "/images/honeycomb-500g.svg",
    imageAlt: "Illustration of a 500g jar of honey with real honeycomb",
    badge: "Something special",
    // This product uses the Stripe Price ID in STRIPE_PRICE_HONEYCOMB_500G.
    stripePriceEnv: "STRIPE_PRICE_HONEYCOMB_500G",
  },
];

export function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}
