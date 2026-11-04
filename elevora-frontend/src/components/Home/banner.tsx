import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <section className="relative isolate overflow-hidden px-6 py-20">

            {/* Soft gradient decorations */}
            <div className="absolute -left-32 -top-32 -z-10 size-80 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20 blur-[100px]" />
            <div className="absolute -bottom-40 -right-20 -z-10 size-96 rounded-full bg-violet-200/60 dark:bg-violet-500/20 blur-[110px]" />
            <div className="absolute right-1/4 top-0 -z-10 size-64 rounded-full bg-purple-100/70 dark:bg-purple-500/10 blur-[90px]" />

            {/* Decorative circles */}
            <div className="absolute right-10 top-10 -z-10 size-24 rounded-full border border-indigo-200/50 dark:border-indigo-400/20 sm:right-20 sm:top-14 sm:size-36" />
            <div className="absolute bottom-10 left-8 -z-10 size-16 rounded-full border border-violet-200/60 dark:border-violet-400/20 sm:bottom-16 sm:left-20 sm:size-24" />

            <div className="mx-auto max-w-4xl text-center">

                {/* Brand badge */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 dark:border-indigo-400/30 bg-white/70 dark:bg-slate-900/60 px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-indigo-700 dark:text-indigo-300 shadow-sm backdrop-blur-md sm:text-sm">
                    <Sparkles className="size-4 text-indigo-500 dark:text-indigo-400" />
                    WELCOME TO ELEVORA
                </div>

                {/* Main heading */}
                <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Empowering Lives,
                    <span className="mt-2 block bg-linear-to-r from-indigo-600 via-violet-600 to-purple-500 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Inspiring Change.
                    </span>
                </h1>

                {/* Description */}
                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                    Discover meaningful events, connect with people who care,
                    and become part of initiatives that transform lives.
                    Together, let&apos;s build stronger communities and a brighter future.
                </p>

                {/* CTA buttons */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/upcoming">
                        <Button
                            size="lg"
                            className="h-12 w-full rounded-4xl bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 sm:w-auto"
                        >
                            <span className="flex items-center gap-2">
                                Explore Events
                                <ArrowRight className="size-4" />
                            </span>
                        </Button>
                    </Link>
                    
                    <Link href="/add-event">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 w-full rounded-4xl border-indigo-200 dark:border-indigo-400/40 bg-white/70 dark:bg-slate-900/50 px-8 text-base font-semibold text-indigo-700 dark:text-indigo-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:text-indigo-800 dark:hover:text-indigo-200 sm:w-auto"
                        >

                            Create an Event

                        </Button>
                    </Link>

                </div>

                {/* Brand identity */}
                <div className="mx-auto mt-14 flex max-w-xs items-center justify-center gap-3">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent to-indigo-200 dark:to-indigo-700" />
                    <p className="whitespace-nowrap text-xs font-semibold tracking-[0.18em] text-indigo-500 dark:text-indigo-400 sm:text-sm">
                        ELEVORA
                    </p>
                    <div className="h-px flex-1 bg-linear-to-l from-transparent to-indigo-200 dark:to-indigo-700" />
                </div>

            </div>
        </section>
    );
};

export default Banner;
