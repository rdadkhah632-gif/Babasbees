import type { FulfilmentOrder } from "@/lib/orders";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tableRows(order: FulfilmentOrder) {
  return order.lineItems
    .map(
      (item) => `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #eee;">${escapeHtml(item.name)}</td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;">${escapeHtml(item.amount)}</td>
        </tr>
      `,
    )
    .join("");
}

function addressBlock(order: FulfilmentOrder) {
  return order.shippingAddress.length
    ? order.shippingAddress.map(escapeHtml).join("<br />")
    : "No shipping address captured";
}

function plainOrderLines(order: FulfilmentOrder) {
  return order.lineItems
    .map((item) => `${item.quantity} x ${item.name} - ${item.amount}`)
    .join("\n");
}

export function buildCustomerOrderEmail(order: FulfilmentOrder) {
  const subject = `Baba's Bees order ${order.orderNumber} confirmed`;
  const text = [
    `Thank you for your order.`,
    ``,
    `Order number: ${order.orderNumber}`,
    ``,
    plainOrderLines(order),
    ``,
    `Delivery: ${order.deliveryAmount}`,
    `Total paid: ${order.totalAmount}`,
    ``,
    `Shipping address:`,
    order.shippingAddress.join("\n") || "No shipping address captured",
    ``,
    `We aim to dispatch within 2 working days. Delivery estimate is 2-5 business days.`,
    ``,
    `Need help? Reply to this email or contact Baba's Bees.`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#2f2a1f;max-width:640px;margin:0 auto;padding:24px;">
      <h1 style="font-family:Georgia,serif;color:#5f431f;">Thank you for your order.</h1>
      <p>Your Baba's Bees order is confirmed.</p>
      <p><strong>Order number:</strong> ${escapeHtml(order.orderNumber)}</p>
      <table style="width:100%;border-collapse:collapse;margin:24px 0;">
        <thead>
          <tr>
            <th style="text-align:left;border-bottom:2px solid #d8bd73;padding-bottom:8px;">Item</th>
            <th style="text-align:center;border-bottom:2px solid #d8bd73;padding-bottom:8px;">Qty</th>
            <th style="text-align:right;border-bottom:2px solid #d8bd73;padding-bottom:8px;">Amount</th>
          </tr>
        </thead>
        <tbody>${tableRows(order)}</tbody>
      </table>
      <p><strong>Delivery:</strong> ${escapeHtml(order.deliveryAmount)}<br />
      <strong>Total paid:</strong> ${escapeHtml(order.totalAmount)}</p>
      <p><strong>Shipping address:</strong><br />${addressBlock(order)}</p>
      <p>We aim to dispatch within 2 working days. Delivery estimate is 2-5 business days.</p>
      <p style="font-size:13px;color:#6f6a5d;">Stripe reference: ${escapeHtml(order.stripeSessionId)}</p>
    </div>
  `;

  return { subject, text, html };
}

export function buildAdminOrderEmail(order: FulfilmentOrder) {
  const subject = `New Baba's Bees order ${order.orderNumber}`;
  const text = [
    `New paid order: ${order.orderNumber}`,
    ``,
    `Customer: ${order.customerName || "Not provided"}`,
    `Email: ${order.customerEmail || "Not provided"}`,
    `Phone: ${order.customerPhone || "Not provided"}`,
    ``,
    plainOrderLines(order),
    ``,
    `Delivery: ${order.deliveryAmount}`,
    `Total paid: ${order.totalAmount}`,
    ``,
    `Ship to:`,
    order.shippingAddress.join("\n") || "No shipping address captured",
    ``,
    `Stripe Checkout Session: ${order.stripeSessionId}`,
    `Stripe PaymentIntent: ${order.stripePaymentIntentId || "Not available"}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#2f2a1f;max-width:720px;margin:0 auto;padding:24px;">
      <h1 style="font-family:Georgia,serif;color:#5f431f;">New paid order</h1>
      <p><strong>Order number:</strong> ${escapeHtml(order.orderNumber)}</p>
      <p>
        <strong>Customer:</strong> ${escapeHtml(order.customerName || "Not provided")}<br />
        <strong>Email:</strong> ${escapeHtml(order.customerEmail || "Not provided")}<br />
        <strong>Phone:</strong> ${escapeHtml(order.customerPhone || "Not provided")}
      </p>
      <table style="width:100%;border-collapse:collapse;margin:24px 0;">
        <thead>
          <tr>
            <th style="text-align:left;border-bottom:2px solid #d8bd73;padding-bottom:8px;">Item</th>
            <th style="text-align:center;border-bottom:2px solid #d8bd73;padding-bottom:8px;">Qty</th>
            <th style="text-align:right;border-bottom:2px solid #d8bd73;padding-bottom:8px;">Amount</th>
          </tr>
        </thead>
        <tbody>${tableRows(order)}</tbody>
      </table>
      <p><strong>Delivery:</strong> ${escapeHtml(order.deliveryAmount)}<br />
      <strong>Total paid:</strong> ${escapeHtml(order.totalAmount)}</p>
      <p><strong>Ship to:</strong><br />${addressBlock(order)}</p>
      <p style="font-size:13px;color:#6f6a5d;">
        Stripe Checkout Session: ${escapeHtml(order.stripeSessionId)}<br />
        Stripe PaymentIntent: ${escapeHtml(order.stripePaymentIntentId || "Not available")}
      </p>
    </div>
  `;

  return { subject, text, html };
}
