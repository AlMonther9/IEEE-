"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden -mt-24"
    >
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020818] via-[#030d2e] to-[#030b22]" />

      {/* Radial glow at center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(28, 78, 216, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* 3D particle canvas */}
      <div className="absolute inset-0 z-[1]">
        <HeroBackground />
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(2, 4, 10, 0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
          Empowering Future{" "}
          <span className="bg-gradient-header bg-clip-text text-transparent">
            Engineers
          </span>
          <br />
          Through Technology
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          IEEE SVU Student Branch connects students
          <br className="hidden sm:block" />
          with innovation, leadership, and global impact
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/create-account"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-blue-cta text-white font-semibold text-sm sm:text-base shadow-lg shadow-primary-blue/25 hover:shadow-primary-blue/40 hover:scale-105 transition-all duration-300"
          >
            Join IEEE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Explore Events
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030b22] to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
