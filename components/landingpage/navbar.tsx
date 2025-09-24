'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Themetoggle } from '../ui/themetoggle';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
const features = [
  {
    title: "Smart Productivity",
    description: "Boost your productivity with AI-powered insights",
  },
  {
    title: "Adaptive Workflows",
    description: "Customize and automate your work processes",
  },
  {
    title: "Optimized Scheduling",
    description: "Intelligent time management and scheduling",
  },
  {
    title: "Accelerate Planning",
    description: "Strategic planning tools for faster execution",
  },
]
export const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "w-full z-50 transition-all duration-300 bg-neutral-200/40 dark:bg-black backdrop-blur-md"
      )}
    >
      <div className="w-full flex items-center justify-between px-12 py-3">
        {/* Left side: Logo and menu */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Linear Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Linear</span>

          <div className="hidden px-8 z-50 md:flex text-sm justify-center items-center font-semibold space-x-6 text-gray-800 dark:text-gray-200 flex-1">
            {/* Product dropdown */}
            <div
              className="relative z-10"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              {/* Button */}
              <button className="flex items-center gap-1 font-semibold text-white hover:text-gray-200 transition">
                Features
                <motion.div
                  animate={{ rotate: isProductOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 mt-1" />
                </motion.div>
              </button>

              {/* Dropdown */}
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[320px] bg-black text-white rounded-lg shadow-lg border border-gray-700 z-50"
                >
                  <div className="p-4 space-y-4">
                    {features.map((item, idx) => (
                      <div key={idx} className="cursor-pointer group hover:bg-neutral-900 p-2 rounded-md transition">
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Other Nav Items */}
            <a
              href="#pricing"
              className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right side: Login/Signup/Theme toggle */}
        <div className="flex items-center ml-auto space-x-4">
          <button className="dark:hover:bg-neutral-900 hover:bg-neutral-200 rounded-lg py-2 px-4">
            Login
          </button>
          <button className="dark:bg-neutral-900 ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-100 text-neutral-950 dark:text-neutral-50 px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black border border-neutral-950 hover:border-black transition-colors duration-300">
            Sign Up
          </button>
          <Themetoggle />
        </div>
      </div>
    </nav>
  );
};
