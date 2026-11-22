import React, { useMemo } from 'react';
import { BarChart3, Layers, GitCommitHorizontal } from 'lucide-react';
import {
  getSkillCategoryCounts,
  getProjectCategoryCounts,
  getProgressionSummary
} from '../../utils/profileStats';

export default function TechnicalVisualizations({
  techStack,
  techCategories,
  projects,
  projectFilterCategories,
  timelineItems,
  onSelectSkillCategory,
  onSelectProjectCategory
}) {
  const skillStats = useMemo(
    () => getSkillCategoryCounts(techStack, techCategories),
    [techStack, techCategories]
  );

  const projectStats = useMemo(
    () => getProjectCategoryCounts(projects, projectFilterCategories),
    [projects, projectFilterCategories]
  );

  const progression = useMemo(
    () => getProgressionSummary(timelineItems),
    [timelineItems]
  );

  const maxSkillCount = Math.max(1, ...skillStats.map((s) => s.count));
  const maxProjectCount = Math.max(1, ...projectStats.map((p) => p.count));
  const featuredCount = projects.filter((p) => p.featured).length;
  const inProgressCount = projects.filter((p) => p.inProgress).length;

  return (
    <section
      id="profile-visualizations"
      aria-label="Technical Profile Visualizations"
      className="py-16 bg-[#FFFFFF] border-t border-[#E2E8F0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>Data-Driven Profile Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182B49] tracking-tight">
              Technical Profile Visualizations
            </h2>
            <p className="text-[#475569] text-sm sm:text-base mt-1.5 max-w-2xl">
              Counts and progression derived directly from existing portfolio records ({techStack.length} stack entries, {projects.length} projects, and {timelineItems.length} academic/industry milestones).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. Technologies per Skill Category */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  <BarChart3 className="w-4 h-4 text-[#3867F5]" />
                  <span>Skills by Category</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#182B49] text-white">
                  {techStack.length} total
                </span>
              </div>

              <div className="space-y-3.5">
                {skillStats.map((stat) => {
                  const widthPct = Math.round((stat.count / maxSkillCount) * 100);
                  return (
                    <button
                      key={stat.category}
                      type="button"
                      onClick={() => onSelectSkillCategory?.(stat.category)}
                      className="w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-lg"
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="font-medium text-[#182B49] group-hover:text-[#3867F5] transition-colors">
                          {stat.category}
                        </span>
                        <span className="font-semibold text-[#182B49]">
                          {stat.count} {stat.count === 1 ? "item" : "items"}
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#3867F5] group-hover:bg-[#2954D8] transition-all duration-300"
                          style={{ width: `${widthPct}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#64748B] mt-5 pt-3 border-t border-[#E2E8F0]">
              Click a category to filter the skill grid above.
            </p>
          </div>

          {/* 2. Projects Across Categories */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  <Layers className="w-4 h-4 text-[#F07845]" />
                  <span>Projects by Category</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25">
                  {projects.length} projects
                </span>
              </div>

              <div className="space-y-3.5">
                {projectStats.map((stat) => {
                  const widthPct = Math.round((stat.count / maxProjectCount) * 100);
                  return (
                    <button
                      key={stat.category}
                      type="button"
                      onClick={() => onSelectProjectCategory?.(stat.category)}
                      className="w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-lg"
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="font-medium text-[#182B49] group-hover:text-[#3867F5] transition-colors">
                          {stat.category}
                        </span>
                        <span className="font-semibold text-[#182B49]">
                          {stat.count} {stat.count === 1 ? "project" : "projects"}
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#182B49] group-hover:bg-[#3867F5] transition-all duration-300"
                          style={{ width: `${widthPct}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#475569] mt-5 pt-3 border-t border-[#E2E8F0]">
              <span>Featured: <strong className="text-[#182B49]">{featuredCount}</strong></span>
              <span>In Progress: <strong className="text-[#C2410C]">{inProgressCount}</strong></span>
            </div>
          </div>

          {/* 3. Academic & Professional Progression */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  <GitCommitHorizontal className="w-4 h-4 text-[#3867F5]" />
                  <span>Progression Track</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30">
                  {progression.currentCount} Active • {progression.completedCount} Completed
                </span>
              </div>

              <ol className="relative border-l-2 border-[#CBD5E1] ml-2 space-y-4">
                {progression.items.map((item) => (
                  <li key={item.id} className="pl-4 relative">
                    <span
                      aria-hidden="true"
                      className={`w-2.5 h-2.5 rounded-full -left-[6px] top-1.5 absolute border-2 border-white ${
                        item.isCurrent ? "bg-[#F07845]" : "bg-[#3867F5]"
                      }`}
                    />
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                      <span className="text-[#475569]">{item.period}</span>
                      <span
                        className={`px-2 py-0.5 rounded font-medium ${
                          item.isCurrent
                            ? "bg-[#F07845] text-white"
                            : "bg-[#F1F5F9] text-[#182B49]"
                        }`}
                      >
                        {item.statusLabel}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-[#182B49] mt-0.5 leading-snug">
                      {item.role}
                    </p>
                    <p className="text-xs text-[#475569]">{item.organization}</p>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-[11px] font-mono text-[#64748B] mt-5 pt-3 border-t border-[#E2E8F0]">
              Chronological records from existing timeline entries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}