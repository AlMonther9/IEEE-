'use client';

import Link from 'next/link';
import { useMemo, useState, type JSX } from 'react';
import { CommitteeDetailsDrawer } from '@/components/CommitteeDetailsDrawer';
import {
    committeeDetails,
    committeeOrder,
    type CommitteeCode,
    type CommitteeDetail,
} from '@/data/committeeDetails';

type CommitteeCardProps = {
    code: CommitteeCode;
    detail: CommitteeDetail;
    onSelect: (code: CommitteeCode) => void;
};

type CommitteeIconProps = {
    gradientId: string;
};

const ctaBackgroundImage: string =
    "url('/6d3786ce125b35892905e540d700b1560b6e3b27.jpg')";

function CommitteeIcon(props: CommitteeIconProps): JSX.Element {
    const { gradientId } = props;
    const gradientRef: string = `url(#${gradientId})`;

    return (
        <svg viewBox="0 0 120 120" fill="none" aria-hidden>
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="14"
                    y1="104"
                    x2="108"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#6A43FF" />
                    <stop offset="52%" stopColor="#3B74FF" />
                    <stop offset="100%" stopColor="#2CC1FF" />
                </linearGradient>
            </defs>

            <circle cx="60" cy="60" r="54" stroke={gradientRef} strokeWidth="2.4" />
            <path d="M7 63h106" stroke={gradientRef} strokeWidth="2" />

            <circle cx="33" cy="34" r="9.5" stroke={gradientRef} strokeWidth="2.4" />
            <circle cx="60" cy="28.5" r="12.5" stroke={gradientRef} strokeWidth="2.4" />
            <circle cx="87" cy="34" r="9.5" stroke={gradientRef} strokeWidth="2.4" />

            <path
                d="M19 58c2.3-9 9.7-14 18.5-14S53.7 49 56 58"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            <path
                d="M46 57.8c2.4-8 8.1-12.8 14-12.8s11.6 4.8 14 12.8"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            <path
                d="M64 58c2.4-9 9.2-14 18-14 8.8 0 16.3 5.1 18.6 14"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinecap="round"
            />

            <path
                d="m27 65 10 7-7.8 13.4-12-7.1L27 65Z"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinejoin="round"
            />
            <path
                d="m93 65-10 7 7.8 13.4 12-7.1L93 65Z"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinejoin="round"
            />

            <path
                d="m40 78 15-8.4c3.3-1.8 7.4-1.1 9.9 1.7l13.1 14.3-7.2 6.8-9.3-8.7-5.2 3"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="m34.5 84 20.1 16.8c2.5 2 6.2 1.8 8.4-.5l3.9-4"
                stroke={gradientRef}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CommitteeCard(props: CommitteeCardProps): JSX.Element {
    const { code, detail, onSelect } = props;
    const gradientId: string = `committee-gradient-${code.toLowerCase()}`;
    const activeRingClassName: string =
        'border-[#2F73FF] shadow-[0_0_10px_rgba(47,115,255,0.75),0_0_18px_rgba(47,115,255,0.45),0_0_8px_rgba(243,184,26,0.45)] group-hover:border-[#F3B81A] group-hover:shadow-[0_0_12px_rgba(243,184,26,0.85),0_0_22px_rgba(243,184,26,0.55)]';

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
    return (
        <section className="mx-auto w-full max-w-[1800px] px-5 pb-16 md:px-7 max-sm:px-3.5 max-sm:pb-12">
            <div className="relative mx-auto h-[520px] w-full max-w-[1440px] overflow-hidden rounded-[20px] border border-[#1A3B82]/60 bg-[#020F2F] sm:h-[620px] lg:h-[781px]">
                <div
                    className="absolute inset-0 scale-[1.03] bg-cover bg-center opacity-50 blur-[4px]"
                    style={{ backgroundImage: ctaBackgroundImage }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,13,40,0.56)_0%,rgba(2,10,32,0.66)_42%,rgba(2,8,24,0.76)_100%)]" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                    <p className="max-w-3xl text-sm font-medium tracking-[0.02em] text-white/90 sm:text-base">
                        Join a community of innovation, leadership, and impact.
                    </p>

                    <h2 className="mt-4 max-w-[860px] text-[30px] font-semibold leading-[1.18] text-white sm:text-[40px] lg:text-[56px]">
                        Join the Network.
                        <span className="block bg-gradient-to-r from-[#2FA1FF] via-[#6A88FF] to-[#2F73FF] bg-clip-text text-transparent">
                            Be Part of the Architecture
                        </span>
                    </h2>

                    <Link
                        href="/registration"
                        className="mt-8 inline-flex h-[58px] items-center justify-center rounded-[12px] bg-[linear-gradient(90deg,#FDC700_0%,#F0B100_100%)] px-8 text-[16px] font-semibold text-[#111827] shadow-[0_10px_24px_rgba(240,177,0,0.35)] transition hover:scale-[1.02] hover:brightness-105"
                    >
                        JOIN THE TEAM
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
