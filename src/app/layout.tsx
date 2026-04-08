import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Punit Jha | QA Lead & Test Automation Expert",
  description:
    "QA Lead with 11+ years of experience in banking and enterprise applications. متخصص in test automation, TOSCA, Appium, API testing, and delivering high-quality scalable systems.",
  keywords: [
    "Punit Jha",
    "QA Lead",
    "Test Manager",
    "Automation Testing",
    "TOSCA",
    "Appium",
    "API Testing",
    "Banking QA",
    "Software Testing Australia",
    "Quality Engineering",
  ],
  authors: [{ name: "Punit Jha" }],
  openGraph: {
    title: "Punit Jha | QA Leadership & Engineering Impact",
    description:
      "Explore QA leadership, automation strategies, and enterprise testing expertise built over 11+ years in banking and large-scale systems.",
    url: "https://your-portfolio-url.com",
    siteName: "Punit Jha Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punit Jha | QA Lead",
    description:
      "QA Leader specializing in automation, enterprise testing, and scalable quality engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}