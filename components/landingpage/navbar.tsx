'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Themetoggle } from '../ui/themetoggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  return (
    <nav
      className={cn(
        "w-full z-50 transition-all duration-300 bg-neutral-200/40 dark:bg-black  backdrop-blur-md"
        // : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="w-full flex items-center justify-between px-12 py-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-white dark:bg-black dark:text-white text-black rounded-lg flex items-center justify-center font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-bold">Syntax</span>
        </motion.div>

        <div className="hidden md:flex text-sm justify-center items-center font-semibold space-x-6 text-gray-800 dark:text-gray-200 flex-1">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#services" className="hover:text-orange-400">Services</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </div>

        <div className="flex items-center ml-auto space-x-4">
          <Themetoggle />
          <button className="dark:hover:bg-neutral-900 hover:bg-neutral-200 rounded-4xl py-2 px-2">
            Login
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
