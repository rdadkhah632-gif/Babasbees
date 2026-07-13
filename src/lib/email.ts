type EmailPayload = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
};

export function canSendEmail() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendEmail({ to, subject, html, text }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ORDER_EMAIL_FROM || "Baba's Bees <orders@babasbees.co.uk>";

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured; skipping email:", subject);
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html, text }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend email failed (${response.status}): ${detail}`);
  }
}
