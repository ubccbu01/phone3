Google Ads / Analytics setup

This project includes a helper component `src/components/GoogleAdsTag.jsx` which injects the global `gtag.js` script when the environment variable `NEXT_PUBLIC_GOOGLE_ADS_ID` is set.

Quick setup

1. Create a `.env` file at the project root or set environment variables in your hosting provider.

```
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_BRAND_NAME=Your Brand
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
NEXT_PUBLIC_CONTACT_PHONE=+66000000000
```

2. Restart your dev server (`npm run dev`). The tag will load automatically and `window.dataLayer` + `gtag` will be available after `afterInteractive`.

Notes and recommendations

- Replace `AW-XXXXXXXXX` with your real Google Ads (gtag) ID from the Google Ads account.
- For conversion tracking, add the conversion `gtag('event', 'conversion', {...})` calls where you need them (e.g., order success page). You can use `window.gtag` after the script loads.
- Consider using Google Tag Manager (GTM) if you need to manage multiple tags; the project already has a single place to load GTM/gtag in `src/components/GoogleAdsTag.jsx`.
- Make sure you comply with privacy regulations (consent) — `src/components/CookieConsent.jsx` exists in the project; integrate consent gating before firing non-essential tags if required in your region.

If you want, I can:
- Add a conversion snippet on the `/thank-you` page to fire a purchase conversion.
- Add a simple GTM integration instead of gtag.
- Add instructions to automatically read `NEXT_PUBLIC_GOOGLE_ADS_ID` in Vercel or other hosts.
