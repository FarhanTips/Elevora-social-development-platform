

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { ArrowUpRight, Mail, MapPin, Phone, Heart, } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-indigo-100 bg-linear-to-br from-indigo-50 via-white to-violet-100 dark:border-indigo-900/50 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950">

            <div className="relative z-10 mx-auto w-11/12 max-w-7xl">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-[auto_auto] sm:justify-between lg:grid-cols-4 lg:gap-10 lg:py-20">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="mb-5 inline-flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="Elevora logo"
                                className="h-10 w-auto"
                            />
                            <span className="text-2xl font-extrabold tracking-tight text-indigo-950 dark:text-white">
                                Elevora
                            </span>
                        </Link>

                        <p className="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
                            Empowering Lives, Inspiring Change. We bring
                            people together through meaningful events and
                            initiatives to build a better community.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">
                            {[
                                { icon: FaFacebookF, href: "#", label: "Facebook" },
                                { icon: FaInstagram, href: "#", label: "Instagram" },
                                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                            ].map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex size-10 items-center justify-center rounded-xl border border-indigo-200 bg-white/70 text-indigo-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 dark:border-indigo-800 dark:bg-slate-900/60 dark:text-indigo-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-600 dark:hover:text-white"
                                >
                                    <Icon className="size-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-base font-bold text-slate-900 dark:text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Upcoming Events", href: "/upcoming" },
                                { label: "About Us", href: "/" },
                                { label: "Contact Us", href: "/" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-6 text-base font-bold text-slate-900 dark:text-white">
                            Explore
                        </h3>

                        <ul className="space-y-4">
                            {[
                                "Community Service",
                                "Education",
                                "Social Support",
                                "Volunteering",
                            ].map((item) => (
                                <li key={item}>
                                    <span className="text-sm text-slate-600 dark:text-slate-300">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-base font-bold text-slate-900 dark:text-white">
                            Get In Touch
                        </h3>

                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300">
                                    <Mail className="size-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Email us
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                                        farhanakbor02@gmail.com
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300">
                                    <Phone className="size-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Call us
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                                        +880 1727-882930
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300">
                                    <MapPin className="size-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Location
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                                        Bangladesh
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-indigo-200/70 py-6 dark:border-indigo-800/60">
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

                        <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                            © 2026 Elevora. All rights reserved.
                        </p>

                        <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                            Made with
                            <Heart className="size-3.5 fill-rose-500 text-rose-500" />
                            for a better community
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
