
"use client";

import { useEffect, useSyncExternalStore } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import UserInfo from "./userInfo";

const subscribe = (callback: () => void) => {
    window.addEventListener("theme-change", callback);
    return () => window.removeEventListener("theme-change", callback);
};

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

const persistTheme = (dark: boolean) => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.cookie = `theme=${dark ? "dark" : "light"}; path=/; max-age=31536000; samesite=lax`;
};

const NavBar = () => {
    const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark" && !document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark");
            persistTheme(true);
            window.dispatchEvent(new Event("theme-change"));
        }
    }, []);

    const toggleTheme = () => {
        const next = !dark;
        document.documentElement.classList.toggle("dark", next);
        persistTheme(next);
        window.dispatchEvent(new Event("theme-change"));
    };

    return (
        <header className="sticky top-0 z-50 border-b border-indigo-100/70 bg-linear-to-br from-indigo-50 via-white to-violet-100 shadow-sm backdrop-blur-xl dark:border-indigo-900/50 dark:from-slate-600 dark:via-indigo-950 dark:to-violet-950">
            <div className="mx-auto flex h-16 w-11/12 max-w-7xl items-center justify-between gap-3 sm:w-10/12">

                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-1">
                    <Image
                        src={logo}
                        alt="Elevora logo"
                        className="h-8 w-auto"
                    />
                    <span className="text-lg font-bold text-indigo-950 dark:text-white sm:text-xl tracking-[0.18em]">
                        Elevora
                    </span>
                </Link>

                {/* Upcoming Events */}
                <Link
                    href="/upcoming"
                    className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-100/70 hover:text-indigo-700 dark:text-slate-300 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-300 sm:flex"
                >
                    <CalendarDays className="size-4 shrink-0" />
                    Upcoming Events
                </Link>

                {/* Actions */}
                <nav className="flex shrink-0 items-center gap-1 sm:gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="cursor-pointer rounded-full text-indigo-700 hover:bg-indigo-100 dark:text-indigo-200 dark:hover:bg-indigo-900/50"
                    >
                        {dark ? (
                            <Sun className="size-4" />
                        ) : (
                            <Moon className="size-4" />
                        )}
                    </Button>

                    <UserInfo />
                </nav>
            </div>

            {/* Mobile Upcoming Events */}
            <div className="border-t border-indigo-100/60 px-5 py-2 dark:border-indigo-900/40 sm:hidden">
                <Link
                    href="/upcoming"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-700 transition-colors hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-100"
                >
                    <CalendarDays className="size-4" />
                    Upcoming Events
                </Link>
            </div>
        </header>
    );
};

export default NavBar;
