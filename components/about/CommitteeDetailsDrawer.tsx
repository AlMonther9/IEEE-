'use client';

import { useEffect, type JSX } from 'react';
import {
  X,
  CheckCircle2,
  Trophy,
  Users,
  Handshake,
  CalendarCheck,
  Globe,
  FileEdit,
  TrendingUp,
  Pencil,
  Wrench,
  Zap,
  Radio,
  type LucideIcon,
} from 'lucide-react';
import type { CommitteeDetail, CommitteeCode } from '@/data/committeeDetails';

type CommitteeDetailsDrawerProps = {
  isOpen: boolean;
  committee: CommitteeDetail;
  onClose: () => void;
};

type StatCardProps = {
  label: string;
  value: number | string;
  icon: JSX.Element;
};

const secondaryIconMap: Record<CommitteeCode, LucideIcon> = {
  PR: Handshake,
  OC: CalendarCheck,
  WEB: Globe,
  HR: FileEdit,
  FR: Handshake,
  SM: TrendingUp,
  CIVIL: Pencil,
  MECH: Wrench,
  POWER: Zap,
  COMM: Radio,
};

type ListRowProps = {
  text: string;
  icon: JSX.Element;
};



function StatCard(props: StatCardProps): JSX.Element {
  const { label, value, icon } = props;

  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 flex items-center gap-2 text-sm">
        <span className="inline-flex text-[#F6BE00]">{icon}</span>
        <span>{label}</span>
      </div>
      <strong className="text-xl font-semibold leading-none">{value}</strong>
    </article>
  );
}

function ListRow(props: ListRowProps): JSX.Element {
  const { text, icon } = props;

  return (
    <li className="flex items-start gap-3 text-base leading-relaxed text-white/95">
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

  const SecondaryIcon = secondaryIconMap[committee.id.toUpperCase() as CommitteeCode] || Handshake;

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
        className={`fixed cursor-pointer inset-0 z-50 border-0 bg-black/70 transition-opacity duration-300 ${overlayStateClass}`}
        onClick={onClose}
        aria-label="Close committee drawer"
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-lg rounded-l-xl border-l border-white/10 bg-gradient-main shadow-lg transition-transform duration-300 ${drawerStateClass}`}
        role="dialog"
        aria-modal="true"
        aria-label="Committee details"
      >
        <div className="flex h-full flex-col px-3.5 pb-4 pt-3.5">
          <header className="mb-4 flex items-start justify-between border-b border-white/15 pb-4">
            <h2 className="text-4xl font-semibold leading-none max-sm:text-4xl">
              {committee.name}
            </h2>
            <button
              type="button"
              className="border-0 cursor-pointer bg-transparent text-white/45 transition hover:text-white"
              onClick={onClose}
            >
              <X size={22} strokeWidth={1.8} />
            </button>
          </header>

          <div className="overflow-y-auto pr-1">
            <section className="mb-7">
              <h3 className="mb-3 text-sm font-medium tracking-wide text-white/70">
                ABOUT THIS COMMITTEE
              </h3>
              <p className="">{committee.about}</p>
            </section>

            <section className="mb-7 grid grid-cols-2 gap-3">
              <StatCard
                label="Members"
                value={committee.stats.members}
                icon={<Users size={22} strokeWidth={1.8} />}
              />
              <StatCard
                label={committee.stats.secondaryLabel}
                value={committee.stats.secondaryValue}
                icon={<SecondaryIcon size={22} strokeWidth={1.8} />}
              />
            </section>

            <section className="mb-7">
              <h3 className="mb-3 text-sm font-bold tracking-wide text-white/70">
                MAIN TASKS
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {committee.tasks.map((task: string): JSX.Element => (
                  <ListRow
                    key={task}
                    text={task}
                    icon={<CheckCircle2 size={22} strokeWidth={1.8} color="#2F73FF" />}
                  />
                ))}
              </ul>
            </section>

            <section className="mb-7">
              <h3 className="mb-3 text-sm font-bold tracking-wide text-white/70">
                ACHIEVEMENTS
              </h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {committee.achievements.map(
                  (achievement: string): JSX.Element => (
                    <ListRow
                      key={achievement}
                      text={achievement}
                      icon={<Trophy size={22} strokeWidth={1.8} color="#F6BE00" />}
                    />
                  ),
                )}
              </ul>
            </section>
          </div>

          <button
            type="button"
            className="mt-auto cursor-pointer h-12 rounded-md border-0 bg-gradient-yellow-cta text-lg font-semibold text-[#111827] shadow-md transition hover:brightness-105"
          >
            Join us
          </button>
        </div>
      </aside>
    </>
  );
}
