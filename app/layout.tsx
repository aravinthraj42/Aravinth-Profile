import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/app/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aravinth Raj J | Senior Front-End Developer",
  description:
    "Senior Front-End Developer with 4.3+ years building scalable web applications with React, Next.js, and modern JavaScript.",
  openGraph: {
    title: "Aravinth Raj J | Senior Front-End Developer",
    description:
      "Senior Front-End Developer with 4.3+ years building scalable web applications with React, Next.js, and modern JavaScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${syne.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
