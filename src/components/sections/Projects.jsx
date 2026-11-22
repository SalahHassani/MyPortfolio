import React, { useMemo } from 'react';
import { FolderGit2, Search, X, Star, RotateCcw } from 'lucide-react';
import ProjectCard from '../projects/ProjectCard';
import { filterProjects } from '../../utils/projectFilters';

export default function Projects({
  projects,
  filterCategories,
  activeProjectFilter,
  setActiveProjectFilter,
  projectSearchQuery,
  setProjectSearchQuery,
  onSelectProject
}) {
  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, activeProjectFilter, projectSearchQuery);
  }, [projects, activeProjectFilter, projectSearchQuery]);

  const hasActiveProjectQuery =
    activeProjectFilter !== "All" || projectSearchQuery.trim().length > 0;

  const resetProjectFilters = () => {
    setActiveProjectFilter("All");
    setProjectSearchQuery("");
  };

  return (
    <section id="projects" className="py-20 bg-[#FFFFFF] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Research &amp; Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182B49] tracking-tight">
              Featured &amp; Technical Projects
            </h2>
            <p className="text-[#475569] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Showcasing my featured full-stack AI platforms alongside my B.Sc. cardiac segmentation thesis, generative diffusion work, machine learning pipelines, ETL systems, and simulation projects.
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={projectSearchQuery}
              onChange={(e) => setProjectSearchQuery(e.target.value)}
              aria-label="Search projects by title, description, or technology"
              placeholder="Search FastAPI, PyTorch, React, SQLite..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm text-[#182B49] placeholder-[#64748B] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
            />
            {projectSearchQuery && (
              <button
                type="button"
                onClick={() => setProjectSearchQuery("")}
                aria-label="Clear search query"
                className="p-1 rounded-md text-[#64748B] hover:text-[#182B49] hover:bg-[#E2E8F0]/60 absolute right-2 top-1/2 -translate-y-1/2 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
              <Star className="w-3.5 h-3.5 fill-[#F07845] text-[#F07845]" />
              <span>Featured Projects ({featuredProjects.length})</span>
            </div>
            <span className="text-xs font-mono text-[#64748B] hidden sm:inline">
              Click any featured project to inspect implementation details
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                variant="featured"
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#E2E8F0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-2"
            >
              {filterCategories.map((cat) => {
                const isSelected = activeProjectFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveProjectFilter(cat)}
                    aria-pressed={isSelected}
                    className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] ${
                      isSelected
                        ? "bg-[#3867F5] text-white border border-[#3867F5] shadow-xs"
                        : "bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] hover:border-[#3867F5] hover:text-[#182B49]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#475569]">
                Matching:{" "}
                <strong className="text-[#182B49] font-semibold">
                  {filteredProjects.length}
                </strong>{" "}
                of {projects.length} projects
              </span>
              {hasActiveProjectQuery && (
                <button
                  type="button"
                  onClick={resetProjectFilters}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[#3867F5] hover:bg-[#3867F5]/10 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  variant="standard"
                  onSelectProject={onSelectProject}
                />
              ))}
            </div>
          ) : (
            <div className="surface-card rounded-2xl p-10 text-center max-w-xl mx-auto space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#182B49] flex items-center justify-center mx-auto">
                <Search className="w-5 h-5 text-[#3867F5]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#182B49]">
                  No matching projects found
                </h3>
                <p className="text-sm text-[#475569]">
                  No projects match{" "}
                  {projectSearchQuery.trim() ? (
                    <span className="font-mono text-[#182B49]">
                      &ldquo;{projectSearchQuery.trim()}&rdquo;
                    </span>
                  ) : (
                    "the selected filter"
                  )}{" "}
                  {activeProjectFilter !== "All" && (
                    <>
                      in <span className="font-mono text-[#182B49]">{activeProjectFilter}</span>
                    </>
                  )}
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={resetProjectFilters}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Search &amp; Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}