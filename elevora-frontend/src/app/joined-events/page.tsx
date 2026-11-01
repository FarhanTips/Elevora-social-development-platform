import EventCard from "@/components/eventCard";
import { JoinedEventType } from "@/lib/types/joinedEventType";

const JoinedEventsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joined`);
    const events: JoinedEventType[] = await res.json();
    const sortedEvents = events
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event) => (
                <EventCard key={event._id} event={event} uniqueId={event.eventId}/>
            ))}
        </div>
    );
};

export default JoinedEventsPage;
