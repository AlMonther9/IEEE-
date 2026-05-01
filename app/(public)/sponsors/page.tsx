import Image from "next/image";
import Link from "next/link";
import {
    Eye,
    Users,
    Heart,
    Globe,
    Briefcase,
    Award,
    ArrowRight,
    Download,
    Handshake,
} from "lucide-react";
import { partners, sponsors, benefits } from "@/data/sponsorsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sponsors & Partners",
    description:
        "Meet the sponsors and partners powering IEEE SVU Student Branch. Explore partnership opportunities and join us in empowering future engineers.",
};

const iconMap: Record<string, React.ReactNode> = {
    Eye: <Eye className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Heart: <Heart className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Award: <Award className="w-6 h-6" />,
};

const tierConfig = {
    premium: {
        label: "Premium Partner",
        badgeColor: "bg-primary-yellow/20 text-primary-yellow border-primary-yellow/40",
        cardBorder: "border-primary-yellow/30 hover:border-primary-yellow/60",
        glowHover: "hover:shadow-[0_0_24px_rgba(251,191,36,0.15)]",
    },
    gold: {
        label: "Gold Sponsors",
        badgeColor: "bg-primary-yellow/15 text-primary-yellow/80 border-primary-yellow/30",
        cardBorder: "border-white/10 hover:border-primary-yellow/40",
        glowHover: "hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]",
    },
    silver: {
        label: "Silver Sponsors",
        badgeColor: "bg-white/10 text-white/60 border-white/20",
        cardBorder: "border-white/8 hover:border-white/20",
        glowHover: "hover:shadow-[0_0_16px_rgba(255,255,255,0.05)]",
    },
};

