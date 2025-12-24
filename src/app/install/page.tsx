"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

type Platform = "universal" | "source";

const INSTALL_COMMAND = "curl -fsSL openskill.online/api/install | bash";

const platformData: Record<Platform, { label: string; command: string; icon: React.ReactNode }> = {
  "universal": {
    label: "macOS / Linux",
    command: INSTALL_COMMAND,
    icon: <TerminalIcon />,
  },
  "source": {
    label: "From Source",
    command: `git clone https://github.com/rakshit-gen/openskill.git
cd openskill/OpenSkill-cli
make build && sudo make install`,
    icon: <TerminalIcon />,
  },
};

function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="bg-[#0A0A0F] border border-[#2A2A38] rounded-lg p-4 pr-12 hover:border-[#FF6B35]/50 transition-colors duration-300">
        <pre className="overflow-x-auto scrollbar-hide">
          <code className="text-sm font-mono text-[#F5F5F0] whitespace-pre">{code}</code>
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-[#2A2A38] rounded text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors hover-scale z-10 cursor-pointer"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
}

function StepCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-[#0A0A0F] font-bold">
          {number}
        </div>
      </div>
      <div className="flex-1 min-w-0 pb-8 border-l border-[#2A2A38] pl-6 -ml-5">
        <h3 className="text-xl font-semibold text-[#F5F5F0] mb-4">{title}</h3>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function InstallPage() {
  const [platform, setPlatform] = useState<Platform>("universal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col overflow-x-hidden">
      {/* Background grid pattern - fixed position with proper containment */}
      <div
        className="fixed inset-0 grid-pattern opacity-30 pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className={`text-center mb-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <Badge className="mb-4 bg-[#2A2A38] text-[#00D9A5] hover-scale cursor-default">
              Quick Setup
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4">
              Install OpenSkill
            </h1>
            <p className="text-xl text-[#8B8B9E] max-w-2xl mx-auto">
              Get up and running in under a minute.
            </p>
          </div>

          {/* Platform Selector */}
          <div className={`mb-12 ${mounted ? 'animate-slide-up stagger-1' : 'opacity-0'}`}>
            <h2 className="text-lg font-semibold text-[#F5F5F0] mb-4 text-center">Select Your Platform</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {(Object.keys(platformData) as Platform[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setPlatform(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer hover-scale ${
                    platform === key
                      ? "bg-[#FF6B35] text-[#0A0A0F]"
                      : "bg-[#1A1A24] border border-[#2A2A38] text-[#8B8B9E] hover:text-[#F5F5F0] hover:border-[#FF6B35]"
                  }`}
                >
                  {platformData[key].icon}
                  <span className="text-sm font-medium">{platformData[key].label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Installation Steps */}
          <Card className={`bg-[#1A1A24] border-[#2A2A38] mb-12 hover-lift transition-all duration-300 ${mounted ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
            <CardContent className="p-8">
              <div className="space-y-2">
                <StepCard number={1} title="Download & Install">
                  <p className="text-[#8B8B9E] mb-4">
                    Run the following command in your terminal:
                  </p>
                  <CodeBlock code={platformData[platform].command} />
                </StepCard>

                <StepCard number={2} title="Choose Your AI Provider">
                  <p className="text-[#8B8B9E] mb-4">
                    OpenSkill supports multiple AI providers. Pick one:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#2A2A38]">
                          <th className="text-left py-2 px-3 text-[#F5F5F0]">Provider</th>
                          <th className="text-left py-2 px-3 text-[#F5F5F0]">Get API Key</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#8B8B9E]">
                        <tr className="border-b border-[#2A2A38]">
                          <td className="py-2 px-3 font-mono text-[#FF6B35]">Groq (default)</td>
                          <td className="py-2 px-3"><a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-[#00D9A5] hover:underline">console.groq.com</a> (free)</td>
                        </tr>
                        <tr className="border-b border-[#2A2A38]">
                          <td className="py-2 px-3 font-mono text-[#FF6B35]">OpenAI</td>
                          <td className="py-2 px-3"><a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="text-[#00D9A5] hover:underline">platform.openai.com</a></td>
                        </tr>
                        <tr className="border-b border-[#2A2A38]">
                          <td className="py-2 px-3 font-mono text-[#FF6B35]">Anthropic</td>
                          <td className="py-2 px-3"><a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#00D9A5] hover:underline">console.anthropic.com</a></td>
                        </tr>
                        <tr className="border-b border-[#2A2A38]">
                          <td className="py-2 px-3 font-mono text-[#FF6B35]">Ollama</td>
                          <td className="py-2 px-3">No API key (runs locally)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Button
                    className="bg-[#FF6B35] cursor-pointer hover:bg-[#FF6B35]/90 text-[#0A0A0F]"
                    onClick={() => window.open("https://console.groq.com", "_blank")}
                  >
                    Get Free Groq API Key
                  </Button>
                </StepCard>

                <StepCard number={3} title="Configure Your Provider">
                  <p className="text-[#8B8B9E] mb-4">
                    Set your provider and API key:
                  </p>
                  <CodeBlock code={`# Set provider (groq is default)
openskill config set provider groq

# Set API key
openskill config set api-key`} />
                  <p className="text-[#8B8B9E] text-sm mt-4">
                    This saves to{" "}
                    <code className="text-[#FF6B35]">~/.openskill/config.yaml</code> and works across all terminal sessions.
                  </p>
                </StepCard>

                <StepCard number={4} title="Verify Installation">
                  <p className="text-[#8B8B9E] mb-4">
                    Test that OpenSkill is installed correctly:
                  </p>
                  <CodeBlock code={`openskill --help`} />
                </StepCard>
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <div className={`text-center ${mounted ? 'animate-slide-up stagger-3' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Ready to Create Your First Skill?</h2>
            <p className="text-[#8B8B9E] mb-6">
              Once installed, try creating your first AI-powered skill:
            </p>
            <CodeBlock code={`openskill add "code-review" -d "Reviews code for best practices"`} />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="border-[#2A2A38] text-[#F5F5F0] hover:bg-white hover-scale cursor-pointer"
                onClick={() => window.location.href = "/docs"}
              >
                Read Documentation
              </Button>
              <Button
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F] hover-scale cursor-pointer"
                onClick={() => window.open("https://github.com/rakshit-gen/openskill", "_blank")}
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Requirements */}
          <div className={`mt-16 p-6 bg-[#1A1A24] border border-[#2A2A38] rounded-lg hover-lift transition-all duration-300 ${mounted ? 'animate-slide-up stagger-4' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold text-[#F5F5F0] mb-4">Requirements</h3>
            <ul className="space-y-2 text-[#8B8B9E]">
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>macOS or Linux operating system</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>Terminal access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>curl (pre-installed on most systems)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                <span>API key from Groq, OpenAI, or Anthropic (or use local Ollama)</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
