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

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.504 0c-.155 0-.311.001-.465.003-.653.014-1.283.068-1.873.17-.59.103-1.133.249-1.623.443-.49.193-.922.425-1.294.69a4.412 4.412 0 0 0-.967.934c-.258.337-.47.714-.633 1.132-.163.418-.274.86-.333 1.326-.059.466-.067.934-.023 1.404.044.47.14.936.287 1.394.148.458.349.895.602 1.307.252.412.557.79.91 1.132.354.342.753.64 1.193.893.44.253.92.455 1.438.601.519.146 1.072.233 1.658.26.586.026 1.199-.007 1.837-.101.638-.094 1.294-.25 1.967-.467.673-.217 1.358-.499 2.05-.842.693-.343 1.387-.752 2.08-1.227a16.088 16.088 0 0 0 1.95-1.634c.607-.576 1.157-1.195 1.65-1.856.492-.66.926-1.362 1.297-2.103.372-.74.68-1.516.922-2.325.241-.809.415-1.647.52-2.512.105-.864.14-1.752.107-2.66-.033-.908-.134-1.826-.304-2.749-.17-.923-.412-1.844-.725-2.758-.313-.914-.697-1.813-1.151-2.693C21.166 5.32 20.632 4.456 20.023 3.61c-.608-.846-1.288-1.66-2.035-2.433C17.24.404 16.423-.33 15.547-.99a15.16 15.16 0 0 0-2.04-1.207c-.717-.35-1.47-.63-2.255-.84a11.687 11.687 0 0 0-2.398-.376 11.845 11.845 0 0 0-1.209-.03A9.608 9.608 0 0 0 5.86-3.2c-.413.06-.8.142-1.158.248-.358.106-.69.235-.992.39-.302.154-.574.333-.814.536-.24.203-.45.43-.628.68a4.017 4.017 0 0 0-.431.789 4.098 4.098 0 0 0-.245.875 4.202 4.202 0 0 0-.058.916c.013.31.058.618.135.923.078.305.186.605.324.898.138.293.306.577.501.85.195.274.418.534.666.78.248.246.522.476.817.688.295.212.612.404.948.575.336.17.691.319 1.062.444.371.125.759.224 1.16.298.4.073.815.12 1.241.14.426.02.863.013 1.31-.02.446-.034.9-.095 1.361-.182.46-.086.925-.2 1.391-.34.467-.14.932-.308 1.395-.502.463-.195.92-.417 1.368-.666.448-.249.885-.524 1.308-.827.423-.302.83-.631 1.22-.986.39-.355.76-.736 1.108-1.143.348-.407.672-.839.97-1.295.299-.456.572-.936.816-1.438.244-.502.46-1.025.645-1.568.185-.543.34-1.104.462-1.682.121-.578.21-1.17.264-1.776.054-.606.073-1.223.057-1.85-.016-.627-.067-1.26-.154-1.897-.086-.637-.206-1.275-.361-1.912-.154-.637-.344-1.27-.569-1.896-.224-.627-.484-1.243-.78-1.848-.296-.605-.628-1.196-.996-1.77-.369-.574-.773-1.129-1.213-1.661-.44-.533-.914-1.04-1.423-1.521-.508-.48-1.049-.933-1.62-1.355-.572-.423-1.173-.814-1.803-1.172a15.63 15.63 0 0 0-1.947-.962 15.055 15.055 0 0 0-2.082-.68c-.712-.176-1.44-.303-2.18-.38-.74-.078-1.492-.106-2.253-.084z"/>
  </svg>
);

const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

type Platform = "mac-arm" | "mac-intel" | "linux" | "linux-arm" | "source";

