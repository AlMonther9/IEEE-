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
  openGraph: {
    title: "IEEE SVU SB | South Valley University",
    description: "Empowering future engineers through workshops, hackathons, and a thriving technical community.",
    url: "https://ieeesvusb.com", // Update with our actual domain later
    siteName: "IEEE SVU SB",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${jakarta.className} antialiased bg-gradient-main`}
      >
        <Navbar />
        <main className="pt-24 min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
