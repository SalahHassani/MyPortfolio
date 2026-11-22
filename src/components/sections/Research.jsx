import React from 'react';
import { BookOpen, Sparkles, Heart, Globe } from 'lucide-react';

export default function Research({
  academicInterests,
  personalInterests,
  languages
}) {
  return (
    <section id="interests" className="py-20 bg-[#FFFFFF] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Research Focus</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#182B49] mb-5">
                Academic &amp; Technical Interests
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {academicInterests.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#3867F5] transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-[#F07845] shrink-0" />
                    <span className="text-sm font-medium text-[#182B49] leading-snug">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <div className="inline-flex items-center gap-2 text-[#182B49] font-mono text-xs font-semibold uppercase tracking-widest mb-3">
                <Heart className="w-4 h-4 text-[#F07845]" />
                <span>Additional Interests</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {personalInterests.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-[#F8FAFC] border border-[#E2E8F0] text-[#182B49]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 surface-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest">
                <Globe className="w-4 h-4" />
                <span>Multilingual Communication</span>
              </div>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#182B49] text-white">
                {languages.length} Languages
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#182B49] mb-2">Languages</h3>
            <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
              Fluent across South Asian and international academic/engineering languages, alongside active German studies in Berlin.
            </p>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2"
                >
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-[#182B49] text-white">
                        {lang.badge}
                      </span>
                      <span className="font-bold text-[#182B49]">{lang.name}</span>
                    </div>
                    <span className="font-mono text-xs text-[#475569]">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#3867F5] transition-all duration-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}