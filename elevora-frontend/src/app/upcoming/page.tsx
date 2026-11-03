import EventCard from "@/components/eventCard";
import { EventType } from "@/lib/types/evenType";



const UpcomingEventsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    const events: EventType[] = await res.json();

    const today = new Date().toISOString().split("T")[0];

    const sortedEvents = events.filter((event) => event.date >= today).sort((a, b) => a.date.localeCompare(b.date));


    return (
        <div className="bg-linear-to-tl from-indigo-50 via-white to-violet-100 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto my-15">
                {sortedEvents.map((event) => (
                    <EventCard key={event._id} event={event} card={event._id} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingEventsPage;
