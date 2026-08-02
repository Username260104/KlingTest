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
      default: "AI VIDEO SUPPLY",
      template: "%s | AI VIDEO SUPPLY",
    },
    description:
      "Kling·Seedance 국내 공식 총판의 기업용 크레딧 공급 및 국내 계약 안내",
    openGraph: {
      title: "국내 공식 총판 | AI VIDEO SUPPLY",
      description: "기업용 크레딧을 기준가 대비 최대 30% 할인된 금액으로",
      url: origin,
      siteName: "AI VIDEO SUPPLY",
      type: "website",
      images: [
        {
          url: `${origin}/og-official-distributor.png`,
          width: 1200,
          height: 630,
          alt: "AI VIDEO SUPPLY — 국내 공식 총판, 기업용 크레딧 최대 30% 할인",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "국내 공식 총판 | AI VIDEO SUPPLY",
      description: "기업용 크레딧을 기준가 대비 최대 30% 할인된 금액으로",
      images: [`${origin}/og-official-distributor.png`],
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
