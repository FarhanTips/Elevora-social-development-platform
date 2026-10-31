import EventCard from "@/components/eventCard";
import { EventType } from "@/lib/types/evenType";



const UpcomingEventsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    const events: EventType[] = await res.json();
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
                <EventCard key={event._id} event={event} />
            ))}
        </div>
    );
};

export default UpcomingEventsPage;
