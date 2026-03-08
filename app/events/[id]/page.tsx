import { eventsData } from "@/components/data/Events";
import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default async function EventDetails({ params }: { params: Promise<{ id: string }> }) {

const { id } = await params;

const event = eventsData.find((e) => e.id === id);

if (!event) {
return <div className="text-white text-center mt-20">Event not found</div>;
}

return (

<div className="min-h-screen bg-[#020817] text-white flex justify-center items-center p-10">

<div className="max-w-3xl bg-[#061231] rounded-2xl overflow-hidden border border-white/10">

<Image
src={event.image}
alt={event.title}
width={900}
height={400}
className="w-full h-72 object-cover"
/>

<div className="p-6">

<h1 className="text-3xl font-bold mb-4">
{event.title}
</h1>

<div className="flex items-center gap-2 text-gray-400 mb-2">
<CalendarDays size={18} />
<span>{event.date}</span>
</div>
<div className="flex items-center gap-2 text-gray-400 mb-4">
<MapPin size={18} />
<span>{event.location}</span>
</div>

<div className="flex gap-4 mt-6">

<Link
href="/events"
className="px-4 py-2 border border-gray-500 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition"
>
Back to Events
</Link>

<button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
Register Now
</button>

</div>
<span className="mt-4 inline-block px-3 py-1 bg-blue-600 rounded-full text-sm">
{event.type}
</span>

</div>

</div>

</div>

);
}