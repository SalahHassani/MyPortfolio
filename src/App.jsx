import React, { useState, useEffect } from 'react';
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
  Server,
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
  ArrowUpRight
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
    { name: "PyTorch", category: "AI & Deep Learning", level: "Core", icon: "🔥", color: "from-orange-500 to-red-600" },
    { name: "Hugging Face Transformers", category: "AI & Deep Learning", level: "Core", icon: "🤗", color: "from-amber-400 to-orange-500" },
    { name: "Diffusers & Stable Diffusion", category: "AI & Deep Learning", level: "Advanced", icon: "🎨", color: "from-violet-500 to-fuchsia-600" },
    { name: "LangChain & Gemini API", category: "AI & Deep Learning", level: "Advanced", icon: "🦜", color: "from-emerald-400 to-teal-600" },
    { name: "OpenCV & Computer Vision", category: "AI & Deep Learning", level: "Advanced", icon: "👁️", color: "from-cyan-400 to-blue-600" },
    { name: "Accelerate", category: "AI & Deep Learning", level: "Proficient", icon: "⚡", color: "from-yellow-400 to-amber-600" },

    // Data Science & Scientific Computing
    { name: "NumPy", category: "Data Science", level: "Core", icon: "📐", color: "from-sky-400 to-blue-600" },
    { name: "Pandas", category: "Data Science", level: "Core", icon: "🐼", color: "from-indigo-400 to-purple-600" },
    { name: "Scikit-learn", category: "Data Science", level: "Core", icon: "📊", color: "from-orange-400 to-amber-500" },
    { name: "Matplotlib & Seaborn", category: "Data Science", level: "Advanced", icon: "📈", color: "from-teal-400 to-emerald-600" },
    { name: "Jupyter Notebook", category: "Data Science", level: "Core", icon: "📓", color: "from-orange-500 to-yellow-500" },

    // Backend & API Development
    { name: "FastAPI & Uvicorn", category: "Backend & APIs", level: "Core", icon: "🚀", color: "from-emerald-400 to-cyan-600" },
    { name: "Java & Spring Boot", category: "Backend & APIs", level: "Industry Exp", icon: "🍃", color: "from-green-500 to-emerald-700" },
    { name: "REST APIs & Pydantic", category: "Backend & APIs", level: "Core", icon: "🔌", color: "from-pink-500 to-rose-600" },
    { name: "Flask", category: "Backend & APIs", level: "Proficient", icon: "🧪", color: "from-slate-300 to-slate-500" },

    // Programming Languages
    { name: "Python", category: "Languages", level: "Primary", icon: "🐍", color: "from-yellow-400 to-blue-500" },
    { name: "Java", category: "Languages", level: "Industry Exp", icon: "☕", color: "from-red-500 to-orange-600" },
    { name: "C++", category: "Languages", level: "Proficient", icon: "⚙️", color: "from-blue-600 to-indigo-500" },
    { name: "TypeScript & JavaScript", category: "Languages", level: "Core", icon: "TS", color: "from-sky-400 to-blue-600" },
    { name: "PHP", category: "Languages", level: "Proficient", icon: "🐘", color: "from-indigo-400 to-violet-600" },
    { name: "HTML5 & CSS3", category: "Languages", level: "Core", icon: "🌐", color: "from-orange-500 to-pink-500" },

    // Databases & DevOps
    { name: "PostgreSQL & MySQL", category: "Databases & DevOps", level: "Core", icon: "🐘", color: "from-blue-500 to-cyan-500" },
    { name: "SQLite & H2 Database", category: "Databases & DevOps", level: "Core", icon: "🗄️", color: "from-sky-400 to-indigo-500" },
    { name: "Oracle & SQL", category: "Databases & DevOps", level: "Proficient", icon: "🏛️", color: "from-red-500 to-rose-700" },
    { name: "ETL & Delta Loading", category: "Databases & DevOps", level: "Applied", icon: "🔄", color: "from-violet-500 to-purple-600" },
    { name: "Git, GitHub & Linux/WSL", category: "Databases & DevOps", level: "Core", icon: "🐧", color: "from-slate-400 to-zinc-600" },
    { name: "Docker (Basic)", category: "Databases & DevOps", level: "Working", icon: "🐳", color: "from-blue-400 to-sky-600" }
  ],

  projects: [
    {
      id: "ai-coding-tutorial",
      title: "AI Coding Tutorial Platform",
      subtitle: "Currently Building | Interactive AI Education & Developer Platform",
      category: "Generative AI",
      featured: true,
      inProgress: true,
      shortDesc: "Currently building an interactive AI-powered coding tutorial and learning platform designed to make programming concepts accessible through guided explanations, structured lessons, and intelligent code assistance.",
      fullDesc: "Active flagship project combining modern full-stack engineering with Large Language Models. Built to bridge the gap between static coding documentation and personalized 1-on-1 mentorship—allowing learners to follow structured modules, ask contextual questions on code snippets, and receive instant step-by-step guidance.",
      tech: ["TypeScript", "React", "Python", "FastAPI", "Google Gemini API", "LangChain"],
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://github.com/SalahHassani",
      architecture: [
        "Designed an interactive, structured tutorial interface in React & TypeScript for step-by-step programming lessons",
        "Engineered an asynchronous FastAPI backend integrating LangChain and the Google Gemini API for context-aware code tutoring",
        "Built intelligent code explanation, guided hint progression, and real-time concept breakdown workflows",
        "Focused on clean modular API design, responsive UX, and extensible curriculum authoring"
      ],
      metrics: "ACTIVE BUILD • AI-Powered Coding Education"
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
      id: "cardiac-segmentation",
      title: "Transformer-Based Cardiac Image Segmentation",
      subtitle: "Bachelor's Thesis | Deep Learning | Medical Image Analysis",
      category: "AI & Deep Learning",
      featured: true,
      inProgress: false,
      shortDesc: "Investigated modern Transformer-based deep learning architectures for automated anatomical structure segmentation on cardiac catheterization image datasets.",
      fullDesc: "Completed as my B.Sc. Computer Science Thesis at Eötvös Loránd University (ELTE). Evaluated Vision Transformer and hybrid encoder-decoder architectures on complex cardiac catheterization imagery to accurately delineate critical anatomical structures under clinical imaging noise.",
      tech: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
      featured: true,
      inProgress: false,
      shortDesc: "End-to-end generative AI web application utilizing Stable Diffusion v1.5 and FastAPI to transform narrative prompts into structured, exportable comic strips.",
      fullDesc: "Full-stack generative visual storytelling platform built around Stable Diffusion v1.5 and a secure FastAPI + PostgreSQL backend. Enables users to generate consistent panels, manage creative history, and compile finished comic layouts into downloadable PDFs.",
      tech: ["Python", "Stable Diffusion v1.5", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
      featured: true,
      inProgress: false,
      shortDesc: "Intelligent programming education and code-review assistant powered by FastAPI, LangChain, Pydantic, and the Google Gemini API.",
      fullDesc: "Designed a modular generative AI application tailored for interactive programming mentorship, debugging explanations, and structured learning feedback by connecting Large Language Models directly into software engineering workflows.",
      tech: ["Python", "FastAPI", "LangChain", "Google Gemini API", "Pydantic"],
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
      githubUrl: "https://github.com/SalahHassani",
      liveUrl: "https://salahhassani.github.io/MyPortfolio/",
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
        name: "Human-AI-Interaction-Lab",
        status: "Live App",
        desc: "Advanced web application exploring human-AI interaction dynamics hosted on Vercel.",
        lang: "TypeScript / React"
      },
      {
        name: "Cardiac-Image-Segmentation",
        status: "B.Sc. Thesis",
        desc: "Transformer-based medical image segmentation evaluated with Dice, IoU & Hausdorff Distance.",
        lang: "Python / PyTorch"
      },
      {
        name: "Automated-Comic-Generator",
        status: "Generative AI",
        desc: "Stable Diffusion v1.5 + FastAPI + PostgreSQL web app with RBAC and PDF export.",
        lang: "Python / FastAPI"
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

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Navigation & Mobile Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Handle Navbar Blur & Border on Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  // Close Modals on Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setCvModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth Section Scroll
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // Simulated FastAPI Backend POST Submission
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

  // Filtered Tech Stack
  const techCategories = ["All", "AI & Deep Learning", "Data Science", "Backend & APIs", "Languages", "Databases & DevOps"];
  const filteredTech =
    activeTechTab === "All"
      ? PORTFOLIO_DATA.techStack
      : PORTFOLIO_DATA.techStack.filter((item) => item.category === activeTechTab);

  // Filtered Projects
  const projectCategories = ["All", "Featured", "AI & Deep Learning", "Generative AI", "Backend & Data", "Software Dev"];
  const filteredProjects = PORTFOLIO_DATA.projects.filter((proj) => {
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
      proj.shortDesc.toLowerCase().includes(query) ||
      proj.tech.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  const featuredProjects = PORTFOLIO_DATA.projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #0a0a0f;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .glass-card {
          background: rgba(18, 19, 28, 0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card-hover {
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .glass-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(34, 211, 238, 0.45);
          box-shadow: 0 14px 34px -10px rgba(34, 211, 238, 0.16);
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
            background: white !important;
            color: black !important;
          }
        }
      `}</style>

      {/* Ambient Radial Mesh Glows */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-[28rem] h-[28rem] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* =====================================================================
          1. STICKY GLASSMORPHIC NAVBAR
      ===================================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-violet-500 to-emerald-400 p-[1.5px] overflow-hidden">
              {!imgError ? (
                <img
                  src={PROFILE_PIC_SRC}
                  alt={PORTFOLIO_DATA.personal.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover rounded-[7px]"
                />
              ) : (
                <div className="w-full h-full bg-[#0a0a0f] rounded-[7px] flex items-center justify-center font-mono font-bold text-sm text-cyan-300 group-hover:text-white transition-colors">
                  {PORTFOLIO_DATA.personal.initials}
                </div>
              )}
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-white">
              {PORTFOLIO_DATA.personal.brandTag}
              <span className="text-cyan-400 animate-pulse">_</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {[
              { label: "About", id: "about" },
              { label: "Skills", id: "stack" },
              { label: "Projects (9)", id: "projects" },
              { label: "Experience & Education", id: "experience" },
              { label: "Research & Languages", id: "interests" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCvModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-white/5 hover:bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View / Print CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e1018]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
            {[
              { label: "About", id: "about" },
              { label: "Technical Skills", id: "stack" },
              { label: "Projects (9)", id: "projects" },
              { label: "Experience & Education", id: "experience" },
              { label: "Research & Languages", id: "interests" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 hover:text-cyan-400 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCvModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 rounded-lg text-sm font-mono font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
            >
              <FileText className="w-4 h-4" />
              <span>Open Printable CV</span>
            </button>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================================================
            2. HERO & PROFILE SECTION
        ===================================================================== */}
        <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                  <span className="text-emerald-600">•</span>
                  <span>{PORTFOLIO_DATA.personal.university}</span>
                </div>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/35 text-amber-200 text-xs font-mono hover:bg-amber-500/20 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Building: AI Coding Tutorial Site</span>
                </button>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                  Salah Uddin{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                    Hassani
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-slate-200 leading-snug">
                  {PORTFOLIO_DATA.personal.headline}
                </p>
              </div>

              <div className="h-7 flex items-center font-mono text-sm sm:text-base text-cyan-300">
                <span className="text-violet-400 mr-2">$</span>
                <span>{displayedRole}</span>
                <span className="w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />
              </div>

              <p className="text-slate-300 text-base sm:text-[17px] leading-[1.75] max-w-2xl">
                {PORTFOLIO_DATA.personal.bio}
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-xl pt-1">
                <div className="glass-card rounded-xl p-3.5 border-l-2 border-l-cyan-400">
                  <span className="text-base sm:text-lg font-extrabold text-white block">
                    9 Projects
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    AI, CV, Diffusion &amp; Lab
                  </span>
                </div>
                <div className="glass-card rounded-xl p-3.5 border-l-2 border-l-emerald-400">
                  <span className="text-base sm:text-lg font-extrabold text-white block">
                    4.22 / 5.0
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    ELTE CS Honors GPA
                  </span>
                </div>
                <div className="glass-card rounded-xl p-3.5 border-l-2 border-l-violet-400">
                  <span className="text-base sm:text-lg font-extrabold text-white block">
                    5 Languages
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    EN, UR, BRH, HI, DE
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Featured Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 text-slate-100 border border-white/15 hover:border-cyan-400/50 transition-all"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Curriculum Vitae</span>
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-emerald-400/50 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs sm:text-sm text-slate-400">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-200" />
                  <span className="font-mono">github.com/SalahHassani (SHassani)</span>
                </a>
                <span className="text-slate-700 hidden sm:inline">•</span>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700 hidden sm:inline">•</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors font-mono"
                >
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400" />

                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[11px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to AI &amp; Data Science Roles • Berlin</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20 shrink-0">
                    {!imgError ? (
                      <img
                        src={PROFILE_PIC_SRC}
                        alt={PORTFOLIO_DATA.personal.name}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover rounded-[14px] bg-[#0a0a0f]"
                      />
                    ) : (
                      <div className="w-full h-full rounded-[14px] bg-[#0a0a0f] flex items-center justify-center">
                        <span className="text-2xl font-mono font-extrabold bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
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
                        className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-white/10 transition-colors shrink-0"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>@{PORTFOLIO_DATA.githubHighlights.displayName}</span>
                      </a>
                    </div>
                    <p className="text-xs font-mono text-cyan-300 mt-0.5">
                      M.Sc. Data Science @ FU Berlin
                    </p>
                    <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {PORTFOLIO_DATA.personal.location} • Stipendium Hungaricum Alumni
                    </p>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-violet-500/10 to-cyan-500/10 border border-amber-400/25">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      CURRENTLY BUILDING
                    </span>
                    <span className="text-slate-400">2026</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    AI Coding Tutorial Platform
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Interactive AI-assisted programming learning platform combining structured lessons with Gemini &amp; LangChain code mentorship.
                  </p>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                      <span>GitHub Highlights (@SalahHassani)</span>
                    </span>
                    <a
                      href={PORTFOLIO_DATA.githubHighlights.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline inline-flex items-center gap-1"
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
                        className="p-3 rounded-xl bg-[#07080d] border border-white/5 hover:border-cyan-400/40 transition-all group block"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-mono font-semibold text-slate-100 group-hover:text-cyan-300 truncate">
                            {repo.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                          {repo.desc}
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/5 text-[10px] font-mono">
                          <span className="text-cyan-400">{repo.lang}</span>
                          <span className="text-emerald-300">{repo.status}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. INTERACTIVE TECH STACK SECTION
        ===================================================================== */}
        <section id="stack" className="py-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Cpu className="w-4 h-4" />
                <span>Technical Skills &amp; Ecosystem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                AI, Data Science &amp; Backend Stack
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {techCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTechTab(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                    activeTechTab === category
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm shadow-cyan-500/10"
                      : "bg-white/5 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-white/10"
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
                className="glass-card glass-card-hover rounded-xl p-4 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-mono font-bold text-xs shadow-md`}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                    {tech.level}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            4. FEATURED SPOTLIGHT & ALL TECHNICAL PROJECTS (9 PROJECTS)
        ===================================================================== */}
        <section id="projects" className="py-20 border-t border-white/5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest mb-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Research &amp; Engineering Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Featured &amp; Technical Projects
              </h2>
              <p className="text-slate-300/80 text-sm sm:text-base mt-2 max-w-2xl">
                Highlighting my active AI Coding Tutorial Platform, Human AI Interaction Lab, B.Sc. Medical Computer Vision Thesis, and Generative AI systems.
              </p>
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={projectSearchQuery}
                onChange={(e) => setProjectSearchQuery(e.target.value)}
                placeholder="Search PyTorch, FastAPI, Vercel..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0d0f18] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* FEATURED SPOTLIGHT BANNER */}
          <div
            onClick={() => setSelectedProject(featuredProjects[0])}
            className="mb-10 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#121629] via-[#131226] to-[#0d1821] border border-cyan-400/35 hover:border-cyan-300/70 shadow-xl shadow-cyan-500/5 cursor-pointer transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-400/40">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    ACTIVE BUILD / IN PROGRESS
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                    <Star className="w-3 h-3 fill-cyan-300" />
                    Flagship Project
                  </span>
                  <span className="text-xs font-mono text-violet-300">
                    {featuredProjects[0].subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {featuredProjects[0].title}
                </h3>

                <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed">
                  {featuredProjects[0].fullDesc}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProjects[0].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/10 text-cyan-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 shrink-0">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub (@SHassani)</span>
                </a>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 group-hover:translate-x-1 transition-transform">
                  <span>Inspect System Design</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectFilter(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                    activeProjectFilter === cat
                      ? "bg-violet-500/25 text-violet-200 border border-violet-400/50 shadow-sm"
                      : "bg-white/5 text-slate-400 border border-white/5 hover:text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredProjects.length} of {PORTFOLIO_DATA.projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 cursor-pointer flex flex-col justify-between group ${
                  project.inProgress
                    ? "border-amber-400/35 bg-gradient-to-b from-amber-500/[0.04] to-transparent"
                    : project.featured
                    ? "border-cyan-500/20"
                    : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                        {project.category}
                      </span>
                      {project.inProgress && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-400/35">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                          In Progress
                        </span>
                      )}
                      {project.featured && !project.inProgress && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded-md bg-violet-500/15 text-violet-300 border border-violet-400/25">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {project.metrics}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-violet-300 mb-1.5">
                    {project.subtitle}
                  </p>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-start justify-between gap-2 leading-snug">
                    <span>
                      <span className="text-slate-500 font-mono text-base mr-2">
                        0{idx + 1}.
                      </span>
                      {project.title}
                    </span>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-[15px] leading-[1.7] mt-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View live demo for ${project.title}`}
                        className="p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${project.title} on GitHub`}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <span className="text-xs font-mono text-cyan-400 group-hover:underline">
                      Architecture →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            5. EDUCATION & PROFESSIONAL EXPERIENCE TIMELINE
        ===================================================================== */}
        <section id="experience" className="py-20 border-t border-white/5">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Academic &amp; Industry Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Experience &amp; Education
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base mt-2 max-w-2xl">
              Combining enterprise backend Java/Spring Boot software engineering at NIX United with graduate Data Science research in Berlin and Computer Science honors in Budapest.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-white/15 space-y-7">
            {PORTFOLIO_DATA.timeline.map((item) => {
              const isExpanded = !!expandedTimelineIds[item.id];
              return (
                <div key={item.id} className="relative">
                  <div
                    className={`absolute -left-[33px] sm:-left-[41px] top-7 w-4 h-4 rounded-full border-2 border-[#0a0a0f] shadow-md ${
                      item.type === "work"
                        ? "bg-emerald-400 shadow-emerald-400/40"
                        : "bg-cyan-400 shadow-cyan-400/40"
                    }`}
                  />

                  <div
                    onClick={() => toggleTimelineItem(item.id)}
                    className={`glass-card rounded-2xl p-6 sm:p-7 cursor-pointer transition-all ${
                      item.type === "work"
                        ? "border-emerald-500/25 hover:border-emerald-400/50"
                        : "hover:border-cyan-400/40"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold ${
                              item.type === "work"
                                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                                : "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                            }`}
                          >
                            {item.type === "work" ? (
                              <Briefcase className="w-3.5 h-3.5" />
                            ) : (
                              <GraduationCap className="w-3.5 h-3.5" />
                            )}
                            <span>{item.period}</span>
                          </span>
                          <span className="text-slate-400">{item.location}</span>
                          {item.badge && (
                            <span className="px-2.5 py-1 rounded-md bg-violet-500/15 text-violet-200 border border-violet-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                          {item.role}
                        </h3>
                        <p className="text-base font-semibold text-cyan-300">
                          {item.organization}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="self-start inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-cyan-300 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 shrink-0"
                      >
                        <span>{isExpanded ? "Hide Highlights" : "Show Highlights"}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <p className="text-sm sm:text-[15px] text-slate-200/90 leading-relaxed mt-3">
                      {item.summary}
                    </p>

                    {item.impactTags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.impactTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#08090f] text-slate-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {isExpanded && (
                      <ul className="mt-5 pt-4 border-t border-white/10 space-y-2.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                        {item.highlights.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-cyan-400 font-mono mt-0.5">▹</span>
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
        </section>

        {/* =====================================================================
            6. ACADEMIC RESEARCH INTERESTS, LANGUAGES (5) & PERSONAL INTERESTS
        ===================================================================== */}
        <section id="interests" className="py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Research Focus</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-5">
                  Academic &amp; Technical Interests
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PORTFOLIO_DATA.academicInterests.map((interest) => (
                    <div
                      key={interest}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#08090f] border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                      <span className="text-sm text-slate-200 leading-snug">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest mb-3">
                  <Heart className="w-4 h-4" />
                  <span>Additional Interests</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {PORTFOLIO_DATA.personalInterests.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-2 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                  <Globe className="w-4 h-4" />
                  <span>Multilingual Communication</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  5 Languages
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Languages</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fluent across South Asian and international academic/engineering languages, alongside active German studies in Berlin.
              </p>

              <div className="space-y-4">
                {PORTFOLIO_DATA.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-xl bg-[#08090f] border border-white/5 space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {lang.badge}
                        </span>
                        <span className="font-semibold text-white">{lang.name}</span>
                      </div>
                      <span className="font-mono text-xs text-slate-300">{lang.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 transition-all duration-500"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. INTERACTIVE FASTAPI CONTACT SECTION
        ===================================================================== */}
        <section id="contact" className="py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>Direct Contact &amp; FastAPI Endpoint</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Let&apos;s Connect
                </h2>
                <p className="text-slate-300/80 text-sm sm:text-base mt-3 leading-relaxed">
                  Interested in collaborating on AI/ML research, Generative AI applications, or Data Science &amp; Software Engineering roles in Berlin or remotely? Send a message or reach out directly.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-slate-400">University / Direct Email</p>
                    <p className="text-sm font-mono text-slate-100 mt-0.5">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 transition-colors"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-slate-400">Phone (Berlin, Germany)</p>
                    <a
                      href="tel:+4915206762522"
                      className="text-sm font-mono text-slate-100 hover:text-cyan-300 transition-colors mt-0.5 block"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 border border-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                  <button
                    onClick={() => setCvModalOpen(true)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-xs font-mono text-cyan-300 border border-cyan-500/30 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Open CV</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleContactSubmit}
                className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 font-bold">
                      POST
                    </span>
                    <span className="text-slate-300">/api/v1/contact</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Pydantic v2 Schema Validated
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Ada Lovelace"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ada@research-lab.de"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Working Student AI/ML / Research Collaboration / Full-Stack Role"
                    className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Salah, I saw your work on Human AI Interaction Lab..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08090f] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-violet-600 to-emerald-500 hover:opacity-95 text-white shadow-lg shadow-violet-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300">
                        <CheckCircle2 className="w-4 h-4" />
                        HTTP 201 Created — {apiResponseToast.endpoint}
                      </span>
                      <button
                        type="button"
                        onClick={() => setApiResponseToast(null)}
                        className="text-emerald-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-slate-200">{apiResponseToast.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          8. FOOTER
      ===================================================================== */}
      <footer className="relative z-10 border-t border-white/10 bg-[#07080c] py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">{PORTFOLIO_DATA.personal.brandTag}</span>
              <span>•</span>
              <span>© {new Date().getFullYear()} Salah Uddin Hassani • Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub (@SHassani)
              </a>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <span className="text-slate-500">TypeScript • React • FastAPI</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          PROJECT ARCHITECTURE DETAIL MODAL
      ===================================================================== */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card border border-cyan-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                {selectedProject.inProgress && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-400/35">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    Active Build
                  </span>
                )}
                <span className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {selectedProject.metrics}
                </span>
              </div>

              <div>
                <p className="text-xs font-mono text-violet-300">{selectedProject.subtitle}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              <div className="bg-[#08090f] border border-white/10 rounded-xl p-4 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-violet-300 flex items-center gap-1.5">
                  <Sparkle className="w-3.5 h-3.5" />
                  Technical Implementation &amp; Methodology
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedProject.architecture.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-cyan-200 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-teal-600 text-white hover:opacity-90 transition-opacity"
                  >
                    <Globe className="w-4 h-4" />
                    <span>View Live Demo</span>
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            id="printable-cv"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0e1018] border border-white/15 rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto text-slate-100"
          >
            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <FileText className="w-4 h-4" />
                <span>Curriculum Vitae — Salah Uddin Hassani</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setCvModalOpen(false)}
                  aria-label="Close CV modal"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b border-white/10 pb-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  SALAH UDDIN HASSANI
                </h2>
                <p className="text-sm font-mono text-cyan-300 mt-1">
                  M.Sc. Data Science Student | AI &amp; Machine Learning | Full-Stack Software Engineering
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-mono text-slate-300 mt-3">
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
                <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-1.5">
                  Professional Profile
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.personal.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                    Education &amp; Experience
                  </h3>
                  <div className="space-y-4">
                    {PORTFOLIO_DATA.timeline.map((t) => (
                      <div key={t.id} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <span className="text-[11px] font-mono text-emerald-300">{t.period}</span>
                        <h4 className="font-bold text-white text-sm mt-0.5">{t.role}</h4>
                        <p className="text-xs text-cyan-200">{t.organization} • {t.location}</p>
                        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{t.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
                    Core Technical Skills &amp; Languages
                  </h3>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <h4 className="font-bold text-white text-xs font-mono uppercase mb-1">
                        Languages &amp; Core Frameworks
                      </h4>
                      <p className="leading-relaxed">
                        Python, Java, C++, TypeScript, JavaScript, PHP, HTML, CSS • PyTorch, Hugging Face Transformers, Diffusers, OpenCV, LangChain, Gemini API • FastAPI, Spring Boot, REST APIs, Pydantic
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <h4 className="font-bold text-white text-xs font-mono uppercase mb-1">
                        Data Science, Databases &amp; Tools
                      </h4>
                      <p className="leading-relaxed">
                        NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn • PostgreSQL, MySQL, SQLite, Oracle, H2, ETL &amp; Delta Loading • Git, GitHub, Docker (Basic), Linux/WSL
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <h4 className="font-bold text-white text-xs font-mono uppercase mb-2">
                        Languages (5)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                        {PORTFOLIO_DATA.languages.map((l) => (
                          <span key={l.name} className="font-mono">
                            • {l.name}: {l.badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-3">
                  Selected Technical Projects ({PORTFOLIO_DATA.projects.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PORTFOLIO_DATA.projects.map((p) => (
                    <div key={p.id} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-sm">{p.title}</h4>
                        {p.inProgress && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-mono text-cyan-300 mt-0.5">
                        {p.tech.join(" • ")}
                      </p>
                      <p className="text-xs text-slate-300 mt-1.5">{p.shortDesc}</p>
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