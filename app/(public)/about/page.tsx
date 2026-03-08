import Hero from "@/components/about/HeroSection";
import AboutUsCtaSection from '@/components/about/AboutCTASection';
import OrganizationalArchitectureSection from '@/components/about/OrganizationalArchitectureSection';


export default function AboutPage() {
  return (
    <>
      <Hero />
      <OrganizationalArchitectureSection />
      <AboutUsCtaSection />
    </>
  );
}
