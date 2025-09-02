import { Navbar } from "@/components/landingpage/navbar";
import HeroSection from "@/components/landingpage/heroSection";
import Footer from "@/components/landingpage/footer";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* WRAPPED with borders */}
      <div className="mx-12 border-l-2 border-r-2 border-neutral-200">
        <Navbar />
        <HeroSection />
      </div>
      <Footer />

      {/* Footer outside */}
    </div>
  );
}
