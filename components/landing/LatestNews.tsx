"use client";

import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/eventsData";

export default function LatestNews() {
  // Show the first 3 events
  const featured = eventsData.slice(0, 3);

  return (
    <section
      id="latest-news"
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(174.85deg, rgba(28, 78, 216, 0.04) -17.78%, rgba(6, 18, 49, 0.2) 74.6%)",
      }}
    >
      {/* Section header */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Latest News &{" "}
          <span className="bg-gradient-header bg-clip-text text-transparent">
            Events
          </span>
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto">
          Stay informed about our latest events, workshops, and announcements.
        </p>
      </div>

      {/* Events grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="group block"
          >
            <article className="rounded-2xl overflow-hidden bg-events-card border border-white/5 hover:shadow-[var(--shadow-events-card-hover)] transition-all duration-500 group-hover:-translate-y-1">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1230]/80 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                      event.type === "Competition"
                        ? "bg-primary-yellow/20 text-primary-yellow border border-primary-yellow/30"
                        : "bg-primary-blue/20 text-blue-300 border border-primary-blue/30"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-blue transition-colors line-clamp-1">
                  {event.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.type === "Workshop"
                    ? `Join us for ${event.title}, an immersive workshop organized by IEEE SVU SB. Enhance your skills and hands-on experience.`
                    : `Don't miss ${event.title}, a competitive challenge where teams design innovative solutions to real-world problems.`}
                </p>

                <span className="inline-flex items-center gap-1.5 text-primary-blue text-sm font-medium group-hover:gap-2.5 transition-all">
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
