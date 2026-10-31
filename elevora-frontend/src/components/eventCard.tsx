"use client";

import { EventType } from "@/lib/types/evenType";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: EventType;
}

const EventCard = ({ event }: EventCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#6638B5] shadow-sm">
          {event.category}
        </span>

        {/* Date */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-[#6638B5] px-3 py-2 text-center text-white shadow-lg">
          <CalendarDays className="mx-auto mb-1 size-4" />
          <p className="text-xs font-semibold">{formattedDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#6638B5] dark:text-white">
          {event.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="size-4 shrink-0 text-[#159B70]" />
          <span className="truncate">{event.location}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <UserRound className="size-4 shrink-0 text-[#159B70]" />
          <span className="truncate">{event.orgName}</span>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {event.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          <span className="text-xs font-medium text-gray-400">
            Organized by
          </span>

          <Link
            href={`/upcoming-events/${event._id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#6638B5] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#542D96]"
          >
            View Details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EventCard;
