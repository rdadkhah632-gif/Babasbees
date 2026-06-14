import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/data/products";

export const runtime = "nodejs";

function getStripePriceId(
  envName:
    | "STRIPE_PRICE_HONEY_500G"
    | "STRIPE_PRICE_HONEY_1KG"
    | "STRIPE_PRICE_HONEYCOMB_500G",
) {
  // These environment variables connect each local product to its matching
  // recurring-disabled, one-time Price created in the Stripe Dashboard.
  const prices = {
    STRIPE_PRICE_HONEY_500G: process.env.STRIPE_PRICE_HONEY_500G,
    STRIPE_PRICE_HONEY_1KG: process.env.STRIPE_PRICE_HONEY_1KG,
    STRIPE_PRICE_HONEYCOMB_500G: process.env.STRIPE_PRICE_HONEYCOMB_500G,
  };

  return prices[envName];
}

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured yet. Please contact Baba's Bees." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as { productId?: unknown };
    if (typeof body.productId !== "string") {
      return NextResponse.json({ error: "A valid product is required." }, { status: 400 });
    }

    const product = getProduct(body.productId);
    if (!product) {
      return NextResponse.json({ error: "That product could not be found." }, { status: 404 });
    }

    const priceId = getStripePriceId(product.stripePriceEnv);
    if (!priceId) {
      return NextResponse.json(
        { error: `${product.name} is not connected to Stripe yet.` },
        { status: 503 },
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      shipping_address_collection: { allowed_countries: ["GB"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 349, currency: "gbp" },
            display_name: "UK delivery",
          },
        },
      ],
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancelled`,
      metadata: {
        productId: product.id,
        productName: product.name,
      },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Unable to create Stripe Checkout Session:", error);
    return NextResponse.json(
      { error: "We could not open checkout. Please try again in a moment." },
      { status: 500 },
    );
  }
}
