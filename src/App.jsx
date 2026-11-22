import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  PROFILE_PIC_SRC,
  PERSONAL_INFO,
  GITHUB_HIGHLIGHTS,
  ACADEMIC_INTERESTS,
  LANGUAGES,
  PERSONAL_INTERESTS
} from './data/portfolio';
import { TECH_STACK, TECH_CATEGORIES } from './data/skills';
import { PROJECTS, PROJECT_FILTERS } from './data/projects';
import { TIMELINE_ITEMS } from './data/timeline';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import TechnicalVisualizations from './components/sections/TechnicalVisualizations';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Research from './components/sections/Research';
import Contact from './components/sections/Contact';
import ProjectModal from './components/projects/ProjectModal';
import CvModal from './components/common/CvModal';
import Footer from './components/layout/Footer';

const SECTION_IDS = ["about", "stack", "profile-visualizations", "projects", "experience", "interests", "contact"];
const REVEAL_SECTION_IDS = ["stack", "profile-visualizations", "projects", "experience", "interests", "contact"];

export default function App() {
  const [activeTechTab, setActiveTechTab] = useState("All");
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [projectSearchQuery, setProjectSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const headerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "stack", label: "Tech Stack" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience & Edu" },
      { id: "interests", label: "Interests & Lang" },
      { id: "contact", label: "Contact" }
    ],
    []
  );

  const {
    activeSection,
    setActiveSection,
    manualScrollLockRef,
    scrollToSection
  } = useActiveSection(SECTION_IDS, headerRef, setMobileMenuOpen);

  const { scrolled, scrollProgress } = useScrollProgress(
    manualScrollLockRef,
    setActiveSection
  );

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  }, []);

  const handleSelectSkillCategory = useCallback(
    (category) => {
      setActiveTechTab(category);
      scrollToSection("stack");
    },
    [scrollToSection]
  );

  const handleSelectProjectCategory = useCallback(
    (category) => {
      setActiveProjectFilter(category);
      scrollToSection("projects");
    },
    [scrollToSection]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setCvModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = REVEAL_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => {
        el.classList.add("reveal-section");
        el.setAttribute("data-reveal", "visible");
      });
      return;
    }

    elements.forEach((el) => {
      el.classList.add("reveal-section");
      const rect = el.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight * 0.92;
      el.setAttribute("data-reveal", alreadyInView ? "visible" : "pending");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08
      }
    );

    elements.forEach((el) => {
      if (el.getAttribute("data-reveal") === "pending") {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFFFF] text-[#182B49] selection:bg-[#3867F5] selection:text-white">
      <Navbar
        personal={PERSONAL_INFO}
        profilePicSrc={PROFILE_PIC_SRC}
        imgError={imgError}
        setImgError={setImgError}
        navItems={navItems}
        activeSection={activeSection}
        scrolled={scrolled}
        scrollProgress={scrollProgress}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        headerRef={headerRef}
        onScrollToSection={scrollToSection}
        onOpenCv={() => setCvModalOpen(true)}
      />

      <main>
        <Hero
          personal={PERSONAL_INFO}
          githubHighlights={GITHUB_HIGHLIGHTS}
          projectCount={PROJECTS.length}
          profilePicSrc={PROFILE_PIC_SRC}
          imgError={imgError}
          setImgError={setImgError}
          copiedEmail={copiedEmail}
          onCopyEmail={handleCopyEmail}
          onScrollToSection={scrollToSection}
          onOpenCv={() => setCvModalOpen(true)}
        />

        <Skills
          techStack={TECH_STACK}
          categories={TECH_CATEGORIES}
          activeTechTab={activeTechTab}
          setActiveTechTab={setActiveTechTab}
        />

        <TechnicalVisualizations
          techStack={TECH_STACK}
          techCategories={TECH_CATEGORIES}
          projects={PROJECTS}
          projectFilterCategories={PROJECT_FILTERS}
          timelineItems={TIMELINE_ITEMS}
          onSelectSkillCategory={handleSelectSkillCategory}
          onSelectProjectCategory={handleSelectProjectCategory}
        />

        <Projects
          projects={PROJECTS}
          filterCategories={PROJECT_FILTERS}
          activeProjectFilter={activeProjectFilter}
          setActiveProjectFilter={setActiveProjectFilter}
          projectSearchQuery={projectSearchQuery}
          setProjectSearchQuery={setProjectSearchQuery}
          onSelectProject={setSelectedProject}
        />

        <Experience timelineItems={TIMELINE_ITEMS} />

        <Research
          academicInterests={ACADEMIC_INTERESTS}
          personalInterests={PERSONAL_INTERESTS}
          languages={LANGUAGES}
        />

        <Contact
          personal={PERSONAL_INFO}
          copiedEmail={copiedEmail}
          onCopyEmail={handleCopyEmail}
          onOpenCv={() => setCvModalOpen(true)}
        />
      </main>

      <Footer personal={PERSONAL_INFO} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        personal={PERSONAL_INFO}
        timeline={TIMELINE_ITEMS}
        languages={LANGUAGES}
        projects={PROJECTS}
      />
    </div>
  );
}