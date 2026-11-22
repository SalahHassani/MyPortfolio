import React from 'react';
import {
  Star,
  Code2,
  Github,
  Globe,
  ArrowUpRight,
  Layers
} from 'lucide-react';

export default function ProjectCard({
  project,
  index = 0,
  variant = "standard",
  onSelectProject
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectProject(project);
    }
  };

  if (variant === "featured") {
    return (
      <article
        onClick={() => onSelectProject(project)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Inspect ${project.title} details`}
        className="rounded-2xl bg-[#182B49] text-white border border-[#182B49] hover:border-[#3867F5] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
      >
        <div>
          <div
            className={`h-1.5 w-full ${
              project.inProgress ? "bg-[#F07845]" : "bg-[#3867F5]"
            }`}
          />

          <div className="p-6 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-white/10 text-[#93C5FD] border border-white/15">
                {project.category}
              </span>
              {project.inProgress ? (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F07845] text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  In Progress
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#3867F5]/25 text-[#93C5FD] border border-[#3867F5]/40">
                  <Star className="w-3 h-3 fill-[#F07845] text-[#F07845]" />
                  Featured
                </span>
              )}
            </div>

            <p className="text-[11px] font-mono text-slate-300 mb-1">
              {project.subtitle}
            </p>

            <h3 className="text-xl font-extrabold text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-slate-200 text-sm leading-relaxed mt-2.5">
              {project.shortDesc}
            </p>

            <div className="mt-4 p-3 rounded-xl bg-white/[0.06] border border-white/10">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#93C5FD] mb-1.5">
                <Code2 className="w-3 h-3 text-[#F07845]" />
                <span>Key Implementation</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                {project.architecture[0]}
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-3 border-t border-white/10 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-slate-100 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 hover:bg-[#3867F5] text-white border border-white/15 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live App</span>
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && project.inProgress && (
                <span className="text-[11px] font-mono text-[#FDBA74]">
                  Active build • Repo &amp; live URL not yet public
                </span>
              )}
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#93C5FD] group-hover:text-white ml-auto">
              <span>Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelectProject(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open architecture details for ${project.title}`}
      className={`surface-card surface-card-interactive rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] ${
        project.inProgress
          ? "border-t-4 border-t-[#F07845]"
          : project.featured
          ? "border-t-4 border-t-[#3867F5]"
          : ""
      }`}
    >
      <div>
        <div className="px-6 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between gap-2 text-[11px] font-mono text-[#64748B]">
          <span className="inline-flex items-center gap-1.5 truncate">
            <Layers className="w-3.5 h-3.5 text-[#3867F5] shrink-0" />
            <span className="truncate">{project.metrics}</span>
          </span>
          <span className="shrink-0 text-[#94A3B8]">SPEC • NO PREVIEW IMG</span>
        </div>

        <div className="p-6 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-[#182B49] text-white">
                {project.category}
              </span>
              {project.inProgress && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F07845]" />
                  In Progress
                </span>
              )}
              {project.featured && !project.inProgress && (
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>
          </div>

          <p className="text-xs font-mono text-[#3867F5] font-medium mb-1">
            {project.subtitle}
          </p>

          <h3 className="text-xl font-extrabold text-[#182B49] group-hover:text-[#3867F5] transition-colors flex items-start justify-between gap-2 leading-snug">
            <span>
              <span className="text-[#94A3B8] font-mono text-base mr-2">
                {String(index + 1).padStart(2, "0")}.
              </span>
              {project.title}
            </span>
            <ArrowUpRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#3867F5] shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>

          <p className="text-[#334155] text-sm sm:text-[15px] leading-[1.65] mt-2.5">
            {project.shortDesc}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-[#E2E8F0] space-y-3.5">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#182B49] border border-[#E2E8F0] group-hover:border-[#CBD5E1] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
          <div className="flex flex-wrap items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#F8FAFC] hover:bg-[#182B49] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#3867F5]/10 hover:bg-[#3867F5] text-[#3867F5] hover:text-white border border-[#3867F5]/25 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <span className="text-xs font-mono font-semibold text-[#3867F5] ml-auto">
            Inspect Details →
          </span>
        </div>
      </div>
    </article>
  );
}