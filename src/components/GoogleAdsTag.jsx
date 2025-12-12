import Script from 'next/script';

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function GoogleAdsTag() {
  if (!googleAdsId) return null;

  return (
    <>
      {/* โหลด gtag.js สำหรับ Google Ads */}
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />

      {/* ตั้งค่า dataLayer และ gtag config */}
      <Script
        id="google-ads-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `
        }}
      />
    </>
  );
}
