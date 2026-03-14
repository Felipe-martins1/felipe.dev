import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ThemeProvider } from "@/components/ThemeProvider";
import { socialsSection } from "@/resources/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? socialsSection.url),
  title: {
    default: "Felipe Martins",
    template: "%s | Felipe Martins",
  },
  description:
    "Senior Full-Stack Developer. I help companies build fast, scalable products — and make sure they look great doing it.",
  keywords: [
    "Felipe Martins",
    "Full-Stack Developer",
    "Senior Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Software Engineer",
    "Brazil",
  ],
  authors: [
    {
      name: "Felipe Martins",
      url: process.env.URL ?? socialsSection.url,
    },
  ],
  creator: "Felipe Martins",
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
  openGraph: {
    type: "website",
    title: "Felipe Martins",
    description:
      "Senior Full-Stack Developer. I help companies build fast, scalable products — and make sure they look great doing it.",
    url: process.env.URL ?? socialsSection.url,
    siteName: "Felipe Martins",
    countryName: "Brazil",
    locale: "en_US",
    emails: process.env.EMAIL ? [process.env.EMAIL] : [],
    phoneNumbers: process.env.PHONE_NUMBER ? [process.env.PHONE_NUMBER] : [],
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Felipe Martins — Senior Full-Stack Developer",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Martins",
    description:
      "Senior Full-Stack Developer. I help companies build fast, scalable products — and make sure they look great doing it.",
    // images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <div className="font-sans p-4 relative flex-1">
            <main className="flex w-full max-w-3xl flex-col pt-4 mx-auto">
              {children}
            </main>
          </div>
          <ShootingStars />
          <footer className="w-full max-w-3xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Felipe Martins</span>
            <div className="flex items-center gap-4">
              {socialsSection.links.map(({ icon: Icon, ...social }) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={
                    social.url.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="hover:text-foreground transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
