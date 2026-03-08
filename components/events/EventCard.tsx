import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import type { EventItem } from '@/data/eventsData';

const badgeStyles: Record<string, string> = {
  Workshop: 'bg-gradient-blue-cta text-white',
  Competition: 'bg-gradient-yellow-cta text-black font-bold',
};

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group cursor-pointer flex flex-col bg-events-card rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-events-card-hover)]"
    >
      {/* Image */}
      <div className="relative h-[175px] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className={`absolute top-3.5 left-3 px-3 py-1 rounded-full shadow-[0_0_20px_-5px_rgba(28,78,216,0.5)] text-[10.2px] leading-4 font-semibold ${badgeStyles[event.type]}`}
        >
          {event.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5">
        <h3 className="text-white font-bold text-[17px] leading-7 transition-colors duration-300 group-hover:text-primary-yellow">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-primary-blue shrink-0" />
            <span className="text-white/70 text-[11.9px] leading-5">
              {event.date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-primary-blue shrink-0" />
            <span className="text-white/70 text-[11.9px] leading-5">
              {event.location}
            </span>
          </div>
        </div>

        <div
          className="mt-auto inline-flex items-center gap-2 text-primary-blue text-[11.9px] leading-5 font-medium transition-colors duration-300 group-hover:text-primary-yellow w-fit"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary-yellow" />
        </div>
      </div>
    </Link>
  );
}
