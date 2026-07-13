import type Stripe from "stripe";

export type FulfilmentLineItem = {
  name: string;
  quantity: number;
  amount: string;
};

export type FulfilmentOrder = {
  orderNumber: string;
  customerEmail: string | null;
  customerName: string | null;
  customerPhone: string | null;
  deliveryAmount: string;
  totalAmount: string;
  shippingAddress: string[];
  lineItems: FulfilmentLineItem[];
  stripeSessionId: string;
  stripePaymentIntentId: string | null;
};

type CheckoutShippingAddress = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

type CheckoutShippingDetailsWithPhone = {
  address?: CheckoutShippingAddress | null;
  phone?: string | null;
};

export function createOrderNumber(session: Pick<Stripe.Checkout.Session, "created" | "id">) {
  const year = new Date(session.created * 1000).getUTCFullYear();
  return `BB-${year}-${session.id.slice(-8).toUpperCase()}`;
}

export function formatCurrency(amount: number | null | undefined, currency = "gbp") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format((amount || 0) / 100);
}

export function formatAddress(address: CheckoutShippingAddress | null | undefined) {
  if (!address) {
    return [];
  }

  return [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.postal_code,
    address.country,
  ].filter((line): line is string => Boolean(line));
}

export function buildFulfilmentOrder(
  session: Stripe.Checkout.Session,
  lineItems: Stripe.LineItem[],
): FulfilmentOrder {
  const shippingDetails = session.shipping_details as CheckoutShippingDetailsWithPhone | null;
  const paymentIntent =
    typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id || null;

  return {
    orderNumber: createOrderNumber(session),
    customerEmail: session.customer_details?.email || null,
    customerName: session.customer_details?.name || null,
    customerPhone: shippingDetails?.phone || session.customer_details?.phone || null,
    deliveryAmount: formatCurrency(
      session.total_details?.amount_shipping,
      session.currency || "gbp",
    ),
    totalAmount: formatCurrency(session.amount_total, session.currency || "gbp"),
    shippingAddress: formatAddress(shippingDetails?.address),
    lineItems: lineItems.map((item) => ({
      name: item.description || "Baba's Bees order item",
      quantity: item.quantity || 1,
      amount: formatCurrency(item.amount_total, item.currency || session.currency || "gbp"),
    })),
    stripeSessionId: session.id,
    stripePaymentIntentId: paymentIntent,
  };
}
