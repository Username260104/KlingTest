import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "../components/SiteShell";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: {
      default: "Entresol",
      template: "%s | Entresol",
    },
    description:
      "Kling 국내 공식 총판 Entresol의 클링 크레딧·API 공급 및 국내 계약 안내",
    openGraph: {
      title: "Kling 국내 공식 총판 | Entresol",
      description: "클링 크레딧, API를 합리적인 가격으로",
      url: origin,
      siteName: "Entresol",
      type: "website",
      images: [
        {
          url: `${origin}/og-entresol-kling.png`,
          width: 1200,
          height: 630,
          alt: "Entresol — Kling 국내 공식 총판, 클링 크레딧과 API 공급",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kling 국내 공식 총판 | Entresol",
      description: "클링 크레딧, API를 합리적인 가격으로",
      images: [`${origin}/og-entresol-kling.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
