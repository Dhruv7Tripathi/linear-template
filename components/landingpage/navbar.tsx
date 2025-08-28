'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Themetoggle } from '../ui/themetoggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }

    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full transition-all sticky top-0 z-50 duration-300",
        isScrolled
          ? "border-b border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-200/40 dark:bg-neutral-900/40 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="container border-b flex items-center justify-between mx-auto px-4 py-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center ml-24 space-x-3"
        >
          <div className="w-10 h-10 bg-white dark:bg-black dark:text-white text-black rounded-lg flex items-center justify-center font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-bold">Syntax</span>
        </motion.div>
        <div className="hidden text-gray-800 dark:text-gray-200 md:flex text-sm justify-center items-center font-semibold space-x-6 flex-1">
          <a href="#home" className="hover:text-orange-400">Home</a>
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#services" className="hover:text-orange-400">Services</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </div>
        <div className='flex items-center mr-6 ml-auto'>
          <div>
            <Themetoggle />
          </div>
          <div className='ml-4 flex space-x-4 mr-20 '>
            <button className='dark:hover:bg-neutral-900 hover:bg-neutral-200 rounded-4xl py-2 px-2 '>
              Login
            </button>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-600'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
