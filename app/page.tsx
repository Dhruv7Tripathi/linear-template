import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Footer from "@/components/footer";
import FAQ from "@/components/faq-section";
import { Pricing } from "@/components/pricing";
import { TestimonialsSection } from "@/components/testimonial-section";
import BentoSection from "@/components/bento-grid";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Main Content Container */}
      <div className={`
        relative
        min-h-[calc(100vh-82px)]
        px-4 sm:px-6
        md:mx-4 md:px-0
        md:border-l md:border-r md:border-neutral-200 md:dark:border-neutral-900
        
        lg:mx-8 xl:mx-12
        lg:border-l lg:border-r lg:border-neutral-200 lg:dark:border-neutral-900
      `}>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">

          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 lg:pt-16">
            <HeroSection />
          </section>

          {/* Bento Grid Section */}
          <section>
            <BentoSection />
          </section>

          {/* Pricing Section */}
          <section>
            <Pricing />
          </section>

          {/* Testimonials Section */}
          <section>
            <TestimonialsSection />
          </section>

          {/* FAQ Section */}
          <section>
            <FAQ />
          </section>

          {/* Footer Section */}
          <section className="pb-0">
            <Footer />
          </section>

        </div>
      </div>
    </div>
  );
}