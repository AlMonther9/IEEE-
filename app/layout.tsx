import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IEEE SVU SB | South Valley University Student Branch",
    template: "%s | IEEE SVU SB",
  },
  description: "The official platform for the IEEE South Valley University Student Branch. Empowering future engineers through workshops, hackathons, and a thriving technical community.",
  keywords: ["IEEE", "SVU", "South Valley University", "Student Branch", "Engineering", "Technology", "Hackathon", "Egypt", "Qena"],
  authors: [{ name: "IEEE SVU SB Web Committee" }],
  metadataBase: new URL("https://ieee-svu-sb.vercel.app"),
  openGraph: {
    title: "IEEE SVU SB | South Valley University",
    description: "Empowering future engineers through workshops, hackathons, and a thriving technical community.",
    url: "https://ieee-svu-sb.vercel.app",
    siteName: "IEEE SVU SB",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "IEEE SVU Student Branch Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jakarta.variable} ${jakarta.className} antialiased bg-gradient-main`}
      >
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
