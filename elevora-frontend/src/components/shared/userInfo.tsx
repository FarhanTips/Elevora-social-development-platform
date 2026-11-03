
import Link from 'next/link';
import { Button } from '../ui/button';
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const UserInfo = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    console.log("Nav session", session);

    if (isPending) {
        return (
            <div className="text-sm text-indigo-700 dark:text-indigo-200">
                Loading...
            </div>
        );
    }

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Signed out successfully!");
                    router.push("/log-in");
                },
            },
        });
    };

    return (
        <div>
            {
                session?.user ?
                    <div className="flex items-center justify-center gap-2 sm:gap-3">

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="size-10 cursor-pointer rounded-full border border-indigo-200/70 bg-white/70 shadow-sm transition hover:bg-indigo-100 dark:border-indigo-800 dark:bg-slate-800/70 dark:hover:bg-indigo-900/50"
                                    >
                                        <Avatar className="size-9">
                                            <AvatarImage
                                                src={session?.user?.image?.startsWith("http") ? session.user.image : undefined}
                                                alt={session.user.name}
                                            />
                                            <AvatarFallback className="bg-linear-to-br from-indigo-500 to-violet-600 font-semibold text-white">
                                                {session?.user?.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                }
                            />

                            <DropdownMenuContent
                                align="end"
                                className="w-64 border border-indigo-100 bg-linear-to-br from-indigo-50 via-white to-violet-50 shadow-xl dark:border-indigo-900 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950"
                            >
                                <DropdownMenuGroup>
                                    <div className="px-3 pb-3 pt-3">
                                        <span className="block truncate text-sm font-semibold text-indigo-950 dark:text-white">
                                            {session.user?.name}
                                        </span>
                                        <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                                            {session.user?.email}
                                        </span>
                                    </div>

                                    <DropdownMenuSeparator className="bg-indigo-100 dark:bg-indigo-900" />

                                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-indigo-100 dark:focus:bg-indigo-900/50">
                                        <Link href="/add-event" className="w-full">
                                            Create Event
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-indigo-100 dark:focus:bg-indigo-900/50">
                                        <Link href="/manage-events" className="w-full">
                                            Manage Events
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className="cursor-pointer rounded-lg focus:bg-indigo-100 dark:focus:bg-indigo-900/50">
                                        <Link href="/joined-events" className="w-full">
                                            Joined Events
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator className="bg-indigo-100 dark:bg-indigo-900" />

                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        variant="destructive"
                                        onClick={handleSignOut}
                                        className="cursor-pointer rounded-lg"
                                    >
                                        ]⬅ Log out
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            onClick={handleSignOut}
                            variant="destructive"
                        >
                            ]⬅ <span className="inline">Log out</span>
                        </Button>

                    </div>
                    :
                    <Link href="/log-in">
                        <Button className="h-9 cursor-pointer rounded-full bg-indigo-600 px-4 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 sm:h-10 sm:px-5">
                            ➜] Login
                        </Button>
                    </Link>
            }
        </div>
    );
};

export default UserInfo;
