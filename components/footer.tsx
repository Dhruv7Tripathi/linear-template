"use client"

import Link from "next/link"
import { footerLinks } from "@/contants"
import Image from "next/image"
import { SiDiscord, SiGithub, SiLinkedin, SiX } from "react-icons/si"

export default function Footer() {
  return (
    <div>
      <footer className="relative border-t border-neutral-200 dark:border-neutral-800/50 bg-white dark:bg-black dark:text-neutral-50 text-neutral-900 overflow-hidden">
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16">

            {/* Branding & Description */}
            <div className="flex flex-col space-y-4 lg:max-w-sm">
              <Link href="/" className="flex space-x-2 items-center">
                <Image
                  width={40}
                  height={40}
                  src={"/logo.png"}
                  alt="Linear Logo"
                  quality={100}
                  priority={true}
                  className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 rounded-xl object-cover"
                />
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">Linear</h3>
              </Link>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Linear is a modern project management tool designed for high-performance teams. Built for speed and collaboration.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

              {/* Pages */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-3 sm:mb-4">Pages</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.pages.map((link, index) => (
                    <li key={`pages-${index}`}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-3 sm:mb-4">Register</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.register.map((link, index) => (
                    <li key={`register-${index}`}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Social Links & Status */}
      <div className="flex flex-col sm:flex-row border-t border-neutral-200 dark:border-neutral-900 justify-between items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-6 gap-4 sm:gap-0">

        {/* Social Links */}
        <div className="flex space-x-6 sm:space-x-8 text-xl sm:text-2xl text-gray-500 dark:text-gray-400">
          <Link
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiDiscord size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link
            href="https://github.com/dhruv7tripathi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiGithub size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link
            href="https://x.com/dhruvtripathi77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiX size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiLinkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          <h1 className="text-green-600 text-xs sm:text-sm font-medium">All Systems Operational</h1>
        </div>
      </div>

      {/* Legal Links */}
      <div className='flex flex-col space-x-4 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 border-t border-neutral-200 dark:border-neutral-900 py-3 sm:py-4'>
        <Link
          href={"#"}
          className='text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200'
        >
          Terms of Services
        </Link>
        <span className='hidden sm:block dark:bg-white bg-black w-1.5 h-1.5 rounded-full' />
        <Link
          href={"#"}
          className='text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200'
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}