"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) return;

        setSubscribed(true);
        setEmail("");
    };

    return (
        <section className="relative overflow-hidden px-5 py-18 sm:px-10 sm:py-24 lg:px-16">
            <div className="relative mx-auto w-10/12 overflow-hidden rounded-3xl border border-indigo-200/70 bg-linear-to-br from-indigo-50 via-white to-violet-100 p-8 shadow-sm dark:border-indigo-800/50 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950 sm:p-12 lg:p-16">

                <div className="relative z-10 mx-auto max-w-2xl text-center">

                    {/* Icon */}
                    <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                        <Mail className="size-7" />
                    </div>

                    {/* Heading */}
                    <div className="mb-4 inline-flex items-center rounded-full border border-indigo-200 bg-white/70 px-4 py-2 font-semibold tracking-[0.16em] text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 sm:text-sm text-xs">
                        STAY CONNECTED
                    </div>

                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                        Be Part of Our{" "}
                        <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                            Journey
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        Subscribe to our newsletter and stay updated with our
                        latest events, initiatives, and opportunities to make
                        a difference.
                    </p>

                    {/* Subscription Form */}
                    <form
                        onSubmit={handleSubscribe}
                        className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
                    >
                        <div className="flex flex-1 items-center gap-3 rounded-xl border border-indigo-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 dark:border-indigo-800 dark:bg-slate-900">
                            <Mail className="size-5 shrink-0 text-indigo-500" />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setSubscribed(false);
                                }}
                                placeholder="Enter your email address"
                                required
                                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={subscribed}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 disabled:cursor-default disabled:opacity-80"
                        >
                            {subscribed ? (
                                <>
                                    <CheckCircle2 className="size-4" />
                                    Subscribed
                                </>
                            ) : (
                                <>
                                    Subscribe
                                    <Send className="size-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {subscribed && (
                        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                            <CheckCircle2 className="size-4" />
                            Thank you for subscribing!
                        </p>
                    )}

                    <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                        Stay inspired. Stay informed. Make an impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
