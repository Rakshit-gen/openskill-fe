"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

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

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const TestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const DocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const DebugIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 2 1.88 1.88" />
    <path d="M14.12 3.88 16 2" />
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
    <path d="M12 20v-9" />
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
    <path d="M6 13H2" />
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
    <path d="M22 13h-4" />
    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
  </svg>
);

const ApiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-8 8.5-4.5-1-8-3.5-8-8.5V4l8-2 8 2Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const RefactorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

const GitIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>
);

const PerformanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Skill data
interface Skill {
  id: string;
  name: string;
  description: string;
  author: string;
  downloads: number;
  stars: number;
  tags: string[];
  icon: React.ReactNode;
  featured?: boolean;
  isNew?: boolean;
}

const skills: Skill[] = [
  {
    id: "code-review",
    name: "code-review",
    description: "Comprehensive code review with security checks, performance analysis, and best practices enforcement.",
    author: "openskill",
    downloads: 2847,
    stars: 156,
    tags: ["review", "security", "quality"],
    icon: <CodeIcon />,
    featured: true,
  },
  {
    id: "write-tests",
    name: "write-tests",
    description: "Generate comprehensive unit tests with edge cases, mocking, and coverage optimization.",
    author: "openskill",
    downloads: 1923,
    stars: 98,
    tags: ["testing", "jest", "pytest"],
    icon: <TestIcon />,
    featured: true,
  },
  {
    id: "debug-helper",
    name: "debug-helper",
    description: "Systematic debugging workflow with root cause analysis and fix suggestions.",
    author: "openskill",
    downloads: 1654,
    stars: 87,
    tags: ["debugging", "troubleshooting"],
    icon: <DebugIcon />,
  },
  {
    id: "api-designer",
    name: "api-designer",
    description: "Design RESTful APIs with OpenAPI specs, versioning strategies, and documentation.",
    author: "openskill",
    downloads: 1432,
    stars: 76,
    tags: ["api", "rest", "openapi"],
    icon: <ApiIcon />,
  },
  {
    id: "doc-writer",
    name: "doc-writer",
    description: "Generate clear documentation with examples, API references, and usage guides.",
    author: "openskill",
    downloads: 1876,
    stars: 112,
    tags: ["documentation", "markdown"],
    icon: <DocIcon />,
    featured: true,
  },
  {
    id: "security-audit",
    name: "security-audit",
    description: "OWASP-based security scanning for vulnerabilities, secrets detection, and compliance checks.",
    author: "openskill",
    downloads: 987,
    stars: 64,
    tags: ["security", "owasp", "audit"],
    icon: <SecurityIcon />,
    isNew: true,
  },
  {
    id: "refactor-pro",
    name: "refactor-pro",
    description: "Intelligent refactoring suggestions with design pattern recommendations.",
    author: "community",
    downloads: 756,
    stars: 43,
    tags: ["refactoring", "patterns"],
    icon: <RefactorIcon />,
  },
  {
    id: "git-commit",
    name: "git-commit",
    description: "Generate semantic commit messages following conventional commits specification.",
    author: "community",
    downloads: 2156,
    stars: 134,
    tags: ["git", "commits"],
    icon: <GitIcon />,
  },
  {
    id: "perf-optimizer",
    name: "perf-optimizer",
    description: "Performance profiling and optimization suggestions for faster code.",
    author: "community",
    downloads: 634,
    stars: 38,
    tags: ["performance", "optimization"],
    icon: <PerformanceIcon />,
    isNew: true,
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "review", label: "Code Review" },
  { id: "testing", label: "Testing" },
  { id: "security", label: "Security" },
  { id: "documentation", label: "Docs" },
  { id: "git", label: "Git" },
];

