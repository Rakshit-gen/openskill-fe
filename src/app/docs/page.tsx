"use client";

import { useState, useEffect } from "react";
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

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}
  >
    <polyline points="9 18 15 12 9 6" />
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
      <div className="bg-[#1A1A24] border border-[#2A2A38] rounded-lg p-4 pr-12 hover:border-[#FF6B35]/50 transition-colors duration-300">
        <pre className="overflow-x-auto scrollbar-hide">
          <code className="text-sm font-mono text-[#F5F5F0] whitespace-pre">{code}</code>
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-[#2A2A38] rounded opacity-0 group-hover:opacity-100 transition-opacity text-[#8B8B9E] hover:text-[#F5F5F0] hover-scale z-10 cursor-pointer"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
}

function SidebarLink({ href, label, active, indent = false }: { href: string; label: string; active: boolean; indent?: boolean }) {
  return (
    <a
      href={href}
      className={`block py-1.5 text-sm rounded-md transition-colors ${
        indent ? "pl-6 pr-3" : "px-3"
      } ${
        active
          ? "text-[#FF6B35] bg-[#FF6B35]/10"
          : "text-[#8B8B9E] hover:text-[#F5F5F0] hover:bg-[#1A1A24]"
      }`}
    >
      {label}
    </a>
  );
}

