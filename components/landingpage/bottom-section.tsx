import React from 'react'
import { SiDiscord, SiLinkedin, SiX, SiGithub } from 'react-icons/si'
import Link from 'next/link'
export default function BottomSection() {
  return (
    <div className="flex border-t border-neutral-200 dark:border-neutral-900 justify-between items-center px-12 py-6 mt-8">
      <div className="flex space-x-8 text-2xl text-gray-500 dark:text-gray-400">
        <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <SiDiscord size={22} />
        </Link>
        <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <SiGithub size={22} />
        </Link>
        <Link href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
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
  )
}
