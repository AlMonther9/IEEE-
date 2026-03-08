'use client';

import Image from 'next/image';
import { useMemo, useState, type JSX } from 'react';
import { CommitteeDetailsDrawer } from '@/components/about/CommitteeDetailsDrawer';
import {
  committeeDetails,
  committeeOrder,
  type CommitteeCode,
  type CommitteeDetail,
} from '@/data/committeeDetails';

const leaderAvatarPath = '/Ellipse%2017.svg';
const leaderName = 'Ahmed Mohammed';
const viceRoles: string[] = ['Vice Tech', 'Vice Non-Tech', 'Secretary'];

export default function OrganizationalArchitectureSection(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedCommittee, setSelectedCommittee] = useState<CommitteeCode>('PR');

  const committee: CommitteeDetail = useMemo((): CommitteeDetail => {
    return committeeDetails[selectedCommittee];
  }, [selectedCommittee]);

  const handleCommitteeOpen = (committeeCode: CommitteeCode): void => {
    setSelectedCommittee(committeeCode);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-main px-4 pb-16 pt-12 text-white md:px-6 md:pb-20 md:pt-14 lg:px-0">
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <header className="text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Organizational Architecture
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-white/70 md:mt-3 md:text-sm lg:text-base">
              The neural network powering our leadership and execution committees
            </p>
          </header>

          <div className="mt-10 flex flex-col items-center md:mt-12 lg:mt-14">
            <article className="group flex flex-col items-center text-center">
              <span className="relative inline-flex">
                <span className="absolute -inset-1 rounded-full border border-primary-blue shadow-lg shadow-primary-blue/50 transition-all duration-200 group-hover:border-primary-yellow group-hover:shadow-primary-yellow/60" />
                <Image
                  src={leaderAvatarPath}
                  alt={`${leaderName} portrait`}
                  width={224}
                  height={224}
                  className="relative z-10 h-28 w-28 rounded-full border-2 border-primary-blue object-cover md:h-44 md:w-44 lg:h-56 lg:w-56"
                />
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-tight text-white md:text-2xl lg:text-3xl">
                {leaderName}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-blue md:text-lg lg:text-2xl">
                Chairman
              </p>
            </article>

            <div className="mt-6 flex flex-col items-center md:mt-7 lg:mt-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
              <span className="h-10 w-px bg-primary-blue md:h-12" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
            </div>

            <div className="mt-6 w-full">
              <div className="mx-auto w-full max-w-5xl">
                <div className="relative h-7 md:h-9">
                  <span className="absolute left-[16.6667%] right-[16.6667%] top-0 h-px bg-primary-blue" />

                  <div className="grid grid-cols-3">
                    <div className="flex flex-col items-center">
                      <span className="h-6 w-px bg-primary-blue md:h-8" />
                      <span className="h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="h-6 w-px bg-primary-blue md:h-8" />
                      <span className="h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="h-6 w-px bg-primary-blue md:h-8" />
                      <span className="h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 md:mt-8 md:gap-6 lg:gap-8">
                  {viceRoles.map((role: string): JSX.Element => (
                    <article key={role} className="group flex flex-col items-center text-center">
                      <span className="relative inline-flex">
                        <span className="absolute -inset-1 rounded-full border border-primary-blue shadow-lg shadow-primary-blue/50 transition-all duration-200 group-hover:border-primary-yellow group-hover:shadow-primary-yellow/60" />
                        <Image
                          src={leaderAvatarPath}
                          alt={`${leaderName} portrait`}
                          width={224}
                          height={224}
                          className="relative z-10 h-20 w-20 rounded-full border-2 border-primary-blue object-cover md:h-28 md:w-28 lg:h-36 lg:w-36"
                        />
                      </span>
                      <h3 className="mt-3 text-xs font-semibold leading-tight text-white md:text-lg lg:text-xl">
                        {leaderName}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-primary-blue md:text-sm lg:text-lg">
                        {role}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-14">
            <div className="mb-5 flex flex-col items-center md:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
              <span className="h-10 w-px bg-primary-blue md:h-12" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
            </div>

            <div className="mx-auto w-full max-w-5xl">
              <div className="relative h-7 md:h-9">
                <span className="absolute left-[5%] right-[5%] top-0 h-px bg-primary-blue" />

                <div className="grid grid-cols-10">
                  {committeeOrder.map((committeeCode: CommitteeCode): JSX.Element => (
                    <div key={`${committeeCode}-line`} className="flex flex-col items-center">
                      <span className="h-5 w-px bg-primary-blue md:h-7" />
                      <span className="h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-primary-blue md:h-2 md:w-2" />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="mt-4 grid grid-cols-10 gap-1 md:mt-6 md:gap-2 lg:gap-4">
                {committeeOrder.map((committeeCode: CommitteeCode): JSX.Element => (
                  <li key={committeeCode} className="min-w-0 text-center">
                    <button
                      type="button"
                      className="group cursor-pointer flex w-full flex-col items-center border-0 bg-transparent p-0 text-white transition-transform duration-200 hover:scale-105"
                      onClick={(): void => handleCommitteeOpen(committeeCode)}
                      aria-label={`Open ${committeeDetails[committeeCode].fullName} committee details`}
                    >
                      <span className="relative flex h-6 w-6 items-center justify-center rounded-full md:h-10 md:w-10 lg:h-16 lg:w-16">
                        <span className="absolute -inset-0.5 rounded-full border border-primary-blue shadow-lg shadow-primary-blue/50 transition-all duration-200 group-hover:border-primary-yellow group-hover:shadow-primary-yellow/60" />
                        <Image
                          src="/about/committees.svg"
                          alt={`${committeeDetails[committeeCode].name} committee icon`}
                          fill
                          sizes="64px"
                          className="relative z-10 rounded-full object-cover"
                        />
                      </span>
                      <span className="mt-1 block w-full truncate text-xs font-medium uppercase tracking-tight text-white/90 md:mt-2">
                        {committeeDetails[committeeCode].name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CommitteeDetailsDrawer
        isOpen={isDrawerOpen}
        committee={committee}
        onClose={handleDrawerClose}
      />
    </>
  );
}
