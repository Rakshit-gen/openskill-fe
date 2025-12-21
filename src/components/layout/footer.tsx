import Link from "next/link";
import { OpenSkillIcon } from "@/components/icons/logo";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#2A2A38] py-8 px-6 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <OpenSkillIcon size={24} />
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
