import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Terminal,
  Cpu,
  FolderGit2,
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  Sparkle,
  MapPin,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  FileText,
  Printer,
  Globe,
  BookOpen,
  Heart,
  Search,
  Star,
  Zap,
  GitBranch,
  ArrowUpRight,
  Layers,
  Code2,
  RotateCcw
} from 'lucide-react';

// Relative path resolves seamlessly under Vite's base ('/MyPortfolio/') when placed in public/images/profile_pic.jpg
const PROFILE_PIC_SRC = "./images/profile_pic.jpg";

// ============================================================================
// AUTHENTIC PORTFOLIO DATA — SALAH UDDIN HASSANI (SHassani)
// ============================================================================
const PORTFOLIO_DATA = {
  personal: {
    name: "Salah Uddin Hassani",
    shortName: "Salah Hassani",
    githubHandle: "SHassani",
    brandTag: "SH.dev",
    headline: "M.Sc. Data Science Student | AI & Machine Learning | Full-Stack Software Engineer",
    roles: [
      "Currently Building: AI Coding Tutorial Platform",
      "M.Sc. Data Science Student @ Freie Universität Berlin",
      "AI, Computer Vision & Generative AI Researcher",
      "Python, FastAPI, TypeScript & Java/Spring Boot Engineer"
    ],
    bio: "Computer Science graduate (ELTE, Stipendium Hungaricum Scholar) and current M.Sc. Data Science student at Freie Universität Berlin. Combining backend and full-stack software engineering experience (Java, Spring Boot, FastAPI, TypeScript) with applied AI/ML research across Transformer-based medical image segmentation, Stable Diffusion pipelines, LLM-powered coding education tools, and data engineering workflows.",
    location: "Berlin, Germany",
    university: "Freie Universität Berlin",
    currentBuild: "AI Coding Tutorial Platform (Active Development)",
    availability: "Open to AI / ML & Software Engineering Roles (Berlin / Remote)",
    email: "salau02@zedat.fu-berlin.de",
    phone: "+49 152 0676 2522",
    github: "https://github.com/SalahHassani",
    linkedin: "https://www.linkedin.com/in/salah-uddin-539147256",
    legacyPortfolio: "https://salahhassani.github.io/MyPortfolio/",
    initials: "SH"
  },

  techStack: [
    // AI & Deep Learning
    { name: "PyTorch", category: "AI & Deep Learning", level: "Core", icon: "🔥" },
    { name: "Hugging Face Transformers", category: "AI & Deep Learning", level: "Core", icon: "🤗" },
    { name: "Diffusers & Stable Diffusion", category: "AI & Deep Learning", level: "Advanced", icon: "🎨" },
    { name: "LangChain & Gemini API", category: "AI & Deep Learning", level: "Advanced", icon: "🦜" },
    { name: "OpenCV & Computer Vision", category: "AI & Deep Learning", level: "Advanced", icon: "👁️" },
    { name: "Accelerate", category: "AI & Deep Learning", level: "Proficient", icon: "⚡" },

    // Data Science & Scientific Computing
    { name: "NumPy", category: "Data Science", level: "Core", icon: "📐" },
    { name: "Pandas", category: "Data Science", level: "Core", icon: "🐼" },
    { name: "Scikit-learn", category: "Data Science", level: "Core", icon: "📊" },
    { name: "Matplotlib & Seaborn", category: "Data Science", level: "Advanced", icon: "📈" },
    { name: "Jupyter Notebook", category: "Data Science", level: "Core", icon: "📓" },

    // Backend & API Development
    { name: "FastAPI & Uvicorn", category: "Backend & APIs", level: "Core", icon: "🚀" },
    { name: "Java & Spring Boot", category: "Backend & APIs", level: "Industry Exp", icon: "🍃" },
    { name: "REST APIs & Pydantic", category: "Backend & APIs", level: "Core", icon: "🔌" },
    { name: "Flask", category: "Backend & APIs", level: "Proficient", icon: "🧪" },

    // Programming Languages
    { name: "Python", category: "Languages", level: "Primary", icon: "🐍" },
    { name: "Java", category: "Languages", level: "Industry Exp", icon: "☕" },
    { name: "C++", category: "Languages", level: "Proficient", icon: "⚙️" },
    { name: "TypeScript & JavaScript", category: "Languages", level: "Core", icon: "TS" },
    { name: "PHP", category: "Languages", level: "Proficient", icon: "🐘" },
    { name: "HTML5 & CSS3", category: "Languages", level: "Core", icon: "🌐" },

    // Databases & DevOps
    { name: "PostgreSQL & MySQL", category: "Databases & DevOps", level: "Core", icon: "🐘" },
    { name: "SQLite & H2 Database", category: "Databases & DevOps", level: "Core", icon: "🗄️" },
    { name: "Oracle & SQL", category: "Databases & DevOps", level: "Proficient", icon: "🏛️" },
    { name: "ETL & Delta Loading", category: "Databases & DevOps", level: "Applied", icon: "🔄" },
    { name: "Git, GitHub & Linux/WSL", category: "Databases & DevOps", level: "Core", icon: "🐧" },
    { name: "Docker (Basic)", category: "Databases & DevOps", level: "Working", icon: "🐳" }
  ],

  projects: [
    {
      id: "human-ai-decision-platform",
      title: "Human-AI Decision Experiment Platform",
      subtitle: "Full-Stack Experiment Platform | Real-Time WebSockets & PostgreSQL",
      category: "Generative AI",
      featured: true,
      inProgress: false,
      shortDesc: "Interactive multi-round experiment platform for studying human and AI group decision-making, featuring real-time WebSocket discussions, voting phases, and persistent session tracking.",
      fullDesc: "End-to-end full-stack research platform built with FastAPI, React/Vite, and PostgreSQL to run structured multi-round human-AI group decision experiments. Supports live real-time discussion and voting phases, dynamic HTTP/HTTPS and WS/WSS protocol routing, and persistent session/round state tracking.",
      tech: ["Python", "FastAPI", "SQLAlchemy", "React", "Vite", "PostgreSQL", "WebSockets", "Render"],
      githubUrl: "https://github.com/SalahHassani/human-ai-decision-platform",
      liveUrl: "https://human-ai-decision-platform.onrender.com/",
      architecture: [
        "Engineered an asynchronous FastAPI backend with SQLAlchemy and asyncpg backed by PostgreSQL on Render",
        "Implemented real-time WebSocket communication and live state synchronization across multi-round discussion and voting phases",
        "Built a React/Vite frontend with protocol-aware HTTP/HTTPS and WS/WSS connection handling",
        "Deployed as a multi-service cloud stack with automated Blueprint configuration and live public access"
      ],
      metrics: "LIVE DEPLOYMENT • FastAPI + WebSockets + PostgreSQL"
    },
    {
      id: "human-ai-interaction-lab",
      title: "Human AI Interaction Lab",
      subtitle: "Full-Stack Web Application | Interactive AI Interface",
      category: "Generative AI",
      featured: true,
      inProgress: false,
      shortDesc: "Advanced web application exploring human-AI interaction dynamics, featuring modern UI components and responsive workflows.",
      fullDesc: "An immersive frontend and full-stack web application designed to study and demonstrate human-AI interaction workflows. Built with modern web technologies, responsive layouts, and seamless client-server communication.",
      tech: ["TypeScript", "React", "Vercel", "Tailwind CSS"],
      githubUrl: "https://github.com/SalahHassani/human-ai-interaction-lab",
      liveUrl: "https://human-ai-interaction-lab-frontend.vercel.app/",
      architecture: [
        "Developed responsive user interfaces optimized for interactive AI agent communication and data inspection",
        "Deployed production-ready frontend on Vercel with high performance and smooth transitions",
        "Integrated robust state management for handling real-time user inputs and AI response feedback"
      ],
      metrics: "LIVE DEPLOYMENT • Interactive AI Lab"
    },
    {
      id: "ai-coding-tutorial",
      title: "AI Coding Tutorial Platform",
      subtitle: "Currently Building | Interactive AI Education & Developer Platform",
      category: "Generative AI",
      featured: true,
      inProgress: true,
      shortDesc: "Currently building an interactive AI-powered coding tutorial and learning platform designed to make programming concepts accessible through guided explanations, structured lessons, and intelligent code assistance.",
      fullDesc: "Active flagship project combining modern full-stack engineering with Large Language Models. Built to bridge the gap between static coding documentation and personalized 1-on-1 mentorship—allowing learners to follow structured modules, ask contextual questions on code snippets, and receive instant step-by-step guidance.",
      tech: ["React", "TypeScript", "Python", "FastAPI", "Gemini", "LangChain"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Designed an interactive, structured tutorial interface in React & TypeScript for step-by-step programming lessons",
        "Engineered an asynchronous FastAPI backend integrating LangChain and the Google Gemini API for context-aware code tutoring",
        "Built intelligent code explanation, guided hint progression, and real-time concept breakdown workflows",
        "Focused on clean modular API design, responsive UX, and extensible curriculum authoring"
      ],
      metrics: "IN PROGRESS • AI-Powered Coding Education"
    },
    {
      id: "cardiac-segmentation",
      title: "Transformer-Based Cardiac Image Segmentation",
      subtitle: "Bachelor's Thesis | Deep Learning | Medical Image Analysis",
      category: "AI & Deep Learning",
      featured: false,
      inProgress: false,
      shortDesc: "Investigated modern Transformer-based deep learning architectures for automated anatomical structure segmentation on cardiac catheterization image datasets.",
      fullDesc: "Completed as my B.Sc. Computer Science Thesis at Eötvös Loránd University (ELTE). Evaluated Vision Transformer and hybrid encoder-decoder architectures on complex cardiac catheterization imagery to accurately delineate critical anatomical structures under clinical imaging noise.",
      tech: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Preprocessed and augmented cardiac catheterization image datasets for robust anatomical boundary learning",
        "Implemented and benchmarked Transformer-based segmentation networks in PyTorch",
        "Evaluated mask accuracy quantitatively using Dice Similarity Coefficient (DSC), Intersection over Union (IoU), and Hausdorff Distance",
        "Analyzed boundary precision and spatial consistency across varying contrast conditions"
      ],
      metrics: "B.Sc. Thesis • Dice, IoU & Hausdorff Metrics"
    },
    {
      id: "comic-generation",
      title: "Web-Based Automated Comic Generation",
      subtitle: "Generative AI | Stable Diffusion",
      category: "Generative AI",
      featured: false,
      inProgress: false,
      shortDesc: "End-to-end generative AI web application utilizing Stable Diffusion v1.5 and FastAPI to transform narrative prompts into structured, exportable comic strips.",
      fullDesc: "Full-stack generative visual storytelling platform built around Stable Diffusion v1.5 and a secure FastAPI + PostgreSQL backend. Enables users to generate consistent panels, manage creative history, and compile finished comic layouts into downloadable PDFs.",
      tech: ["Python", "Stable Diffusion v1.5", "FastAPI", "PostgreSQL"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Integrated Stable Diffusion v1.5 text-to-image inference pipeline for stylized comic panel synthesis",
        "Engineered asynchronous FastAPI REST endpoints backed by PostgreSQL persistence",
        "Implemented user authentication, Role-Based Access Control (RBAC), and per-user generation history",
        "Built automated multi-panel layout composition and one-click PDF export functionality"
      ],
      metrics: "Stable Diffusion v1.5 • RBAC & PDF Export"
    },
    {
      id: "ai-coding-mentor",
      title: "AI Coding Mentor",
      subtitle: "Full-Stack Generative AI Application",
      category: "Generative AI",
      featured: false,
      inProgress: false,
      shortDesc: "Intelligent programming education and code-review assistant powered by FastAPI, LangChain, Pydantic, and the Google Gemini API.",
      fullDesc: "Designed a modular generative AI application tailored for interactive programming mentorship, debugging explanations, and structured learning feedback by connecting Large Language Models directly into software engineering workflows.",
      tech: ["Python", "FastAPI", "LangChain", "Google Gemini API", "Pydantic"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Orchestrated prompt chains and conversational context using LangChain and Google Gemini API",
        "Enforced strict request/response schemas and type safety with Pydantic v2 models",
        "Structured clean FastAPI service layers with environment-based secret management",
        "Designed extensible API endpoints for code explanation, hint generation, and bug diagnosis"
      ],
      metrics: "LangChain + Gemini • Strict Pydantic Schemas"
    },
    {
      id: "diffusion-from-scratch",
      title: "Diffusion Model Implementation",
      subtitle: "Generative AI | Deep Learning",
      category: "AI & Deep Learning",
      featured: false,
      inProgress: false,
      shortDesc: "From-scratch PyTorch and NumPy implementation exploring forward noise schedules, reverse denoising dynamics, and probabilistic image generation.",
      fullDesc: "Research-focused implementation built to deeply understand the mathematical and computational mechanics of Denoising Diffusion Probabilistic Models (DDPMs), noise scheduling, and neural reverse-process sampling.",
      tech: ["Python", "PyTorch", "NumPy"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Implemented forward Gaussian noise corruption schedules across discrete timesteps",
        "Built neural denoising U-Net training loops and loss objectives in PyTorch",
        "Analysed the mathematical relationship between score matching, denoising, and sample fidelity"
      ],
      metrics: "PyTorch & NumPy • Generative Modelling"
    },
    {
      id: "house-price-prediction",
      title: "House Price Prediction",
      subtitle: "Machine Learning | Regression",
      category: "AI & Deep Learning",
      featured: false,
      inProgress: false,
      shortDesc: "End-to-end tabular machine learning regression workflow on Kaggle housing data featuring exploratory analysis, feature engineering, and model evaluation.",
      fullDesc: "Structured predictive modelling pipeline tackling real-world residential property valuation using statistical preprocessing, correlation analysis, and regularized regression estimators.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Conducted comprehensive Exploratory Data Analysis (EDA) and missing-value imputation in Pandas",
        "Engineered numerical and categorical features with Scikit-learn preprocessing pipelines",
        "Benchmarked regression models using cross-validated RMSE and R² metrics"
      ],
      metrics: "Kaggle ML • Scikit-learn Regression"
    },
    {
      id: "delta-loading-etl",
      title: "Data Engineering & Delta Loading Pipeline",
      subtitle: "ETL | Data Processing | Database Systems",
      category: "Backend & Data",
      featured: false,
      inProgress: false,
      shortDesc: "Incremental ETL and delta-loading data pipeline developed for an AUMOVIO technical assignment using Python, SQLite, CSV datasets, and SQL.",
      fullDesc: "Engineered a reliable incremental data ingestion workflow capable of detecting new, modified, and unchanged records between CSV snapshots and updating relational SQLite tables without full reloads.",
      tech: ["Python", "SQLite", "CSV", "SQL"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Inspected, validated, and normalized raw CSV batch datasets",
        "Implemented deterministic change-data-capture (delta loading) logic against SQLite",
        "Optimized transactional SQL upsert/update operations for incremental pipeline reliability"
      ],
      metrics: "AUMOVIO Assignment • Incremental SQLite ETL"
    },
    {
      id: "pygame-projects",
      title: "Pygame Development Projects (The Mapmaker & SafariPark)",
      subtitle: "Software Development | Game Development",
      category: "Software Dev",
      featured: false,
      inProgress: false,
      shortDesc: "Interactive 2D simulation and strategy games built in Python and Pygame, applying object-oriented architecture, state machines, and custom rendering loops.",
      fullDesc: "Designed and implemented two complete interactive desktop applications—The Mapmaker and SafariPark—focusing on clean OOP entity hierarchies, event-driven input handling, and simulation state management.",
      tech: ["Python", "Pygame", "OOP"],
      githubUrl: null,
      liveUrl: null,
      architecture: [
        "Structured modular object-oriented entity, map, and simulation controller classes",
        "Implemented real-time game loops, collision/tile logic, and interactive UI overlays",
        "Applied clean software engineering practices for maintainable interactive applications"
      ],
      metrics: "2 Complete Games • OOP & State Architecture"
    }
  ],

  timeline: [
    {
      id: "edu-msc",
      type: "education",
      role: "M.Sc. Data Science",
      organization: "Freie Universität Berlin (FU Berlin)",
      period: "Winter Semester 2026/27 – Present",
      location: "Berlin, Germany",
      badge: "Current Graduate Studies",
      impactTags: ["Statistical Learning", "Deep Learning", "Computer Vision", "NLP"],
      summary: "Graduate studies focused on Data Science, statistical methods, machine learning, and computational approaches.",
      highlights: [
        "Academic specialization in Deep Learning, Artificial Intelligence, Statistical Learning, Computer Vision, and Natural Language Processing (NLP).",
        "Exploring advanced machine learning coursework and research-oriented subjects bridging theoretical foundations and scalable AI systems."
      ]
    },
    {
      id: "work-nix",
      type: "work",
      role: "Java Developer Intern",
      organization: "NIX United",
      period: "November 2024 – April 2025",
      location: "Software Engineering Internship",
      badge: "Industry Experience • 6 Months",
      impactTags: ["Java", "Spring Boot", "REST APIs", "Relational DBs", "OOP & Debugging"],
      summary: "Developed backend application components and RESTful services using Java, Spring Boot, and relational databases in a professional engineering environment.",
      highlights: [
        "Built and maintained Java-based backend application modules and REST APIs using Spring Boot.",
        "Implemented relational database integration and core backend business logic.",
        "Practised systematic debugging, root-cause analysis, and iterative application improvements.",
        "Applied object-oriented programming (OOP) and modular software engineering principles within collaborative workflows."
      ]
    },
    {
      id: "edu-bsc",
      type: "education",
      role: "B.Sc. Computer Science",
      organization: "Eötvös Loránd University (ELTE)",
      period: "September 2022 – August 2025",
      location: "Budapest, Hungary",
      badge: "GPA: 4.22 / 5.00 • Stipendium Hungaricum",
      impactTags: ["GPA 4.22/5.00", "Stipendium Hungaricum Scholar", "Algorithms & AI", "Cardiac CV Thesis"],
      summary: "Graduated with a 4.22/5.00 GPA as a recipient of the prestigious Stipendium Hungaricum Scholarship.",
      highlights: [
        "Awarded the full Stipendium Hungaricum Scholarship for academic excellence.",
        "Built a strong theoretical and practical foundation in algorithms, data structures, OOP, databases, and artificial intelligence.",
        "Completed Bachelor's Thesis on Transformer-Based Cardiac Image Segmentation alongside hands-on ML, computer vision, and full-stack software projects."
      ]
    }
  ],

  githubHighlights: {
    username: "SalahHassani",
    displayName: "SHassani",
    url: "https://github.com/SalahHassani",
    tagline: "AI Systems, Deep Learning Research, FastAPI Backends & Interactive Coding Education",
    pinnedFocus: [
      {
        name: "AI-Coding-Tutorial-Platform",
        status: "Active Build",
        desc: "Interactive AI-powered programming tutorial site with guided explanations & Gemini/LangChain tutoring.",
        lang: "TypeScript / Python"
      },
      {
        name: "Human-AI-Decision-Platform",
        status: "Live Render App",
        desc: "Multi-round human-AI decision experiment platform with FastAPI, WebSockets & PostgreSQL.",
        lang: "Python / React"
      },
      {
        name: "Human-AI-Interaction-Lab",
        status: "Live Vercel App",
        desc: "Advanced web application exploring human-AI interaction dynamics hosted on Vercel.",
        lang: "TypeScript / React"
      },
      {
        name: "Cardiac-Image-Segmentation",
        status: "B.Sc. Thesis",
        desc: "Transformer-based medical image segmentation evaluated with Dice, IoU & Hausdorff Distance.",
        lang: "Python / PyTorch"
      }
    ]
  },

  academicInterests: [
    "Artificial Intelligence & Machine Learning",
    "Deep Learning & Neural Network Architectures",
    "Computer Vision & Medical Image Analysis",
    "Natural Language Processing & Large Language Models",
    "Generative AI & Diffusion Models",
    "Statistical Learning & Predictive Modelling",
    "Data Engineering & Machine Learning Systems",
    "AI Application Development & Model Integration"
  ],

  languages: [
    { name: "English", level: "C1 — Fluent / Academic", percent: 94, badge: "C1" },
    { name: "Urdu", level: "C1 — Fluent", percent: 94, badge: "C1" },
    { name: "Brahui (Brovi)", level: "C1 — Fluent", percent: 94, badge: "C1" },
    { name: "Hindi", level: "B2 — Upper Intermediate", percent: 78, badge: "B2" },
    { name: "German", level: "A1 — Beginner (Studying in Berlin)", percent: 26, badge: "A1" }
  ],

  personalInterests: [
    "AI Research & Emerging Technologies",
    "Open-Source Software & Collaboration",
    "Swimming",
    "Table Tennis"
  ]
};

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "stack" },
  { label: `Projects (${PORTFOLIO_DATA.projects.length})`, id: "projects" },
  { label: "Experience & Education", id: "experience" },
  { label: "Research & Languages", id: "interests" },
  { label: "Contact", id: "contact" }
];

