# Baba's Bees

A mobile-first honey e-commerce MVP for a small family business in Birmingham,
West Midlands. Built with Next.js 14, TypeScript, Tailwind CSS, and Stripe Checkout.

## Run locally

Requirements: Node.js 18.17 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site will run without Stripe values, but Buy Now will show a configuration
message until the environment variables are filled in.

For a production check:

```bash
npm run lint
npm run build
npm start
```

## Add or change products

All product content is stored in:

```text
src/data/products.ts
```

Edit a product's name, size, display price, description, image path, or badge
there. Each product also has a `stripePriceEnv` value which connects it to one
of the Stripe Price environment variables.

The amount displayed on the website should match the amount configured in
Stripe. Stripe remains the source of truth for the amount actually charged.

When adding a fourth product, also:

1. Add its new environment variable to `.env.example`.
2. Add the variable to the allowed union and mapping in
   `src/app/api/checkout/route.ts`.
3. Create the matching Product and one-time Price in Stripe.

## Replace images

Placeholder SVG artwork lives in:

```text
public/images/
```

You can replace those files while keeping the same filenames, or add JPG, PNG,
WebP, or SVG files and update each `image` path in `src/data/products.ts`.

Recommended product image shape is 4:3 and at least 1200 x 900 pixels. The hero
image works best as a portrait image around 4:5. Keep image files optimised for
the web.

## Connect Stripe Checkout

1. Create or sign in to a Stripe account.
2. In the Stripe Dashboard, use test mode while setting up.
3. Go to **Product catalogue** and create these three products:
   - 500g Pure Honey Jar: one-time price of GBP 10.00
   - 1kg Pure Honey Jar: one-time price of GBP 20.00
   - 500g Pure Honey Jar with Real Honeycomb: one-time price of GBP 19.99
4. Copy each Price ID. Price IDs begin with `price_`; do not use the Product ID
   beginning with `prod_`.
5. Go to **Developers > API keys** and copy the test secret key.
6. Add the values to `.env.local`:

```dotenv
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_PRICE_HONEY_500G=price_...
STRIPE_PRICE_HONEY_1KG=price_...
STRIPE_PRICE_HONEYCOMB_500G=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
ORDER_EMAIL_FROM=Baba's Bees <orders@babasbees.co.uk>
ORDER_ADMIN_EMAIL=orders@babasbees.co.uk
```

The connection is:

| Local product | Environment variable |
| --- | --- |
| 500g Pure Honey Jar | `STRIPE_PRICE_HONEY_500G` |
| 1kg Pure Honey Jar | `STRIPE_PRICE_HONEY_1KG` |
| 500g Honey with Honeycomb | `STRIPE_PRICE_HONEYCOMB_500G` |

The API route at `src/app/api/checkout/route.ts` validates the local product,
looks up its server-side Price ID, creates a Checkout Session, and redirects to
the success or cancelled page. The Stripe secret key is never sent to the
browser. The server-side Stripe client lives in `src/lib/stripe.ts` and pins the
Stripe API version used by this app.

UK delivery is configured in the API route as a £3.49 fixed shipping option with
an estimated 2-5 business day delivery window shown in Stripe Checkout.

## Order fulfilment emails

The site includes a Stripe webhook at:

```text
https://your-domain.co.uk/api/stripe/webhook
```

Configure this endpoint in **Stripe Dashboard > Developers > Webhooks** and
subscribe to:

```text
checkout.session.completed
```

Copy the webhook signing secret into `STRIPE_WEBHOOK_SECRET`.

When a Checkout Session is paid, the webhook:

1. Creates a stable Baba's Bees order reference such as `BB-2026-AB12CD34`.
2. Sends the customer an order confirmation email if Stripe captured an email.
3. Sends the fulfilment/admin email to `ORDER_ADMIN_EMAIL`.
4. Marks the Stripe PaymentIntent metadata with the order reference and email
   sent flag to reduce duplicate emails on webhook retries.

Email sending uses the Resend HTTP API directly. Configure:

```dotenv
RESEND_API_KEY=re_...
ORDER_EMAIL_FROM=Baba's Bees <orders@babasbees.co.uk>
ORDER_ADMIN_EMAIL=orders@babasbees.co.uk
```

For live sending, verify the sending domain in Resend before using an address
at `babasbees.co.uk`.

If using the Codex Stripe connector, make sure the Stripe app connection is
authenticated first. The connector can then be used to confirm or create the
three one-time Products and Prices above, and the resulting `price_...` IDs
should be copied into `.env.local` and Vercel.

## Environment variables

Copy `.env.example` to `.env.local` for local development. Never commit
`.env.local` or a Stripe secret key.

`NEXT_PUBLIC_SITE_URL` must be the full public origin with no trailing slash:

```text
https://your-domain.co.uk
```

Restart the development server after changing environment variables.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Keep the detected Next.js framework settings.
4. Add all five variables from `.env.example` in **Project Settings >
   Environment Variables**.
5. Set `NEXT_PUBLIC_SITE_URL` to the deployed production URL or custom domain.
6. Deploy.
7. After adding a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy.
8. Test a complete purchase with Stripe test mode before switching to live keys
   and live Price IDs.

For live payments, replace every `sk_test_` key and test `price_` value with its
corresponding live-mode value. Test and live Stripe objects are separate.

## Before launch

- Replace the placeholder product and story artwork with real photography.
- Confirm dispatch estimates and courier arrangements.
- Review delivery, returns, privacy, and terms wording for the final business
  setup.
- If preferred, connect the contact form to a hosted form service instead of
  the current prefilled-email flow.
- Confirm the business trading name, return address, and any legally required
  seller information.
- Configure Stripe live mode and complete a real low-value checkout test.
- Configure the Stripe webhook and Resend variables, then confirm both the
  customer and admin emails arrive for a live low-value checkout.
- Connect a custom domain and check the site on mobile and desktop.
