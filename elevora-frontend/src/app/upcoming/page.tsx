
import { EventType } from "@/lib/types/evenType";
import UpcomingEventsBrowser from "./upcomingEventsBrowser";

const UpcomingEventsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`,{
        cache: "no-store"
    });
    const events: EventType[] = await res.json();

    const today = new Date().toISOString().split("T")[0];

    const sortedEvents = events.filter((event) => event.date >= today).sort((a, b) => a.date.localeCompare(b.date));


    return (
        <div className="bg-linear-to-tl from-indigo-50 via-white to-violet-100 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950">
            <UpcomingEventsBrowser events={sortedEvents} />
        </div>
    );
};

export default UpcomingEventsPage;
