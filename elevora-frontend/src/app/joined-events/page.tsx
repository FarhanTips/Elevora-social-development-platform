import EventCard from "@/components/eventCard";
import getTokenFromServerComponent from "@/lib/token/getTokenFromServerComponent";
import { JoinedEventType } from "@/lib/types/joinedEventType";

const JoinedEventsPage = async () => {
    const token = await getTokenFromServerComponent();
    // console.log("token",token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joined`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const events: JoinedEventType[] = await res.json();
    console.log("res", res);
    console.log(events);
    const sortedEvents = events
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    return (
        <section className="mx-auto max-w-7xl px-4 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Your Joined Events
                </h1>
                <p className="mt-2 text-gray-500">
                    View, update and manage the events you created.
                </p>
            </div>

            {
                sortedEvents.length === 0 ? 
                    <div className="rounded-2xl border border-dashed p-12 text-center">
                        <h2 className="text-xl font-semibold">No Events Found</h2>
                        <p className="mt-2 text-gray-500">
                            You haven&rsquo;t joined any events yet.
                        </p>
                    </div>
                :
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {sortedEvents.map((event) => (
                            <EventCard key={event._id} event={event} card={event.eventId} />
                        ))}
                    </div>
            }
        </section>
    );
};

export default JoinedEventsPage;
