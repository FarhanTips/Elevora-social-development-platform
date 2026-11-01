import ManageEventCard from "@/components/manageEventCard";
import { auth } from "@/lib/auth";
import { EventType } from "@/lib/types/evenType";
import { headers } from "next/headers";


const ManageEventsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    let allMyEvents: EventType[] = [];
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {cache: "no-store"}
        );
        if (res.ok) allMyEvents = await res.json();
    } catch {
        allMyEvents = [];
    }

    const myEvents = allMyEvents
        .filter((event) => event.userEmail === session?.user.email)
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );

    return (
        <section className="mx-auto max-w-7xl px-4 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Manage Your Events
                </h1>
                <p className="mt-2 text-gray-500">
                    View, update and manage the events you created.
                </p>
            </div>

            {myEvents.length === 0 ? (
                <div className="rounded-2xl border border-dashed p-12 text-center">
                    <h2 className="text-xl font-semibold">No Events Found</h2>
                    <p className="mt-2 text-gray-500">
                        You haven&rsquo;t created any events yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {myEvents.map((event) => (
                        <ManageEventCard
                            key={event._id}
                            event={event}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ManageEventsPage;
