"use client";

import { EventType } from "@/lib/types/evenType";
import { CalendarDays, MapPin, ArrowUpRight, UserRound, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: EventType;
  card: string;
}

const EventCard = ({ event, card }: EventCardProps) => {
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
      <div className="relative h-56 shrink-0 overflow-hidden sm:h-60">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/5 to-transparent" />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/95 px-4 py-1.5 text-xs font-bold tracking-wide text-indigo-700 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:text-indigo-300">
          {event.category}
        </span>

        {/* Date */}
        <div className="absolute bottom-5 right-5 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-indigo-600/95 px-4 py-3 text-white shadow-xl shadow-indigo-950/25 backdrop-blur-xl">
          <CalendarDays className="size-5 shrink-0" />
          <p className="text-xs font-bold tracking-wide">
            {formattedDate}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-extrabold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300 sm:text-2xl">
          {event.title}
        </h3>

        {/* Event Information */}
        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 dark:border-emerald-500/15 dark:bg-emerald-500/10 dark:text-emerald-400">
              <MapPin className="size-4.25" />
            </div>
            <span className="truncate font-medium">
              {event.location}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 dark:border-emerald-500/15 dark:bg-emerald-500/10 dark:text-emerald-400">
              <UserRound className="size-4.25" />
            </div>
            <span className="truncate font-medium">
              {event.orgName}
            </span>
          </div>

        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {event.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-indigo-200/60 pt-5 dark:border-indigo-800/60">


          <Link
            href={`/upcoming/${card}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-xs md:text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-400 dark:hover:to-violet-400"
          >
            View Details
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
