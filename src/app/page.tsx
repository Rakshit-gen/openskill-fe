"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { OpenSkillLogoAnimated } from "@/components/icons/logo";

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
      { type: "success", content: "        ✓ API key configured (gsk_...x66MW)" },
      { type: "output", content: "  [3/3] Creating example skill..." },
      { type: "success", content: "        ✓ Created example.yaml" },
    ],
    // Sequence 2: Add code-review skill
    [
      { type: "input", content: '$ openskill add "code-review" -d "Reviews code for best practices"' },
      { type: "output", content: "Generating skill with AI..." },
      { type: "success", content: "✓ Added skill: code-review" },
      { type: "detail", content: "  Description: Comprehensive code review focusing on security" },
      { type: "rules", content: "  Rules:" },
      { type: "rule", content: "    1. Check for security vulnerabilities" },
      { type: "rule", content: "    2. Verify proper error handling" },
      { type: "rule", content: "    3. Ensure code follows conventions" },
    ],
    // Sequence 3: Validate skill
    [
      { type: "input", content: '$ openskill validate "code-review"' },
      { type: "empty", content: "" },
      { type: "success", content: "  ✓ Skill 'code-review' is valid" },
      { type: "empty", content: "" },
      { type: "output", content: "  Skill Summary:" },
      { type: "detail", content: "  Name:        code-review" },
      { type: "detail", content: "  Description: Reviews code for best practices..." },
      { type: "detail", content: "  Rules:       5 defined" },
    ],
    // Sequence 4: History command
    [
      { type: "input", content: '$ openskill history "code-review"' },
      { type: "empty", content: "" },
      { type: "output", content: "  Version History: code-review" },
      { type: "empty", content: "" },
      { type: "success", content: "  ● current     2024-01-15 14:32:00  (active)" },
      { type: "detail", content: "  ○ v2          2024-01-14 10:15:00" },
      { type: "detail", content: "  ○ v1          2024-01-13 09:00:00" },
    ],
    // Sequence 5: Rollback command
    [
      { type: "input", content: '$ openskill rollback "code-review" v1' },
      { type: "empty", content: "" },
      { type: "success", content: "  ✓ Restored 'code-review' to version 1" },
      { type: "empty", content: "" },
      { type: "detail", content: "  The previous version has been saved to history." },
      { type: "detail", content: "  Use 'openskill show code-review' to view the skill." },
    ],
    // Sequence 6: List skills
    [
      { type: "input", content: "$ openskill list" },
      { type: "empty", content: "" },
      { type: "list", content: "  code-review     Reviews code for best practices" },
      { type: "list", content: "  api-designer    Designs RESTful APIs" },
      { type: "list", content: "  test-writer     Generates comprehensive unit tests" },
      { type: "list", content: "  doc-writer      Creates technical documentation" },
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
    <div className="terminal-window w-full max-w-2xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-dot bg-[#FF5F56]" />
        <div className="terminal-dot bg-[#FFBD2E]" />
        <div className="terminal-dot bg-[#27CA40]" />
        <span className="ml-4 text-sm text-[#8B8B9E] font-mono">openskill</span>
      </div>
      <div className="terminal-body min-h-[320px]">
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <div
            key={`${currentSequence}-${index}`}
            className={`${getLineColor(line.type)} font-mono text-sm leading-relaxed`}
          >
            {line.content}
            {index === currentLine && showCursor && !isTransitioning && (
              <span className="inline-block w-2 h-4 bg-[#FF6B35] ml-1 align-middle" />
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
            className={`px-3 py-1 text-xs rounded transition-colors ${
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

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <Card
      className="bg-[#1A1A24] border-[#2A2A38] hover:border-[#FF6B35] transition-all duration-300 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-[#2A2A38] flex items-center justify-center text-[#FF6B35] mb-4 group-hover:bg-[#FF6B35] group-hover:text-[#0A0A0F] transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#F5F5F0] mb-2">{title}</h3>
        <p className="text-[#8B8B9E] text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
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
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Animated Logo */}

            <Badge
              variant="outline"
              className="mb-6 text-[#8B8B9E] border-[#2A2A38] bg-[#1A1A24]"
            >
              <SparklesIcon />
              <span className="ml-2">AI-Powered Skill Generation</span>
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
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F] font-semibold px-8 animate-pulse-glow"
                >
                  Install Now
                  <ArrowRightIcon />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2A2A38] text-[#F5F5F0] hover:bg-[#1A1A24]"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<SparklesIcon />}
              title="AI Generation"
              description="Automatically generate detailed skill descriptions and rules from simple prompts using Groq's LLM."
              delay={100}
            />
            <FeatureCard
              icon={<BoltIcon />}
              title="Lightning Fast"
              description="Built in Go for maximum performance. Create and manage skills in milliseconds."
              delay={200}
            />
            <FeatureCard
              icon={<LayersIcon />}
              title="YAML Storage"
              description="Skills are stored as readable YAML files in .claude/skills/ for easy version control."
              delay={300}
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Local First"
              description="Your skills stay on your machine. No cloud sync required, full control over your data."
              delay={400}
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

              <div className="space-y-1">
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
                  description="Validate a skill's YAML structure"
                />
                <CommandExample
                  command="openskill history"
                  description="View version history of a skill"
                />
                <CommandExample
                  command="openskill rollback"
                  description="Restore a skill to a previous version"
                />
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#FF5F56]" />
                <div className="terminal-dot bg-[#FFBD2E]" />
                <div className="terminal-dot bg-[#27CA40]" />
                <span className="ml-4 text-sm text-[#8B8B9E] font-mono">skill.yaml</span>
              </div>
              <div className="terminal-body">
                <pre className="text-sm font-mono leading-relaxed">
                  <span className="text-[#FF6B35]">name:</span> <span className="text-[#F5F5F0]">code-review</span>{"\n"}
                  <span className="text-[#FF6B35]">description:</span> <span className="text-[#00D9A5]">&gt;</span>{"\n"}
                  <span className="text-[#8B8B9E]">  Comprehensive code review focusing</span>{"\n"}
                  <span className="text-[#8B8B9E]">  on security, performance, and</span>{"\n"}
                  <span className="text-[#8B8B9E]">  maintainability best practices.</span>{"\n"}
                  <span className="text-[#FF6B35]">rules:</span>{"\n"}
                  <span className="text-[#8B8B9E]">  - Check for security vulnerabilities</span>{"\n"}
                  <span className="text-[#8B8B9E]">  - Verify proper error handling</span>{"\n"}
                  <span className="text-[#8B8B9E]">  - Ensure code follows conventions</span>{"\n"}
                  <span className="text-[#8B8B9E]">  - Review test coverage</span>
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

          <div className="bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge className="bg-[#2A2A38] text-[#F5F5F0]">macOS</Badge>
              <Badge className="bg-[#2A2A38] text-[#F5F5F0]">Linux</Badge>
              <Badge className="bg-[#2A2A38] text-[#F5F5F0]">ARM64</Badge>
              <Badge className="bg-[#2A2A38] text-[#F5F5F0]">x86_64</Badge>
            </div>
            <InstallCommand />
            <p className="text-[#8B8B9E] text-sm mt-4">
              Requires a free <a href="https://console.groq.com" className="text-[#FF6B35] hover:underline">Groq API key</a> for AI features
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
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F] font-semibold px-8"
              >
                <GitHubIcon />
                <span className="ml-2">View on GitHub</span>
              </Button>
            </a>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="border-[#2A2A38] text-[#F5F5F0] hover:bg-[#1A1A24]"
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
