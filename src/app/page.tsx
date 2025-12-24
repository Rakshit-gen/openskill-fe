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

const TemplateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="3" x2="21" y1="9" y2="9" />
    <line x1="9" x2="9" y1="21" y2="9" />
  </svg>
);

const TagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

const CloudSyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="m9.2 22 3-3-3-3" />
    <path d="M12.2 19h-5" />
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

// Minimal skill cycle - just shows skill names rotating
function SkillCycle() {
  const skills = ["/code-review", "/write-tests", "/debug", "/document"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 mb-6">
      <span className="text-[#8B8B9E] text-sm">Type once:</span>
      <span className="text-[#FF6B35] font-mono text-sm font-medium min-w-[120px]">
        {skills[index]}
        <span className="inline-block w-0.5 h-4 bg-[#FF6B35] ml-0.5 animate-terminal-blink align-middle" />
      </span>
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

  const command = "curl -fsSL openskill.online/api/install | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 sm:gap-3 bg-[#1A1A24]/80 backdrop-blur-sm border border-[#2A2A38] hover:border-[#FF6B35]/50 rounded-lg sm:rounded-full px-3 sm:px-5 py-2 sm:py-3 font-mono text-sm cursor-pointer transition-all duration-300 max-w-full"
    >
      <span className="text-[#8B8B9E] hidden sm:inline">$</span>
      <code className="text-[#F5F5F0] text-xs sm:text-sm md:text-lg truncate sm:whitespace-nowrap">
        {command}
      </code>
      <span className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors flex-shrink-0">
        {copied ? <CheckIcon /> : <CopyIcon />}
      </span>
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

// Animated Skill Demo Component
function SkillInActionDemo() {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Phases: 0=idle, 1=typing command, 2=skill activated, 3=analyzing, 4=showing issues, 5=complete
  const totalPhases = 6;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const durations = [1000, 1500, 1000, 2000, 2500, 3000];

    const timer = setTimeout(() => {
      setPhase((prev) => (prev + 1) % totalPhases);
    }, durations[phase]);

    return () => clearTimeout(timer);
  }, [phase, isVisible]);

  const codeLines = [
    { num: 1, code: "function processPayment(amount, card) {", indent: 0 },
    { num: 2, code: "  const result = eval(card.data);", indent: 1, issue: "security" },
    { num: 3, code: "  db.query(`SELECT * FROM users WHERE id=${userId}`);", indent: 1, issue: "sql" },
    { num: 4, code: "  if (amount > 0) {", indent: 1 },
    { num: 5, code: "    return charge(amount);", indent: 2 },
    { num: 6, code: "  }", indent: 1 },
    { num: 7, code: "}", indent: 0 },
  ];

  const issues = [
    { line: 2, type: "Critical", message: "eval() is dangerous - code injection risk", color: "#FF5F56" },
    { line: 3, type: "High", message: "SQL injection vulnerability detected", color: "#FFBD2E" },
  ];

  return (
    <div ref={ref} className="relative">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Code Editor Side */}
        <div className="relative flex flex-col h-[400px]">
          <div className="terminal-window h-full flex flex-col">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#FF5F56]" />
              <div className="terminal-dot bg-[#FFBD2E]" />
              <div className="terminal-dot bg-[#27CA40]" />
              <span className="ml-4 text-sm text-[#8B8B9E] font-mono">payment.js</span>
              {phase >= 2 && (
                <span className="ml-auto text-xs text-[#FF6B35] animate-pulse">
                  /code-review active
                </span>
              )}
            </div>
            <div className="terminal-body font-mono text-sm flex-1">
              {codeLines.map((line, idx) => {
                const hasIssue = line.issue && phase >= 4;
                const isHighlighted = hasIssue && phase >= 4;

                return (
                  <div
                    key={line.num}
                    className={`flex items-start gap-3 py-0.5 transition-all duration-500 ${
                      isHighlighted ? "bg-[#FF5F56]/10 -mx-4 px-4 rounded" : ""
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="text-[#8B8B9E] w-6 text-right flex-shrink-0 select-none">
                      {line.num}
                    </span>
                    <span className={`${isHighlighted ? "text-[#FF5F56]" : "text-[#F5F5F0]"}`}>
                      {line.code}
                    </span>
                    {isHighlighted && (
                      <span className="ml-auto text-[#FF5F56] animate-pulse">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scanning overlay */}
          {phase === 3 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent animate-scan" />
            </div>
          )}
        </div>

        {/* Claude Response Side */}
        <div className="flex flex-col h-[400px]">
          {/* Command Input */}
          <div className="bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 text-sm font-mono">
              <span className="text-[#8B8B9E]">&gt;</span>
              <span className="text-[#F5F5F0]">
                {phase >= 1 ? "/code-review" : ""}
                {phase === 1 && <span className="inline-block w-2 h-4 bg-[#FF6B35] ml-0.5 animate-terminal-blink" />}
              </span>
              {phase >= 2 && (
                <span className="ml-2 text-[#00D9A5] text-xs">✓ Skill activated</span>
              )}
            </div>
          </div>

          {/* Claude Analysis */}
          <div className={`bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-4 flex-1 ${phase >= 3 ? 'animate-slide-in-bottom' : ''}`}>
            {phase < 3 ? (
              <div className="flex items-center justify-center h-full text-[#8B8B9E] text-sm">
                <span className="opacity-50">Waiting for command...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A0A0F">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="text-[#F5F5F0] font-medium text-sm">Claude</span>
                  {phase === 3 && (
                    <span className="ml-auto text-[#8B8B9E] text-xs flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-pulse" />
                      Analyzing...
                    </span>
                  )}
                </div>

                {phase >= 4 && (
                  <div className="space-y-3">
                    <p className="text-[#8B8B9E] text-sm">
                      Found <span className="text-[#FF5F56] font-medium">2 security issues</span> in payment.js:
                    </p>

                    {issues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0A0A0F] rounded-lg p-3 border-l-2 animate-slide-in-left"
                        style={{
                          borderColor: issue.color,
                          animationDelay: `${idx * 200}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-medium px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: `${issue.color}20`, color: issue.color }}
                          >
                            {issue.type}
                          </span>
                          <span className="text-[#8B8B9E] text-xs">Line {issue.line}</span>
                        </div>
                        <p className="text-[#F5F5F0] text-sm">{issue.message}</p>
                      </div>
                    ))}

                    {phase >= 5 && (
                      <div className="pt-2 border-t border-[#2A2A38] mt-4 animate-slide-in-bottom">
                        <p className="text-[#00D9A5] text-sm flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Suggested fix: Use parameterized queries and avoid eval()
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#8B8B9E] mt-4">
            {[0, 1, 2, 3, 4, 5].map((p) => (
              <div
                key={p}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  p === phase ? "bg-[#FF6B35] scale-125" : p < phase ? "bg-[#00D9A5]" : "bg-[#2A2A38]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
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
      <section className="relative z-10 py-16 px-6 mb-10">
        <FloatingProviders />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <SkillCycle />

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F5F0] mb-6 tracking-tight">
              Claude forgets.<br />
              <span className="text-[#FF6B35]">OpenSkill doesn&apos;t.</span>
            </h1>

            <p className="text-xl text-[#8B8B9E] max-w-2xl mx-auto mb-10 leading-relaxed">
              Turn your best prompts into permanent slash commands.
              Create once, invoke forever, never explain yourself twice.
            </p>

            <InstallCommand />

            <p className="text-[#8B8B9E] text-sm mt-6">
              or{" "}
              <Link href="/docs" className="text-[#FF6B35] hover:underline">
                read the docs
              </Link>
              {" "}·{" "}
              <a
                href="/install"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B35] hover:underline"
              >
                how to install
              </a>
            </p>
          </div>

          {/* Terminal Demo */}
          <div className={`${mounted ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
            <TerminalDemo />
          </div>
        </div>
      </section>

      {/* What are Skills? - Beginner Section */}
      <section className="relative z-10 py-32 px-6 border-t border-[#2A2A38]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A1A24]/80 backdrop-blur-sm border border-[#2A2A38] text-[#8B8B9E] text-sm mb-6">
              New to Skills?
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-6">
              What are Claude Skills?
            </h2>
            <p className="text-xl text-[#8B8B9E] max-w-2xl mx-auto leading-relaxed">
              Skills are reusable instructions that teach Claude how to behave.
              Think of them as <span className="text-[#FF6B35] font-medium">recipes for AI behavior</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Without Skills */}
            <div className="group relative bg-gradient-to-br from-[#1A1A24] to-[#0A0A0F] border border-[#2A2A38] rounded-2xl p-8 transition-all duration-300 hover:border-[#FF5F56]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-lg shadow-[#FF5F56]/30"></div>
                <span className="text-[#8B8B9E] font-medium text-lg">Without Skills</span>
              </div>
              <div className="space-y-4">
                <div className="bg-[#0A0A0F] rounded-xl p-4 border border-[#2A2A38]">
                  <p className="text-[#8B8B9E] text-xs uppercase tracking-wider mb-2">Every time you ask:</p>
                  <p className="text-[#F5F5F0] text-sm leading-relaxed">&quot;Review my code and check for security issues, also make sure error handling is good, and follow our team&apos;s coding standards which are...&quot;</p>
                </div>
                <p className="text-[#8B8B9E] text-center text-sm flex items-center justify-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#FF5F56]">
                    <path d="M17 1l4 4-4 4"/>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                    <path d="M7 23l-4-4 4-4"/>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                  </svg>
                  Repeat every single time...
                </p>
              </div>
            </div>

            {/* With Skills */}
            <div className="group relative bg-gradient-to-br from-[#1A1A24] to-[#0A0A0F] border border-[#FF6B35]/30 rounded-2xl p-8 transition-all duration-300 hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#27CA40] shadow-lg shadow-[#27CA40]/30"></div>
                <span className="text-[#FF6B35] font-medium text-lg">With OpenSkill</span>
              </div>
              <div className="space-y-4">
                <div className="bg-[#0A0A0F] rounded-xl p-4 border border-[#2A2A38]">
                  <p className="text-[#8B8B9E] text-xs uppercase tracking-wider mb-2">Just type:</p>
                  <p className="text-[#FF6B35] text-xl font-mono font-medium">/code-review</p>
                </div>
                <p className="text-[#00D9A5] text-center text-sm flex items-center justify-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00D9A5]">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Claude already knows what to do!
                </p>
              </div>
            </div>
          </div>

          {/* Claude Code Requirement - Minimal */}
          <div className="text-center">
            <p className="text-[#8B8B9E] mb-4">
              Works with <span className="text-[#F5F5F0] font-medium">Claude Code</span> — Anthropic&apos;s official CLI
            </p>
            <a
              href="https://claude.com/product/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#FF8F6B] transition-colors text-sm"
            >
              Get Claude Code
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skill in Action Demo */}
      <section className="relative z-10 py-32 px-6 border-t border-[#2A2A38]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A1A24]/80 backdrop-blur-sm border border-[#2A2A38] text-[#8B8B9E] text-sm mb-6">
              Live Demo
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-6">
              See it in action
            </h2>
            <p className="text-xl text-[#8B8B9E] max-w-xl mx-auto">
              Watch how <code className="text-[#FF6B35] font-mono">/code-review</code> catches vulnerabilities in real-time
            </p>
          </div>

          <SkillInActionDemo />
        </div>
      </section>

      
      {/* Provider Showcase */}
      <section className="relative z-10 py-20 px-6 border-t border-[#2A2A38]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[#8B8B9E] text-sm uppercase tracking-wider mb-10">Powered by your favorite AI providers</p>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="group flex flex-col items-center gap-3 cursor-default transition-transform duration-300 hover:scale-110">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors duration-300">
                <GroqLogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">Groq</span>
            </div>
            <div className="group flex flex-col items-center gap-3 cursor-default transition-transform duration-300 hover:scale-110">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors duration-300">
                <OpenAILogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">OpenAI</span>
            </div>
            <div className="group flex flex-col items-center gap-3 cursor-default transition-transform duration-300 hover:scale-110">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors duration-300">
                <AnthropicLogo />
              </div>
              <span className="text-sm text-[#8B8B9E] group-hover:text-[#F5F5F0] transition-colors">Anthropic</span>
            </div>
            <div className="group flex flex-col items-center gap-3 cursor-default transition-transform duration-300 hover:scale-110">
              <div className="text-[#8B8B9E] group-hover:text-[#FF6B35] transition-colors duration-300">
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
              icon={<TemplateIcon />}
              title="Skill Templates"
              description="8 pre-built templates for code review, testing, debugging, API design, and more."
              index={0}
            />
            <FeatureCard
              icon={<SparklesIcon />}
              title="AI-Powered"
              description="Test, improve, and explain skills using AI. Get suggestions to make your skills better."
              index={1}
            />
            <FeatureCard
              icon={<TagIcon />}
              title="Tags & Groups"
              description="Organize skills with tags and groups. Filter by category, find skills instantly."
              index={2}
            />
            <FeatureCard
              icon={<CloudSyncIcon />}
              title="Git Sync"
              description="Back up skills to Git repositories. Share with your team, sync across machines."
              index={3}
            />
            <FeatureCard
              icon={<LayersIcon />}
              title="Import/Export"
              description="Export to JSON, YAML, or Markdown. Import from files, URLs, or other sources."
              index={4}
            />
            <FeatureCard
              icon={<HistoryIcon />}
              title="Version History"
              description="Track every change with auto-versioning. Diff and rollback to any previous version."
              index={5}
            />
            <FeatureCard
              icon={<BoltIcon />}
              title="Context Providers"
              description="Define files, globs, commands, and URLs that skills use to gather context."
              index={6}
            />
            <FeatureCard
              icon={<GitBranchIcon />}
              title="Workspaces"
              description="Project-specific skill configuration. Override variables per project."
              index={7}
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Pre/Post Hooks"
              description="Run commands before and after skill execution. Integrate with your workflow."
              index={8}
            />
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
                  command="openskill template use"
                  description="Create skills from pre-built templates"
                />
                <CommandExample
                  command="openskill add"
                  description="Create a new skill with AI generation"
                />
                <CommandExample
                  command="openskill test --mock"
                  description="Test skills before deployment"
                />
                <CommandExample
                  command="openskill improve"
                  description="AI-powered skill improvements"
                />
                <CommandExample
                  command="openskill sync --push"
                  description="Sync skills to Git repository"
                />
                <CommandExample
                  command="openskill export"
                  description="Export to JSON, YAML, or Markdown"
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
            Your workflows deserve to be remembered.
          </h2>
          <p className="text-[#8B8B9E] mb-8 text-lg">
            Stop re-explaining yourself. Start in under a minute.
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
                className="bg-[#FF6B35] hover:bg-[#FF8555] text-[#0A0A0F] font-semibold px-8 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-[#FF6B35]/20"
              >
                <GitHubIcon />
                <span className="ml-2">View on GitHub</span>
              </Button>
            </a>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#0A0A0F] border-white/20 hover:bg-[#0A0A0F] hover:text-white hover:border-[#2A2A38] font-semibold px-8 cursor-pointer transition-all duration-200"
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
