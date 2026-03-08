import Image from "next/image";
import Link from "next/link";
import {CalendarDays, MapPin, ArrowRight} from "lucide-react";

export interface EventCardProps {
    id: string;
    type: "Workshop" | "Competition" | "Event";
    image: string;
    title: string;
    date: string;
    location: string;
    status?: string;
}


export default function EventCard({
    id,
    type,
    image,
    title,
    date,
    location,
}: EventCardProps) {
const badgeStyle =
    type === "Workshop"
    ? "bg-blue-600 text-white"
    : type === "Competition"
    ? "bg-yellow-400 text-black"
    : "bg-gray-500 text-white";

const glowStyle =
    type === "Workshop"
    ? "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    : type === "Competition"
    ? "hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]"
    : "";

return (
    <div
    className={`group rounded-2xl overflow-hidden bg-[#061231] border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${glowStyle}`}
    >
      {/* Image Section */}
    <div className="relative h-48 w-full">
        <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        />

        <span
        className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${badgeStyle}`}
        >
        {type}
        </span>
    </div>

      {/* Content */}
    <div className="p-5 flex flex-col gap-3">

<h3 className="text-white font-bold text-lg line-clamp-2">
{title}
</h3>

<div className="flex flex-col gap-2 text-gray-400 text-sm">

<div className="flex items-center gap-2">
<CalendarDays size={16} />
<span>{date}</span>
</div>

<div className="flex items-center gap-2">
<MapPin size={16} />
<span>{location}</span>
</div>

</div>

<Link
href={`/events/${id}`}
className="mt-1 flex items-center gap-2 text-blue-500 hover:text-yellow-400 font-medium"
>
View Details
<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>

</div>
</div>
);
}
