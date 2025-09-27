import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import BottomSection from "@/components/bottom-section";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="border-l border border-r border-neutral-200 dark:border-neutral-900 min-h-[calc(100vh-72px)] ml-12 mr-12">
        <HeroSection />
        <Pricing />
        <FAQ />
        <Footer />
        <BottomSection />
      </div>

      {/* Footer outside */}
    </div>
  );
}
