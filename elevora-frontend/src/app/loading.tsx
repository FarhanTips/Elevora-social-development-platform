
// simple loading design

// export default function Loading() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
//     </div>
//   );
// }



// premium loading design

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-white to-violet-100 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950">
            <div className="flex flex-col items-center gap-5">
                {/* Spinner */}
                <div className="relative flex size-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-100 dark:border-indigo-900" />

                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-600 border-r-violet-500 dark:border-t-indigo-400 dark:border-r-violet-400" />

                    <span className="size-3 rounded-full bg-linear-to-br from-indigo-600 to-violet-600" />
                </div>

                {/* Loading Text */}
                <div className="text-center">
                    <p className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-sm font-semibold tracking-wide text-transparent dark:from-indigo-400 dark:to-violet-400">
                        Elevora
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Loading, please wait...
                    </p>
                </div>
            </div>
        </div>
    );
}
