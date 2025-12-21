"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-4 overflow-x-auto">
        <code className="text-sm font-mono text-[#F5F5F0]">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-[#2A2A38] rounded opacity-0 group-hover:opacity-100 transition-opacity text-[#8B8B9E] hover:text-[#F5F5F0]"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
}

function SidebarLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
        active
          ? "text-[#FF6B35] bg-[#FF6B35]/10"
          : "text-[#8B8B9E] hover:text-[#F5F5F0] hover:bg-[#1A1A24]"
      }`}
    >
      {label}
    </a>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "installation", label: "Installation" },
    { id: "configuration", label: "Configuration" },
    { id: "commands", label: "Commands" },
    { id: "add", label: "openskill add" },
    { id: "list", label: "openskill list" },
    { id: "show", label: "openskill show" },
    { id: "edit", label: "openskill edit" },
    { id: "remove", label: "openskill remove" },
    { id: "skill-format", label: "Skill Format" },
    { id: "ai-generation", label: "AI Generation" },
    { id: "examples", label: "Examples" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h4 className="text-[#F5F5F0] font-semibold mb-4 px-3">Documentation</h4>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <SidebarLink
                    key={section.id}
                    href={`#${section.id}`}
                    label={section.label}
                    active={activeSection === section.id}
                  />
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="prose prose-invert max-w-none">
              {/* Overview */}
              <section id="overview" className="mb-16">
                <h1 className="text-4xl font-bold text-[#F5F5F0] mb-4">OpenSkill CLI Documentation</h1>
                <p className="text-[#8B8B9E] text-lg mb-6">
                  OpenSkill is a command-line tool for creating and managing Claude skills with
                  AI-powered content generation. It simplifies the process of building reusable
                  skill definitions that enhance Claude&apos;s capabilities.
                </p>
                <div className="flex gap-2 mb-8">
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0]">Go</Badge>
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0]">CLI</Badge>
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0]">AI-Powered</Badge>
                </div>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Installation</h2>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">macOS (Apple Silicon)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_arm64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">macOS (Intel)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_amd64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Linux (x86_64)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_linux_amd64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Linux (ARM64)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_linux_arm64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">From Source</h3>
                <CodeBlock code={`git clone https://github.com/rakshit-gen/openskill.git
cd openskill
make build
sudo mv build/openskill /usr/local/bin/`} />
              </section>

              {/* Configuration */}
              <section id="configuration" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Configuration</h2>
                <p className="text-[#8B8B9E] mb-4">
                  OpenSkill uses Groq for AI-powered skill generation. You&apos;ll need to set up your
                  API key to use the AI features.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Get a Groq API Key</h3>
                <ol className="list-decimal list-inside text-[#8B8B9E] space-y-2 mb-4">
                  <li>Visit <a href="https://console.groq.com" className="text-[#FF6B35] hover:underline">console.groq.com</a></li>
                  <li>Create a free account</li>
                  <li>Generate an API key</li>
                </ol>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Set Environment Variable</h3>
                <CodeBlock code={`export GROQ_API_KEY=your_key_here`} />

                <p className="text-[#8B8B9E] mt-4">
                  Add this to your shell profile (<code className="text-[#FF6B35]">~/.bashrc</code>,{" "}
                  <code className="text-[#FF6B35]">~/.zshrc</code>, etc.) for persistence.
                </p>
              </section>

              {/* Commands Overview */}
              <section id="commands" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Commands</h2>
                <p className="text-[#8B8B9E] mb-6">
                  OpenSkill provides five main commands for managing your skills:
                </p>

                <div className="grid gap-4">
                  {[
                    { cmd: "add", desc: "Create a new skill with optional AI generation" },
                    { cmd: "list", desc: "List all available skills" },
                    { cmd: "show", desc: "Display detailed information about a skill" },
                    { cmd: "edit", desc: "Modify an existing skill" },
                    { cmd: "remove", desc: "Delete a skill" },
                  ].map((item) => (
                    <div key={item.cmd} className="flex items-center gap-4 p-4 bg-[#1A1A24] border border-[#2A2A38] rounded-lg">
                      <code className="text-[#FF6B35] font-mono">openskill {item.cmd}</code>
                      <span className="text-[#8B8B9E]">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* openskill add */}
              <section id="add" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill add</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Create a new skill. By default, uses AI to generate comprehensive descriptions and rules.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Usage</h3>
                <CodeBlock code={`openskill add <name> -d <description> [flags]`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Flags</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#2A2A38]">
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Flag</th>
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#8B8B9E]">
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">-d, --desc</td>
                        <td className="py-3 px-4">Skill description (required)</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">-r, --rule</td>
                        <td className="py-3 px-4">Add a rule (manual mode only, can be repeated)</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">--manual</td>
                        <td className="py-3 px-4">Skip AI generation, use provided values</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Examples</h3>
                <CodeBlock code={`# AI-powered skill creation
openskill add "code-review" -d "Reviews code for best practices"

# Manual skill creation
openskill add "bug-finder" -d "Finds bugs" --manual -r "Check nulls" -r "Check edge cases"`} />
              </section>

              {/* openskill list */}
              <section id="list" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill list</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Display all skills in the current directory.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Usage</h3>
                <CodeBlock code={`openskill list`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Output</h3>
                <CodeBlock code={`$ openskill list
  code-review     Reviews code for best practices
  bug-finder      Finds bugs in code
  test-writer     Generates unit tests`} />
              </section>

              {/* openskill show */}
              <section id="show" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill show</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Display detailed information about a specific skill.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Usage</h3>
                <CodeBlock code={`openskill show <name>`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Example</h3>
                <CodeBlock code={`$ openskill show "code-review"

Name: code-review
Description: Comprehensive code review focusing on security, performance, and maintainability
Rules:
  1. Check for security vulnerabilities (XSS, SQL injection, etc.)
  2. Verify proper error handling and edge cases
  3. Ensure code follows project conventions
  4. Review test coverage and quality`} />
              </section>

              {/* openskill edit */}
              <section id="edit" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill edit</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Modify an existing skill&apos;s description or rules.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Usage</h3>
                <CodeBlock code={`openskill edit <name> [flags]`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Flags</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#2A2A38]">
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Flag</th>
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#8B8B9E]">
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">-d, --desc</td>
                        <td className="py-3 px-4">New description</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">-r, --rule</td>
                        <td className="py-3 px-4">Replace rules (can be repeated)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Examples</h3>
                <CodeBlock code={`# Update description
openskill edit "code-review" -d "New description"

# Replace rules
openskill edit "code-review" -r "New rule 1" -r "New rule 2"`} />
              </section>

              {/* openskill remove */}
              <section id="remove" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill remove</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Delete a skill from the skills directory.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Usage</h3>
                <CodeBlock code={`openskill remove <name>`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Example</h3>
                <CodeBlock code={`$ openskill remove "old-skill"
✓ Removed skill: old-skill`} />
              </section>

              {/* Skill Format */}
              <section id="skill-format" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Skill Format</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Skills are stored as YAML files in <code className="text-[#FF6B35]">.claude/skills/</code> directory.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">File Structure</h3>
                <CodeBlock code={`.claude/
└── skills/
    ├── code-review.yaml
    ├── bug-finder.yaml
    └── test-writer.yaml`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">YAML Schema</h3>
                <CodeBlock code={`name: code-review
description: >
  Comprehensive code review focusing on security,
  performance, and maintainability best practices.
rules:
  - Check for security vulnerabilities
  - Verify proper error handling
  - Ensure code follows conventions
  - Review test coverage`} language="yaml" />
              </section>

              {/* AI Generation */}
              <section id="ai-generation" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">AI Generation</h2>
                <p className="text-[#8B8B9E] mb-4">
                  OpenSkill uses Groq&apos;s LLM to automatically generate comprehensive skill content
                  from simple descriptions.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">How It Works</h3>
                <ol className="list-decimal list-inside text-[#8B8B9E] space-y-2 mb-4">
                  <li>You provide a skill name and brief description</li>
                  <li>OpenSkill sends the info to Groq&apos;s API</li>
                  <li>The AI generates a detailed description and relevant rules</li>
                  <li>The enhanced skill is saved to your skills directory</li>
                </ol>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Fallback Behavior</h3>
                <p className="text-[#8B8B9E] mb-4">
                  If the API is unavailable or you use <code className="text-[#FF6B35]">--manual</code>,
                  OpenSkill falls back to using your provided description and rules directly.
                </p>
              </section>

              {/* Examples */}
              <section id="examples" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Examples</h2>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Creating a Code Review Skill</h3>
                <CodeBlock code={`$ openskill add "code-review" -d "Reviews code for best practices"

Generating skill with AI...

✓ Added skill: code-review
  Description: Comprehensive code review focusing on security, performance, and maintainability
  Rules:
    1. Check for security vulnerabilities (XSS, SQL injection, etc.)
    2. Verify proper error handling and edge cases
    3. Ensure code follows project conventions
    4. Review test coverage and quality`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Creating a Documentation Skill</h3>
                <CodeBlock code={`$ openskill add "doc-writer" -d "Writes technical documentation"

Generating skill with AI...

✓ Added skill: doc-writer
  Description: Creates clear, comprehensive technical documentation for code and APIs
  Rules:
    1. Include code examples for all functions
    2. Document parameters and return values
    3. Add usage examples and edge cases
    4. Keep language clear and concise`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Workflow Example</h3>
                <CodeBlock code={`# Create a skill
openskill add "api-designer" -d "Designs RESTful APIs"

# View all skills
openskill list

# Check skill details
openskill show "api-designer"

# Update the skill
openskill edit "api-designer" -r "Follow REST conventions" -r "Use proper HTTP methods"

# Remove if no longer needed
openskill remove "api-designer"`} />
              </section>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
