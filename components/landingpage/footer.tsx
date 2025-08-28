"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = {
  pages: [
    { name: "All Products", href: "/products" },
    { name: "Studio", href: "/studio" },
    { name: "Clients", href: "/clients" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ],
  socials: [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  register: [
    { name: "Sign Up", href: "/signup" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
  ],
}

const containerVariants = {

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // ease: "easeOut",
    },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      // ease: "easeOut",
    },
  },
}

export default function Footer() {
  return (
    <div>
      <footer className="relative border-t  bg-white dark:bg-black dark:text-gray-50 text-gray-900 overflow-hidden">

        <motion.div
          variants={containerVariants}
          whileInView="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-10 h-10 bg-white dark:bg-black dark:text-white text-black rounded-lg flex items-center justify-center font-bold text-xl">
                  S
                </div>
                <span className="text-2xl font-bold">Syntax</span>
              </motion.div>
              <motion.p variants={linkVariants} className="text-gray-400 text-sm leading-relaxed">
                © copyright Syntaxs 2024. All rights reserved.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900">Pages</h3>
              <ul className="space-y-3">
                {footerLinks.pages.map((link, index) => (
                  <motion.li
                    key={link.name}
                    variants={linkVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-100 dark:hover:text-amber-500 hover:text-amber-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900">Socials</h3>
              <ul className="space-y-3">
                {footerLinks.socials.map((link, index) => (
                  <motion.li
                    key={link.name}
                    variants={linkVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-100 dark:hover:text-amber-500 hover:text-amber-500  transition-colors duration-200 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={link.name}
                    variants={linkVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-100 dark:hover:text-amber-500 hover:text-amber-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900">Register</h3>
              <ul className="space-y-3">
                {footerLinks.register.map((link, index) => (
                  <motion.li
                    key={link.name}
                    variants={linkVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-100 dark:hover:text-amber-500 hover:text-amber-500 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}
