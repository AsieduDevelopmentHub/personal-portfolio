import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Asiedu Minta Kwaku — Engineer & Developer",
    template: "%s | Asiedu Minta Kwaku",
  },
  description:
    "Personal portfolio of Asiedu Minta Kwaku — embedded systems, modern web, and interactive software.",
  openGraph: {
    title: "Asiedu Minta Kwaku — Engineer & Developer",
    description:
      "Embedded systems, software engineering, and interactive systems.",
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
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans selection:bg-lime selection:text-void">
        <SmoothScroll>
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
