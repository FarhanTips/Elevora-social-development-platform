import Link from 'next/link';
import { Button } from '../ui/button';
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const UserInfo = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    console.log("Nav session", session);
    console.log("Nav session", session?.user.image);

    if (isPending) {
        return (
            <div className="text-foreground/75">
                Loading...
            </div>
        );
    }

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Signed out successfully!");
                    router.push("/log-in"); // redirect to login page. // Client-side event handler থেকে navigate করছি, তাই router.push ব্যবহার করেছি।
                },
            },
        });
    }
    return (
        <div>
            {
                session?.user ?
                    <div className='flex items-center justify-center gap-4'>
                        <DropdownMenu>
                            <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
                                <AvatarImage src={session?.user?.image ?? undefined} alt="shadcn" />
                                <AvatarFallback>{session?.user?.name[0]}</AvatarFallback>
                            </Avatar></Button>} />
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <div className="px-1 pt-2 pb-1.5">
                                        <span className="block text-sm font-medium">
                                            {session.user?.name}
                                        </span>
                                        <span className="block text-xs text-muted-foreground">
                                            {session.user?.email}
                                        </span>
                                    </div>

                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem variant="destructive" onClick={handleSignOut}>]⬅ Log out</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button onClick={handleSignOut} variant={'destructive'} className=" cursor-pointer px-3 ">
                            ]⬅ Log out
                        </Button>
                    </div>
                    :
                    <Link href="/log-in">
                        <Button className="bg-[#6638B5] text-white hover:bg-[#542D96] transition-colors cursor-pointer px-3 ">
                            ➜] Login
                        </Button>
                    </Link>
            }

        </div>
    );
};

export default UserInfo;