function SidebarSection({
  title,
  items,
  activeSection,
  defaultOpen = false,
}: {
  title: string;
  items: { id: string; label: string }[];
  activeSection: string;
  defaultOpen?: boolean;
}) {
  const hasActiveChild = items.some((item) => item.id === activeSection);
  const [isOpen, setIsOpen] = useState(defaultOpen || hasActiveChild);

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[#F5F5F0] hover:bg-[#1A1A24] rounded-md transition-colors"
      >
        <span>{title}</span>
        <ChevronIcon open={isOpen} />
      </button>
      {isOpen && (
        <div className="mt-1 space-y-0.5">
          {items.map((item) => (
            <SidebarLink
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              active={activeSection === item.id}
              indent
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sidebarStructure = {
    gettingStarted: [
      { id: "overview", label: "Overview" },
      { id: "installation", label: "Installation" },
      { id: "configuration", label: "Configuration" },
    ],
    commands: [
      { id: "commands", label: "Overview" },
      { id: "init", label: "init" },
      { id: "add", label: "add" },
      { id: "list", label: "list" },
      { id: "show", label: "show" },
      { id: "edit", label: "edit" },
      { id: "remove", label: "remove" },
      { id: "validate", label: "validate" },
    ],
    templates: [
      { id: "templates", label: "Overview" },
      { id: "template-list", label: "template list" },
      { id: "template-use", label: "template use" },
    ],
    versioning: [
      { id: "history", label: "history" },
      { id: "rollback", label: "rollback" },
      { id: "diff", label: "diff" },
    ],
    organization: [
      { id: "tags", label: "Tags" },
      { id: "groups", label: "Groups" },
      { id: "workspace", label: "Workspaces" },
    ],
    importExport: [
      { id: "export", label: "export" },
      { id: "import", label: "import" },
      { id: "sync", label: "sync" },
    ],
    ai: [
      { id: "test", label: "test" },
      { id: "improve", label: "improve" },
      { id: "explain", label: "explain" },
    ],
    skills: [
      { id: "skill-format", label: "Skill Format" },
      { id: "skill-composition", label: "Composition" },
      { id: "context-providers", label: "Context Providers" },
      { id: "hooks", label: "Hooks" },
    ],
    advanced: [
      { id: "ai-generation", label: "AI Generation" },
      { id: "examples", label: "Examples" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className={`hidden lg:block w-64 flex-shrink-0 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="sticky top-24">
              <h4 className="text-[#F5F5F0] font-semibold mb-4 px-3">Documentation</h4>
              <nav className="space-y-1">
                <SidebarSection
                  title="Getting Started"
                  items={sidebarStructure.gettingStarted}
                  activeSection={activeSection}
                  defaultOpen
                />
                <SidebarSection
                  title="Core Commands"
                  items={sidebarStructure.commands}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="Templates"
                  items={sidebarStructure.templates}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="Version History"
                  items={sidebarStructure.versioning}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="Organization"
                  items={sidebarStructure.organization}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="Import / Export"
                  items={sidebarStructure.importExport}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="AI Commands"
                  items={sidebarStructure.ai}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="Skills"
                  items={sidebarStructure.skills}
                  activeSection={activeSection}
                />
                <SidebarSection
                  title="Advanced"
                  items={sidebarStructure.advanced}
                  activeSection={activeSection}
                />
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className={`flex-1 min-w-0 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="prose prose-invert max-w-none">
              {/* Overview */}
              <section id="overview" className="mb-16">
                <h1 className="text-4xl font-bold text-[#F5F5F0] mb-4">OpenSkill CLI Documentation</h1>
                <p className="text-[#8B8B9E] text-lg mb-6">
                  OpenSkill is a command-line tool for creating and managing Claude skills with
                  AI-powered content generation. It simplifies the process of building reusable
                  skill definitions that enhance Claude&apos;s capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">Go</Badge>
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">CLI</Badge>
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">AI-Powered</Badge>
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">Templates</Badge>
                  <Badge className="bg-[#2A2A38] text-[#F5F5F0] hover-scale cursor-default">Version Control</Badge>
                </div>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">What&apos;s New in v0.3.0</h3>
                <ul className="list-disc list-inside text-[#8B8B9E] space-y-2">
                  <li><strong>Skill Templates</strong> - Pre-built templates for common use cases</li>
                  <li><strong>Tags & Groups</strong> - Organize skills by category</li>
                  <li><strong>Workspaces</strong> - Project-specific skill configuration</li>
                  <li><strong>Import/Export</strong> - Share skills in JSON, YAML, or Markdown</li>
                  <li><strong>AI Commands</strong> - Test, improve, and explain skills with AI</li>
                  <li><strong>Sync</strong> - Back up skills to Git repositories</li>
                  <li><strong>Context Providers</strong> - Define how skills gather context</li>
                  <li><strong>Hooks</strong> - Pre/post execution commands</li>
                </ul>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Installation</h2>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">macOS (Apple Silicon)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.3.0/openskill_darwin_arm64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">macOS (Intel)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.3.0/openskill_darwin_amd64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Linux (x86_64)</h3>
                <CodeBlock code={`curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.3.0/openskill_linux_amd64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">From Source</h3>
                <CodeBlock code={`git clone https://github.com/rakshit-gen/openskill.git
cd openskill/OpenSkill-cli
make build
sudo mv build/openskill /usr/local/bin/`} />
              </section>

              {/* Configuration */}
              <section id="configuration" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Configuration</h2>
                <p className="text-[#8B8B9E] mb-4">
                  OpenSkill supports multiple AI providers for skill generation: Groq, OpenAI, Anthropic, and Ollama (local).
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Supported Providers</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#2A2A38]">
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Provider</th>
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Default Model</th>
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">API Key</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#8B8B9E]">
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">groq</td>
                        <td className="py-3 px-4">llama-3.3-70b-versatile</td>
                        <td className="py-3 px-4"><a href="https://console.groq.com" className="text-[#00D9A5] hover:underline">console.groq.com</a></td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">openai</td>
                        <td className="py-3 px-4">gpt-4o-mini</td>
                        <td className="py-3 px-4"><a href="https://platform.openai.com" className="text-[#00D9A5] hover:underline">platform.openai.com</a></td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">anthropic</td>
                        <td className="py-3 px-4">claude-3-5-sonnet-20241022</td>
                        <td className="py-3 px-4"><a href="https://console.anthropic.com" className="text-[#00D9A5] hover:underline">console.anthropic.com</a></td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">ollama</td>
                        <td className="py-3 px-4">llama3.2</td>
                        <td className="py-3 px-4">No API key (local)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Quick Setup</h3>
                <CodeBlock code={`# Set provider and API key
openskill config set provider groq
openskill config set api-key

# View configuration
openskill config list`} />
              </section>

              {/* Commands Overview */}
              <section id="commands" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Commands Overview</h2>
                <p className="text-[#8B8B9E] mb-6">
                  OpenSkill v0.3.0 includes 20+ commands organized by category:
                </p>

                <div className="grid gap-4">
                  {[
                    { cmd: "init", desc: "Initialize OpenSkill in your project" },
                    { cmd: "add", desc: "Create a new skill with AI generation" },
                    { cmd: "list", desc: "List skills (with tag/group filters)" },
                    { cmd: "show", desc: "Display skill details" },
                    { cmd: "edit", desc: "Modify an existing skill" },
                    { cmd: "remove", desc: "Delete a skill" },
                    { cmd: "validate", desc: "Validate skill structure" },
                    { cmd: "template", desc: "Manage skill templates" },
                    { cmd: "history", desc: "Show version history" },
                    { cmd: "rollback", desc: "Restore previous version" },
                    { cmd: "diff", desc: "Compare skill versions" },
                    { cmd: "tag", desc: "Manage skill tags" },
                    { cmd: "group", desc: "Manage skill groups" },
                    { cmd: "workspace", desc: "Project-specific config" },
                    { cmd: "export", desc: "Export to JSON/YAML" },
                    { cmd: "import", desc: "Import from file/URL" },
                    { cmd: "sync", desc: "Sync with Git repository" },
                    { cmd: "test", desc: "Test a skill with AI" },
                    { cmd: "improve", desc: "AI-powered improvements" },
                    { cmd: "explain", desc: "AI-powered explanation" },
                  ].map((item, index) => (
                    <div
                      key={item.cmd}
                      className="flex items-center gap-4 p-4 bg-[#1A1A24] border border-[#2A2A38] rounded-lg hover:border-[#FF6B35] hover-lift transition-all duration-300"
                    >
                      <code className="text-[#FF6B35] font-mono min-w-[180px]">openskill {item.cmd}</code>
                      <span className="text-[#8B8B9E]">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* openskill init */}
              <section id="init" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill init</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Initialize OpenSkill in your project. Creates the necessary directory structure.
                </p>
                <CodeBlock code={`openskill init`} />
              </section>

              {/* openskill add */}
              <section id="add" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill add</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Create a new skill with AI-powered content generation.
                </p>
                <CodeBlock code={`# AI-powered creation
openskill add "code-review" -d "Reviews code for best practices"

# Manual creation
openskill add "my-skill" -d "Description" --manual -r "Rule 1" -r "Rule 2"`} />
              </section>

              {/* openskill list */}
              <section id="list" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill list</h2>
                <p className="text-[#8B8B9E] mb-4">
                  List all skills with optional filtering by tag or group.
                </p>
                <CodeBlock code={`# List all skills
openskill list

# Filter by tag
openskill list --tag security

# Filter by group
openskill list --group development

# Verbose output
openskill list -v`} />
              </section>

              {/* openskill show */}
              <section id="show" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill show</h2>
                <CodeBlock code={`openskill show "code-review"`} />
              </section>

              {/* openskill edit */}
              <section id="edit" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill edit</h2>
                <CodeBlock code={`openskill edit "code-review" -d "New description" -r "New rule"`} />
              </section>

              {/* openskill remove */}
              <section id="remove" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill remove</h2>
                <CodeBlock code={`openskill remove "old-skill"`} />
              </section>

              {/* openskill validate */}
              <section id="validate" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill validate</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Validate a skill&apos;s structure and check for common issues.
                </p>
                <CodeBlock code={`openskill validate "code-review"`} />
              </section>

              {/* Templates */}
              <section id="templates" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Skill Templates</h2>
                <p className="text-[#8B8B9E] mb-4">
                  OpenSkill includes pre-built templates for common use cases. Templates provide
                  professionally designed skills you can use immediately or customize.
                </p>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Available Templates</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#2A2A38]">
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Template</th>
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Category</th>
                        <th className="text-left py-3 px-4 text-[#F5F5F0]">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#8B8B9E]">
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">code-review</td>
                        <td className="py-3 px-4">development</td>
                        <td className="py-3 px-4">Review code for quality, bugs, and best practices</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">commit-message</td>
                        <td className="py-3 px-4">git</td>
                        <td className="py-3 px-4">Generate conventional commit messages</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">documentation</td>
                        <td className="py-3 px-4">docs</td>
                        <td className="py-3 px-4">Write clear technical documentation</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">testing</td>
                        <td className="py-3 px-4">development</td>
                        <td className="py-3 px-4">Write comprehensive test suites</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">debugging</td>
                        <td className="py-3 px-4">development</td>
                        <td className="py-3 px-4">Systematic debugging and root cause analysis</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">api-design</td>
                        <td className="py-3 px-4">architecture</td>
                        <td className="py-3 px-4">Design RESTful APIs</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">security-review</td>
                        <td className="py-3 px-4">security</td>
                        <td className="py-3 px-4">Review code for security vulnerabilities</td>
                      </tr>
                      <tr className="border-b border-[#2A2A38]">
                        <td className="py-3 px-4 font-mono text-[#FF6B35]">refactoring</td>
                        <td className="py-3 px-4">development</td>
                        <td className="py-3 px-4">Improve code structure safely</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* template list */}
              <section id="template-list" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill template list</h2>
                <CodeBlock code={`# List all templates
openskill template list

# Show template details
openskill template show code-review`} />
              </section>

              {/* template use */}
              <section id="template-use" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill template use</h2>
                <CodeBlock code={`# Create skill from template
openskill template use code-review

# Create with custom name
openskill template use code-review my-code-reviewer`} />
              </section>

              {/* history */}
              <section id="history" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill history</h2>
                <p className="text-[#8B8B9E] mb-4">
                  View version history for a skill. Versions are automatically saved when you edit.
                </p>
                <CodeBlock code={`openskill history "code-review"`} />
              </section>

              {/* rollback */}
              <section id="rollback" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill rollback</h2>
                <CodeBlock code={`openskill rollback "code-review" 2`} />
              </section>

              {/* diff */}
              <section id="diff" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill diff</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Compare different versions of a skill to see what changed.
                </p>
                <CodeBlock code={`# Compare current with latest saved version
openskill diff "code-review"

# Compare specific versions
openskill diff "code-review" --v1 1 --v2 3`} />
              </section>

              {/* Tags */}
              <section id="tags" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Tags</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Organize skills with tags for flexible categorization.
                </p>
                <CodeBlock code={`# List all tags
openskill tag list

# Show skills with a tag
openskill tag show security

# Add tags to a skill
openskill tag add code-review quality security

# Remove tags
openskill tag remove code-review security`} />
              </section>

              {/* Groups */}
              <section id="groups" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Groups</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Bundle related skills into groups.
                </p>
                <CodeBlock code={`# List all groups
openskill group list

# Show skills in a group
openskill group show development

# Add skill to a group
openskill group set code-review development

# Remove from group
openskill group unset code-review`} />
              </section>

              {/* Workspace */}
              <section id="workspace" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Workspaces</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Configure project-specific skill settings.
                </p>
                <CodeBlock code={`# Initialize workspace
openskill workspace init my-project

# Show workspace config
openskill workspace show

# Add skill to workspace
openskill workspace add code-review

# Set variable override
openskill workspace set code-review max_issues 10`} />
              </section>

              {/* Export */}
              <section id="export" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill export</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Export skills to JSON, YAML, or Markdown.
                </p>
                <CodeBlock code={`# Export to stdout
openskill export code-review --format json

# Export to file
openskill export code-review --format yaml -o skill.yaml`} />
              </section>

              {/* Import */}
              <section id="import" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill import</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Import skills from files, URLs, or stdin.
                </p>
                <CodeBlock code={`# Import from file
openskill import skill.json

# Import from URL
openskill import https://example.com/skills/review.yaml

# Import from stdin
cat skill.json | openskill import -`} />
              </section>

              {/* Sync */}
              <section id="sync" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill sync</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Synchronize skills with a Git repository for backup and sharing.
                </p>
                <CodeBlock code={`# Set remote repository
openskill sync --remote git@github.com:user/skills.git

# Push changes
openskill sync --push

# Pull changes
openskill sync --pull`} />
              </section>

              {/* Test */}
              <section id="test" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill test</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Test a skill with a sample prompt using AI.
                </p>
                <CodeBlock code={`# Test with a prompt
openskill test code-review --prompt "Review this function: func add(a, b int) int { return a + b }"

# Mock mode (no API call)
openskill test code-review --mock`} />
              </section>

              {/* Improve */}
              <section id="improve" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill improve</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Use AI to analyze and suggest improvements for a skill.
                </p>
                <CodeBlock code={`# Get improvement suggestions
openskill improve code-review

# Apply improvements automatically
openskill improve code-review --apply`} />
              </section>

              {/* Explain */}
              <section id="explain" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">openskill explain</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Get an AI-powered explanation of what a skill does.
                </p>
                <CodeBlock code={`# Basic explanation
openskill explain code-review

# Verbose with examples
openskill explain code-review --verbose`} />
              </section>

              {/* Skill Format */}
              <section id="skill-format" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Skill Format</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Skills are Markdown files with YAML frontmatter in <code className="text-[#FF6B35]">.claude/skills/</code>.
                </p>
                <CodeBlock code={`---
name: code-review
description: Reviews code for quality and best practices
tags:
  - code
  - review
  - quality
group: development
version: "1.0.0"
author: Your Name
output_format: markdown
context:
  files:
    - package.json
  globs:
    - "src/**/*.ts"
  commands:
    - git diff --cached
hooks:
  pre:
    - npm run lint
  post:
    - echo "Review complete"
---

# code-review

Reviews code for quality issues, potential bugs, and adherence to best practices.

## Rules

- Check for security vulnerabilities
- Verify proper error handling
- Ensure consistent code style`} language="markdown" />
              </section>

              {/* Skill Composition */}
              <section id="skill-composition" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Skill Composition</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Build complex skills from simpler ones using extends and includes.
                </p>
                <CodeBlock code={`---
name: security-review
description: Security-focused code review
extends: code-review
---

# security-review

Security-focused extension of the base code review.

## Rules

- Focus on OWASP Top 10
- Check authentication flows`} language="markdown" />
              </section>

              {/* Context Providers */}
              <section id="context-providers" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Context Providers</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Define how skills gather context from your project.
                </p>
                <CodeBlock code={`context:
  files:               # Specific files to read
    - README.md
    - package.json
  globs:               # Glob patterns to match
    - "src/**/*.ts"
    - "tests/**/*.test.ts"
  commands:            # Commands to execute
    - git status
    - npm run lint --silent
  urls:                # URLs to fetch
    - https://api.example.com/schema
  environment:         # Environment variables
    - NODE_ENV
    - API_URL`} language="yaml" />
              </section>

              {/* Hooks */}
              <section id="hooks" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Hooks</h2>
                <p className="text-[#8B8B9E] mb-4">
                  Define commands to run before and after skill execution.
                </p>
                <CodeBlock code={`hooks:
  pre:                 # Run before skill
    - npm run build
    - npm run lint
  post:                # Run after skill
    - npm run test
    - git add .`} language="yaml" />
              </section>

              {/* AI Generation */}
              <section id="ai-generation" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">AI Generation</h2>
                <p className="text-[#8B8B9E] mb-4">
                  OpenSkill uses AI to generate comprehensive skill content from simple descriptions.
                  The generator creates 8-12 specific, actionable rules that are falsifiable and domain-specific.
                </p>
              </section>

              {/* Examples */}
              <section id="examples" className="mb-16">
                <h2 className="text-2xl font-bold text-[#F5F5F0] mb-4">Examples</h2>

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Quick Start Workflow</h3>
                <CodeBlock code={`# Initialize
openskill init

# Create from template
openskill template use code-review

# Customize with tags
openskill tag add code-review security quality

# Test the skill
openskill test code-review --prompt "Review this code..."

# Export for sharing
openskill export code-review --format yaml -o my-review.yaml`} />

                <h3 className="text-lg font-semibold text-[#F5F5F0] mt-6 mb-3">Team Collaboration</h3>
                <CodeBlock code={`# Set up sync
openskill sync --remote git@github.com:team/skills.git

# Make changes
openskill add "team-style" -d "Team coding standards"

# Push to team
openskill sync --push

# Teammates can pull
openskill sync --pull`} />
              </section>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
