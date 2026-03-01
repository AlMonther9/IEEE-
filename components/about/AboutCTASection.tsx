'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type JSX } from 'react';
import { Zap } from 'lucide-react';

export default function AboutUsCtaSection(): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="mx-auto w-full max-w-[1800px] px-5 pb-16 md:px-7 max-sm:px-3.5 max-sm:pb-12">
      <div className="relative mx-auto h-[520px] w-full max-w-[1440px] overflow-hidden rounded-[20px] border border-[#1A3B82]/60 bg-[#020F2F] sm:h-[620px] lg:h-[781px]">
        <Image
          src="/about/about-cta-section.jpg"
          alt="CTA Background"
          fill
          className={`absolute inset-0 scale-[1.03] object-cover object-center opacity-50 transition-all duration-300 ${isHovered ? 'blur-none' : 'blur-[4px]'}`}
          priority
        />
        <div
          className={`absolute inset-0 bg-black/50 transition-all duration-300 ${isHovered ? 'backdrop-blur-none' : 'backdrop-blur-xs'}`}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <h2 className="mt-4 max-w-[860px] text-[30px] font-semibold leading-[1.18] text-white sm:text-[40px] lg:text-[56px]">
            Join the Network.
            <span className="block bg-gradient-header bg-clip-text text-transparent">
              Be Part of the Architecture
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-sm tracking-[0.02em] text-white/60 sm:text-base">
            Join a community of innovation, leaders, and dreamers. Your journey into the future
            of engineering starts with a single click.
          </p>

          <Link
            href="/registration"
            className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-yellow-cta px-8 text-[16px] font-semibold text-[#111827] shadow-md transition hover:scale-[1.02] hover:brightness-105"
            onMouseEnter={(): void => setIsHovered(true)}
            onMouseLeave={(): void => setIsHovered(false)}
          >
            JOIN THE TEAM
            <Zap size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
