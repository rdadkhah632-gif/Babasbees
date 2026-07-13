import Stripe from "stripe";

const stripeApiVersion = "2026-02-25.clover" as Stripe.StripeConfig["apiVersion"];

export function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return null;
  }

  return new Stripe(stripeSecretKey, {
    apiVersion: stripeApiVersion,
    typescript: true,
  });
}
