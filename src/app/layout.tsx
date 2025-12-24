import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "OpenSkill CLI | AI-Powered Skill Management for Claude",
  description: "Create and manage Claude skills with AI-powered content generation. Build powerful automation workflows in seconds.",
  keywords: ["Claude", "AI", "CLI", "skills", "automation", "developer tools"],
  authors: [{ name: "Rakshit-gen" }],
  metadataBase: new URL("https://openskill.online"),
  icons: {
    icon: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "OpenSkill CLI",
    description: "AI-Powered Skill Management for Claude. Create and manage Claude skills with AI-powered content generation.",
    url: "https://openskill.online",
    type: "website",
    siteName: "OpenSkill",
    images: [
      {
        url: "https://openskill.online/openskill.png",
        width: 1200,
        height: 630,
        alt: "OpenSkill - AI-Powered Skill Management for Claude",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSkill CLI",
    description: "AI-Powered Skill Management for Claude. Create and manage Claude skills with AI-powered content generation.",
    images: ["https://openskill.online/openskill.png"],
    creator: "@Rakshit_gen",
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
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
