import React, { useMemo } from 'react';
import { Cpu } from 'lucide-react';

export default function Skills({
  techStack,
  categories,
  activeTechTab,
  setActiveTechTab
}) {
  const filteredTech = useMemo(() => {
    return activeTechTab === "All"
      ? techStack
      : techStack.filter((item) => item.category === activeTechTab);
  }, [techStack, activeTechTab]);

  return (
    <section id="stack" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Skills &amp; Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182B49] tracking-tight">
              AI, Data Science &amp; Backend Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTechTab(category)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeTechTab === category
                    ? "bg-[#182B49] text-white border border-[#182B49]"
                    : "bg-[#FFFFFF] text-[#475569] border border-[#E2E8F0] hover:border-[#3867F5] hover:text-[#182B49]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="surface-card surface-card-interactive rounded-xl p-4 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-lg bg-[#182B49] text-white flex items-center justify-center font-mono font-bold text-xs">
                  {tech.icon}
                </span>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#F1F5F9] text-[#182B49] border border-[#E2E8F0]">
                  {tech.level}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#182B49] group-hover:text-[#3867F5] transition-colors leading-snug">
                  {tech.name}
                </h3>
                <p className="text-[11px] font-mono text-[#64748B] mt-1">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}