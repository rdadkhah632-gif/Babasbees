import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Baba's Bees | Family-Run Honey in Birmingham",
    template: "%s | Baba's Bees",
  },
  description:
    "Shop carefully produced, natural honey from a small family business in Birmingham, West Midlands. Secure online checkout and UK delivery.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  keywords: [
    "honey Birmingham",
    "local honey West Midlands",
    "natural honey UK",
    "family honey business",
    "Baba's Bees",
  ],
  openGraph: {
    title: "Baba's Bees | Honest family honey",
    description:
      "Carefully produced honey with a real family story, based in Birmingham and delivered across the UK.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