function SkillCard({ skill }: { skill: Skill }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`openskill import openskill/${skill.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-[#1A1A24] border-[#2A2A38] hover:border-[#FF6B35]/50 transition-all duration-300 group h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2A2A38] flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-[#0A0A0F] transition-colors">
              {skill.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[#F5F5F0]">/{skill.name}</h3>
                {skill.featured && (
                  <Badge className="bg-[#FF6B35]/20 text-[#FF6B35] border-0 text-xs">Featured</Badge>
                )}
                {skill.isNew && (
                  <Badge className="bg-[#00D9A5]/20 text-[#00D9A5] border-0 text-xs">New</Badge>
                )}
              </div>
              <p className="text-xs text-[#8B8B9E]">by {skill.author}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-[#8B8B9E] mb-4 flex-grow">{skill.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-[#2A2A38] text-[#8B8B9E] rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#2A2A38]">
          <div className="flex items-center gap-4 text-xs text-[#8B8B9E]">
            <span className="flex items-center gap-1">
              <DownloadIcon />
              {skill.downloads.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 text-[#FFD700]">
              <StarIcon />
              {skill.stars}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-[#2A2A38] hover:bg-[#FF6B35] text-[#8B8B9E] hover:text-[#0A0A0F] rounded transition-colors cursor-pointer"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied!" : "Install"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function MarketplacePage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"downloads" | "stars" | "newest">("downloads");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredSkills = skills
    .filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "all" ||
        skill.tags.some((tag) => tag.toLowerCase().includes(selectedCategory.toLowerCase()));

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "downloads") return b.downloads - a.downloads;
      if (sortBy === "stars") return b.stars - a.stars;
      return 0;
    });

  const featuredSkills = skills.filter((s) => s.featured);

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header */}
          <div className={`text-center mb-12 ${mounted ? "animate-slide-up" : "opacity-0"}`}>
            <Badge className="mb-4 bg-[#FF6B35]/20 text-[#FF6B35]">
              Skill Marketplace
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F0] mb-4">
              Discover & Share Skills
            </h1>
            <p className="text-xl text-[#8B8B9E] max-w-2xl mx-auto">
              Browse community-created skills or share your own. Import with one command.
            </p>
          </div>

          {/* Search & Filters */}
          <div className={`mb-8 ${mounted ? "animate-slide-up stagger-1" : "opacity-0"}`}>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#F5F5F0] placeholder-[#8B8B9E] focus:border-[#FF6B35] focus:outline-none transition-colors"
                  style={{ paddingLeft: "2.5rem" }}
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B8B9E]">
                  <SearchIcon />
                </div>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-4 py-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#F5F5F0] focus:border-[#FF6B35] focus:outline-none cursor-pointer"
              >
                <option value="downloads">Most Downloads</option>
                <option value="stars">Most Stars</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#FF6B35] text-[#0A0A0F]"
                      : "bg-[#1A1A24] text-[#8B8B9E] hover:text-[#F5F5F0] border border-[#2A2A38] hover:border-[#FF6B35]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Skills */}
          {selectedCategory === "all" && searchQuery === "" && (
            <div className={`mb-12 ${mounted ? "animate-slide-up stagger-2" : "opacity-0"}`}>
              <h2 className="text-xl font-semibold text-[#F5F5F0] mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]"><StarIcon /></span>
                Featured Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {featuredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {/* All Skills */}
          <div className={mounted ? "animate-slide-up stagger-3" : "opacity-0"}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#F5F5F0]">
                {selectedCategory === "all" ? "All Skills" : `${categories.find(c => c.id === selectedCategory)?.label}`}
              </h2>
              <span className="text-sm text-[#8B8B9E]">{filteredSkills.length} skills</span>
            </div>

            {filteredSkills.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-[#1A1A24] border border-[#2A2A38] rounded-lg">
                <p className="text-[#8B8B9E] mb-4">No skills found matching your search.</p>
                <Button
                  variant="outline"
                  className="border-[#2A2A38] text-[#F5F5F0]"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Share CTA */}
          <div className={`mt-16 p-8 bg-gradient-to-r from-[#1A1A24] to-[#2A2A38] border border-[#2A2A38] rounded-xl text-center ${mounted ? "animate-slide-up stagger-4" : "opacity-0"}`}>
            <h2 className="text-2xl font-bold text-[#F5F5F0] mb-2">Share Your Skills</h2>
            <p className="text-[#8B8B9E] mb-6 max-w-lg mx-auto">
              Created an awesome skill? Share it with the community and help others work smarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <code className="px-4 py-2 bg-[#0A0A0F] border border-[#2A2A38] rounded-lg text-[#FF6B35] font-mono text-sm">
                openskill share my-skill
              </code>
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#0A0A0F]">
                Learn More
              </Button>
            </div>
          </div>

          {/* Import Instructions */}
          <div className={`mt-8 p-6 bg-[#1A1A24] border border-[#2A2A38] rounded-lg ${mounted ? "animate-slide-up stagger-5" : "opacity-0"}`}>
            <h3 className="text-lg font-semibold text-[#F5F5F0] mb-4">How to Install Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-[#FF6B35] font-mono text-sm mb-2">From Marketplace</div>
                <code className="block text-xs text-[#8B8B9E] bg-[#0A0A0F] p-2 rounded">
                  openskill import openskill/code-review
                </code>
              </div>
              <div>
                <div className="text-[#FF6B35] font-mono text-sm mb-2">From GitHub</div>
                <code className="block text-xs text-[#8B8B9E] bg-[#0A0A0F] p-2 rounded">
                  openskill import user/repo
                </code>
              </div>
              <div>
                <div className="text-[#FF6B35] font-mono text-sm mb-2">With AI Enhancement</div>
                <code className="block text-xs text-[#8B8B9E] bg-[#0A0A0F] p-2 rounded">
                  openskill import user/repo --improve
                </code>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
