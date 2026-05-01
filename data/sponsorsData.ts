export type SponsorTier = "premium" | "gold" | "silver";

export interface Partner {
  name: string;
  logo: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  tier: SponsorTier;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export const partners: Partner[] = [
  { name: "IEEE", logo: "/sposnors/partner-1.png" },
  { name: "Creativa", logo: "/sposnors/partner-2.png" },
  { name: "ITIDA", logo: "/sposnors/partner-3.png" },
  { name: "IEEE Benha University", logo: "/sposnors/partner-4.png" },
];

export const sponsors: Sponsor[] = [
  // Premium Partners
  { name: "Comma Learning Solutions", logo: "/sposnors/sponsor-premium-1.png", tier: "premium" },
  { name: "IDEA Academy", logo: "/sposnors/sponsor-premium-2.png", tier: "premium" },
  { name: "ECOM", logo: "/sposnors/sponsor-premium-3.png", tier: "premium" },
  { name: "Makers", logo: "/sposnors/sponsor-premium-4.png", tier: "premium" },

  // Gold Sponsors
  { name: "ITC", logo: "/sposnors/sponsor-gold-1.png", tier: "gold" },
  { name: "Eduvate", logo: "/sposnors/sponsor-gold-2.png", tier: "gold" },
  { name: "Comma", logo: "/sposnors/sponsor-gold-3.png", tier: "gold" },
  { name: "AES", logo: "/sposnors/sponsor-gold-4.png", tier: "gold" },
  { name: "Al-Bait", logo: "/sposnors/sponsor-gold-5.png", tier: "gold" },

  // Silver Sponsors
  { name: "ITC", logo: "/sposnors/sponsor-silver-1.png", tier: "silver" },
  { name: "Eduvate", logo: "/sposnors/sponsor-silver-2.png", tier: "silver" },
  { name: "Comma", logo: "/sposnors/sponsor-silver-3.png", tier: "silver" },
  { name: "AES", logo: "/sposnors/sponsor-silver-4.png", tier: "silver" },
  { name: "Al-Bait", logo: "/sposnors/sponsor-silver-5.png", tier: "silver" },
];

export const benefits: BenefitCard[] = [
  {
    title: "Brand Visibility",
    description:
      "Promote your brand across our events, website, and social media platforms.",
    icon: "Eye",
  },
  {
    title: "Access to Talent",
    description:
      "Direct connection to top engineering students for internships and recruitment.",
    icon: "Users",
  },
  {
    title: "CSR Impact",
    description:
      "Demonstrate your commitment to education and community development.",
    icon: "Heart",
  },
  {
    title: "Community Presence",
    description:
      "Build your presence in the student tech community and local tech ecosystem.",
    icon: "Globe",
  },
  {
    title: "Recruitment Pipeline",
    description:
      "Tap into a talented pool of students for internship and full-time opportunities.",
    icon: "Briefcase",
  },
  {
    title: "Industry Recognition",
    description:
      "Position your brand as an industry leader supporting STEM education and innovation.",
    icon: "Award",
  },
];
