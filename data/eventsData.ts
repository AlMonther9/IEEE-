export type EventType = "Workshop" | "Competition";
export type EventStatus = "Upcoming" | "Past";
export type Committee = "Web" | "All" | "Design" | "Robotics" | "Cybersecurity";

export interface EventItem {
  id: string;
  type: EventType;
  image: string;
  title: string;
  date: string;
  location: string;
  committee: Committee;
  status: EventStatus;
}

export const eventsData: EventItem[] = [
  {
    id: "1",
    type: "Workshop",
    image: "/images/events/ai-ml-workshop.jpg",
    title: "AI & Machine Learning Workshop",
    date: "Oct 15, 2024",
    location: "Tech Hub, Room 301",
    committee: "Web",
    status: "Upcoming",
  },
  {
    id: "2",
    type: "Competition",
    image: "/images/events/hackathon.png",
    title: "Hackathon 2024: Future Tech",
    date: "Nov 2–4, 2024",
    location: "Main Auditorium",
    committee: "All",
    status: "Upcoming",
  },
  {
    id: "3",
    type: "Workshop",
    image: "/images/events/webthree-workshop.jpg",
    title: "Web3 Development Bootcamp",
    date: "Oct 20, 2024",
    location: "Virtual Lab",
    committee: "Web",
    status: "Past",
  },
  {
    id: "4",
    type: "Workshop",
    image: "/images/events/ui-ux-workshop.jpg",
    title: "UI/UX Design Sprint",
    date: "Nov 15, 2024",
    location: "Design Studio",
    committee: "Design",
    status: "Upcoming",
  },
  {
    id: "5",
    type: "Competition",
    image: "/images/events/robotics-competition.jpg",
    title: "Robotics Championship",
    date: "Dec 10, 2024",
    location: "Engineering Block",
    committee: "Robotics",
    status: "Upcoming",
  },
  {
    id: "6",
    type: "Workshop",
    image: "/images/events/cybersecurity-awareness-workshop.jpg",
    title: "Cybersecurity Awareness",
    date: "Oct 25, 2024",
    location: "Seminar Hall A",
    committee: "Cybersecurity",
    status: "Past",
  },
  {
    id: "7",
    type: "Competition",
    image: "/images/events/hackathon.png",
    title: "Hackathon 2024: Future Tech",
    date: "Nov 2–4, 2024",
    location: "Main Auditorium",
    committee: "All",
    status: "Upcoming",
  },
  {
    id: "8",
    type: "Workshop",
    image: "/images/events/ai-ml-workshop.jpg",
    title: "AI & Machine Learning Workshop",
    date: "Oct 15, 2024",
    location: "Tech Hub, Room 301",
    committee: "Web",
    status: "Past",
  },
];
