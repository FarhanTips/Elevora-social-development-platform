
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { SaveIcon, Trash2Icon } from "lucide-react";
import { SyntheticEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import getTokenFromClientComponent from "@/lib/token/getTokenFromClientComponent";



const AddEventPage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    console.log("/add-event Now session", session);

    // Remembers the form so we can clear all fields at once
    const formRef = useRef<HTMLFormElement>(null);

    // Keeps the category dropdown in sync, so Cancel can clear it too
    const [category, setCategory] = useState<string>("Volunteering");

    async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newEvent: Record<string, string> = {};

        formData.forEach((value, key) => {
            newEvent[key] = value.toString();
        });

        if (!newEvent.imageUrl) {
            newEvent.imageUrl = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6";
        }
        newEvent.userEmail = session?.user.email as string;
        console.log("Data from form", newEvent);

        const token = await getTokenFromClientComponent();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newEvent),
        })

        // console.log("res", res);
        const result = await res.json();
        console.log("after POST", result);

        if (res.ok && result.acknowledged) {
            toast.success("Destination added successfully!");
            formRef.current?.reset();
            setCategory("");

            router.refresh();
        }
        else {
            toast.error("Unauthorized. Access Denied!");
        }
    }

    function handleCancel() {
        formRef.current?.reset();   // clears every input, textarea and date
        setCategory("");          // clears the category dropdown
    }

    return (
        <main className="relative flex-1 overflow-hidden bg-linear-to-tl from-indigo-50 via-white to-violet-100 px-4 py-12 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950 sm:py-16">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-10 size-80 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-500/10" />

            <div className="relative mx-auto w-full max-w-xl">
                {/* Heading */}
                <div className="mb-8 text-center sm:mb-10">
                    <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Add New Event
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                        Share your event and bring people together.
                    </p>
                </div>

                <Card className="overflow-hidden rounded-3xl border border-violet-200/80 bg-linear-to-br from-white via-violet-50 to-indigo-100 shadow-[0_24px_60px_rgba(67,56,202,0.14)] dark:border-indigo-700/50 dark:bg-linear-to-br dark:from-slate-800 dark:via-indigo-950 dark:to-slate-900 dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                    <CardContent>
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

                            {/* Title + Type */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="Name of the event"
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label>Category</Label>
                                    <Select name="category" value={category} onValueChange={(value) => setCategory(value ?? "")} required>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Volunteering">Volunteering</SelectItem>
                                            <SelectItem value="Womens Empowerment">Women&apos;s Empowerment</SelectItem>
                                            <SelectItem value="Education">Education & Skill Development</SelectItem>
                                            <SelectItem value="Community Development">Community Development</SelectItem>
                                            <SelectItem value="Healthcare">Healthcare & Wellness</SelectItem>
                                            <SelectItem value="Social Awareness">Social Awareness</SelectItem>
                                            <SelectItem value="Environment">Environment & Sustainability</SelectItem>
                                            <SelectItem value="Charity">Charity & Fundraising</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Organizer Name + Location */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="orgName">Organizer Name</Label>
                                    <Input
                                        id="orgName"
                                        name="orgName"
                                        placeholder="e.g., John Doe"
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        name="location"
                                        placeholder="District name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Event Date */}
                            <div className="grid gap-2">
                                <Label htmlFor="date">Event Date</Label>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    min={new Date().toISOString().split("T")[0]}
                                    required
                                />
                            </div>

                            {/* Image URL */}
                            <div className="grid gap-2">
                                <Label htmlFor="imageUrl">Thumbnail Image URL </Label>
                                <Input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            {/* Description */}
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Describe the event..."
                                    required
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col-reverse gap-3 border-t border-indigo-100 pt-5 dark:border-indigo-900/60 sm:flex-row sm:justify-end">
                                <Button
                                    onClick={handleCancel}
                                    type="button"
                                    variant="destructive"
                                    size="lg"
                                    className="w-full rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 sm:w-auto"
                                >
                                    <Trash2Icon />
                                    Cancel
                                </Button>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-400 dark:hover:to-violet-400 sm:w-auto"
                                >
                                    <SaveIcon />
                                    Add Event
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default AddEventPage;
