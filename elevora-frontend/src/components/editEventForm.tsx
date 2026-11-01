
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { SyntheticEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { EventType } from "@/lib/types/evenType";
import { DialogClose, DialogFooter } from "./ui/dialog";

interface EditEventFormProps {
    event: EventType
}

const EditEventForm = ({ event }: EditEventFormProps) => {

    const router = useRouter();

    // Remembers the form so we can clear all fields at once
    const formRef = useRef<HTMLFormElement>(null);

    // Keeps the category dropdown in sync, so Cancel can clear it too
    const [category, setCategory] = useState<string>(event.category ?? "");

    async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const editedEvent: Record<string, string> = {};

        formData.forEach((value, key) => {
            editedEvent[key] = value.toString();
        });
        console.log("Data from form", editedEvent);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${event._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedEvent),
        })

        const data = await res.json();
        console.log("after PATCH event", data);

        if (res.ok && data.acknowledged) {
            toast.success("Update Successfull!");
            // formRef.current?.reset();
            // setCategory("");
            router.refresh();
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Title + Type */}
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        defaultValue={event.title}
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Category</Label>
                    <Select name="category" value={category} onValueChange={(value) => setCategory(value ?? "")}>
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
                        defaultValue={event.orgName}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                        id="location"
                        name="location"
                        defaultValue={event.location}
                    />
                </div>
            </div>

            {/* Event Date */}
            <div className="grid gap-2">
                <Label htmlFor="date">Departure Date</Label>
                <Input
                    id="date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    defaultValue={event.date}
                />
            </div>

            {/* Image URL */}
            <div className="grid gap-2">
                <Label htmlFor="imageUrl">Thumbnail Image URL</Label>
                <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    defaultValue={event.imageUrl}
                />
            </div>

            {/* Description */}
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    defaultValue={event.description}
                />
            </div>

            {/* Buttons */}
            <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <DialogClose render={<Button type="submit">Save changes</Button>} />

            </DialogFooter>
        </form>
    );
};

export default EditEventForm;