// ============================================================================
// MAIN APPLICATION COMPONENT — EXPERIMENT 03: INTERACTIVE PROJECT CARDS
// ============================================================================
export default function App() {
  // Navigation & Mobile Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  const headerRef = useRef(null);
  const manualScrollLockRef = useRef(false);
  const manualScrollTimeoutRef = useRef(null);

  // Typing Subtitle Animation State
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Tech Stack Filter State
  const [activeTechTab, setActiveTechTab] = useState("All");

  // Projects Filter, Search & Modal State
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [projectSearchQuery, setProjectSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // CV Modal State
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Timeline Expandable State (all expanded by default for clarity)
  const [expandedTimelineIds, setExpandedTimelineIds] = useState({
    "edu-msc": true,
    "work-nix": true,
    "edu-bsc": true
  });

  // FastAPI Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponseToast, setApiResponseToast] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Scroll Progress & Sticky Navbar State (rAF-throttled)
  useEffect(() => {
    let rafId = null;

    const updateScrollState = () => {
      rafId = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(scrollTop > 16);

      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
      } else {
        const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(pct);
      }

      if (!manualScrollLockRef.current && scrollTop < 80) {
        setActiveSection("about");
      }
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Active Section Indicator via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") return;

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        if (manualScrollLockRef.current) return;

        let bestId = null;
        let bestRatio = 0;

        sectionIds.forEach((id) => {
          const ratio = visibleRatios.get(id) || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75]
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Typewriter Effect for Dynamic Subtitle
  useEffect(() => {
    const currentFullText = PORTFOLIO_DATA.personal.roles[roleIndex];
    const typingSpeed = isDeleting ? 28 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentFullText.length) {
        setDisplayedRole(currentFullText.slice(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole.length === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 1700);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(currentFullText.slice(0, displayedRole.length - 1));
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  // Close Modals & Mobile Menu on Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSelectedProject(null);
        setCvModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close Mobile Menu When Clicking Outside Header
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
  }, [mobileMenuOpen]);

  // Cleanup manual scroll lock timer on unmount
  useEffect(() => {
    return () => {
      if (manualScrollTimeoutRef.current) {
        window.clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, []);

  // Smooth Section Scroll with Fixed Header Offset & Active State Update
  const scrollToSection = useCallback((sectionId) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);

    manualScrollLockRef.current = true;
    if (manualScrollTimeoutRef.current) {
      window.clearTimeout(manualScrollTimeoutRef.current);
    }
    manualScrollTimeoutRef.current = window.setTimeout(() => {
      manualScrollLockRef.current = false;
    }, 750);

    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = headerRef.current ? headerRef.current.getBoundingClientRect().height : 72;
      const targetTop =
        el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) - headerHeight - 8;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });
    }
  }, []);

  // Toggle Timeline Details
  const toggleTimelineItem = (id) => {
    setExpandedTimelineIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Copy Email Handler
  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // FastAPI / FormSubmit Contact Handler
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setApiResponseToast(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message
        })
      });

      if (!response.ok) throw new Error("Delivery service fallback triggered");

      setApiResponseToast({
        status: 201,
        endpoint: "POST /api/v1/contact → Email Forwarded",
        message: `Sent! Your message has been dispatched directly to ${PORTFOLIO_DATA.personal.email}.`,
        timestamp: new Date().toISOString()
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const bodyEncoded = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
      window.open(`mailto:${PORTFOLIO_DATA.personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`, "_blank");

      setApiResponseToast({
        status: 200,
        endpoint: "MAILTO FALLBACK",
        message: `Opened your default mail client addressed to ${PORTFOLIO_DATA.personal.email} with your message pre-filled!`,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Memoized Filtered Tech Stack
  const filteredTech = useMemo(() => {
    return activeTechTab === "All"
      ? PORTFOLIO_DATA.techStack
      : PORTFOLIO_DATA.techStack.filter((item) => item.category === activeTechTab);
  }, [activeTechTab]);

  // Featured Projects (3 primary showcase projects)
  const featuredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((p) => p.featured);
  }, []);

  // Memoized Filtered Projects (works across all 10 projects when filter/search is used)
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((proj) => {
      const matchesCategory =
        activeProjectFilter === "All"
          ? true
          : activeProjectFilter === "Featured"
          ? proj.featured
          : proj.category === activeProjectFilter;

      const query = projectSearchQuery.trim().toLowerCase();
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
  }, [activeProjectFilter, projectSearchQuery]);

  const hasActiveProjectQuery =
    activeProjectFilter !== "All" || projectSearchQuery.trim().length > 0;

  const resetProjectFilters = () => {
    setActiveProjectFilter("All");
    setProjectSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#182B49] selection:bg-[#3867F5]/15 selection:text-[#182B49] font-sans relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #FFFFFF;
          color: #182B49;
          -webkit-font-smoothing: antialiased;
        }
        h1, h2, h3, h4, .font-heading {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .surface-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 3px rgba(24, 43, 73, 0.04), 0 1px 2px rgba(24, 43, 73, 0.02);
        }
        .surface-card-interactive {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .surface-card-interactive:hover {
          transform: translateY(-2px);
          border-color: #3867F5;
          box-shadow: 0 10px 24px -8px rgba(24, 43, 73, 0.12);
        }
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-cv, #printable-cv * {
            visibility: visible;
          }
          #printable-cv {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: #FFFFFF !important;
            color: #182B49 !important;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* =====================================================================
          1. STICKY CLEAN HEADER NAVIGATION & SCROLL PROGRESS INDICATOR
      ===================================================================== */}
      <header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm"
            : "bg-[#FFFFFF] border-b border-[#E2E8F0]/70"
        }`}
      >
        {/* Top Viewport Scroll Progress Bar */}
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
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2.5 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-[#182B49] p-[1.5px] overflow-hidden shrink-0">
              {!imgError ? (
                <img
                  src={PROFILE_PIC_SRC}
                  alt={PORTFOLIO_DATA.personal.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover rounded-[6px]"
                />
              ) : (
                <div className="w-full h-full bg-[#182B49] rounded-[6px] flex items-center justify-center font-mono font-semibold text-xs text-white">
                  {PORTFOLIO_DATA.personal.initials}
                </div>
              )}
            </div>
            <span className="font-mono font-semibold text-base tracking-tight text-[#182B49]">
              {PORTFOLIO_DATA.personal.brandTag}
              <span className="text-[#3867F5]">_</span>
            </span>
          </button>

          <nav
            aria-label="Primary sections"
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#334155]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
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
              onClick={() => setCvModalOpen(true)}
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
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
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

      <main className="relative">
        {/* =====================================================================
            2. HERO & PROFILE SECTION (WHITE PRIMARY SURFACE)
        ===================================================================== */}
        <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-24 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#182B49] text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#3867F5]" />
                    <span>{PORTFOLIO_DATA.personal.location}</span>
                    <span className="text-[#94A3B8]">•</span>
                    <span>{PORTFOLIO_DATA.personal.university}</span>
                  </div>

                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F07845]/10 border border-[#F07845]/30 text-[#C2410C] text-xs font-mono font-medium hover:bg-[#F07845]/15 transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5 text-[#F07845]" />
                    <span>Building: AI Coding Tutorial Site</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-[#182B49]">
                    Salah Uddin{" "}
                    <span className="text-[#3867F5]">Hassani</span>
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-[#182B49]/90 leading-snug">
                    {PORTFOLIO_DATA.personal.headline}
                  </p>
                </div>

                <div className="h-7 flex items-center font-mono text-sm sm:text-[15px] text-[#182B49]">
                  <span className="text-[#3867F5] font-semibold mr-2">$</span>
                  <span>{displayedRole}</span>
                  <span className="w-2 h-4 bg-[#F07845] ml-1 animate-pulse" />
                </div>

                <p className="text-[#334155] text-base sm:text-[17px] leading-[1.75] max-w-2xl">
                  {PORTFOLIO_DATA.personal.bio}
                </p>

                <div className="grid grid-cols-3 gap-3.5 max-w-xl pt-1">
                  <div className="surface-card rounded-xl p-3.5 border-l-4 border-l-[#182B49]">
                    <span className="font-heading text-base sm:text-lg font-extrabold text-[#182B49] block">
                      {PORTFOLIO_DATA.projects.length} Projects
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      AI, CV, Diffusion &amp; Lab
                    </span>
                  </div>
                  <div className="surface-card rounded-xl p-3.5 border-l-4 border-l-[#3867F5]">
                    <span className="font-heading text-base sm:text-lg font-extrabold text-[#182B49] block">
                      4.22 / 5.0
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      ELTE CS Honors GPA
                    </span>
                  </div>
                  <div className="surface-card rounded-xl p-3.5 border-l-4 border-l-[#F07845]">
                    <span className="font-heading text-base sm:text-lg font-extrabold text-[#182B49] block">
                      5 Languages
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      EN, UR, BRH, HI, DE
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#3867F5] hover:bg-[#2954D8] text-white shadow-sm transition-colors"
                  >
                    <span>Explore Featured Projects</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setCvModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#182B49] hover:bg-[#223B63] text-white transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#F07845]" />
                    <span>Curriculum Vitae</span>
                  </button>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs sm:text-sm bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#182B49] border border-[#CBD5E1] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-[#16A34A]" />
                        <span className="text-[#15803D] font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#3867F5]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs sm:text-sm text-[#475569]">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#3867F5] transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#182B49]" />
                    <span className="font-mono">github.com/SalahHassani (SHassani)</span>
                  </a>
                  <span className="text-[#CBD5E1] hidden sm:inline">•</span>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#3867F5] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#3867F5]" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-[#CBD5E1] hidden sm:inline">•</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#3867F5] transition-colors font-mono"
                  >
                    <Mail className="w-4 h-4 text-[#F07845]" />
                    <span>{PORTFOLIO_DATA.personal.email}</span>
                  </a>
                </div>
              </div>

              {/* Right Column — Midnight Navy Academic & Profile Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#182B49] text-white p-6 shadow-md border border-[#182B49] relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-[#3867F5]" />

                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F07845]" />
                    <span>Open to AI &amp; Data Science Roles • Berlin</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl p-[2px] bg-[#3867F5] shrink-0">
                      {!imgError ? (
                        <img
                          src={PROFILE_PIC_SRC}
                          alt={PORTFOLIO_DATA.personal.name}
                          onError={() => setImgError(true)}
                          className="w-full h-full object-cover rounded-[14px] bg-[#182B49]"
                        />
                      ) : (
                        <div className="w-full h-full rounded-[14px] bg-[#182B49] flex items-center justify-center">
                          <span className="text-2xl font-mono font-bold text-white">
                            {PORTFOLIO_DATA.personal.initials}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-bold text-white truncate">
                          {PORTFOLIO_DATA.personal.name}
                        </h2>
                        <a
                          href={PORTFOLIO_DATA.githubHighlights.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#3867F5] text-white transition-colors shrink-0"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>@{PORTFOLIO_DATA.githubHighlights.displayName}</span>
                        </a>
                      </div>
                      <p className="text-xs font-mono text-[#93C5FD] mt-0.5">
                        M.Sc. Data Science @ FU Berlin
                      </p>
                      <p className="text-xs font-mono text-slate-300 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F07845] shrink-0" />
                        <span>{PORTFOLIO_DATA.personal.location} • Stipendium Hungaricum Alumni</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 p-4 rounded-xl bg-white/[0.07] border border-white/15">
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-[#F07845] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#F07845]" />
                        CURRENTLY BUILDING
                      </span>
                      <span className="text-slate-300">2026</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      AI Coding Tutorial Platform
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Interactive AI-assisted programming learning platform combining structured lessons with Gemini &amp; LangChain code mentorship.
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2.5">
                      <span className="flex items-center gap-1.5 text-white font-medium">
                        <GitBranch className="w-3.5 h-3.5 text-[#3867F5]" />
                        <span>GitHub Highlights (@SalahHassani)</span>
                      </span>
                      <a
                        href={PORTFOLIO_DATA.githubHighlights.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#93C5FD] hover:text-white hover:underline inline-flex items-center gap-1"
                      >
                        <span>View Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {PORTFOLIO_DATA.githubHighlights.pinnedFocus.map((repo) => (
                        <a
                          key={repo.name}
                          href={PORTFOLIO_DATA.githubHighlights.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-[#101F36] border border-white/10 hover:border-[#3867F5] transition-colors group block"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-mono font-semibold text-white group-hover:text-[#93C5FD] truncate">
                              {repo.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                            {repo.desc}
                          </p>
                          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/10 text-[10px] font-mono">
                            <span className="text-[#93C5FD]">{repo.lang}</span>
                            <span className="text-[#FDBA74]">{repo.status}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. INTERACTIVE TECH STACK SECTION (SOFT SLATE TINT SURFACE)
        ===================================================================== */}
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
                {["All", "AI & Deep Learning", "Data Science", "Backend & APIs", "Languages", "Databases & DevOps"].map((category) => (
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

        {/* =====================================================================
            4. EXPERIMENT 03: FEATURED SHOWCASE & PROJECT DIRECTORY
        ===================================================================== */}
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

            {/* FEATURED PROJECTS SHOWCASE (DISTINCT FROM STANDARD CARDS) */}
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
                {featuredProjects.map((project) => (
                  <article
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Inspect ${project.title} details`}
                    className="rounded-2xl bg-[#182B49] text-white border border-[#182B49] hover:border-[#3867F5] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
                  >
                    <div>
                      <div
                        className={`h-1.5 w-full ${
                          project.inProgress ? "bg-[#F07845]" : "bg-[#3867F5]"
                        }`}
                      />

                      <div className="p-6 pb-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-white/10 text-[#93C5FD] border border-white/15">
                            {project.category}
                          </span>
                          {project.inProgress ? (
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F07845] text-white">
                              <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              In Progress
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#3867F5]/25 text-[#93C5FD] border border-[#3867F5]/40">
                              <Star className="w-3 h-3 fill-[#F07845] text-[#F07845]" />
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] font-mono text-slate-300 mb-1">
                          {project.subtitle}
                        </p>

                        <h3 className="text-xl font-extrabold text-white group-hover:text-[#93C5FD] transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-slate-200 text-sm leading-relaxed mt-2.5">
                          {project.shortDesc}
                        </p>

                        <div className="mt-4 p-3 rounded-xl bg-white/[0.06] border border-white/10">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#93C5FD] mb-1.5">
                            <Code2 className="w-3 h-3 text-[#F07845]" />
                            <span>Key Implementation</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                            {project.architecture[0]}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-3 border-t border-white/10 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-slate-100 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 hover:bg-[#3867F5] text-white border border-white/15 transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>GitHub</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>Live App</span>
                            </a>
                          )}
                          {!project.githubUrl && !project.liveUrl && project.inProgress && (
                            <span className="text-[11px] font-mono text-[#FDBA74]">
                              Active build • Repo &amp; live URL not yet public
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#93C5FD] group-hover:text-white ml-auto">
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* FILTER BAR & MATCHING COUNT FOR ALL 10 PROJECTS */}
            <div className="pt-4 border-t border-[#E2E8F0]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div
                  role="group"
                  aria-label="Filter projects by category"
                  className="flex flex-wrap gap-2"
                >
                  {["All", "Featured", "AI & Deep Learning", "Generative AI", "Backend & Data", "Software Dev"].map((cat) => {
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
                    of {PORTFOLIO_DATA.projects.length} projects
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

              {/* STANDARD & FILTERED PROJECT CARDS GRID */}
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <article
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Open architecture details for ${project.title}`}
                      className={`surface-card surface-card-interactive rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] ${
                        project.inProgress
                          ? "border-t-4 border-t-[#F07845]"
                          : project.featured
                          ? "border-t-4 border-t-[#3867F5]"
                          : ""
                      }`}
                    >
                      <div>
                        {/* Restrained Spec / Metadata Header (Clearly Not a Screenshot) */}
                        <div className="px-6 py-2.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between gap-2 text-[11px] font-mono text-[#64748B]">
                          <span className="inline-flex items-center gap-1.5 truncate">
                            <Layers className="w-3.5 h-3.5 text-[#3867F5] shrink-0" />
                            <span className="truncate">{project.metrics}</span>
                          </span>
                          <span className="shrink-0 text-[#94A3B8]">SPEC • NO PREVIEW IMG</span>
                        </div>

                        <div className="p-6 pb-4">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-[#182B49] text-white">
                                {project.category}
                              </span>
                              {project.inProgress && (
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#F07845]" />
                                  In Progress
                                </span>
                              )}
                              {project.featured && !project.inProgress && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25">
                                  <Star className="w-3 h-3" />
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-xs font-mono text-[#3867F5] font-medium mb-1">
                            {project.subtitle}
                          </p>

                          <h3 className="text-xl font-extrabold text-[#182B49] group-hover:text-[#3867F5] transition-colors flex items-start justify-between gap-2 leading-snug">
                            <span>
                              <span className="text-[#94A3B8] font-mono text-base mr-2">
                                {String(idx + 1).padStart(2, "0")}.
                              </span>
                              {project.title}
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#3867F5] shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </h3>

                          <p className="text-[#334155] text-sm sm:text-[15px] leading-[1.65] mt-2.5">
                            {project.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-4 border-t border-[#E2E8F0] space-y-3.5">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#182B49] border border-[#E2E8F0] group-hover:border-[#CBD5E1] transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-0.5">
                          <div className="flex flex-wrap items-center gap-2">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#F8FAFC] hover:bg-[#182B49] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Repository</span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#3867F5]/10 hover:bg-[#3867F5] text-[#3867F5] hover:text-white border border-[#3867F5]/25 transition-colors"
                              >
                                <Globe className="w-3.5 h-3.5" />
                                <span>Live Demo</span>
                              </a>
                            )}
                          </div>

                          <span className="text-xs font-mono font-semibold text-[#3867F5] ml-auto">
                            Inspect Details →
                          </span>
                        </div>
                      </div>
                    </article>
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

        {/* =====================================================================
            5. EDUCATION & PROFESSIONAL EXPERIENCE TIMELINE (SOFT SLATE TINT)
        ===================================================================== */}
        <section id="experience" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Academic &amp; Industry Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182B49] tracking-tight">
                Experience &amp; Education
              </h2>
              <p className="text-[#475569] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Combining enterprise backend Java/Spring Boot software engineering at NIX United with graduate Data Science research in Berlin and Computer Science honors in Budapest.
              </p>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#CBD5E1] space-y-7">
              {PORTFOLIO_DATA.timeline.map((item) => {
                const isExpanded = !!expandedTimelineIds[item.id];
                return (
                  <div key={item.id} className="relative">
                    <div
                      className={`absolute -left-[33px] sm:-left-[41px] top-7 w-4 h-4 rounded-full border-2 border-[#FFFFFF] shadow-sm ${
                        item.type === "work" ? "bg-[#F07845]" : "bg-[#3867F5]"
                      }`}
                    />

                    <div
                      onClick={() => toggleTimelineItem(item.id)}
                      className="surface-card rounded-2xl p-6 sm:p-7 cursor-pointer hover:border-[#3867F5] transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold ${
                                item.type === "work"
                                  ? "bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30"
                                  : "bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25"
                              }`}
                            >
                              {item.type === "work" ? (
                                <Briefcase className="w-3.5 h-3.5" />
                              ) : (
                                <GraduationCap className="w-3.5 h-3.5" />
                              )}
                              <span>{item.period}</span>
                            </span>
                            <span className="text-[#64748B]">{item.location}</span>
                            {item.badge && (
                              <span className="px-2.5 py-1 rounded-md bg-[#182B49] text-white">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#182B49] pt-1">
                            {item.role}
                          </h3>
                          <p className="text-base font-semibold text-[#3867F5]">
                            {item.organization}
                          </p>
                        </div>

                        <button
                          type="button"
                          className="self-start inline-flex items-center gap-1 text-xs font-mono font-medium text-[#182B49] hover:text-[#3867F5] px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] shrink-0"
                        >
                          <span>{isExpanded ? "Hide Highlights" : "Show Highlights"}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed mt-3">
                        {item.summary}
                      </p>

                      {item.impactTags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.impactTags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#182B49] border border-[#E2E8F0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {isExpanded && (
                        <ul className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-2.5 text-sm sm:text-[15px] text-[#334155] leading-relaxed">
                          {item.highlights.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-[#3867F5] font-mono font-bold mt-0.5">▹</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. ACADEMIC RESEARCH INTERESTS, LANGUAGES (5) & PERSONAL INTERESTS
        ===================================================================== */}
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
                    {PORTFOLIO_DATA.academicInterests.map((interest) => (
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
                    {PORTFOLIO_DATA.personalInterests.map((item) => (
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
                    5 Languages
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#182B49] mb-2">Languages</h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                  Fluent across South Asian and international academic/engineering languages, alongside active German studies in Berlin.
                </p>

                <div className="space-y-4">
                  {PORTFOLIO_DATA.languages.map((lang) => (
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

        {/* =====================================================================
            7. INTERACTIVE FASTAPI CONTACT SECTION (SOFT SLATE TINT)
        ===================================================================== */}
        <section id="contact" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                    <Terminal className="w-4 h-4" />
                    <span>Direct Contact &amp; FastAPI Endpoint</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182B49] tracking-tight">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed">
                    Interested in collaborating on AI/ML research, Generative AI applications, or Data Science &amp; Software Engineering roles in Berlin or remotely? Send a message or reach out directly.
                  </p>
                </div>

                <div className="surface-card rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-[#64748B]">University / Direct Email</p>
                      <p className="text-sm font-mono font-medium text-[#182B49] mt-0.5">
                        {PORTFOLIO_DATA.personal.email}
                      </p>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#3867F5] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors"
                      aria-label="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-[#64748B]">Phone (Berlin, Germany)</p>
                      <a
                        href="tel:+4915206762522"
                        className="text-sm font-mono font-medium text-[#182B49] hover:text-[#3867F5] transition-colors mt-0.5 block"
                      >
                        {PORTFOLIO_DATA.personal.phone}
                      </a>
                    </div>
                    <Phone className="w-4 h-4 text-[#F07845]" />
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex flex-wrap gap-2.5">
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F8FAFC] hover:bg-[#182B49] text-xs font-mono font-medium text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F8FAFC] hover:bg-[#3867F5] text-xs font-mono font-medium text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#3867F5] group-hover:text-white" />
                      <span>LinkedIn</span>
                    </a>
                    <button
                      onClick={() => setCvModalOpen(true)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#182B49] hover:bg-[#3867F5] text-xs font-mono font-medium text-white transition-colors"
                    >
                      <FileText className="w-4 h-4 text-[#F07845]" />
                      <span>Open CV</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={handleContactSubmit}
                  className="surface-card rounded-2xl p-6 sm:p-8 space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#182B49]">
                      <span className="px-2 py-0.5 rounded bg-[#182B49] text-white font-semibold">
                        POST
                      </span>
                      <span className="font-medium">/api/v1/contact</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      Pydantic v2 Schema Validated
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@research-lab.de"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Working Student AI/ML / Research Collaboration / Full-Stack Role"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Salah, I saw your work on Human-AI Decision Experiment Platform..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#3867F5] hover:bg-[#2954D8] text-white shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Dispatching to FastAPI...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {apiResponseToast && (
                    <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs font-mono text-[#166534] space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-bold text-[#15803D]">
                          <CheckCircle2 className="w-4 h-4" />
                          HTTP 201 Created — {apiResponseToast.endpoint}
                        </span>
                        <button
                          type="button"
                          onClick={() => setApiResponseToast(null)}
                          className="text-[#15803D] hover:text-[#182B49]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[#182B49]">{apiResponseToast.message}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          8. MIDNIGHT NAVY FOOTER
      ===================================================================== */}
      <footer className="bg-[#182B49] text-slate-300 py-10 border-t border-[#182B49]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">{PORTFOLIO_DATA.personal.brandTag}</span>
              <span className="text-slate-500">•</span>
              <span>© {new Date().getFullYear()} Salah Uddin Hassani • Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#93C5FD] transition-colors"
              >
                GitHub (@SHassani)
              </a>
              <span className="text-slate-500">•</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
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

      {/* =====================================================================
          PROJECT ARCHITECTURE DETAIL MODAL (STRUCTURED SECTIONS)
      ===================================================================== */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 bg-[#182B49]/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto text-[#182B49]"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details modal"
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#182B49] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              {/* Header & Status */}
              <div className="space-y-2 pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#182B49] text-white">
                    {selectedProject.category}
                  </span>
                  {selectedProject.inProgress && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#F07845]/10 text-[#C2410C] border border-[#F07845]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F07845]" />
                      In Progress
                    </span>
                  )}
                  {selectedProject.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#3867F5]/10 text-[#3867F5] border border-[#3867F5]/25">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-xs font-mono font-medium text-[#3867F5]">
                  {selectedProject.subtitle}
                </p>
                <h3
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#182B49]"
                >
                  {selectedProject.title}
                </h3>
              </div>

              {/* Section 1: Project Overview */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  Project Overview
                </h4>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Section 2: Objective & Scope */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  Objective &amp; Focus
                </h4>
                <p className="text-[#334155] text-sm leading-relaxed bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                  {selectedProject.shortDesc}
                </p>
              </div>

              {/* Section 3: Technical Implementation & Architecture */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 sm:p-5 space-y-2.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49] flex items-center gap-1.5">
                  <Sparkle className="w-3.5 h-3.5 text-[#F07845]" />
                  <span>Technical Implementation &amp; Architecture</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
                  {selectedProject.architecture.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#3867F5] font-mono font-semibold shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#F8FAFC] text-[#182B49] border border-[#E2E8F0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 5: Project Label / Status Summary */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#182B49]">
                  Project Label &amp; Status
                </h4>
                <p className="text-xs font-mono text-[#182B49] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2">
                  {selectedProject.metrics}
                </p>
              </div>

              {/* Section 6: Verified Links & Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Open Live Application</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#182B49] hover:bg-[#223B63] text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
                {!selectedProject.githubUrl && !selectedProject.liveUrl && (
                  <span className="text-xs font-mono text-[#64748B]">
                    {selectedProject.inProgress
                      ? "Currently in active development — public repository/live link not yet available."
                      : "Standalone repository or live deployment link not listed in portfolio data."}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#182B49] border border-[#CBD5E1] transition-colors ml-auto"
                >
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          INTERACTIVE PRINTABLE CV / RESUME MODAL
      ===================================================================== */}
      {cvModalOpen && (
        <div
          onClick={() => setCvModalOpen(false)}
          className="fixed inset-0 z-50 bg-[#182B49]/65 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            id="printable-cv"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto text-[#182B49]"
          >
            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#182B49]">
                <FileText className="w-4 h-4 text-[#3867F5]" />
                <span>Curriculum Vitae — Salah Uddin Hassani</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-[#3867F5] hover:bg-[#2954D8] text-white transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setCvModalOpen(false)}
                  aria-label="Close CV modal"
                  className="p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#182B49] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors"
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
                  M.Sc. Data Science Student | AI &amp; Machine Learning | Full-Stack Software Engineering
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-mono text-[#475569] mt-3">
                  <span>Berlin, Germany</span>
                  <span>•</span>
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                  <span>•</span>
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  <span>•</span>
                  <span>github.com/SalahHassani</span>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#3867F5] mb-1.5">
                  Professional Profile
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {PORTFOLIO_DATA.personal.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#182B49] mb-3">
                    Education &amp; Experience
                  </h3>
                  <div className="space-y-3.5">
                    {PORTFOLIO_DATA.timeline.map((t) => (
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
                        {PORTFOLIO_DATA.languages.map((l) => (
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
                  Selected Technical Projects ({PORTFOLIO_DATA.projects.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PORTFOLIO_DATA.projects.map((p) => (
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
      )}
    </div>
  );
}