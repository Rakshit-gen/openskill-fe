"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OpenSkillIcon } from "@/components/icons/logo";

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0L0 20.459h3.744l1.368-3.6h6.624l1.368 3.6h3.744L10.152 3.541H6.696zm.456 10.62 2.328-6.12 2.328 6.12H7.152z"/>
  </svg>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/docs", label: "Docs" },
  { href: "/install", label: "Install" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-50 border-b border-[#2A2A38] bg-[#0A0A0F] sticky top-0">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <OpenSkillIcon size={32} />
              <span className="font-semibold text-lg text-[#F5F5F0]">OpenSkill</span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-[#F5F5F0] bg-[#2A2A38]"
                      : "text-[#8B8B9E] hover:text-[#F5F5F0] hover:bg-[#1A1A24]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://claude.com/product/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8B8B9E] hover:text-[#FF6B35] transition-colors"
            >
              <ClaudeIcon />
              <span className="hidden sm:inline text-sm">Claude Code</span>
            </a>
            <a
              href="https://github.com/rakshit-gen/openskill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors"
            >
              <GitHubIcon />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </a>
            <Link href="/install">
              <Button
                size="sm"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F] font-medium"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
