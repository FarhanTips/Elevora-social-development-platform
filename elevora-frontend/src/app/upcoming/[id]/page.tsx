import JoinButton from "@/components/joined/joinButton";
import { EventType } from "@/lib/types/evenType";
import { CalendarDays, MapPin, Building2, UserRound, ArrowLeft, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface UpcomingEventDetailsPageProps {
    params: Promise<{ id: string }>;
}

const UpcomingEventDetailsPage = async ({ params, }: UpcomingEventDetailsPageProps) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`
    );

    if (!res.ok) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 dark:bg-gray-950">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Event Not Found
                    </h2>
                    <p className="mt-3 text-slate-500 dark:text-gray-400">
                        Sorry, we couldn&apos;t find the event you&apos;re looking for.
                    </p>
                    <Link
                        href="/events"
                        className="inline-block mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                    >
                        Explore Events
                    </Link>
                </div>
            </div>
        );
    }

    const event: EventType = await res.json();

    const formattedDate = new Date(event.date).toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-gray-950">
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-16">
                    <Link
                        href="/upcoming"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition dark:text-gray-400 dark:hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Back to Upcoming Events
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10">
                        {/* Event Information */}
                        <div className="space-y-6">
                            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300">
                                {event.category}
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white">
                                {event.title}
                            </h1>

                            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl dark:text-gray-400">
                                Discover something amazing, connect with like-minded people, and
                                be part of an unforgettable experience.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-2">
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <CalendarDays size={19} className="text-gray-900 dark:text-white" />
                                    <span className="text-sm">{formattedDate}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <MapPin size={19} className="text-gray-900 dark:text-white" />
                                    <span className="text-sm">{event.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Event Image */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800">
                            <Image
                                src={event.imageUrl}
                                alt={event.title}
                                width={1200}
                                height={800}
                                priority
                                className="w-full h-70 md:h-95 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Main Details */}
            <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* About Event */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-7 md:p-9 shadow-sm dark:bg-gray-900 dark:border-gray-800">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-11 w-11 rounded-xl bg-indigo-50 flex items-center justify-center dark:bg-indigo-500/15">
                                    <Building2 className="text-indigo-600 dark:text-indigo-400" size={22} />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        About This Event
                                    </h2>
                                    <p className="text-sm text-slate-500 dark:text-gray-400">
                                        Everything you need to know
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-8 text-base whitespace-pre-line dark:text-gray-300">
                                {event.description}
                            </p>
                        </div>

                        {/* Event Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">
                                Event Information
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-5">

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 dark:bg-gray-900 dark:border-gray-800">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center dark:bg-indigo-500/15">
                                        <CalendarDays className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">
                                            Event Date
                                        </p>
                                        <h3 className="font-semibold text-slate-900 mt-1 dark:text-white">
                                            {formattedDate}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 dark:bg-gray-900 dark:border-gray-800">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-purple-50 flex items-center justify-center dark:bg-purple-500/15">
                                        <MapPin className="text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">
                                            Location
                                        </p>
                                        <h3 className="font-semibold text-slate-900 mt-1 dark:text-white">
                                            {event.location}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 dark:bg-gray-900 dark:border-gray-800">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center dark:bg-blue-500/15">
                                        <Building2 className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">
                                            Organizer
                                        </p>
                                        <h3 className="font-semibold text-slate-900 mt-1 dark:text-white">
                                            {event.orgName}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 dark:bg-gray-900 dark:border-gray-800">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center dark:bg-emerald-500/15">
                                        <UserRound className="text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">
                                            Event Category
                                        </p>
                                        <h3 className="font-semibold text-slate-900 mt-1 dark:text-white">
                                            {event.category}
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-8 bg-white rounded-3xl border border-slate-200 shadow-lg p-7 dark:bg-gray-900 dark:border-gray-800">

                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                DON&apos;T MISS OUT
                            </span>

                            <h2 className="text-2xl font-bold text-slate-900 mt-3 dark:text-white">
                                Be Part of Something Amazing!
                            </h2>

                            <p className="text-slate-500 text-sm leading-6 mt-3 dark:text-gray-400">
                                Join this event and connect with people
                                who share your interests.
                            </p>

                            <div className="my-7 border-t border-slate-100 dark:border-gray-800" />

                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="text-indigo-600 dark:text-indigo-400" size={20} />
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-gray-400">
                                            Date
                                        </p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-gray-100">
                                            {formattedDate}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MapPin className="text-indigo-600 dark:text-indigo-400" size={20} />
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-gray-400">
                                            Venue
                                        </p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-gray-100">
                                            {event.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Building2 className="text-indigo-600 dark:text-indigo-400" size={20} />
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-gray-400">
                                            Organized By
                                        </p>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-gray-100">
                                            {event.orgName}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Join Button */}
                            <JoinButton event={event}></JoinButton>

                            <p className="text-center text-xs text-slate-400 mt-4">
                                Be there. Make memories. Stay connected.
                            </p>
                        </div>
                    </aside>

                </div>
            </section>

        </main>
    );
};

export default UpcomingEventDetailsPage;
