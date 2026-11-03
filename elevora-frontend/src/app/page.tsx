import Banner from "@/components/Home/banner";
import PlatformFeatures from "@/components/Home/features";
import GallerySection from "@/components/Home/gallery";
import NewsletterSection from "@/components/Home/newsLetter";
import RecentUpcomingEvents from "@/components/Home/recentUpcomigEvents";


export default function Home() {
  return (
    <div className="dark:border-indigo-900/60 bg-linear-to-br from-indigo-50 via-white to-violet-100 dark:from-slate-950 dark:via-indigo-950 dark:to-violet-950">

      <Banner></Banner>
      <PlatformFeatures></PlatformFeatures>
      <RecentUpcomingEvents></RecentUpcomingEvents>
      <GallerySection></GallerySection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
}
