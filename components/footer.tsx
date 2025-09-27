"use client"

import Link from "next/link"
import { footerLinks } from "@/contants"

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800/50 bg-white dark:bg-black dark:text-neutral-50 text-neutral-900 overflow-hidden">
      <div className="relative z-10 mx-auto px-6 py-16 ml-8 mr-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Branding & Description */}
          <div className="flex flex-col space-y-4 ">
            <h1 className="text-2xl font-bold">Linear</h1>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm max-w-prose">
              Linear is a modern project management tool designed for high-performance teams. Built for speed and collaboration.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">

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

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={`legal-${index}`}>
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
  )
}
