"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Themetoggle } from "./ui/themetoggle"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

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
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isProductOpen) return

      const dropdown = dropdownRef.current
      const button = buttonRef.current

      if (!dropdown || !button) return

      const { clientX, clientY } = e
      const dropdownBounds = dropdown.getBoundingClientRect()
      const buttonBounds = button.getBoundingClientRect()

      // Check if mouse is over button or dropdown
      const isOverButton =
        clientX >= buttonBounds.left &&
        clientX <= buttonBounds.right &&
        clientY >= buttonBounds.top &&
        clientY <= buttonBounds.bottom

      const isOverDropdown =
        clientX >= dropdownBounds.left &&
        clientX <= dropdownBounds.right &&
        clientY >= dropdownBounds.top &&
        clientY <= dropdownBounds.bottom

      // Close dropdown if mouse is not over button or dropdown
      if (!isOverButton && !isOverDropdown) {
        setIsProductOpen(false)
      }
    }

    if (isProductOpen) {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isProductOpen])

  return (
    <nav
      className={cn(
        "w-full z-50 transition-all border-b-2 dark:border-neutral-900 border-neutral-200 duration-300 bg-white dark:bg-black backdrop-blur-md",
      )}
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3">
        {/* Left: Logo and Nav */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpeg" alt="Linear Logo" width={30} height={30} className="rounded" />
          <span className="text-xl sm:text-2xl font-bold">Linear</span>

          <div className="hidden md:flex px-4 lg:px-8 text-sm font-semibold space-x-4 lg:space-x-6 text-neutral-800 dark:text-neutral-200">
            {/* Dropdown */}
            <div className="relative" onMouseEnter={() => setIsProductOpen(true)}>
              {/* Button */}
              <button
                ref={buttonRef}
                className="flex items-center gap-1 font-semibold hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
              >
                Features
                <motion.div animate={{ rotate: isProductOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4 mt-[2px]" />
                </motion.div>
              </button>

              <motion.div
                ref={dropdownRef}
                initial={false}
                animate={isProductOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 1, y: 0, pointerEvents: "auto" },
                  closed: { opacity: 0, y: -10, pointerEvents: "none" },
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-[280px] lg:w-[320px] bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg border border-neutral-300 dark:border-neutral-800 z-50"
              >
                <div className="p-4 space-y-4">
                  {features.map((item, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer group hover:bg-neutral-100 dark:hover:bg-neutral-900 p-2 rounded-md transition"
                    >
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-neutral-800 dark:text-neutral-300">{item.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Other Nav Links */}
            <a
              href="#pricing"
              className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
              onMouseEnter={() => setIsProductOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
              onMouseEnter={() => setIsProductOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
              onMouseEnter={() => setIsProductOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg flex flex-row items-center space-x-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <SiGithub size={20} />
            <span className="hidden sm:block text-neutral-950 font-semibold dark:text-neutral-50">23.5K</span>
          </a>

          <Themetoggle />

          <button className="hidden sm:block dark:hover:bg-neutral-900 font-semibold hover:bg-neutral-100 rounded-lg py-2 px-4">
            Login
          </button>

          <button className="dark:bg-neutral-900 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-100 text-neutral-950 dark:text-neutral-50 px-3 sm:px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black border border-neutral-200 dark:border-neutral-950 hover:border-white dark:hover:border-black transition-colors duration-300">
            Sign Up
          </button>

          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Features Section */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Features</h3>
                  {features.map((item, idx) => (
                    <div key={idx} className="pl-4 space-y-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  ))}
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-2 pt-4 border-t">
                  <a
                    href="#pricing"
                    className="block py-2 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#faq"
                    className="block py-2 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    FAQ
                  </a>
                  <a
                    href="#contact"
                    className="block py-2 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile Login Button */}
                <div className="pt-4 border-t">
                  <button className="w-full py-2 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium">
                    Login
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
