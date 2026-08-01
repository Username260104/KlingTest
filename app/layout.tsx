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
      "Kling Creative Studio의 다크 디자인 토큰을 적용한 국내 B2B 도입 프로토타입",
    openGraph: {
      title: "AI VIDEO SUPPLY",
      description: "KLING · SEEDANCE B2B PROTOTYPE",
      url: origin,
      siteName: "AI VIDEO SUPPLY",
      type: "website",
      images: [
        {
          url: `${origin}/og-dark.png`,
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
      images: [`${origin}/og-dark.png`],
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
