import Link from "next/link";

const TerminalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#2A2A38] py-8 px-6 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded bg-[#FF6B35] flex items-center justify-center">
                <TerminalIcon />
              </div>
              <span className="font-semibold text-[#F5F5F0]">OpenSkill CLI</span>
            </div>
            <p className="text-[#8B8B9E] text-sm max-w-md">
              Create and manage Claude skills with AI-powered content generation.
              Build powerful automation workflows in seconds.
            </p>
          </div>

          <div>
            <h4 className="text-[#F5F5F0] font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/install" className="text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/rakshit-gen/openskill/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F5F0] font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/rakshit-gen/openskill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rakshit-gen/openskill/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://console.groq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B8B9E] hover:text-[#F5F5F0] transition-colors"
                >
                  Groq Console
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2A38] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8B9E] text-sm">
            MIT License. Built with Go.
          </p>
          <p className="text-[#8B8B9E] text-sm">
            Made by{" "}
            <a
              href="https://github.com/rakshit-gen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B35] hover:underline"
            >
              Rakshit-gen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
