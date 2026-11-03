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
        <main className="min-h-screen bg-linear-to-br from-indigo-50 via-slate-50 to-violet-100 dark:from-slate-950 dark:via-gray-950 dark:to-indigo-950">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-indigo-100 via-white to-violet-100 dark:border-indigo-900/50 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950">
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />

                <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 md:px-8 md:pb-20">
                    <Link
                        href="/upcoming"
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:border-indigo-300 hover:bg-white hover:text-indigo-700 dark:border-indigo-800/70 dark:bg-slate-900/50 dark:text-gray-300 dark:hover:border-indigo-600 dark:hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Back to Upcoming Events
                    </Link>

                    <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                        {/* Event Information */}
                        <div className="space-y-6">
                            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-700/60 dark:bg-indigo-500/10 dark:text-indigo-300">
                                {event.category}
                            </span>

                            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                                {event.title}
                            </h1>

                            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-gray-300">
                                Discover something amazing, connect with like-minded people, and
                                be part of an unforgettable experience.
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-4 pt-2">
                                <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                                    <CalendarDays size={19} className="text-indigo-600 dark:text-indigo-400" />
                                    <span className="text-sm font-medium">{formattedDate}</span>
                                </div>

                                <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
                                    <MapPin size={19} className="text-indigo-600 dark:text-indigo-400" />
                                    <span className="text-sm font-medium">{event.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Event Image */}
                        <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/50 p-2 shadow-[0_20px_50px_rgba(79,70,229,0.12)] dark:border-indigo-800/60 dark:bg-slate-900/50 dark:shadow-black/30">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src={event.imageUrl}
                                    alt={event.title}
                                    width={1200}
                                    height={800}
                                    priority
                                    className="h-70 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-95"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Details */}
            <div className="bg-linear-to-br from-indigo-50 via-white to-violet-100 px-5 py-12 md:px-8 md:py-16 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950">
                <section className="w-10/12 mx-auto">

                    <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-10">

                        {/* Left Content */}
                        <div className="space-y-10 lg:col-span-2">

                            {/* About Event */}
                            <div className="rounded-3xl border border-indigo-100/80 bg-white/80 p-6 shadow-[0_8px_30px_rgba(79,70,229,0.05)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_12px_35px_rgba(79,70,229,0.09)] sm:p-8 dark:border-indigo-900/60 dark:bg-slate-900/80 dark:shadow-black/20">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15">
                                        <Building2 className="text-indigo-600 dark:text-indigo-400" size={22} />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                                            About This Event
                                        </h2>
                                        <p className="text-sm text-slate-500 dark:text-gray-400">
                                            Everything you need to know
                                        </p>
                                    </div>
                                </div>

                                <p className="whitespace-pre-line text-base leading-8 text-slate-600 dark:text-gray-300">
                                    {event.description}
                                </p>
                            </div>

                            {/* Event Information */}
                            <div>
                                <div className="mb-6">
                                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                        Event Information
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
                                        Important details about this event
                                    </p>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">

                                    <div className="flex gap-4 rounded-2xl border border-indigo-100/80 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:border-indigo-900/60 dark:bg-slate-900/80">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15">
                                            <CalendarDays className="text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-slate-500 dark:text-gray-400">
                                                Event Date
                                            </p>
                                            <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                                                {formattedDate}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 rounded-2xl border border-purple-100/80 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:border-purple-900/60 dark:bg-slate-900/80">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-500/15">
                                            <MapPin className="text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-slate-500 dark:text-gray-400">
                                                Location
                                            </p>
                                            <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                                                {event.location}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 rounded-2xl border border-blue-100/80 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:border-blue-900/60 dark:bg-slate-900/80">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/15">
                                            <Building2 className="text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-slate-500 dark:text-gray-400">
                                                Organizer
                                            </p>
                                            <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                                                {event.orgName}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 rounded-2xl border border-emerald-100/80 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:border-emerald-900/60 dark:bg-slate-900/80">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/15">
                                            <UserRound className="text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-slate-500 dark:text-gray-400">
                                                Event Category
                                            </p>
                                            <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                                                {event.category}
                                            </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-8 overflow-hidden rounded-3xl border border-indigo-200/70 bg-linear-to-br from-indigo-50 via-white to-violet-100 p-6 shadow-[0_12px_40px_rgba(79,70,229,0.10)] sm:p-7 dark:border-indigo-800/60 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 dark:shadow-black/30">

                                <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1.5 text-xs font-bold tracking-wider text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                                    DON&apos;T MISS OUT
                                </span>

                                <h2 className="mt-4 text-xl sm:text-2xl font-extrabold leading-tight text-slate-900 dark:text-white">
                                    Be Part of Something Amazing!
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-300">
                                    Join this event and connect with people
                                    who share your interests.
                                </p>

                                <div className="my-7 border-t border-indigo-200/70 dark:border-indigo-800/70" />

                                <div className="space-y-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15">
                                            <CalendarDays className="text-indigo-600 dark:text-indigo-400" size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-500 dark:text-gray-400">
                                                Date
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-gray-100">
                                                {formattedDate}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15">
                                            <MapPin className="text-indigo-600 dark:text-indigo-400" size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-500 dark:text-gray-400">
                                                Venue
                                            </p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-gray-100">
                                                {event.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15">
                                            <Building2 className="text-indigo-600 dark:text-indigo-400" size={20} />
                                        </div>
                                        <div className="min-w-0">
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
                                <div className="mt-7">
                                    <JoinButton event={event}></JoinButton>
                                </div>

                                <p className="mt-4 text-center text-xs text-slate-500 dark:text-gray-400">
                                    Be there. Make memories. Stay connected.
                                </p>
                            </div>
                        </aside>

                    </div>
                </section>
            </div>
        </main>
    );
};

export default UpcomingEventDetailsPage;
