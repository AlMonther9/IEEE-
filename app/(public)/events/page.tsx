'use client';

import { useState, useMemo } from 'react';
import EventCard from '@/components/events/EventCard';
import FilterBar from '@/components/events/FilterBar';
import {
    eventsData,
    type EventType,
    type EventStatus,
    type Committee,
} from '@/data/eventsData';

type CategoryFilter = 'All' | EventType;

const EVENTS_PER_PAGE = 8;

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCommittee, setSelectedCommittee] = useState<Committee | 'All'>(
        'All',
    );
    const [selectedStatus, setSelectedStatus] = useState<EventStatus | 'All'>(
        'All',
    );
    const [visibleCount, setVisibleCount] = useState(EVENTS_PER_PAGE);

    const filteredEvents = useMemo(() => {
        return eventsData.filter((event) => {
            if (activeCategory !== 'All' && event.type !== activeCategory)
                return false;
            if (selectedCommittee !== 'All' && event.committee !== selectedCommittee)
                return false;
            if (selectedStatus !== 'All' && event.status !== selectedStatus)
                return false;
            if (
                searchQuery &&
                !event.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
                return false;
            return true;
        });
    }, [activeCategory, selectedCommittee, selectedStatus, searchQuery]);

    const visibleEvents = filteredEvents.slice(0, visibleCount);
    const hasMore = visibleCount < filteredEvents.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + EVENTS_PER_PAGE);
    };

    return (
        <div
            className="-mt-24 px-4 sm:px-6 lg:px-8md:px-12 min-h-screen bg-gradient-main"
        >
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center h-[70vh] justify-center px-4">
                <h1 className="text-4xl sm:text-5xl  md:text-6xl font-extrabold leading-tight bg-gradient-events-title bg-clip-text text-transparent">
                    Events & Activities
                </h1>
                <p className="mt-4 max-w-[650px] text-base leading-7 text-white/60">
                    Join our workshops, competitions, and technical sessions to level up
                    your skills and connect with the community.
                </p>
            </section>

            {/* Content Section */}
            <section className="max-w-500 -mt-16 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filter Bar */}
                <FilterBar
                    activeCategory={activeCategory}
                    onCategoryChange={(cat) => {
                        setActiveCategory(cat);
                        setVisibleCount(EVENTS_PER_PAGE);
                    }}
                    searchQuery={searchQuery}
                    onSearchChange={(q) => {
                        setSearchQuery(q);
                        setVisibleCount(EVENTS_PER_PAGE);
                    }}
                    selectedCommittee={selectedCommittee}
                    onCommitteeChange={(c) => {
                        setSelectedCommittee(c);
                        setVisibleCount(EVENTS_PER_PAGE);
                    }}
                    selectedStatus={selectedStatus}
                    onStatusChange={(s) => {
                        setSelectedStatus(s);
                        setVisibleCount(EVENTS_PER_PAGE);
                    }}
                />

                {/* Event Cards Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {visibleEvents.map((event, idx) => (
                        <EventCard key={`${event.id}-${idx}`} event={event} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredEvents.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-white/50">
                        <p className="text-lg">No events found matching your filters.</p>
                    </div>
                )}

                {/* Load More Button */}
                {hasMore && (
                    <div className="flex justify-center mt-14 mb-16">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-4 border border-white rounded-lg text-white text-base font-medium bg-transparent hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            Load More Events
                        </button>
                    </div>
                )}

                {/* Bottom spacing when no Load More */}
                {!hasMore && filteredEvents.length > 0 && <div className="pb-16" />}
            </section>
        </div>
    );
}
