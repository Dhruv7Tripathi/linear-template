"use client";
import Footer from "./footer";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { FAQSection } from "./faq";
import { Process } from "./testimonial";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Hero } from "@/components/hero-1";

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
    <div className="bg-white dark:bg-black dark:text-gray-100 text-gray-900 relative z-10">
      {/* <Navbar /> */}
      <section>

        <Hero title="Build smarter tools for modern teams"
          subtitle="Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform."
          eyebrow="Next-Gen Productivity"
          ctaLabel="Get Started"
          ctaHref="#" />
      </section>

      <div className="relative">
        <motion.section
          className="flex items-center justify-center mt-28 mb-28 text-black dark:text-white"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
            <motion.h1
              className="text-4xl md:text-7xl font-sans font-bold"
              variants={itemVariants}
            >
              Optimize Your Workflow
              <br />
              with Cutting-Edge Solutions
            </motion.h1>
            <motion.p
              className="max-w-4xl mx-auto font-medium text-zinc-700 dark:text-neutral-500 md:text-xl"
              variants={itemVariants}
            >
              Meet our AI-powered SaaS solution to lighten your workload,
              increase efficiency and make more accurate decisions.
            </motion.p>
            <motion.div
              className="flex justify-center items-center gap-4"
              variants={itemVariants}
            >
              <motion.button className="bg-amber-600 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300 shadow-lg shadow-amber-500/25">
                Start Free Trial
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="text-base w-full sm:w-auto bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group"
                >
                  Start a Demo
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ChevronRight className="ml-2 size-4 text-amber-400 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="m-4 p-4 bottom-4 w-full z-20 text-center text-sm text-gray-800 dark:text-gray-200"
              variants={itemVariants}
            >
              <p className="flex justify-center gap-4">
                <span className="text-amber-400">✓</span> No credit card
                <span className="text-amber-400">✓</span> 14-day trial
                <span className="text-amber-400">✓</span> Cancel anytime
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1150px] h-[100px] bg-orange-500 blur-[100px] -z-15" />
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

      <motion.section
        className="px-6 py-12 rounded-2xl h-[400px] mb-24 max-w-6xl border-2 border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100/40 dark:bg-neutral-800/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden flex flex-col items-center justify-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-900 rounded-2xl pointer-events-none z-0" />
        <div className="w-full flex flex-col items-center justify-center relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight mb-6"
            variants={itemVariants}
          >
            Ready to take your project to the{" "}
            <span className="text-orange-400 font-serif relative inline-block">
              next level
              <motion.div
                className="absolute -inset-2 bg-orange-400/20 blur-lg rounded-lg -z-10"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            ?
          </motion.h2>

          <motion.p
            className="text-neutral-800 dark:text-neutral-400 text-xl max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Join thousands of satisfied users who have transformed their
            workflows with our AI-powered SaaS solution.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-6"
            variants={itemVariants}
          >
            <motion.button
              className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 font-semibold rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 font-semibold rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* <Footer /> */}
    </div>
  );
};

export default HeroSection;
