'use client';

import Image from 'next/image';
import { ArrowLeft, CalendarDays, Clock3, MapPin, Share2 } from 'lucide-react';
import { scheduleData, speakers } from '@/data/eventScheduleData';
import { useRouter } from 'next/navigation';

const EventHero = () => {
  const router = useRouter();

  return (
    <div className="-mt-24 min-h-screen bg-gradient-main px-2 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <section className="relative overflow-hidden border border-primary-blue/30 bg-black/20">
          <Image
            src="/event/EventCover.jpg"
            alt="AI and Machine Learning workshop cover"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary-blue/20 via-black/45 to-black/90" />

          <div className="relative z-10 min-h-95 px-5 pb-14 pt-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/20"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur-sm transition hover:bg-white/20"
                
                
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-14 max-w-2xl">
              <p className="inline-flex rounded-full bg-primary-blue px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                Workshop
              </p>
              <h1 className="mt-4 text-4xl font-bold ">
                AI &amp; Machine Learning Workshop
              </h1>
            </div>
          </div>
        </section>

        <div className="relative z-20 -mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-10">
          <div className="space-y-8">
            {/*  Event Details   */}
            <article className="rounded-2xl border border-primary-blue/30 bg-white/5 p-6 backdrop-blur-md sm:p-7">
              <h2 className="text-lg font-semibold">About Event</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                Dive deep into the world of Artificial Intelligence. This
                intensive workshop covers the fundamentals of neural networks,
                practical applications of ML, and hands-on coding sessions using
                Python and TensorFlow. Perfect for beginners and intermediate
                developers looking to expand their skillset.
              </p>
            </article>
              {/*  Schedule */}
            <section>
              <h2 className="border-l-2 border-primary-yellow pl-3 text-xl font-semibold">
                Event Schedule
              </h2>
              <div className="mt-6  space-y-4">
                {scheduleData.map((item, index) => (
                    <article
                    key={item.title}
                    className="group relative rounded-lg p-2 transition hover:bg-white/5"
                    >
                    {index !== scheduleData.length - 1 && (
                      <span
                      className={`absolute left-5 top-8 h-[calc(100%)] w-px transition ${
                        item.isActive
                        ? 'bg-primary-yellow/40 '
                        : 'bg-primary-blue/25 group-hover:bg-primary-blue/40'
                      }`}
                      />
                    )}
                    <div className="flex items-start gap-4 pl-10 pb-4">
                      <span
                      className={`absolute left-2 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border transition ${
                        item.isActive
                        ? 'border-primary-yellow bg-primary-yellow/10 animate-pulse'
                        : 'border-primary-blue/60 bg-gradient-secondary group-hover:border-primary-blue/80'
                      }`}
                      >
                      <span
                        className={`h-2 w-2 rounded-full transition ${
                        item.isActive
                          ? 'bg-primary-yellow'
                          : 'bg-primary-blue group-hover:bg-primary-blue/80'
                        }`}
                      />
                      </span>
                      <div className="flex-1">
                      <p
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition ${
                        item.isActive
                          ? 'text-primary-yellow'
                          : 'text-primary-blue/95 group-hover:text-primary-blue'
                        }`}
                      >
                        <Clock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </p>
                      <div>
                        <h3 className="mt-2 font-semibold text-white  transition">
                        {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/55 group-hover:text-white/70 transition">
                        {item.details}
                        </p>
                      </div>
                      </div>
                    </div>
                    </article>
                ))}
              </div>
            </section>
                 {/* Speakers */}
            <section>
              <h2 className="border-l-2 border-primary-yellow pl-3 text-xl font-semibold">
                Speakers
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {speakers.map((speaker) => (
                    <article
                    key={speaker.name}
                    className="group rounded-2xl border border-primary-blue/25 bg-white/5 px-4 py-6 text-center backdrop-blur-md transition hover:border-primary-blue/50 hover:bg-white/10"
                    >
                    <div className="mx-auto h-14 w-14 overflow-hidden rounded-full">
                      <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover object-center transition group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold sm:text-base ">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/60 transition group-hover:text-white/80 sm:text-sm">
                      {speaker.role}
                    </p>
                    </article>
                ))}
              </div>
            </section>
          </div>
              {/* // Sidebar //  */}
            <aside className="h-fit sticky top-20 rounded-[28px] border border-primary-blue/20 bg-gradient-secondary/85 p-6 backdrop-blur-md lg:mt-16">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                <CalendarDays className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <p className="text-white/55">Date</p>
                <p className="font-medium leading-tight">October 15, 2024</p>
              </div>
              </div>

              <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                <Clock3 className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <p className="text-white/55">Time</p>
                <p className="font-medium leading-tight">
                10:00 AM - 4:00 PM
                </p>
              </div>
              </div>

              <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                <MapPin className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <p className="text-white/55">Location</p>
                <p className="font-medium leading-tight">
                Tech Hub, Room 301
                </p>
              </div>
              </div>
            </div>

            <div className="mt-7 flex h-36 items-center justify-center rounded-2xl bg-white/5">
              <button
              type="button"
              className="rounded-full bg-black/60 px-6 py-2 text-sm font-medium text-white transition hover:bg-black/75"
              >
              View Map
              </button>
            </div>

            <div className="mt-6 border-t border-primary-blue/20 pt-5">
              <div className="flex items-end justify-between">
              <p className="text-white/65">Registration</p>
              <p className=" font-bold text-white">Free</p>
              </div>

              <div className="relative mt-4">
              <button
                type="button"
                className="w-full rounded-xl bg-gradient-yellow-cta px-4 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Register Now
              </button>
              </div>

              <p className="mt-5 text-center text-white/40">
              45 spots remaining
              </p>
            </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
