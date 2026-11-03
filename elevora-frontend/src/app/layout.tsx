import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Josefin_Sans, Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navBar";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/footer";


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Elevora",
  description: "Empowering Lives, Inspiring Change.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Theme comes from a cookie so the `dark` class is already in the
  // server-rendered HTML — no inline script needed (React never executes
  // scripts it renders on the client).
  const theme = (await cookies()).get("theme")?.value;
  const isDark = theme === "dark";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        josefinSans.className,
        "font-sans",
        geist.variable,
        isDark && "dark",
      )}
    >
      <body className="min-h-full flex flex-col">
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
