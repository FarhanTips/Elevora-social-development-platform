"use client";

import Image from "next/image";
import { Images } from "lucide-react";

const galleryImages = [
    {
        src: "https://www.christie.nhs.uk/media/5cvbwmlr/christie_trust_shoot_volunteers_15_09_259336.jpg?width=768&height=982&v=1dc5defb2478230&hmac=5c7bd9bc36a83e80bff0cbbeda5a2143bf8b325a91384bb503fa9afc1e191420",
        title: "Community Together",
        category: "Community Service",
        size: "large",
    },
    {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000",
        title: "Supporting Education",
        category: "Education",
        size: "small",
    },
    {
        src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000",
        title: "Making a Difference",
        category: "Volunteering",
        size: "small",
    },
    {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200",
        title: "Stronger Together",
        category: "Community",
        size: "small",
    },
    {
        src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200",
        title: "A Helping Hand",
        category: "Social Support",
        size: "large",
    },
    {
        src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200",
        title: "Sharing Hope",
        category: "Social Work",
        size: "small",
    },
];

const GallerySection = () => {

    return (
        <section className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-24 lg:px-16">

            <div className="relative z-10 mx-auto w-10/12">

                {/* Heading */}
                <div className="mb-12 text-center max-w-2xl mx-auto">

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-indigo-700 shadow-sm dark:border-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 sm:text-sm">
                        <Images className="size-4" /> MOMENTS THAT MATTER
                    </div>

                    <h2 className="font-extrabold tracking-tight text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl">
                        Our Community{" "}
                        <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                            Gallery
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base ">
                        Every picture tells a story of kindness, compassion, and people coming together to create meaningful change.
                    </p>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {galleryImages.map((image) => (
                        <button
                            key={image.title}
                            className="group relative h-72 overflow-hidden rounded-3xl border border-white/70 bg-white/50 text-left shadow-md shadow-indigo-950/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-indigo-800/50 dark:bg-slate-900/40 sm:h-80"
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Image Content */}
                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                                <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                    {image.category}
                                </span>

                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                                        {image.title}
                                    </h3>

                                </div>

                            </div>
                        </button>
                    ))}

                </div>
            </div>


        </section>
    );
};

export default GallerySection;
