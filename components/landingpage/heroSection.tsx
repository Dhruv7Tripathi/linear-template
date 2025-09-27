"use client";
import Footer from "./footer";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { FAQSection } from "./faq";
import { Process } from "./testimonial";
import { ChevronRight } from "lucide-react";
import { Button as B2 } from "@/components/ui/button";
import { Button } from "../ui/moving-border";
import { SiDiscord } from "react-icons/si";
const HeroSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-white dark:bg-black  ">
      {/* <Navbar /> */}
      <div className="">
        <motion.section
          className="flex items-center min-h-[calc(60vh)] mt-8 justify-center  mb-28 text-black dark:text-white"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
            <Button
              borderRadius="1.75rem"
              className="bg-white rounded-lg dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800"
            >
              Borders are cool
            </Button>
            <motion.h1
              className="text-4xl md:text-5xl font-sans font-bold"
              variants={itemVariants}
            >
              Build the future with Linear
            </motion.h1>
            <motion.p
              className="max-w-[650px] mx-auto font-semibold text-neutral-800 dark:text-neutral-300 md:text-lg"
              variants={itemVariants}
            >
              A modern, sleek, and responsive landing page template built with
              Next.js and Tailwind CSS. Perfect for startups and SaaS products.
            </motion.p>
            <motion.div
              className="flex justify-center items-center gap-4"
              variants={itemVariants}
            >
              <motion.button className="bg-black dark:bg-neutral-50 dark:text-neutral-950 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300 ">
                Start Free Trial
              </motion.button>
              <div
              >
                <B2
                  size="lg"
                  className="text-base w-full rounded-3xl sm:w-auto bg-white border border-neutral-200 hover:bg-white dark:hover:bg-black dark:bg-black text-neutral-900 dark:text-neutral-100 group"
                >
                  <SiDiscord className="mr-2 h-5 w-5" />
                  Community

                </B2>
              </div>
            </motion.div>

          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl w-[1300px] h-[800px] bg-neutral-900/60 backdrop-blur-md mx-auto mt-8 overflow-hidden">
            <Image
              src="/l.webp"
              alt="AI-powered SaaS Dashboard"
              fill
              className="rounded-3xl"
              priority
            />
            <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
          </div>
        </motion.div>

        <div className="opacity-10 mb-5" />
      </div>

      <motion.div
        className="mt-16 p-12 mb-24 opacity-55"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* <Skills /> */}
      </motion.div>

      <Process />
      {/* <PricingPage /> */}
      <FAQSection />
      {/* <Footer /> */}
    </div>
  );
};

export default HeroSection;
