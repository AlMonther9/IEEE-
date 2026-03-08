'use client';

import { Search, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { EventType, EventStatus, Committee } from '@/data/eventsData';

type CategoryFilter = 'All' | EventType;

interface FilterBarProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCommittee: Committee | 'All';
  onCommitteeChange: (committee: Committee | 'All') => void;
  selectedStatus: EventStatus | 'All';
  onStatusChange: (status: EventStatus | 'All') => void;
}

const categories: CategoryFilter[] = ['All', 'Workshop', 'Competition'];

const committees: (Committee | 'All')[] = [
  'All',
  'Web',
  'Design',
  'Robotics',
  'Cybersecurity',
];

const statuses: (EventStatus | 'All')[] = ['All', 'Upcoming', 'Past'];

export default function FilterBar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  selectedCommittee,
  onCommitteeChange,
  selectedStatus,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-4 w-full">
      <div className="flex items-center justify-center lg:justify-start gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const label =
            cat === 'Workshop'
              ? 'Workshops'
              : cat === 'Competition'
                ? 'Competitions'
                : cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2.5 rounded-full text-[11.9px] leading-5 font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-primary-blue shadow-[0_0_20px_-5px_rgba(28,78,216,0.5)] text-white'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 w-full lg:w-auto">
        <div className="relative w-full lg:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CCCCCC]" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-10 pl-10 pr-3 text-sm text-white placeholder:text-[#CCCCCC] bg-white/5 rounded-lg border-none outline-none focus:ring-1 focus:ring-primary-blue/50"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative w-full flex items-center justify-between h-10 px-3.5 pr-9 text-[11.9px] leading-5 text-white/40 bg-white/5 rounded-lg border-none outline-none cursor-pointer focus:ring-1 focus:ring-primary-blue/50 lg:w-40 transition-transform duration-200 ease-out data-[state=open]:-translate-y-4 [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180"
            >
              <span>
                {selectedCommittee === 'All' ? 'Committee' : selectedCommittee}
              </span>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="lg:min-w-40">
            <DropdownMenuItem onClick={() => onCommitteeChange('All')}>
              All
            </DropdownMenuItem>
            {committees
              .filter((c): c is Committee => c !== 'All')
              .map((c) => (
                <DropdownMenuItem key={c} onClick={() => onCommitteeChange(c)}>
                  {c}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative w-full flex items-center justify-between h-10 px-3.5 pr-9 text-[11.9px] leading-5 text-white/40 bg-white/5 rounded-lg border-none outline-none cursor-pointer focus:ring-1 focus:ring-primary-blue/50 lg:w-32 transition-transform duration-200 ease-out data-[state=open]:-translate-y-4 [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180"
            >
              <span>
                {selectedStatus === 'All' ? 'Status' : selectedStatus}
              </span>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="lg:min-w-32">
            <DropdownMenuItem onClick={() => onStatusChange('All')}>
              All
            </DropdownMenuItem>
            {statuses
              .filter((s): s is EventStatus => s !== 'All')
              .map((s) => (
                <DropdownMenuItem key={s} onClick={() => onStatusChange(s)}>
                  {s}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
