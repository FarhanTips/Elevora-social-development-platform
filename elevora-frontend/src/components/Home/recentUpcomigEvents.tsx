import { EventType } from '@/lib/types/evenType';
import React from 'react';
import EventCard from '../eventCard';

const RecentUpcomingEvents = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recent-events`);
    const sixEvents: EventType[] = await res.json();
    return (
        <div className='my-12 md:my-16'>
            <div className="text-center px-10">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Upcoming Initiatives
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                    Recent <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">Upcoming</span> Events
                </h2>

                <p className="mt-4 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                    Latest 6 Community Drives Schedule in Your City. Get Involved Today.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto pt-12">
                {sixEvents.map((event) => (
                    <EventCard key={event._id} event={event} card={event._id} />
                ))}
            </div>
        </div>
    );
};

export default RecentUpcomingEvents;
