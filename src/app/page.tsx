"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Icons as components
const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const BoltIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5" />
    <path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-8 8.5-4.5-1-8-3.5-8-8.5V4l8-2 8 2Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);

const GitBranchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" x2="6" y1="3" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Provider logos
const GroqLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const OpenAILogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4066-.6812zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const AnthropicLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0L0 20.459h3.744l1.368-3.6h6.624l1.368 3.6h3.744L10.152 3.541H6.696zm.456 10.62 2.328-6.12 2.328 6.12H7.152z"/>
  </svg>
);

const OllamaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
);

// Animated counter component
function AnimatedCounter({ end, duration = 1000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Floating providers component
function FloatingProviders() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-[10%] text-[#8B8B9E] animate-logo-1 opacity-20">
        <GroqLogo />
      </div>
      <div className="absolute top-32 right-[15%] text-[#8B8B9E] animate-logo-2 opacity-20">
        <OpenAILogo />
      </div>
      <div className="absolute bottom-40 left-[20%] text-[#8B8B9E] animate-logo-3 opacity-20">
        <AnthropicLogo />
      </div>
      <div className="absolute bottom-32 right-[10%] text-[#8B8B9E] animate-logo-4 opacity-20">
        <OllamaLogo />
      </div>
    </div>
  );
}

// Terminal Demo Component
function TerminalDemo() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentSequence, setCurrentSequence] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sequences = [
    // Sequence 1: Init command
    [
      { type: "input", content: "$ openskill init" },
      { type: "empty", content: "" },
      { type: "output", content: "  [1/3] Setting up skills directory..." },
      { type: "success", content: "        ✓ Created .claude/skills/" },
      { type: "output", content: "  [2/3] Checking API configuration..." },
      { type: "success", content: "        ✓ Provider: Groq (llama-3.3-70b)" },
      { type: "output", content: "  [3/3] Creating example skill..." },
      { type: "success", content: "        ✓ Created example SKILL.md" },
    ],
    // Sequence 2: Add code-review skill
    [
      { type: "input", content: '$ openskill add "code-review" -d "Reviews code"' },
      { type: "output", content: "Generating skill with Groq..." },
      { type: "success", content: "✓ Added skill: code-review" },
      { type: "detail", content: "  Description: Comprehensive code review" },
      { type: "rules", content: "  Rules:" },
      { type: "rule", content: "    1. Check for security vulnerabilities" },
      { type: "rule", content: "    2. Verify proper error handling" },
      { type: "rule", content: "    3. Ensure code follows conventions" },
    ],
    // Sequence 3: Switch provider
    [
      { type: "input", content: "$ openskill config set provider anthropic" },
      { type: "success", content: "✓ Set provider" },
      { type: "empty", content: "" },
      { type: "input", content: "$ openskill config list" },
      { type: "output", content: "  Provider:    anthropic" },
      { type: "output", content: "  Model:       claude-3-5-sonnet-20241022" },
      { type: "success", content: "  Configured:  groq, openai, anthropic" },
    ],
    // Sequence 4: History command
    [
      { type: "input", content: '$ openskill history "code-review"' },
      { type: "empty", content: "" },
      { type: "output", content: "  Version History: code-review" },
      { type: "empty", content: "" },
      { type: "success", content: "  ● current     2025-01-15 14:32:00  (active)" },
      { type: "detail", content: "  ○ v2          2025-01-14 10:15:00" },
      { type: "detail", content: "  ○ v1          2025-01-13 09:00:00" },
    ],
    // Sequence 5: Rollback command
    [
      { type: "input", content: '$ openskill rollback "code-review" v1' },
      { type: "empty", content: "" },
      { type: "success", content: "  ✓ Restored 'code-review' to version 1" },
      { type: "empty", content: "" },
      { type: "detail", content: "  Previous version saved to history." },
      { type: "detail", content: "  Use 'openskill show' to view the skill." },
    ],
    // Sequence 6: List skills
    [
      { type: "input", content: "$ openskill list" },
      { type: "empty", content: "" },
      { type: "list", content: "  code-review     Reviews code for best practices" },
      { type: "list", content: "  api-designer    Designs RESTful APIs" },
      { type: "list", content: "  test-writer     Generates unit tests" },
      { type: "list", content: "  doc-writer      Creates documentation" },
    ],
  ];

  const lines = sequences[currentSequence];

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < lines.length - 1) {
          return prev + 1;
        } else {
          // Start transition to next sequence
          setIsTransitioning(true);
          return prev;
        }
      });
    }, 500);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(lineInterval);
      clearInterval(cursorInterval);
    };
  }, [lines.length]);

  // Handle sequence transition
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setCurrentSequence((prev) => (prev + 1) % sequences.length);
        setCurrentLine(0);
        setIsTransitioning(false);
      }, 2000); // Wait 2 seconds before switching

      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, sequences.length]);

  const getLineColor = (type: string) => {
    switch (type) {
      case "input": return "text-[#F5F5F0]";
      case "output": return "text-[#8B8B9E]";
      case "success": return "text-[#00D9A5]";
      case "detail": return "text-[#8B8B9E]";
      case "rules": return "text-[#F5F5F0]";
      case "rule": return "text-[#8B8B9E]";
      case "list": return "text-[#8B8B9E]";
      default: return "text-[#F5F5F0]";
    }
  };

  return (
    <div className="terminal-window w-full max-w-2xl mx-auto hover-lift transition-all duration-300">
      <div className="terminal-header">
        <div className="terminal-dot bg-[#FF5F56]" />
        <div className="terminal-dot bg-[#FFBD2E]" />
        <div className="terminal-dot bg-[#27CA40]" />
        <span className="ml-4 text-sm text-[#8B8B9E] font-mono">openskill</span>
        <div className="ml-auto flex items-center gap-2">
        </div>
      </div>
      <div className="terminal-body min-h-[280px]">
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <div
            key={`${currentSequence}-${index}`}
            className={`${getLineColor(line.type)} font-mono text-sm leading-relaxed animate-slide-in-left`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {line.content}
            {index === currentLine && showCursor && !isTransitioning && (
              <span className="inline-block w-2 h-4 bg-[#FF6B35] ml-1 align-middle animate-terminal-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Install Command Component
function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<"mac-arm" | "mac-intel" | "linux" | "linux-arm">("mac-arm");

  const commands = {
    "mac-arm": "curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_arm64.tar.gz | tar xz && sudo mv openskill /usr/local/bin/",
    "mac-intel": "curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_amd64.tar.gz | tar xz && sudo mv openskill /usr/local/bin/",
    "linux": "curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_linux_amd64.tar.gz | tar xz && sudo mv openskill /usr/local/bin/",
    "linux-arm": "curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_linux_arm64.tar.gz | tar xz && sudo mv openskill /usr/local/bin/",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[platform]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        {[
          { id: "mac-arm", label: "macOS (Apple Silicon)" },
          { id: "mac-intel", label: "macOS (Intel)" },
          { id: "linux", label: "Linux (x86)" },
          { id: "linux-arm", label: "Linux (ARM)" },
        ].map((p) => (
          <button
            key={p.id}
            onClick={() => setPlatform(p.id as typeof platform)}
            className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
              platform === p.id
                ? "bg-[#FF6B35] text-[#0A0A0F]"
                : "bg-[#2A2A38] text-[#8B8B9E] hover:text-[#F5F5F0]"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-4 font-mono text-sm">
        <span className="text-[#8B8B9E]">$</span>
        <code className="text-[#F5F5F0] flex-1 overflow-x-auto scrollbar-hide whitespace-nowrap text-xs">
          {commands[platform]}
        </code>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-[#2A2A38] rounded transition-colors text-[#8B8B9E] hover:text-[#F5F5F0] flex-shrink-0"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}

// Feature Card Component with enhanced animations
function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-slide-in-bottom' : ''}`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <Card className="bg-[#1A1A24] border-[#2A2A38] hover:border-[#FF6B35] transition-all duration-300 group hover-lift h-full">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-lg bg-[#2A2A38] flex items-center justify-center text-[#FF6B35] mb-4 group-hover:bg-[#FF6B35] group-hover:text-[#0A0A0F] transition-all duration-300 icon-bounce">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-[#F5F5F0] mb-2">{title}</h3>
          <p className="text-[#8B8B9E] text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

// Command Example Component
function CommandExample({
  command,
  description
}: {
  command: string;
  description: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-[#2A2A38] last:border-0">
      <code className="font-mono text-sm text-[#FF6B35] bg-[#1A1A24] px-3 py-1 rounded whitespace-nowrap">
        {command}
      </code>
      <span className="text-[#8B8B9E] text-sm">{description}</span>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Accent glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D9A5] opacity-[0.03] blur-[100px] rounded-full" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-6">
        <FloatingProviders />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge
              variant="outline"
              className="mb-6 text-[#8B8B9E] border-[#2A2A38] bg-[#1A1A24] hover-wiggle cursor-default"
            >
              <SparklesIcon />
              <span className="ml-2">Multi-AI Skill Generation</span>
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F5F0] mb-6 tracking-tight">
              Build Claude Skills<br />
              <span className="text-[#FF6B35]">in Seconds</span>
            </h1>

            <p className="text-xl text-[#8B8B9E] max-w-2xl mx-auto mb-10 leading-relaxed">
              The command-line tool that lets you create, manage, and share
              Claude skills with AI-powered content generation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/install">
                <Button
                  size="lg"
                  className="bg-[#FF6B35] cursor-pointer hover:bg-[#FF6B35]/90 text-[#0A0A0F] font-semibold px-8 hover-scale"
                >
                  Install Now
                  <ArrowRightIcon />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2A2A38] cursor-pointer text-[#F5F5F0] hover:bg-[#F5F5F0] hover-scale"
                >
                  View Documentation
                </Button>
              </Link>
            </div>

            <InstallCommand />
          </div>

          {/* Terminal Demo */}
          <div className={`${mounted ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
            <TerminalDemo />
          </div>
        </div>
      </section>

      {/* Provider Showcase */}
      <section className="relative z-10 py-16 px-6 border-t border-[#2A2A38]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[#8B8B9E] mb-8">Powered by your favorite AI providers</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="group flex flex-col items-center gap-2 hover-lift cursor-default">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors animate-logo-1">
                <GroqLogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">Groq</span>
            </div>
            <div className="group flex flex-col items-center gap-2 hover-lift cursor-default">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors animate-logo-2">
                <OpenAILogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">OpenAI</span>
            </div>
            <div className="group flex flex-col items-center gap-2 hover-lift cursor-default">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors animate-logo-3">
                <AnthropicLogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">Anthropic</span>
            </div>
            <div className="group flex flex-col items-center gap-2 hover-lift cursor-default">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors animate-logo-4">
                <OllamaLogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">Ollama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6 border-t border-[#2A2A38]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4">
              Everything you need
            </h2>
            <p className="text-[#8B8B9E] max-w-xl mx-auto">
              OpenSkill combines the power of AI with a simple CLI interface
              to streamline your Claude workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<SparklesIcon />}
              title="Multi-AI Providers"
              description="Choose from Groq, OpenAI, Anthropic, or Ollama. Switch providers with a single command."
              index={0}
            />
            <FeatureCard
              icon={<BoltIcon />}
              title="Lightning Fast"
              description="Built in Go for maximum performance. Create and manage skills in milliseconds."
              index={1}
            />
            <FeatureCard
              icon={<LayersIcon />}
              title="SKILL.md Format"
              description="Skills are stored as Markdown with YAML frontmatter for Claude's native skill discovery."
              index={2}
            />
            <FeatureCard
              icon={<HistoryIcon />}
              title="Version History"
              description="Track every change with automatic versioning. Roll back to any previous version instantly."
              index={3}
            />
            <FeatureCard
              icon={<GitBranchIcon />}
              title="Skill Composition"
              description="Extend and combine skills with 'extends' and 'includes' for powerful skill hierarchies."
              index={4}
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Local First"
              description="Your skills stay on your machine. No cloud sync required, full control over your data."
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6 border-t border-[#2A2A38]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover-lift cursor-default">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                <AnimatedCounter end={4} suffix="+" />
              </div>
              <p className="text-[#8B8B9E] text-sm">AI Providers</p>
            </div>
            <div className="text-center group hover-lift cursor-default">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-[#8B8B9E] text-sm">CLI Commands</p>
            </div>
            <div className="text-center group hover-lift cursor-default">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-[#8B8B9E] text-sm">Local & Private</p>
            </div>
            <div className="text-center group hover-lift cursor-default">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                <AnimatedCounter end={0} suffix="$" />
              </div>
              <p className="text-[#8B8B9E] text-sm">Open Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="relative z-10 py-24 px-6 border-t border-[#2A2A38]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4">
                Simple, powerful commands
              </h2>
              <p className="text-[#8B8B9E] mb-8">
                Intuitive CLI commands that get out of your way and let you focus on what matters.
              </p>

              <div className="space-y-1 stagger-fade-in">
                <CommandExample
                  command="openskill init"
                  description="Initialize OpenSkill in your project"
                />
                <CommandExample
                  command="openskill add"
                  description="Create a new skill with AI-generated content"
                />
                <CommandExample
                  command="openskill validate"
                  description="Validate skill structure"
                />
                <CommandExample
                  command="openskill history"
                  description="View version history of a skill"
                />
                <CommandExample
                  command="openskill rollback"
                  description="Restore a skill to a previous version"
                />
                <CommandExample
                  command="openskill config"
                  description="Switch AI providers instantly"
                />
              </div>
            </div>

            <div className="terminal-window hover-lift">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#FF5F56]" />
                <div className="terminal-dot bg-[#FFBD2E]" />
                <div className="terminal-dot bg-[#27CA40]" />
                <span className="ml-4 text-sm text-[#8B8B9E] font-mono">SKILL.md</span>
              </div>
              <div className="terminal-body">
                <pre className="text-sm font-mono leading-relaxed">
                  <span className="text-[#8B8B9E]">---</span>{"\n"}
                  <span className="text-[#FF6B35]">name:</span> <span className="text-[#F5F5F0]">code-review</span>{"\n"}
                  <span className="text-[#FF6B35]">description:</span> <span className="text-[#F5F5F0]">Comprehensive code review</span>{"\n"}
                  <span className="text-[#8B8B9E]">---</span>{"\n\n"}
                  <span className="text-[#F5F5F0]"># code-review</span>{"\n\n"}
                  <span className="text-[#8B8B9E]">Review code for security, performance,</span>{"\n"}
                  <span className="text-[#8B8B9E]">and maintainability best practices.</span>{"\n\n"}
                  <span className="text-[#F5F5F0]">## Rules</span>{"\n\n"}
                  <span className="text-[#8B8B9E]">- Check for security vulnerabilities</span>{"\n"}
                  <span className="text-[#8B8B9E]">- Verify proper error handling</span>{"\n"}
                  <span className="text-[#8B8B9E]">- Ensure code follows conventions</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6 border-t border-[#2A2A38]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4">
            Ready to supercharge your Claude workflow?
          </h2>
          <p className="text-[#8B8B9E] mb-8 text-lg">
            Get started in under a minute. No account required.
          </p>

          <div className="bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-8 mb-8 hover-lift">
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">macOS</Badge>
              <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">Linux</Badge>
              <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">ARM64</Badge>
              <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">x86_64</Badge>
            </div>
            <InstallCommand />
            <p className="text-[#8B8B9E] text-sm mt-4">
              Supports <span className="text-[#FF6B35]">Groq</span>, <span className="text-[#FF6B35]">OpenAI</span>, <span className="text-[#FF6B35]">Anthropic</span>, and <span className="text-[#FF6B35]">Ollama</span> (local)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/rakshit-gen/openskill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F] font-semibold px-8 hover-scale"
              >
                <GitHubIcon />
                <span className="ml-2">View on GitHub</span>
              </Button>
            </a>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="border-[#2A2A38] text-[#F5F5F0] hover:bg-[#1A1A24] hover-scale"
              >
                Read the Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
