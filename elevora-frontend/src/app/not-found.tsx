

import Link from "next/link";

const GlobalNotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-white to-violet-100 px-10 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950">
            <div className="mx-auto w-full max-w-xl text-center">

                {/* Error Code */}
                <h1 className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-5xl font-extrabold tracking-tighter text-transparent sm:text-7xl dark:from-indigo-400 dark:to-violet-400">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
                </p>

                {/* Divider */}
                <div className="mx-auto my-8 h-px w-16 bg-linear-to-r from-indigo-500 to-violet-500" />

                {/* Buttons */}

                {/* Brand */}
                <p className="mt-12 text-xs sm:text-sm font-medium tracking-wide text-slate-500 dark:text-slate-300">
                    ELEVORA <span className="mx-1.5 text-indigo-400">•</span>
                    Empowering Lives, Inspiring Change.
                </p>

                <p className="mt-8 text-xs sm:text-sm">
                    <Link href="/" className="font-medium text-slate-500 dark:text-slate-300 underline">
                        ⬅︎ Go to homepage
                    </Link>
                </p>



            </div>
        </main>
    );
};

export default GlobalNotFound;