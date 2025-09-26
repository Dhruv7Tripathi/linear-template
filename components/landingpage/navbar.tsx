'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Themetoggle } from '../ui/themetoggle';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
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
];

export const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <nav className={cn(
      "w-full z-50 transition-all border-b dark:border-neutral-900 border-neutral-200 duration-300 bg-white dark:bg-black backdrop-blur-md"
    )}>
      <div className="w-full flex items-center justify-between px-12 py-3">

        {/* Left: Logo and Nav */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Linear Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          {/* <Logo /> */}
          <span className="text-2xl font-bold">Linear</span>

          {/* Navigation Links */}
          <div className="hidden px-8 md:flex text-sm font-semibold space-x-6 text-gray-800 dark:text-gray-200">

            <div
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              {/* Button */}
              <button className="flex items-center gap-1 font-semibold hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">
                Features
                <motion.div
                  animate={{ rotate: isProductOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 mt-[2px]" />
                </motion.div>
              </button>

              {/* Dropdown Content */}
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[320px] bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg border border-neutral-300 dark:border-neutral-700 z-50"
                >
                  <div className="p-4 space-y-4">
                    {features.map((item, idx) => (
                      <div
                        key={idx}
                        className="cursor-pointer group hover:bg-neutral-900 p-2 rounded-md transition"
                      >
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-neutral-700 dark:text-neutral-300">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>



            {/* Other Nav Links */}
            <a href="#pricing" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">
              Pricing
            </a>
            <a href="#faq" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">
              FAQ
            </a>
            <a href="#contact" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">
              Contact
            </a>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center ml-auto space-x-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg flex flex-row space-x-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <SiGithub size={20} />
            <span className="text-neutral-950 font-semibold dark:text-neutral-50">23.5K</span>
          </a>
          <button className="dark:hover:bg-neutral-900 font-semibold hover:bg-neutral-100 rounded-lg py-2 px-4">
            Login
          </button>
          <button className="dark:bg-neutral-900 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-100 text-neutral-950 dark:text-neutral-50 px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black border border-neutral-200 dark:border-neutral-950 hover:border-white  dark:hover:border-black transition-colors duration-300">
            Sign Up
          </button>
          <Themetoggle />
        </div>
      </div>
    </nav>
  );
};
