
"use client";

import Image from "next/image";
import Link from "next/link";
import { EventType } from "@/lib/types/evenType";
import { CalendarDays, MapPin, Eye, UserRound, } from "lucide-react";
import DeleteDialog from "./deleteDialog";
import EditEventDialog from "./editEventDialog";

interface ManageEventCardProps {
    event: EventType;
}

const ManageEventCard = ({ event }: ManageEventCardProps) => {
    const formattedDate = new Date(event.date).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    );

    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-indigo-200/70 bg-linear-to-br from-indigo-50 via-white to-violet-100 shadow-[0_8px_30px_rgba(79,70,229,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_20px_45px_rgba(79,70,229,0.15)] dark:border-indigo-800/60 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 dark:shadow-black/20 dark:hover:border-indigo-600/70">

            {/* Image */}
            <div className="relative h-52 shrink-0 overflow-hidden sm:h-56">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/5 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/95 px-4 py-1.5 text-xs font-bold tracking-wide text-indigo-700 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:text-indigo-300">
                    {event.category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">

                <h2 className="line-clamp-2 text-lg font-extrabold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300 sm:text-2xl">
                    {event.title}
                </h2>

                {/* Event Information */}
                <div className="mt-5 space-y-3">

                    <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-500/15 dark:bg-indigo-500/10 dark:text-indigo-400">
                            <CalendarDays className="size-4" />
                        </span>
                        <span className="font-medium">{formattedDate}</span>
                    </p>

                    <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 dark:border-emerald-500/15 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <MapPin className="size-4" />
                        </span>
                        <span className="truncate font-medium">{event.location}</span>
                    </p>

                    <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 dark:border-emerald-500/15 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <UserRound className="size-4" />
                        </span>
                        <span className="truncate font-medium">{event.orgName}</span>
                    </p>

                </div>

                {/* Description */}
                <p className="mt-5 line-clamp-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {event.description}
                </p>

                {/* Actions */}
                <div className="mt-auto grid grid-cols-1 gap-2.5 border-t border-indigo-200/60 pt-5 sm:grid-cols-3 dark:border-indigo-800/60">

                    <Link
                        href={`/upcoming/${event._id}`}
                        className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-3 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-400 dark:hover:to-violet-400"
                    >
                        <Eye size={16} />
                        View
                    </Link>

                    <EditEventDialog event={event}></EditEventDialog>

                    <DeleteDialog event={event}></DeleteDialog>

                </div>
            </div>
        </div>
    );
};

export default ManageEventCard;

