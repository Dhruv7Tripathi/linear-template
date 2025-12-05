import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
// import TopBanner from "@/components/ui/top-banner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Linear Template | LayrdUI",
    template: "%s | Linear Template",
  },
  description:
    "Linear – A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS. Perfect for startups and SaaS products.",
  keywords: [
    "Next.js landing page",
    "Tailwind CSS template",
    "SaaS UI",
    "Modern website",
    "Startup landing page",
    "Responsive layout",
    "LayrdUI",
  ],
  authors: [{ name: "LayrdUI", url: "https://layrdui.com" }],
  creator: "LayrdUI",
  metadataBase: new URL("https://linear-template.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linear-template.vercel.app",
    title: "Linear Template | LayrdUI",
    description:
      "A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS.",
    siteName: "Linear Template",
    images: [
      {
        url: "https://linear-template.vercel.app/og-image.png", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Linear Template Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linear Template | LayrdUI",
    description:
      "A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS.",
    creator: "@layrdui", // replace with your Twitter handle if available
    images: ["https://linear-template.vercel.app/og-image.png"], // replace with your actual image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <TopBanner /> */}
          <div className="bg-white dark:bg-black min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
