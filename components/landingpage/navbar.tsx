'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Themetoggle } from '../ui/themetoggle';
import Image from 'next/image';
export const Navbar = () => {
  return (
    <nav
      className={cn(
        "w-full z-50 transition-all duration-300 bg-neutral-200/40 dark:bg-black  backdrop-blur-md"
      )}
    >
      <div className="w-full flex items-center justify-between px-12 py-3">
        <div
          className="flex items-center space-x-3"
        ><Image
            src="/linear-logo.png"
            alt="Linear Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Linear</span>
          <div className="hidden px-8 md:flex text-sm justify-center items-center font-semibold space-x-6 text-gray-800 dark:text-gray-200 flex-1">
            <a href="#home" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">Home</a>
            <a href="#about" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">About</a>
            <a href="#services" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">Services</a>
            <a href="#contact" className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950">Pricing</a>
          </div>
        </div>


        <div className="flex items-center ml-auto space-x-4">
          <button className="dark:hover:bg-neutral-900 hover:bg-neutral-200 rounded-lg py-2 px-3">
            Login
          </button>
          <button className="dark:bg-neutral-900 ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-100 text-neutral-950 dark:text-neutral-50 px-4 py-2 rounded-lg hover:bg-white dark:hover:text-white hover:text-black border- border-neutral-950 hover:border-black transition-colors duration-300">
            Sign Up
          </button>
          <Themetoggle />
        </div>
      </div>
    </nav>
  );
};
