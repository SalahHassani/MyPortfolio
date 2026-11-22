import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Zap,
  ChevronRight,
  FileText,
  Copy,
  Check,
  Github,
  Linkedin,
  Mail,
  GitBranch,
  ExternalLink
} from 'lucide-react';

export default function Hero({
  personal,
  githubHighlights,
  projectCount,
  profilePicSrc,
  imgError,
  setImgError,
  copiedEmail,
  onCopyEmail,
  onScrollToSection,
  onOpenCv
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 28 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentFullText.length) {
        setDisplayedRole(currentFullText.slice(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 1700);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(currentFullText.slice(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, personal.roles]);

  return (
    <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-24 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#182B49] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#3867F5]" />
                <span>{personal.location}</span>
                <span className="text-[#94A3B8]">•</span>
                <span>{personal.university}</span>
              </div>

              <button
                onClick={() => onScrollToSection("projects")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F07845]/10 border border-[#F07845]/30 text-[#C2410C] text-xs font-mono font-medium hover:bg-[#F07845]/15 transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-[#F07845]" />
                <span>Building: AI Coding Tutorial Site</span>
              </button>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-[#182B49]">
                Salah Uddin{" "}
                <span className="text-[#3867F5]">Hassani</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#182B49]/90 leading-snug">
                {personal.headline}
              </p>
            </div>

            <div className="h-7 flex items-center font-mono text-sm sm:text-[15px] text-[#182B49]">
              <span className="text-[#3867F5] font-semibold mr-2">$</span>
              <span>{displayedRole}</span>
              <span className="w-2 h-4 bg-[#F07845] ml-1 animate-pulse" />
            </div>

            <p className="text-[#334155] text-base sm:text-[17px] leading-[1.75] max-w-2xl">
              {personal.bio}
            </p>

            <div className="grid grid-cols-3 gap-3.5 max-w-xl pt-1">
              <div className="surface-card rounded-xl p-3.5 border-l-4 border-l-[#182B49]">
                <span className="font-heading text-base sm:text-lg font-extrabold text-[#182B49] block">
                  {projectCount} Projects
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">
                  AI, CV, Diffusion &amp; Lab
                </span>
              </div>
              <div className="surface-card rounded-xl p-3.5 border-l-4 border-l-[#3867F5]">
                <span className="font-heading text-base sm:text-lg font-extrabold text-[#182B49] block">
                  4.22 / 5.0
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">
                  ELTE CS Honors GPA
                </span>
              </div>
              <div className="surface-card rounded-xl p-3.5 border-l-4 border-l-[#F07845]">
                <span className="font-heading text-base sm:text-lg font-extrabold text-[#182B49] block">
                  5 Languages
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">
                  EN, UR, BRH, HI, DE
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onScrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#3867F5] hover:bg-[#2954D8] text-white shadow-sm transition-colors"
              >
                <span>Explore Featured Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#182B49] hover:bg-[#223B63] text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-[#F07845]" />
                <span>Curriculum Vitae</span>
              </button>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs sm:text-sm bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#182B49] border border-[#CBD5E1] transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#16A34A]" />
                    <span className="text-[#15803D] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#3867F5]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs sm:text-sm text-[#475569]">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3867F5] transition-colors"
              >
                <Github className="w-4 h-4 text-[#182B49]" />
                <span className="font-mono">github.com/SalahHassani (SHassani)</span>
              </a>
              <span className="text-[#CBD5E1] hidden sm:inline">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3867F5] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#3867F5]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#CBD5E1] hidden sm:inline">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 hover:text-[#3867F5] transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-[#F07845]" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#182B49] text-white p-6 shadow-md border border-[#182B49] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#3867F5]" />

              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F07845]" />
                <span>Open to AI &amp; Data Science Roles • Berlin</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl p-[2px] bg-[#3867F5] shrink-0">
                  {!imgError ? (
                    <img
                      src={profilePicSrc}
                      alt={personal.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover rounded-[14px] bg-[#182B49]"
                    />
                  ) : (
                    <div className="w-full h-full rounded-[14px] bg-[#182B49] flex items-center justify-center">
                      <span className="text-2xl font-mono font-bold text-white">
                        {personal.initials}
                      </span>
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-white truncate">
                      {personal.name}
                    </h2>
                    <a
                      href={githubHighlights.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#3867F5] text-white transition-colors shrink-0"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>@{githubHighlights.displayName}</span>
                    </a>
                  </div>
                  <p className="text-xs font-mono text-[#93C5FD] mt-0.5">
                    M.Sc. Data Science @ FU Berlin
                  </p>
                  <p className="text-xs font-mono text-slate-300 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F07845] shrink-0" />
                    <span>{personal.location} • Stipendium Hungaricum Alumni</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-white/[0.07] border border-white/15">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[#F07845] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#F07845]" />
                    CURRENTLY BUILDING
                  </span>
                  <span className="text-slate-300">2026</span>
                </div>
                <h3 className="text-sm font-bold text-white">
                  AI Coding Tutorial Platform
                </h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Interactive AI-assisted programming learning platform combining structured lessons with Gemini &amp; LangChain code mentorship.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2.5">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <GitBranch className="w-3.5 h-3.5 text-[#3867F5]" />
                    <span>GitHub Highlights (@SalahHassani)</span>
                  </span>
                  <a
                    href={githubHighlights.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#93C5FD] hover:text-white hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {githubHighlights.pinnedFocus.map((repo) => (
                    <a
                      key={repo.name}
                      href={githubHighlights.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#101F36] border border-white/10 hover:border-[#3867F5] transition-colors group block"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-mono font-semibold text-white group-hover:text-[#93C5FD] truncate">
                          {repo.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                        {repo.desc}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/10 text-[10px] font-mono">
                        <span className="text-[#93C5FD]">{repo.lang}</span>
                        <span className="text-[#FDBA74]">{repo.status}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}