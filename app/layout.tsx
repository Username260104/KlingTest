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
      "기업의 사용 목적과 예상 규모를 확인해 필요한 Kling 크레딧과 기업 공급가, 공급 절차를 안내합니다.",
    openGraph: {
      title: "기업용 Kling 크레딧 공급 | Entresol",
      description: "정확한 크레딧 수량을 몰라도 시작할 수 있는 기업용 공급 문의",
      url: origin,
      siteName: "Entresol",
      type: "website",
      images: [
        {
          url: `${origin}/og-entresol-b2b.png`,
          width: 1200,
          height: 630,
          alt: "Entresol — 기업을 위한 Kling 크레딧 공급",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "기업용 Kling 크레딧 공급 | Entresol",
      description: "정확한 크레딧 수량을 몰라도 시작할 수 있는 기업용 공급 문의",
      images: [`${origin}/og-entresol-b2b.png`],
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
