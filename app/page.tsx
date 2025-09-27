import { Navbar } from "@/components/landingpage/navbar";
import HeroSection from "@/components/landingpage/heroSection";
import Footer from "@/components/landingpage/footer";
import BottomSection from "@/components/landingpage/bottom-section";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="border-l border border-r border-neutral-200 dark:border-neutral-900 min-h-[calc(100vh-72px)] ml-12 mr-12">
        {/* <Navbar /> */}
        <HeroSection />
        <Footer />
        <BottomSection />
      </div>

      {/* Footer outside */}
    </div>
  );
}
