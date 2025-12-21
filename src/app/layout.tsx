import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenSkill CLI | AI-Powered Skill Management for Claude",
  description: "Create and manage Claude skills with AI-powered content generation. Build powerful automation workflows in seconds.",
  keywords: ["Claude", "AI", "CLI", "skills", "automation", "developer tools"],
  authors: [{ name: "Rakshit-gen" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "OpenSkill CLI",
    description: "AI-Powered Skill Management for Claude",
    type: "website",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: "OpenSkill CLI",
    description: "AI-Powered Skill Management for Claude",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
