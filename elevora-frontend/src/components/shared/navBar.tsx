"use client";

import { useSyncExternalStore } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const subscribe = (callback: () => void) => {
    window.addEventListener("theme-change", callback);
    return () => window.removeEventListener("theme-change", callback);
};

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false; // default theme is light

const NavBar = () => {
    const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const next = !dark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
        window.dispatchEvent(new Event("theme-change"));
    };

    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
            <div className="w-10/12 mx-auto h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1">
                    <Image src={logo} alt="Elevora logo" className="h-8 w-auto" />
                    <span className="text-xl font-semibold tracking-tight">Elevora</span>
                </Link>
                <span className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                    <CalendarDays className="size-4 shrink-0" />
                    <Link
                        href="/upcoming"
                        className="rounded-md py-2 text-sm font-medium transition-colors "
                    >
                        Upcoming Events
                    </Link>
                </span>
                <nav className="flex items-center gap-1 sm:gap-4">



                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="rounded-full cursor-pointer"
                    >
                        {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                    </Button>

                    <Button className="bg-[#6638B5] text-white hover:bg-[#542D96] transition-colors cursor-pointer px-3 ">
                       ➜] Login
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
