import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/landingpage/navbar";
// import Footer from "@/components/landingpage/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linear Template | LayrdUI  ",
  description: "A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS. Perfect for startups and SaaS products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      ><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <div className="bg-white dark:bg-black">

            {/* <div className="border-l border border-r border-neutral-200 dark:border-neutral-900 min-h-[calc(100vh-72px)] ml-12 mr-12"> */}
            {children}
            {/* </div> */}

          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
