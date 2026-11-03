"use client"
import { authClient } from '@/lib/auth-client';
import getTokenFromClientComponent from '@/lib/token/getTokenFromClientComponent';
import { EventType } from '@/lib/types/evenType';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-toastify';

interface JoinButtonProps {
    event: EventType
}
const JoinButton = ({ event }: JoinButtonProps) => {
    const { data: session, isPending } = authClient.useSession();
    console.log("/joinButton session", session);
    if (isPending) {
        return (
            <button
                className="w-full mt-8 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-white font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 active:scale-[0.98] cursor-pointer dark:shadow-indigo-950 dark:hover:shadow-indigo-900"
            >
                Loading...
            </button>
        );
    }

    const { _id, ...eventData } = event;
    const handleJoinButton = async () => {
        const token = await getTokenFromClientComponent();

        const joinedData = {
            joinerEmail: session?.user.email,
            eventId: _id,
            ...eventData,
            BookingTime: new Date(),
        }
        console.log(joinedData);
        // console.log(JSON.stringify(joinedData));

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joined`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(joinedData),
        });

        const data = await res.json();
        console.log("after POST  joinedData", data);
        console.log("after POST  joinedData", res);

        if (res.ok && data.acknowledged) {
            toast.success(`Joined ${joinedData.title} successfully!`);
        }
        else {
            toast.warn(data.msg);
        }


    }

    return (
        <div>
            {
                session?.user ?
                    <button
                        onClick={handleJoinButton}
                        className="group mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-400 dark:hover:to-violet-400"
                    >
                        Join Now
                        <ArrowUpRight size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </button>
                    :
                    <Link href="/log-in">
                        <button className="group mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-400 dark:hover:to-violet-400">
                            Login to Join
                            <ArrowUpRight size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </button>
                    </Link>
            }

        </div >
    );
};

export default JoinButton;
