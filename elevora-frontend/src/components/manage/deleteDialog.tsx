
"use client";
import { Trash2Icon } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation";
import { toast } from "react-toastify";
import { EventType } from "@/lib/types/evenType";
import getTokenFromClientComponent from "@/lib/token/getTokenFromClientComponent";


interface DeleteDialogProps {
    event: EventType;
}

const DeleteDialog = ({ event }: DeleteDialogProps) => {

    const router = useRouter();

    const handleDeleteButton = async () => {

        const token = await getTokenFromClientComponent();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/manage-events/${event._id}`, {
            method: "DELETE",
            headers:{
                authorization: `Bearer ${token}`
            }
        });

        const data = await res.json();
        console.log("res", res);
        console.log("After Delete", data);

        if (res.ok && data.acknowledged) {
            toast.warn("Delete Successfull!");
            router.refresh();   // Use replace instead of push so the user can't go back to the deleted destination page
        }
        else{
            toast.error(data.msg);
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={<Button variant="destructive" className="p-4.5 cursor-pointer flex items-center justify-center gap-1.5">Delete</Button>}
            />
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Delete Destination?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the event from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="destructive" onClick={handleDeleteButton}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteDialog;
