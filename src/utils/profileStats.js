export function getSkillCategoryCounts(techStack, categories = []) {
  const countsMap = new Map();

  for (const item of techStack) {
    countsMap.set(item.category, (countsMap.get(item.category) || 0) + 1);
  }

  const orderedCategories = categories.filter((c) => c !== "All");
  const extraCategories = Array.from(countsMap.keys()).filter(
    (c) => !orderedCategories.includes(c)
  );

  return [...orderedCategories, ...extraCategories].map((category) => ({
    category,
    count: countsMap.get(category) || 0
  }));
}

export function getProjectCategoryCounts(projects, filterCategories = []) {
  const countsMap = new Map();

  for (const project of projects) {
    countsMap.set(project.category, (countsMap.get(project.category) || 0) + 1);
  }

  const orderedCategories = filterCategories.filter(
    (c) => c !== "All" && c !== "Featured"
  );
  const extraCategories = Array.from(countsMap.keys()).filter(
    (c) => !orderedCategories.includes(c)
  );

  return [...orderedCategories, ...extraCategories].map((category) => ({
    category,
    count: countsMap.get(category) || 0
  }));
}

export function getProgressionSummary(timelineItems) {
  return {
    total: timelineItems.length,
    currentCount: timelineItems.filter((item) => item.isCurrent).length,
    completedCount: timelineItems.filter((item) => !item.isCurrent).length,
    items: timelineItems
  };
}