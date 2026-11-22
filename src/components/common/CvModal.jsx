import React, { useEffect, useRef } from 'react';
import { FileText, Printer, X } from 'lucide-react';

export default function CvModal({
  isOpen,
  onClose,
  personal,
  timeline,
  languages,
  projects
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 bg-[#182B49]/65 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        id="printable-cv"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto text-[#182B49]"
      >
        <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#E2E8F0]">
          <div
            id="cv-modal-title"
            className="flex items-center gap-2 text-xs font-mono font-semibold text-[#182B49]"
          >
            <FileText className="w-4 h-4 text-[#3867F5]" />
            <span>Curriculum Vitae — Salah Uddin Hassani</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#182B49] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="border-b-2 border-[#182B49] pb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182B49] tracking-tight">
              SALAH UDDIN HASSANI
            </h2>
            <p className="text-sm font-mono font-medium text-[#3867F5] mt-1">
              M.Sc. Data Science Student | AI &amp; Machine Learning | Full-Stack Software Engineer
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-mono text-[#475569] mt-3">
              <span>Berlin, Germany</span>
              <span>•</span>
              <span>{personal.phone}</span>
              <span>•</span>
              <span>{personal.email}</span>
              <span>•</span>
              <span>github.com/SalahHassani</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#3867F5] mb-1.5">
              Professional Profile
            </h3>
            <p className="text-sm text-[#334155] leading-relaxed">
              {personal.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#182B49] mb-3">
                Education &amp; Experience
              </h3>
              <div className="space-y-3.5">
                {timeline.map((t) => (
                  <div key={t.id} className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0]">
                    <span className="text-[11px] font-mono font-medium text-[#C2410C]">{t.period}</span>
                    <h4 className="font-bold text-[#182B49] text-sm mt-0.5">{t.role}</h4>
                    <p className="text-xs font-medium text-[#3867F5]">{t.organization} • {t.location}</p>
                    <p className="text-xs text-[#334155] mt-1.5 leading-relaxed">{t.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#182B49] mb-3">
                Core Technical Skills &amp; Languages
              </h3>
              <div className="space-y-3 text-xs text-[#334155]">
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0]">
                  <h4 className="font-bold text-[#182B49] text-xs font-mono uppercase mb-1">
                    Languages &amp; Core Frameworks
                  </h4>
                  <p className="leading-relaxed">
                    Python, Java, C++, TypeScript, JavaScript, PHP, HTML, CSS • PyTorch, Hugging Face Transformers, Diffusers, OpenCV, LangChain, Gemini API • FastAPI, Spring Boot, REST APIs, Pydantic
                  </p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0]">
                  <h4 className="font-bold text-[#182B49] text-xs font-mono uppercase mb-1">
                    Data Science, Databases &amp; Tools
                  </h4>
                  <p className="leading-relaxed">
                    NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn • PostgreSQL, MySQL, SQLite, Oracle, H2, ETL &amp; Delta Loading • Git, GitHub, Docker (Basic), Linux/WSL
                  </p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0]">
                  <h4 className="font-bold text-[#182B49] text-xs font-mono uppercase mb-2">
                    Languages (5)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#182B49]">
                    {languages.map((l) => (
                      <span key={l.name} className="font-mono">
                        - {l.name}: {l.badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#182B49] mb-3">
              Selected Technical Projects ({projects.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-[#182B49] text-sm">{p.title}</h4>
                    {p.inProgress && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#F07845]/15 text-[#C2410C]">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-mono text-[#3867F5] mt-0.5">
                    {p.tech.join(" • ")}
                  </p>
                  <p className="text-xs text-[#334155] mt-1.5">{p.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}