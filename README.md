# OpenSkill Landing Page

The official landing page and documentation site for OpenSkill CLI.

## About OpenSkill

OpenSkill is a command-line tool for creating and managing Claude skills with AI-powered content generation. It supports multiple AI providers and uses Claude's native SKILL.md format.

## Features

- **Multi-Provider AI**: Groq, OpenAI, Anthropic, and Ollama (local)
- **SKILL.md Format**: Markdown with YAML frontmatter for Claude's native skill discovery
- **Version History**: Track changes with automatic versioning and rollback
- **Skill Composition**: Extend and combine skills with `extends` and `includes`
- **Validation**: Validate skill structure before deploying

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Custom CSS animations

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Pages

- `/` - Home page with terminal demo
- `/docs` - Documentation
- `/install` - Installation guide

## CLI Installation

### macOS (Apple Silicon)
```bash
curl -L https://github.com/rakshit-gen/openskill/releases/download/v0.1.0/openskill_darwin_arm64.tar.gz | tar xz
sudo mv openskill /usr/local/bin/
```

### Quick Start
```bash
# Initialize OpenSkill
openskill init

# Set up your AI provider
openskill config set provider groq    # or: openai, anthropic, ollama
openskill config set api-key

# Create a skill
openskill add "code-review" -d "Reviews code for best practices"

# View skills
openskill list
```

## Skill Format

Skills are stored as `SKILL.md` files in `.claude/skills/<name>/`:

```markdown
---
name: code-review
description: Comprehensive code review focusing on security
---

# code-review

## Rules

- Check for security vulnerabilities
- Verify proper error handling
- Ensure code follows conventions
```

## License

MIT
