import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

type LinkItem = {
    label: string;
    href: string;
};

type SocialLink = LinkItem & {
    iconClass: string;
};

const quickLinks: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "News & Updates", href: "/news" },
    { label: "Competitions & Events", href: "/events" },
    { label: "Sponsors and Partners", href: "/sponsors" },
    { label: "Join Us", href: "/join" },
    { label: "Contact Us", href: "/contact" },
];

const socialLinks: SocialLink[] = [
    { label: "Facebook", href: "#", iconClass: "fa-brands fa-facebook-f" },
    { label: "Twitter", href: "#", iconClass: "fa-brands fa-x-twitter" },
    { label: "Instagram", href: "#", iconClass: "fa-brands fa-instagram" },
    { label: "LinkedIn", href: "#", iconClass: "fa-brands fa-linkedin-in" },
];

export default function Footer() {
    return (
        <footer className="footer-root relative w-full px-5 sm:px-8 md:px-10 lg:px-20 pt-8 sm:pt-10 lg:pt-10 pb-6 sm:pb-8 lg:pb-8 flex flex-col bg-gradient-secondary text-white overflow-hidden">
            {/* Upper content */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                <div>
                    <h3 className="text-2xl font-semibold leading-tight mb-5 sm:mb-6">
                        Quick Links
                    </h3>
                    <ul className="space-y-3 text-sm leading-tight text-white/85">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:text-white transition">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold leading-tight mb-5 sm:mb-6">
                        Connect With Us
                    </h3>
                    <div className="space-y-4 text-sm text-white/85">
                        <div className="flex items-center gap-2.5">
                            <svg
                                className="h-5 w-5 text-blue-500"
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
                        <div className="SocialLinks flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="footer-social"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className={social.iconClass} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold leading-tight mb-5 sm:mb-6">
                        Stay Updated
                    </h3>
                    <p className="text-xs leading-relaxed text-white/85 mb-5">
                        Subscribe to our newsletter for the latest news
                        <br />
                        and updates
                    </p>
                    <div className="w-full sm:max-w-sm">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full h-11 sm:h-12 lg:h-14 rounded-lg lg:rounded-xl border border-blue-900 bg-gradient-input px-4 sm:px-6 text-sm text-white placeholder:text-gray-400 outline-none"
                        />
                        <button className="mt-3 cursor-pointer sm:mt-4 h-11 sm:h-12 lg:h-14 w-full rounded-lg lg:rounded-xl bg-gradient-blue-cta text-sm font-medium hover:brightness-110 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* TextHoverEffect – sits below content, above bottom bar */}
            <div className="relative z-50 mt-6 sm:mt-8 flex items-center justify-center w-full h-20 sm:h-36 md:h-44 lg:h-56">
                <div className="sm:w-full h-full pointer-events-auto">
                    <TextHoverEffect text="IEEESVU SB" />
                </div>
            </div>

            {/* Divider line */}
            <div className="relative z-20 mx-4 sm:mx-16 h-px bg-blue-900/35" />

            {/* Bottom bar */}
            <div className="relative z-20 pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs text-white/50">
                <p>© 2026 IEEE SVU SB. All rights reserved.</p>
                <div className="flex items-center gap-5 sm:gap-8">
                    <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
