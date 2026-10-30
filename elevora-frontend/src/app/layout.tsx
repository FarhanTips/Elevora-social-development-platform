import type { Metadata } from "next";
import { Josefin_Sans, Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navBar";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Elevora",
  description: "Empowering Lives, Inspiring Change.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", josefinSans.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
        <NavBar></NavBar>
        {children}
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
