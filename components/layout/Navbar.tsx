"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Sponsors", href: "/sponsors" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-3 flex items-center justify-between bg-gradient-secondary/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-b border-primary-blue/20 md:border-none">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary transition-shadow">
                    <Image src="logo.svg" alt="IEEE SVU SB Logo" width={150} height={60} className="h-12 md:h-24 w-auto" />
                </Link>
            </div>

            {/* Centered Navigation Pill */}
            <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 px-2 py-1.5 rounded-full border border-primary-blue/30 bg-gradient-secondary/80 backdrop-blur-md">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary ${isActive
                                ? "bg-gradient-blue-cta text-white shadow-lg"
                                : "text-white/70 hover:text-white hover:bg-transparent"
                                }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            {/* Right side CTA buttons */}
            <div className="hidden md:flex items-center gap-4">
                <Link
                    href="/join"
                    className="px-6 py-2.5 rounded-full bg-gradient-blue-cta text-white text-sm font-medium hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary"
                >
                    Join Us
                </Link>
                <Link
                    href="/contact"
                    className="px-6 py-2.5 rounded-full border border-primary-blue/60 text-white text-sm font-medium hover:bg-primary-blue/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary"
                >
                    Contact Us
                </Link>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="flex flex-col justify-center w-8 h-8 space-y-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-gradient-secondary transition-shadow" aria-label="Open secondary menu">
                            <span className="w-full h-0.5 bg-white rounded-full"></span>
                            <span className="w-full h-0.5 bg-white rounded-full"></span>
                            <span className="w-full h-0.5 bg-white rounded-full"></span>
                        </button>
                    </SheetTrigger>
                    {/* Add accessible hidden title to avoid warnings */}
                    <SheetContent side="right" className="border-l border-primary-blue/30 text-white flex flex-col pt-16 px-6">
                        <VisuallyHidden>
                            <SheetTitle>Mobile Navigation Menu</SheetTitle>
                            <SheetDescription>Mobile navigation options</SheetDescription>
                        </VisuallyHidden>
                        <nav className="flex flex-col gap-6 mt-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <div key={link.label} className="relative w-fit">
                                        <Link
                                            href={link.href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`text-lg font-medium rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1530] transition-colors ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-gradient-header" />
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        <div className="flex flex-col gap-4 mt-8">
                            <Link
                                href="/join"
                                className="w-full text-center px-6 py-3 rounded-full bg-primary-blue text-white font-medium hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1530]"
                            >
                                Join Us
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full text-center px-6 py-3 rounded-full border border-primary-blue text-white font-medium hover:bg-primary-blue/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1530]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
