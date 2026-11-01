import EventCard from "@/components/eventCard";
import { EventType } from "@/lib/types/evenType";



const UpcomingEventsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    const events: EventType[] = await res.json();
    const sortedEvents = events
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event) => (
                <EventCard key={event._id} event={event} uniqueId={event._id}/>
            ))}
        </div>
    );
};

export default UpcomingEventsPage;
