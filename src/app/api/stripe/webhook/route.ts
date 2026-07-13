import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendEmail } from "@/lib/email";
import { buildAdminOrderEmail, buildCustomerOrderEmail } from "@/lib/order-emails";
import { buildFulfilmentOrder } from "@/lib/orders";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Stripe is not configured.");
  }

  if (session.mode !== "payment" || session.payment_status !== "paid") {
    return;
  }

  const fullSession = await stripe.checkout.sessions.retrieve(session.id);
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 });
  const order = buildFulfilmentOrder(fullSession, lineItems.data);

  const paymentIntent =
    typeof fullSession.payment_intent === "string"
      ? await stripe.paymentIntents.retrieve(fullSession.payment_intent)
      : null;

  if (paymentIntent?.metadata.orderEmailsSent === "true") {
    return;
  }

  const adminEmail = process.env.ORDER_ADMIN_EMAIL;
  const emails: Array<Promise<void>> = [];

  if (order.customerEmail) {
    const customerEmail = buildCustomerOrderEmail(order);
    emails.push(sendEmail({ to: order.customerEmail, ...customerEmail }));
  }

  if (adminEmail) {
    const fulfilmentEmail = buildAdminOrderEmail(order);
    emails.push(sendEmail({ to: adminEmail, ...fulfilmentEmail }));
  } else {
    console.warn("ORDER_ADMIN_EMAIL is not configured; skipping admin order email.");
  }

  await Promise.all(emails);

  if (paymentIntent) {
    await stripe.paymentIntents.update(paymentIntent.id, {
      metadata: {
        orderNumber: order.orderNumber,
        orderEmailsSent: "true",
      },
    });
  }
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!stripe || !webhookSecret || !signature) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 503 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    console.error("Invalid Stripe webhook signature:", error);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook fulfilment failed:", error);
    return NextResponse.json({ error: "Webhook fulfilment failed." }, { status: 500 });
  }
}