const platformData: Record<Platform, { label: string; command: string; icon: React.ReactNode }> = {
  "mac-arm": {
    label: "macOS (Apple Silicon)",
    command: `curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_arm64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`,
    icon: <AppleIcon />,
  },
  "mac-intel": {
    label: "macOS (Intel)",
    command: `curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_amd64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`,
    icon: <AppleIcon />,
  },
  "linux": {
    label: "Linux (x86_64)",
    command: `curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_linux_amd64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`,
    icon: <LinuxIcon />,
  },
  "linux-arm": {
    label: "Linux (ARM64)",
    command: `curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_linux_arm64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`,
    icon: <LinuxIcon />,
  },
  "source": {
    label: "From Source",
    command: `git clone https://github.com/rakshit-gen/openskill.git
cd openskill
make build
sudo mv build/openskill /usr/local/bin/`,
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
    <div className="relative overflow-hidden group">
      <pre className={`bg-[#0A0A0F] border border-[#2A2A38] rounded-lg p-4 overflow-hidden ${className}`}>
        <code className="text-sm font-mono text-[#F5F5F0] whitespace-pre">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-[#2A2A38] rounded text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors"
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
    <div className="flex gap-6 overflow-hidden">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-[#0A0A0F] font-bold">
          {number}
        </div>
      </div>
      <div className="flex-1 pb-8 border-l border-[#2A2A38] pl-6 -ml-5">
        <h3 className="text-xl font-semibold text-[#F5F5F0] mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function InstallPage() {
  const [platform, setPlatform] = useState<Platform>("mac-arm");
  const [detectedPlatform, setDetectedPlatform] = useState<string | null>(null);

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      // Check if Apple Silicon (rough detection)
      setDetectedPlatform("macOS");
      setPlatform("mac-arm");
    } else if (userAgent.includes("linux")) {
      setDetectedPlatform("Linux");
      setPlatform("linux");
    }
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
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#2A2A38] text-[#00D9A5]">
              Quick Setup
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4">
              Install OpenSkill
            </h1>
            <p className="text-xl text-[#8B8B9E] max-w-2xl mx-auto">
              Get up and running in under a minute. Choose your platform and follow the steps below.
            </p>
            {detectedPlatform && (
              <p className="text-sm text-[#8B8B9E] mt-4">
                Detected: <span className="text-[#FF6B35]">{detectedPlatform}</span>
              </p>
            )}
          </div>

          {/* Platform Selector */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-[#F5F5F0] mb-4 text-center">Select Your Platform</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {(Object.keys(platformData) as Platform[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setPlatform(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
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
          <Card className="bg-[#1A1A24] border-[#2A2A38] mb-12">
            <CardContent className="p-8">
              <div className="space-y-2">
                <StepCard number={1} title="Download & Install">
                  <p className="text-[#8B8B9E] mb-4">
                    Run the following command in your terminal:
                  </p>
                  <CodeBlock code={platformData[platform].command} />
                </StepCard>

                <StepCard number={2} title="Get Groq API Key">
                  <p className="text-[#8B8B9E] mb-4">
                    OpenSkill uses Groq for AI-powered skill generation. Get your free API key:
                  </p>
                  <ol className="list-decimal list-inside text-[#8B8B9E] space-y-2 mb-4">
                    <li>Visit <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">console.groq.com</a></li>
                    <li>Create a free account</li>
                    <li>Generate an API key from the dashboard</li>
                  </ol>
                  <Button
                    className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F]"
                    onClick={() => window.open("https://console.groq.com", "_blank")}
                  >
                    Get Free API Key
                  </Button>
                </StepCard>

                <StepCard number={3} title="Configure API Key">
                  <p className="text-[#8B8B9E] mb-4">
                    Save your Groq API key using the built-in config command:
                  </p>
                  <CodeBlock code={`openskill config set api-key`} />
                  <p className="text-[#8B8B9E] text-sm mt-4">
                    You&apos;ll be prompted to enter your key. This saves it to{" "}
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
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Ready to Create Your First Skill?</h2>
            <p className="text-[#8B8B9E] mb-6">
              Once installed, try creating your first AI-powered skill:
            </p>
            <CodeBlock code={`openskill add "code-review" -d "Reviews code for best practices"`} />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="border-[#2A2A38] text-[#F5F5F0] hover:bg-[#1A1A24]"
                onClick={() => window.location.href = "/docs"}
              >
                Read Documentation
              </Button>
              <Button
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F]"
                onClick={() => window.open("https://github.com/rakshit-gen/openskill", "_blank")}
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-16 p-6 bg-[#1A1A24] border border-[#2A2A38] rounded-lg">
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
                <span>Groq API key (free) for AI features</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
