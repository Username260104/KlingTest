import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "../components/SiteShell";
import "./globals.css";

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
      "Kling과 Seedance의 국내 B2B 도입을 위한 프론트엔드 프로토타입",
    openGraph: {
      title: "AI VIDEO SUPPLY",
      description: "KLING · SEEDANCE B2B PROTOTYPE",
      url: origin,
      siteName: "AI VIDEO SUPPLY",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "AI VIDEO SUPPLY — KLING · SEEDANCE B2B PROTOTYPE",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI VIDEO SUPPLY",
      description: "KLING · SEEDANCE B2B PROTOTYPE",
      images: [`${origin}/og.png`],
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
