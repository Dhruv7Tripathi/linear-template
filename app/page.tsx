import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonial-section";
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="border-l  border-r border-neutral-200 dark:border-neutral-900 min-h-[calc(100vh-82px)] ml-12 mr-12">
        <HeroSection />
        <Pricing />
        <TestimonialsSection />
        <FAQ />
        <Footer />
      </div>

    </div>
  );
}
