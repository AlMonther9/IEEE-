import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
    Facebook,
    Instagram,
    Linkedin,
    LucideIcon,
} from "lucide-react";

type LinkItem = {
    label: string;
    href: string;
};

type SocialLink = LinkItem & {
    icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
};

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
);

const quickLinks: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    // { label: "News & Updates", href: "/news" }, // TODO: i'll make this link to the news section in hero section when it's done, or else we don't need it.
    { label: "Competitions & Events", href: "/events" },
    { label: "Sponsors and Partners", href: "/sponsors" },
    { label: "Join Us", href: "/join" },
    { label: "Contact Us", href: "/contact" },
];

const socialLinks: SocialLink[] = [
    { label: "Facebook", href: "https://www.facebook.com/IEEESVUSB", icon: Facebook },
    { label: "X", href: "https://x.com/IEEESVUSB", icon: XIcon },
    { label: "Instagram", href: "https://www.instagram.com/ieeesvusb/", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ieeesvusb/", icon: Linkedin },
];

export default function Footer() {
    return (
        <footer className="footer-root relative w-full px-5 sm:px-8 md:px-10 lg:px-20 pt-6 sm:pt-8 pb-4 sm:pb-6 flex flex-col bg-gradient-secondary text-white overflow-hidden">
            {/* Upper content */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                <nav aria-label="Footer Quick Links">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4 sm:mb-5">
                        Quick Links
                    </h3>
                    <ul className="space-y-2.5 text-sm leading-tight text-white/85">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4 sm:mb-5">
                        Connect With Us
                    </h3>
                    <div className="space-y-3 text-sm text-white/85">
                        <div className="flex items-center gap-2.5">
                            <svg
                                className="h-5 w-5 text-primary-blue"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.9"
                                aria-hidden
                            >
                                <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
                                <path d="m4.5 7 7.5 5.7L19.5 7" />
                            </svg>
                            <span className="text-white font-medium">Email</span>
                        </div>
                        <p className="text-white/85">info@example.com</p>
                        <div
                            className="SocialLinks flex items-center gap-3"
                            aria-label="Social Media Links"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="footer-social rounded-full border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:border-primary-blue/50 hover:bg-primary-blue/10 hover:shadow-[0_0_15px_rgba(28,78,216,0.5)] hover:text-primary-blue text-white/85"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <social.icon className="w-5 h-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <form aria-label="Newsletter Subscription">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4 sm:mb-5">
                        Stay Updated
                    </h3>
                    <p className="text-xs leading-relaxed text-white/85 mb-4">
                        Subscribe to our newsletter for the latest news
                        <br />
                        and updates
                    </p>
                    <div className="w-full sm:max-w-sm">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email address for newsletter"
                            required
                            className="w-full h-10 sm:h-12 rounded-lg border border-primary-blue/30 bg-gradient-input px-4 sm:px-5 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
                        />
                        <button
                            type="submit"
                            className="mt-3 cursor-pointer h-10 sm:h-12 w-full rounded-lg bg-gradient-blue-cta text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>

            {/* TextHoverEffect – sits below content, above bottom bar */}
            <div
                className="relative z-50 mt-4 sm:mt-6 flex items-center justify-center w-full h-16 sm:h-28 md:h-36 lg:h-44"
                aria-hidden="true"
            >
                <div className="md:w-full h-full pointer-events-auto">
                    <TextHoverEffect text="IEEESVU SB" />
                </div>
            </div>

            {/* Divider line */}
            <div className="relative z-20 mx-4 sm:mx-16 h-px bg-blue-900/35" />

            {/* Bottom bar */}
            <nav
                aria-label="Legal Links"
                className="relative z-20 pt-4 sm:pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs text-white/50"
            >
                <p>© 2026 IEEE SVU SB. All rights reserved.</p>
                {/* <div className="flex items-center gap-4 sm:gap-6">
                    <Link
                        href="/privacy"
                        className="hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary"
                    >
                        Terms of Service
                    </Link>
                </div> */}
            </nav>
        </footer>
    );
}
