# Ething hire-developers landing page

Standalone Next.js Pages Router implementation for `/hire-developers/`. It is intentionally not deployed.

## Run

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local`. `LEAD_DELIVERY_WEBHOOK_URL` must point to Ething's authenticated server-side email/CRM delivery endpoint before production use; `LEAD_EMAIL_TO` is passed only server-side. The API refuses unconfigured submissions in production.

## Analytics

The page uses the existing `window.dataLayer` convention without adding a GTM container. It emits `lead_form_view`, `lead_form_start`, `lead_form_submit`, `lead_form_success`, `lead_form_error`, and `landing_cta_click`. Configure `lead_form_success` as the Google Ads conversion only after server confirmation.

## Required review work

This GitHub repository was empty, so no existing Ething header/footer, logo, design tokens, client logos, verified testimonials, phone number, imagery, or form/analytics implementation could be reused. Replace the text logo and placeholder trust/footer copy with verified company assets and data before launch. Set canonical base URL if the production domain differs.

