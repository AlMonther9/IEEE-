import Hero from "@/components/landing/Hero";
import LatestNews from "@/components/landing/LatestNews";
import Sponsors from "@/components/landing/Sponsors";
import FAQ from "@/components/landing/Faq";

export default function Home() {
  return (
    <div className="bg-gradient-main">
      <Hero />
      <LatestNews />
      <Sponsors />
      <FAQ />
    </div>
  );
}