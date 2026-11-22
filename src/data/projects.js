export const PROJECTS = [
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
];

export const PROJECT_FILTERS = [
  "All",
  "Featured",
  "AI & Deep Learning",
  "Generative AI",
  "Backend & Data",
  "Software Dev"
];