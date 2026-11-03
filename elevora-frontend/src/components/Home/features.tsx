import {CalendarDays,PlusCircle,Users,HeartHandshake,ArrowUpRight,} from "lucide-react";

const features = [
    {
        icon: CalendarDays,
        title: "Discover Events",
        description:
            "Explore meaningful events and find opportunities that match your interests and passion.",
        number: "01",
    },
    {
        icon: PlusCircle,
        title: "Create Events",
        description:
            "Bring your ideas to life by creating and organizing events that inspire positive change.",
        number: "02",
    },
    {
        icon: Users,
        title: "Join Community",
        description:
            "Connect with like-minded people, collaborate, and become part of something meaningful.",
        number: "03",
    },
    {
        icon: HeartHandshake,
        title: "Make an Impact",
        description:
            "Turn your participation into action and help build stronger, more caring communities.",
        number: "04",
    },
];

const PlatformFeatures = () => {
    return (
        <section className="relative isolate overflow-hidden px-10 py-20 sm:px-10 sm:py-24 lg:px-16">

            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">

                    <span className="mb-4 inline-flex items-center rounded-full border border-indigo-200/70 bg-indigo-50/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-950/50 dark:text-indigo-300 sm:text-sm">
                        WHAT WE OFFER
                    </span>

                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                        Platform{" "}
                        <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
                            Features
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        Everything you need to discover opportunities, connect
                        with people, and create meaningful change in your community.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.number}
                                className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-3xl border border-indigo-100/80 bg-linear-to-br from-indigo-50 via-white to-violet-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-indigo-900/60 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 dark:hover:border-indigo-700 sm:p-8"
                            >

                                {/* Decorative Circle */}
                                <div className="absolute -right-12 -top-12 size-36 rounded-full bg-indigo-200/30 transition-transform duration-500 group-hover:scale-150 dark:bg-indigo-500/10" />

                                {/* Top Section */}
                                <div className="relative z-10 flex items-start justify-between">

                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                                        <Icon className="size-7" />
                                    </div>

                                    <span className="text-sm font-bold tracking-widest text-indigo-300 dark:text-indigo-700">
                                        {feature.number}
                                    </span>
                                </div>

                                {/* Bottom Section */}
                                <div className="relative z-10 mt-8">

                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-xs sm:text-sm leading-7 text-slate-600 dark:text-slate-300">
                                        {feature.description}
                                    </p>

                                    <div className="mt-5 flex items-center text-indigo-600 transition-transform duration-300 group-hover:translate-x-2 dark:text-indigo-400">
                                        <ArrowUpRight className="size-5" />
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default PlatformFeatures;
