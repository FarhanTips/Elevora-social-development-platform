
"use client";

import Image from "next/image";
import Link from "next/link";
import { EventType } from "@/lib/types/evenType";
import {
    CalendarDays,
    MapPin,
    Pencil,
    Eye,
    UserRound,
} from "lucide-react";
import DeleteDialog from "./deleteDialog";
import EditEventDialog from "./editEventDialog";

interface ManageEventCardProps {
    event: EventType;
}

const ManageEventCard = ({event}: ManageEventCardProps) => {
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
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#6638B5] shadow">
                    {event.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="line-clamp-2 text-xl font-bold text-gray-900 dark:text-white">
                    {event.title}
                </h2>

                <div className="mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <p className="flex items-center gap-2">
                        <CalendarDays className="size-4 text-[#6638B5]" />
                        {formattedDate}
                    </p>

                    <p className="flex items-center gap-2">
                        <MapPin className="size-4 text-[#159B70]" />
                        {event.location}
                    </p>

                    <p className="flex items-center gap-2">
                        <UserRound className="size-4 text-[#159B70]" />
                        {event.orgName}
                    </p>
                </div>

                <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {event.description}
                </p>

                {/* Actions */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">

                    <Link
                        href={`/upcoming-events/${event._id}`}
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-gray-100 px-2 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
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

