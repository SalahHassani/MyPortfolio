import React, { useEffect } from 'react';
import { FileText, X, Menu } from 'lucide-react';

export default function Navbar({
  personal,
  profilePicSrc,
  imgError,
  setImgError,
  navItems,
  activeSection,
  scrolled,
  scrollProgress,
  mobileMenuOpen,
  setMobileMenuOpen,
  headerRef,
  onScrollToSection,
  onOpenCv
}) {
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen, headerRef, setMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm"
          : "bg-[#FFFFFF] border-b border-[#E2E8F0]/70"
      }`}
    >
      <div
        aria-hidden="true"
        className="w-full h-[3px] bg-[#F1F5F9]"
      >
        <div
          className="h-full bg-[#3867F5] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onScrollToSection("about")}
          className="flex items-center gap-2.5 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-lg"
        >
          <div className="w-9 h-9 rounded-lg bg-[#182B49] p-[1.5px] overflow-hidden shrink-0">
            {!imgError ? (
              <img
                src={profilePicSrc}
                alt={personal.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover rounded-[6px]"
              />
            ) : (
              <div className="w-full h-full bg-[#182B49] rounded-[6px] flex items-center justify-center font-mono font-semibold text-xs text-white">
                {personal.initials}
              </div>
            )}
          </div>
          <span className="font-mono font-semibold text-base tracking-tight text-[#182B49]">
            {personal.brandTag}
            <span className="text-[#3867F5]">_</span>
          </span>
        </button>

        <nav
          aria-label="Primary sections"
          className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#334155]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onScrollToSection(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-1.5 whitespace-nowrap transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-sm ${
                  isActive
                    ? "text-[#3867F5] font-semibold"
                    : "text-[#334155] hover:text-[#182B49]"
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`block h-[2px] rounded-full bg-[#3867F5] transition-all duration-200 ${
                    isActive ? "w-full opacity-100 mt-0.5" : "w-0 opacity-0 mt-0.5"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenCv}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-mono font-medium bg-[#182B49] hover:bg-[#3867F5] text-white transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
          >
            <FileText className="w-3.5 h-3.5 text-[#F07845]" />
            <span>View / Print CV</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="lg:hidden p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#182B49] hover:border-[#3867F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile sections"
          className="lg:hidden bg-[#FFFFFF] border-t border-[#E2E8F0] px-4 sm:px-6 pt-3 pb-5 space-y-1 shadow-md max-h-[calc(100vh-4.25rem)] overflow-y-auto"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onScrollToSection(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] ${
                  isActive
                    ? "bg-[#3867F5]/10 text-[#3867F5] font-semibold"
                    : "text-[#182B49] hover:bg-[#F8FAFC] hover:text-[#3867F5]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3867F5]" />
                )}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}