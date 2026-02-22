'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState, type JSX } from 'react';
import { CommitteeDetailsDrawer } from '@/components/about/CommitteeDetailsDrawer';
import {
    committeeDetails,
    committeeOrder,
    type CommitteeCode,
    type CommitteeDetail,
} from '@/data/committeeDetails';
import { Zap, } from 'lucide-react';

type CommitteeCardProps = {
    code: CommitteeCode;
    detail: CommitteeDetail;
    onSelect: (code: CommitteeCode) => void;
};

type CommitteeIconProps = {
    gradientId: string;
};



function CommitteeIcon(props: CommitteeIconProps): JSX.Element {
    return (
        <Image
            src="/about/committees.svg"
            alt="Committee Icon"
            fill
            className="rounded-full object-cover"
        />
    );
}

function CommitteeCard(props: CommitteeCardProps): JSX.Element {
    const { code, detail, onSelect } = props;
    const gradientId: string = `committee-gradient-${code.toLowerCase()}`;
    const activeRingClassName: string =
        'border-bluea shadow-[0_0_10px_rgba(47,115,255,0.75),0_0_18px_rgba(47,115,255,0.45),0_0_8px_rgba(243,184,26,0.45)] group-hover:border-[#F3B81A] group-hover:shadow-[0_0_12px_rgba(243,184,26,0.85),0_0_22px_rgba(243,184,26,0.55)]';

    return (
        <button
            type="button"
            className="group w-full min-w-0 cursor-pointer bg-transparent p-0 text-center text-white transition-transform duration-200 hover:scale-[1.04]"
            onClick={(): void => onSelect(code)}
        >
            <span className="relative mx-auto mb-2 block h-[clamp(28px,7vw,94px)] w-[clamp(28px,7vw,94px)] rounded-full bg-[radial-gradient(66%_66%_at_50%_50%,rgba(32,53,123,0.3)_0%,rgba(10,18,46,0)_75%)] drop-shadow-[0_0_16px_rgba(31,103,255,0.22)]">
                <span
                    className={`absolute inset-[-2px] rounded-full border transition-all duration-200 sm:inset-[-3px] lg:inset-[-4px] ${activeRingClassName}`}
                />
                <CommitteeIcon gradientId={gradientId} />
            </span>
            <span className="block truncate text-[clamp(8px,1.6vw,15px)] leading-tight font-medium tracking-[0.01em] text-[rgba(244,247,255,0.96)]">
                {detail.name}
            </span>
        </button>
    );
}

function AboutUsCtaSection(): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

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
                <div className={`absolute inset-0 bg-black/50 transition-all duration-300 ${isHovered ? 'backdrop-blur-none' : 'backdrop-blur-xs'}`} />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-14 lg:py-20">

                    <h2 className="mt-4 max-w-[860px] text-[30px] font-semibold leading-[1.18] text-white sm:text-[40px] lg:text-[56px]">
                        Join the Network.
                        <span className="block bg-gradient-header bg-clip-text text-transparent">
                            Be Part of the Architecture
                        </span>
                    </h2>

                    <p className="max-w-3xl text-sm mt-4 tracking-[0.02em] text-white/60 sm:text-base">
                        Join a community  of innovation, leaders, and dreamers. Your journey
                        into the future of engineering starts with a single click.                     </p>
                    <Link
                        href="/registration"
                        className="mt-8 gap-3 inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-yellow-cta px-8 text-[16px] font-semibold text-[#111827] shadow-md transition hover:scale-[1.02] hover:brightness-105"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        JOIN THE TEAM
                        <Zap size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Page(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCommittee, setSelectedCommittee] = useState<CommitteeCode>('PR');

    const committee: CommitteeDetail = useMemo((): CommitteeDetail => {
        return committeeDetails[selectedCommittee];
    }, [selectedCommittee]);

    const handleOpenDrawer = (code: CommitteeCode): void => {
        setSelectedCommittee(code);
        setIsOpen(true);
    };

    const handleCloseDrawer = (): void => {
        setIsOpen(false);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(70%_60%_at_20%_100%,rgba(23,78,227,0.32)_0%,rgba(23,78,227,0)_70%),radial-gradient(65%_55%_at_100%_0%,rgba(12,48,154,0.25)_0%,rgba(12,48,154,0)_72%),linear-gradient(180deg,#061231_0%,#02040A_100%)] text-white">
            <section className="relative mx-auto max-w-[1800px] px-5 pb-10 pt-11 md:px-7 max-sm:px-3.5 max-sm:pb-6 max-sm:pt-8">
                <p className="mb-6 text-[14px] uppercase tracking-[0.14em] text-[rgba(198,219,255,0.92)]">
                    Organizational Architecture
                </p>

                <div className="grid grid-cols-10 items-start gap-1.5 px-0.5 pb-2 pt-1 sm:gap-2 md:gap-3 lg:gap-4">
                    {committeeOrder.map((code: CommitteeCode): JSX.Element => {
                        const detail: CommitteeDetail = committeeDetails[code];

                        return (
                            <CommitteeCard
                                key={code}
                                code={code}
                                detail={detail}
                                onSelect={handleOpenDrawer}
                            />
                        );
                    })}
                </div>
            </section>

            <AboutUsCtaSection />

            <CommitteeDetailsDrawer
                isOpen={isOpen}
                committee={committee}
                onClose={handleCloseDrawer}
            />
        </main>
    );
}
