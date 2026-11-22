import React from 'react';

export default function Footer({ personal }) {
  return (
    <footer className="bg-[#182B49] text-slate-300 py-10 border-t border-[#182B49]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{personal.brandTag}</span>
            <span className="text-slate-500">•</span>
            <span>© {new Date().getFullYear()} Salah Uddin Hassani • Berlin, Germany</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#93C5FD] transition-colors"
            >
              GitHub (@SHassani)
            </a>
            <span className="text-slate-500">•</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#93C5FD] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">TypeScript • React • FastAPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}