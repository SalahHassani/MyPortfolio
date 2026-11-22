import React, { useEffect, useRef } from 'react';
import { X, Star, Sparkle, Globe, Github } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeButtonRef.current?.focus();
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 bg-[#182B49]/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto text-[#182B49]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#182B49] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#182B49] text-white">
                {project.category}
              </span>
              {project.inProgress && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F07845]" />
                  In Progress
                </span>
              )}
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

            <p className="text-xs font-mono font-medium text-[#3867F5]">
              {project.subtitle}
            </p>
            <h3
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-[#182B49]"
            >
              {project.title}
            </h3>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
              Project Overview
            </h4>
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
              Objective &amp; Focus
            </h4>
            <p className="text-[#334155] text-sm leading-relaxed bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
              {project.shortDesc}
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 sm:p-5 space-y-2.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49] flex items-center gap-1.5">
              <Sparkle className="w-3.5 h-3.5 text-[#F07845]" />
              <span>Technical Implementation &amp; Architecture</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
              {project.architecture.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#3867F5] font-mono font-semibold shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[#F8FAFC] text-[#182B49] border border-[#E2E8F0]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
              Project Label &amp; Status
            </h4>
            <p className="text-xs font-mono text-[#182B49] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2">
              {project.metrics}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E2E8F0]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
              >
                <Globe className="w-4 h-4" />
                <span>Open Live Application</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#182B49] hover:bg-[#223B63] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {!project.githubUrl && !project.liveUrl && (
              <span className="text-xs font-mono text-[#64748B]">
                {project.inProgress
                  ? "Currently in active development — public repository/live link not yet available."
                  : "Standalone repository or live deployment link not listed in portfolio data."}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#182B49] border border-[#CBD5E1] transition-colors ml-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}