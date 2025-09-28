"use client"

import Link from "next/link"
import { footerLinks } from "@/contants"
import Image from "next/image"
import { SiDiscord, SiGithub, SiLinkedin, SiX } from "react-icons/si"
export default function Footer() {
  return (
    <div>
      <footer className="relative border-t border-neutral-200 dark:border-neutral-800/50 bg-white dark:bg-black dark:text-neutral-50 text-neutral-900 overflow-hidden">
        <div className="relative z-10 mx-auto  py-16 ml-8 mr-8">
          <div className="flex flex-col lg:flex-row justify-between gap-12">

            {/* Branding & Description */}
            <div className="flex flex-col space-y-4 ">
              <Link href="/" className="flex space-x-2 items-center">
                <Image
                  width={500}
                  height={500}
                  src={"/logo.png"}
                  alt="Linear Logo"
                  quality={100}
                  priority={true}
                  className="mt-1 h-10 w-10 flex-shrink-0 rounded-xl object-cover"
                />
                <h3 className="text-xl font-bold text-black dark:text-white">Linear</h3>
              </Link>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm max-w-prose">
                Linear is a modern project management tool designed for high-performance teams. Built for speed and collaboration.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-16">

              {/* Pages */}
              <div>
                <h3 className="text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-4">Pages</h3>
                <ul className="space-y-3">
                  {footerLinks.pages.map((link, index) => (
                    <li key={`pages-${index}`}>
                      <Link
                        href={link.href}
                        className="text-neutral-900 dark:text-neutral-100 dark:hover:text-white hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register */}
              <div>
                <h3 className="text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-4">Register</h3>
                <ul className="space-y-3">
                  {footerLinks.register.map((link, index) => (
                    <li key={`register-${index}`}>
                      <Link
                        href={link.href}
                        className="text-neutral-900 dark:text-neutral-100 dark:hover:text-white hover:text-white transition-colors duration-200 text-sm"
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

      <div className="flex border-t border-neutral-200 dark:border-neutral-900 justify-between items-center px-12 py-6 mt-8">
        <div className="flex space-x-8 text-2xl text-gray-500 dark:text-gray-400">
          <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <SiDiscord size={22} />
          </Link>
          <Link href="https://github.com/dhruv7tripathi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub size={22} />
          </Link>
          <Link href="https://twitter.com/dhruvtripathi77" target="_blank" rel="noopener noreferrer" aria-label="X">
            <SiX size={22} />
          </Link>
          <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <SiLinkedin size={22} />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2  rounded-full bg-green-500 animate-pulse inline-block" />
          <h1 className="text-green-600 text-sm font-medium">All Systems Operational</h1>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-4 border-t border-neutral-200 dark:border-neutral-900  py-4'>
        <Link href={"#"} className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>Terms And Conditions</Link>
        <span className='dark:bg-white w-1.5 h-1.5 rounded-full ' />
        <Link href={"#"} className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>Privacy Policy</Link>

      </div>
    </div>
  )
}
