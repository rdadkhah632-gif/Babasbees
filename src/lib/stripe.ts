import Stripe from "stripe";

// stripe@22.3.0 types only expose the latest API version, but the account is pinned to clover.
const stripeApiVersion = "2026-02-25.clover" as any;

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
