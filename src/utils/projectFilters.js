export function filterProjects(projects, activeProjectFilter, projectSearchQuery) {
  const query = projectSearchQuery.trim().toLowerCase();

  return projects.filter((proj) => {
    const matchesCategory =
      activeProjectFilter === "All"
        ? true
        : activeProjectFilter === "Featured"
        ? proj.featured
        : proj.category === activeProjectFilter;

    const matchesQuery =
      !query ||
      proj.title.toLowerCase().includes(query) ||
      proj.subtitle.toLowerCase().includes(query) ||
      proj.shortDesc.toLowerCase().includes(query) ||
      proj.fullDesc.toLowerCase().includes(query) ||
      proj.category.toLowerCase().includes(query) ||
      proj.tech.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });
}