function SponsorCard({
    name,
    logo,
    tier,
    badge,
}: {
    name: string;
    logo: string;
    tier: "premium" | "gold" | "silver";
    badge?: boolean;
}) {
    const config = tierConfig[tier];
    const size = tier === "premium" ? "h-20 w-36" : tier === "gold" ? "h-14 w-28" : "h-12 w-24";

    return (
        <div
            className={`relative group flex items-center justify-center rounded-xl bg-white/[0.03] border ${config.cardBorder} ${config.glowHover} transition-all duration-300 p-6 backdrop-blur-sm`}
        >
            {badge && (
                <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${config.badgeColor}`}
                >
                    {tier === "premium" ? "Premium" : tier === "gold" ? "Gold" : "Silver"}
                </span>
            )}
            <div className={`relative ${size}`}>
                <Image
                    src={logo}
                    alt={name}
                    fill
                    sizes="160px"
                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
            </div>
        </div>
    );
}

export default function SponsorsPage() {
    const premiumSponsors = sponsors.filter((s) => s.tier === "premium");
    const goldSponsors = sponsors.filter((s) => s.tier === "gold");
    const silverSponsors = sponsors.filter((s) => s.tier === "silver");

    return (
        <div className="bg-gradient-main -mt-24">
            {/* ── Hero Section ── */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
                {/* Auth-style background decorations */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-8 h-72 w-72 rounded-full bg-primary-blue/20 blur-3xl" />
                    <div className="absolute bottom-8 right-8 h-72 w-72 rounded-full bg-primary-yellow/10 blur-3xl" />
                    <Image
                        src="/Frame.svg"
                        alt=""
                        aria-hidden="true"
                        width={173}
                        height={173}
                        className="absolute left-10 top-24 hidden opacity-75 lg:block"
                    />
                    <Image
                        src="/Frame%20(1).svg"
                        alt=""
                        aria-hidden="true"
                        width={162}
                        height={162}
                        className="absolute bottom-20 right-10 hidden opacity-80 lg:block"
                    />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-yellow/40 bg-primary-yellow/10 mb-8">
                        <Handshake className="w-4 h-4 text-primary-yellow" />
                        <span className="text-primary-yellow text-xs font-semibold uppercase tracking-wider">
                            Building the Future Together
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                        Our Partners in{" "}
                        <span className="bg-gradient-header bg-clip-text text-transparent">
                            Success
                        </span>
                    </h1>

                    <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Collaborating with industry leaders to empower future engineers and drive innovation
                        in the tech community.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-yellow-cta text-black font-semibold text-sm shadow-lg shadow-primary-yellow/25 hover:shadow-primary-yellow/40 hover:scale-105 transition-all duration-300"
                        >
                            <Handshake className="w-4 h-4" />
                            Become a Sponsor
                        </Link>
                        <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                            <Download className="w-4 h-4" />
                            Download Prospectus
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Partners & Academic Affiliations ── */}
            <section className="py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 justify-center mb-4">
                        <div className="w-1 h-8 rounded-full bg-primary-blue" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Partners & Academic Affiliations
                        </h2>
                    </div>
                    <p className="text-center text-white/40 text-sm mb-12 max-w-lg mx-auto">
                        Trusted affiliations with leading academic institutions and IEEE organizations
                        worldwide.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {partners.map((p) => (
                            <div
                                key={p.name}
                                className="flex items-center justify-center rounded-xl bg-white/[0.04] border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300 p-6 hover:shadow-[0_0_20px_rgba(28,78,216,0.12)]"
                            >
                                <div className="relative h-14 w-28">
                                    <Image
                                        src={p.logo}
                                        alt={p.name}
                                        fill
                                        sizes="120px"
                                        className="object-contain brightness-90 hover:brightness-110 transition-all"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industry Sponsors ── */}
            <section className="py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 justify-center mb-4">
                        <div className="w-1 h-8 rounded-full bg-primary-yellow" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Industry Sponsors
                        </h2>
                    </div>
                    <p className="text-center text-white/40 text-sm mb-14 max-w-lg mx-auto">
                        Industry leaders who power our workshops, hackathons, and community programs.
                    </p>

                    {/* Premium */}
                    <div className="mb-14">
                        <p className="text-center text-primary-yellow/70 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                            Premium Partners
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {premiumSponsors.map((s, i) => (
                                <SponsorCard key={i} {...s} badge />
                            ))}
                        </div>
                    </div>

                    {/* Gold */}
                    <div className="mb-14">
                        <p className="text-center text-primary-yellow/50 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                            Gold Sponsors
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {goldSponsors.map((s, i) => (
                                <SponsorCard key={i} {...s} />
                            ))}
                        </div>
                    </div>

                    {/* Silver */}
                    <div>
                        <p className="text-center text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                            Silver Sponsors
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {silverSponsors.map((s, i) => (
                                <SponsorCard key={i} {...s} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Partner With Us? ── */}
            <section className="py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                        Why Partner With{" "}
                        <span className="bg-gradient-header bg-clip-text text-transparent">Us?</span>
                    </h2>
                    <p className="text-center text-white/40 text-sm mb-14 max-w-lg mx-auto">
                        Join the network of forward-thinking organizations that make an impact on future
                        tech leaders.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((b) => (
                            <div
                                key={b.title}
                                className="rounded-xl border border-white/8 bg-white/[0.02] p-6 hover:border-primary-blue/30 hover:bg-white/[0.04] transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary-blue/15 flex items-center justify-center text-primary-blue mb-4 group-hover:bg-primary-blue/25 transition-colors">
                                    {iconMap[b.icon]}
                                </div>
                                <h3 className="text-white font-semibold text-base mb-2">{b.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="relative rounded-2xl border border-primary-yellow/20 bg-gradient-to-br from-[#061231] to-[#030b22] p-10 md:p-14 overflow-hidden">
                        {/* Decorative glow */}
                        <div
                            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle at 80% 20%, rgba(28, 78, 216, 0.15) 0%, transparent 60%)",
                            }}
                        />

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                    Interested in Collaborating with
                                    <br />
                                    IEEE SVU SB?
                                </h3>
                                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                                    Let&apos;s discuss how we can create meaningful partnerships
                                    that benefit your organization and our community of future engineers.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-yellow-cta text-black font-semibold text-sm shadow-lg shadow-primary-yellow/25 hover:shadow-primary-yellow/40 hover:scale-105 transition-all duration-300"
                                >
                                    Submit Proposal
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                                    <Download className="w-4 h-4" />
                                    Prospectus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
