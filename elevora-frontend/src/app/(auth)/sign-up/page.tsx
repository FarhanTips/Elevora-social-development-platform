"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { SyntheticEvent } from "react"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"

export default function SignUpPage() {

    const router = useRouter();

    const handleSignUp = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user: Record<string, string> = {};

        formData.forEach((value, key) => {
            user[key] = value.toString();
        });

        console.log("data from form", user)

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            image: user.profilePhoto || "https://www.svgrepo.com/show/452030/avatar-default.svg",
            password: user.password,
        });

        console.log("data", data);
        console.log("error", error);

        if (error) {
            toast.error(error.message ?? "Something went wrong!");
            return;
        }

        toast.success("Your account has been created successfully!");
        router.push("/log-in");
    };

    const handleGoogleSignUp = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
            errorCallbackURL: "/sign-up",
        });
        console.log("Cgheck rror", error);
        if (error) {
            toast.error(error.message ?? "Something went wrong!");
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-lg w-full mx-auto my-20">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Registration Form</CardTitle>
                    <CardDescription>
                        Please complete the form accurately
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignUp}>
                        <FieldGroup>
                            <Field>
                                <Button onClick={handleGoogleSignUp} className="cursor-pointer hover:bg-amber-100" variant="outline" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Login with Google
                                </Button>
                            </Field>
                            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                Or continue with
                            </FieldSeparator>
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="your name"
                                    minLength={3}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="profilePhoto">Profile Photo URL</FieldLabel>
                                <Input
                                    id="profilePhoto"
                                    type="url"
                                    name="profilePhoto"
                                    placeholder="https://example.com/profile.jpg"
                                />
                                <FieldDescription className="text-xs">
                                    Optional: Leave empty for default avatar
                                </FieldDescription>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                </div>
                                <Input id="password" type="password" name="password" placeholder="password" required minLength={6}
                                    pattern="(?=.*[A-Z])(?=.*[a-z]).{6,}"
                                />

                                <FieldDescription className="text-xs">
                                    <span className="block">X At least, one uppercase letter (A-Z)</span>
                                    <span className="block">X At least, one lowercase letter (a-z)</span>
                                    <span className="block">X Minimum 6 characters length</span>
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button type="submit" className="cursor-pointer">Register</Button>
                                <FieldDescription className="text-center">
                                    Have an account? <Link href="log-in">Login here</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                <Link href="/">⬅︎ Go to homepage</Link>
            </FieldDescription>
        </div>
    )
}
