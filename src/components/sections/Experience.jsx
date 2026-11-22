import React, { useState, useCallback } from 'react';
import {
  Briefcase,
  GraduationCap,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export default function Experience({ timelineItems }) {
  const [expandedTimelineIds, setExpandedTimelineIds] = useState({
    "edu-msc": true,
    "work-nix": true,
    "edu-bsc": true
  });

  const toggleTimelineItem = useCallback((id) => {
    setExpandedTimelineIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section id="experience" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Academic &amp; Industry Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182B49] tracking-tight">
              Experience &amp; Education
            </h2>
            <p className="text-[#475569] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Combining enterprise backend Java/Spring Boot software engineering at NIX United with graduate Data Science research in Berlin and Computer Science honors in Budapest.
            </p>
          </div>

          {/* Legend distinguishing Current vs. Completed records */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E2E8F0] text-[#182B49]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F07845]" />
              <span>Current Studies</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E2E8F0] text-[#182B49]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3867F5]" />
              <span>Completed</span>
            </span>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-9 border-l-2 border-[#CBD5E1] space-y-6">
          {timelineItems.map((item) => {
            const isExpanded = !!expandedTimelineIds[item.id];
            const isWork = item.type === "work";
            const markerColor = item.isCurrent
              ? "bg-[#F07845] ring-4 ring-[#F07845]/15"
              : "bg-[#3867F5]";

            return (
              <div key={item.id} className="relative">
                {/* Timeline Node Marker */}
                <div
                  aria-hidden="true"
                  className={`absolute -left-[33px] sm:-left-[45px] top-7 w-4 h-4 rounded-full border-2 border-[#FFFFFF] shadow-xs ${markerColor}`}
                />

                <article
                  className={`surface-card rounded-2xl p-6 sm:p-7 transition-colors ${
                    item.isCurrent
                      ? "border-l-4 border-l-[#F07845]"
                      : "border-l-4 border-l-[#3867F5]"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="space-y-2 min-w-0 flex-1">
                      {/* Status, Period & Metadata Row */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold ${
                            item.isCurrent
                              ? "bg-[#F07845] text-white"
                              : "bg-[#F1F5F9] text-[#182B49] border border-[#E2E8F0]"
                          }`}
                        >
                          {item.isCurrent && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                          <span>{item.statusLabel}</span>
                        </span>

                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold ${
                            isWork
                              ? "bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30"
                              : "bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25"
                          }`}
                        >
                          {isWork ? (
                            <Briefcase className="w-3.5 h-3.5" />
                          ) : (
                            <GraduationCap className="w-3.5 h-3.5" />
                          )}
                          <span>{item.period}</span>
                        </span>

                        <span className="text-[#475569]">{item.location}</span>

                        {item.badge && (
                          <span className="px-2.5 py-1 rounded-md bg-[#182B49] text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Degree / Role Heading */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#182B49] pt-1">
                        {item.role}
                      </h3>

                      {/* Institution / Organization (Clickable Link when official URL exists) */}
                      <div className="flex flex-wrap items-center gap-2 text-base font-semibold text-[#3867F5]">
                        {item.websiteUrl ? (
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 hover:text-[#2954D8] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-sm"
                          >
                            <span>{item.organization}</span>
                            <ExternalLink className="w-4 h-4 shrink-0" />
                          </a>
                        ) : (
                          <span>{item.organization}</span>
                        )}
                      </div>
                    </div>

                    {/* Accessible Expand / Collapse Button */}
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`timeline-details-${item.id}`}
                      onClick={() => toggleTimelineItem(item.id)}
                      className="self-start inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#182B49] hover:text-[#3867F5] hover:border-[#3867F5] px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
                    >
                      <span>{isExpanded ? "Hide Highlights" : "Show Highlights"}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed mt-3.5">
                    {item.summary}
                  </p>

                  {item.impactTags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.impactTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#182B49] border border-[#E2E8F0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {isExpanded && (
                    <ul
                      id={`timeline-details-${item.id}`}
                      className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-2.5 text-sm sm:text-[15px] text-[#334155] leading-relaxed"
                    >
                      {item.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="text-[#3867F5] font-mono font-bold mt-0.5"
                          >
                            ▹
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}