"use client";

import { useState } from "react";
import EventCard from "@/components/events/EventCard";
import { eventsData } from "@/components/data/Events";

export default function EventsPage() {

const [visible, setVisible] = useState(4);
const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");
const [status, setStatus] = useState("All");
const [committee, setCommittee] = useState("All");
const filteredEvents = eventsData
.filter((event) => filter === "All" || event.type === filter)
.filter((event) =>
event.title.toLowerCase().includes(search.toLowerCase())
)
.filter((event) => status === "All" || event.status === status)
.filter((event) => committee === "All" || event.committee === committee);

return (
<div className="relative overflow-hidden min-h-screen bg-[#020817]">

{/* Header */}
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
<h1 className="text-5xl font-bold text-white mb-6">
Events & Activities
</h1>

<p className="text-gray-400 text-lg max-w-2xl mx-auto">
Join our workshops, competitions, and technical sessions.
</p>
</div>


{/* Filters Row */}
<div className="flex justify-between items-center max-w-7xl mx-auto px-6 mb-10 flex-wrap gap-4">

{/* Tabs */}
<div className="flex flex-wrap gap-3 w-full">

<button
onClick={() => setFilter("All")}
className={`px-4 py-2 rounded-full border transition ${
filter === "All"
? "bg-blue-600 text-white border-blue-600"
: "border-gray-600 text-white hover:bg-blue-600"
}`}
>
All
</button>

<button
onClick={() => setFilter("Workshop")}
className={`px-4 py-2 rounded-full border transition ${
filter === "Workshop"
? "bg-blue-600 text-white border-blue-600"
: "border-gray-600 text-white hover:bg-blue-600"
}`}
>
Workshops
</button>

<button
onClick={() => setFilter("Competition")}
className={`px-4 py-2 rounded-full border transition ${
filter === "Competition"
? "bg-blue-600 text-white border-blue-600"
: "border-gray-600 text-white hover:bg-blue-600"
}`}
>
Competitions
</button>

</div>


{/* Search + Status */}
<div className="flex gap-3">

<input
type="text"
placeholder="Search events..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="px-4 py-2 rounded-lg bg-[#0c1836] text-white border border-gray-600"
/>
<select
value={committee}
onChange={(e) => setCommittee(e.target.value)}
className="px-4 py-2 rounded-lg bg-[#0c1836] text-white border border-gray-600"
>
<option value="All">Committee</option>
<option value="Technical">Technical</option>
<option value="Media">Media</option>
<option value="HR">HR</option>
<option value="Marketing">Marketing</option>
</select>

<select
value={status}
onChange={(e) => setStatus(e.target.value)}
className="px-4 py-2 rounded-lg bg-[#0c1836] text-white border border-gray-600"
>
<option value="All">Status</option>
<option value="Upcoming">Upcoming</option>
<option value="Ongoing">Ongoing</option>
<option value="Past">Past</option>
</select>

</div>

</div>


{/* Cards */}
<div className="max-w-7xl mx-auto px-6 pb-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
{filteredEvents.slice(0, visible).map((event) => (
  <EventCard key={event.id} {...event} />
))}
</div>


{/* Load More */}
{visible < filteredEvents.length && (
<div className="flex flex-wrap justify-center gap-4 mb-10">
<button
onClick={() => setVisible(visible + 4)}
className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition"
>
Load More Events
</button>
</div>
)}

</div>
);
}