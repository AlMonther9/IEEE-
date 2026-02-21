'use client';

import { useEffect, type JSX } from 'react';
import type { CommitteeDetail } from '@/data/committeeDetails';

type CommitteeDetailsDrawerProps = {
  isOpen: boolean;
  committee: CommitteeDetail;
  onClose: () => void;
};

type StatCardProps = {
  label: string;
  value: number;
  icon: JSX.Element;
};

type ListRowProps = {
  text: string;
  icon: JSX.Element;
};

function CloseIcon(): JSX.Element {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6 18 18M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon(): JSX.Element {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(47,115,255,0.08)"
        stroke="#2F73FF"
        strokeWidth="1.8"
      />
      <path
        d="m8 12.2 2.3 2.3 5.7-5.7"
        stroke="#2F73FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrophyIcon(): JSX.Element {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 4h10v2.2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z"
        stroke="#F6BE00"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 6H3.2v1.1a3.5 3.5 0 0 0 3.5 3.5H7M17 6h3.8v1.1a3.5 3.5 0 0 1-3.5 3.5H17"
        stroke="#F6BE00"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 11v4.2m-3.6 3h7.2m-6-3h4.8"
        stroke="#F6BE00"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MembersIcon(): JSX.Element {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16.6 10.4a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 11.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M2.8 19.3c0-2.6 2.2-4.7 4.8-4.7h1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 14.6h2.3c3 0 5.4 2.4 5.4 5.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SponsorshipIcon(): JSX.Element {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3.4 10.2 9.3 4.6l4.8 4.4L8.2 14.7l-4.8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.4 19.5-6-5.7 2.5-2.5 6 5.7-2.5 2.5Zm1.8-1.1 5.5-5.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.2 5.9h4.8L20.6 7.3v4.2L19 12.9h-4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatCard(props: StatCardProps): JSX.Element {
  const { label, value, icon } = props;

  return (
    <article className="rounded-[10px] border border-white/[0.09] bg-white/[0.06] p-3">
      <div className="mb-1.5 flex items-center gap-2 text-[13px]">
        <span className="inline-flex text-[#F6BE00]">{icon}</span>
        <span>{label}</span>
      </div>
      <strong className="text-[34px] font-medium leading-none">{value}</strong>
    </article>
  );
}

function ListRow(props: ListRowProps): JSX.Element {
  const { text, icon } = props;

  return (
    <li className="flex items-start gap-2.5 text-[17px] leading-[1.45] text-white/95">
      {icon}
      <span>{text}</span>
    </li>
  );
}

export function CommitteeDetailsDrawer(
  props: CommitteeDetailsDrawerProps,
): JSX.Element {
  const { isOpen, committee, onClose } = props;
  const overlayStateClass: string = isOpen
    ? 'opacity-100 pointer-events-auto'
    : 'opacity-0 pointer-events-none';
  const drawerStateClass: string = isOpen ? 'translate-x-0' : 'translate-x-full';

  useEffect((): (() => void) | undefined => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow: string = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <>
      <button
        type="button"
        className={`fixed inset-0 z-[80] border-0 bg-black/70 transition-opacity duration-300 ${overlayStateClass}`}
        onClick={onClose}
        aria-label="Close committee drawer"
      />

      <aside
        className={`fixed right-0 top-0 z-[90] h-screen w-full max-w-[473px] rounded-l-[10px] border-l border-white/12 bg-[linear-gradient(180deg,#02040A_0%,#061231_100%)] shadow-[0_0_4px_rgba(0,0,0,0.12)] transition-transform duration-300 ${drawerStateClass}`}
        role="dialog"
        aria-modal="true"
        aria-label="Committee details"
      >
        <div className="flex h-full flex-col px-3.5 pb-4 pt-3.5">
          <header className="mb-4 flex items-start justify-between border-b border-white/15 pb-3.5">
            <h2 className="m-0 text-[56px] leading-none max-sm:text-[46px]">
              {committee.name}
            </h2>
            <button
              type="button"
              className="border-0 bg-transparent text-white/45 transition hover:text-white"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </header>

          <div className="overflow-y-auto pr-1">
            <section className="mb-7">
              <h3 className="mb-2.5 text-[15px] font-bold tracking-[0.04em] text-white/70">
                ABOUT THIS COMMITTEE
              </h3>
              <p className="m-0 text-[16px] leading-[1.48]">{committee.about}</p>
            </section>

            <section className="mb-7 grid grid-cols-2 gap-3">
              <StatCard
                label="Members"
                value={committee.stats.members}
                icon={<MembersIcon />}
              />
              <StatCard
                label="Sponsorship"
                value={committee.stats.sponsorship}
                icon={<SponsorshipIcon />}
              />
            </section>

            <section className="mb-7">
              <h3 className="mb-2.5 text-[15px] font-bold tracking-[0.04em] text-white/70">
                MAIN TASKS
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {committee.tasks.map((task: string): JSX.Element => (
                  <ListRow key={task} text={task} icon={<CheckIcon />} />
                ))}
              </ul>
            </section>

            <section className="mb-7">
              <h3 className="mb-2.5 text-[15px] font-bold tracking-[0.04em] text-white/70">
                ACHIEVEMENTS
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {committee.achievements.map(
                  (achievement: string): JSX.Element => (
                    <ListRow
                      key={achievement}
                      text={achievement}
                      icon={<TrophyIcon />}
                    />
                  ),
                )}
              </ul>
            </section>
          </div>

          <button
            type="button"
            className="mt-auto h-[62px] rounded-[10px] border-0 bg-[linear-gradient(90deg,#FDC700_0%,#F0B100_100%)] text-[17px] font-semibold text-[#111827] shadow-[0_8px_20px_rgba(240,177,0,0.35)] transition hover:brightness-105"
          >
            Join us
          </button>
        </div>
      </aside>
    </>
  );
}
