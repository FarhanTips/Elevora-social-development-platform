

"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { EventType } from "@/lib/types/evenType";
import EventCard from "@/components/eventCard";
import { Button } from "@/components/ui/button";

interface UpcomingEventsBrowserProps {
  events: EventType[];
}

const UpcomingEventsBrowser = ({ events }: UpcomingEventsBrowserProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // "All" + every category that exists in the events
  const categories = ["All", ...new Set(events.map((event) => event.category))];

  const filteredEvents = events.filter((event) => {
    const categoryMatches = selectedCategory === "All" || event.category === selectedCategory;

    const text = searchText.trim().toLowerCase();

    const searchMatches = event.title.toLowerCase().includes(text) ||
      event.location.toLowerCase().includes(text);

    return categoryMatches && searchMatches;
  });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchText("");
  };

  return (
    <div className="w-10/12 mx-auto my-20">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
            Upcoming
          </span> Events
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-6 text-slate-600 dark:text-slate-300">
          Discover verified volunteer initiatives scheduled for upcoming dates. Past events are automatically excluded, so you can focus on active opportunities and initiatives that need your support.
        </p>
      </div>

      {/* Search + categories */}
      <div className="mb-10 space-y-6">
        <div className="relative max-w-md ">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by title or location..."
            className="w-full rounded-xl border border-indigo-200 bg-white/80 py-2 sm:py-3 pl-12 pr-4 text-xs sm:text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-indigo-800 dark:bg-slate-900/60 dark:text-white dark:focus:border-indigo-500 dark:focus:ring-indigo-900"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition ${selectedCategory === category
                ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                : "border border-indigo-200 bg-white/80 text-slate-700 hover:border-indigo-400 dark:border-indigo-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-indigo-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing {filteredEvents.length} of {events.length} events
        </p>
      </div>

      {/* Event card */}
      {
        filteredEvents.length === 0 ?
          <div className="rounded-2xl border border-dashed border-indigo-300 p-12 text-center dark:border-indigo-800 my-0">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
              No events found
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm md:text-base">
              Try another category or search word.
            </p>
            <Button
              onClick={clearFilters}
              className="mt-6 rounded-3xl bg-linear-to-r from-indigo-600 to-violet-600 px-4 md:px-5 py-2 md:py-3 text-xs md:text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-700 hover:to-violet-700 active:scale-95"
            >
              Clear filters
            </Button>
          </div>
          :
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
              filteredEvents.map(event => <EventCard key={event._id} event={event} card={event._id} />)
            }
          </div>
      }
    </div>
  );
};

export default UpcomingEventsBrowser;
