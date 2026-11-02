
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { PenSquare } from "lucide-react";
import { EventType } from "@/lib/types/evenType";
import EditEventForm from "./editEventForm";

interface EditEventDialogProps {
    event: EventType;
}

const EditEventDialog = ({event}: EditEventDialogProps) => {
    return (
        <Dialog>
                <DialogTrigger
                    render={
                        <Button variant="outline" className="p-4.5 cursor-pointer">
                            <PenSquare className="size-4" />
                            Edit
                        </Button>
                    }
                />
                <DialogContent className="sm:min-w-xl min-w-sm">
                    <DialogHeader>
                        <DialogTitle>Edit Destination</DialogTitle>
                        <DialogDescription>
                            Make changes here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <EditEventForm event={event}></EditEventForm>
                </DialogContent>
        </Dialog>
    );
};

export default EditEventDialog;
