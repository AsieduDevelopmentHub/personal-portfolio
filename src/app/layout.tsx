import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asiedu.dev"),
  title: {
    default: "Asiedu Minta Kwaku — Engineer & Developer",
    template: "%s | Asiedu Minta Kwaku",
  },
  description:
    "Personal portfolio of Asiedu Minta Kwaku — embedded systems, modern web, and interactive software.",
  openGraph: {
    title: "Asiedu Minta Kwaku — Engineer & Developer",
    description:
      "Embedded systems, software engineering, and cinematic digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asiedu Minta Kwaku — Engineer & Developer",
    description:
      "Embedded systems, software engineering, and interactive systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
