# Salah Uddin Hassani — Personal Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Site-salahhassani.github.io%2FMyPortfolio-6366f1?style=for-the-badge&logo=githubpages&logoColor=white)](https://salahhassani.github.io/MyPortfolio/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, responsive developer and AI research portfolio showcasing my work in **Data Science, Machine Learning, Generative AI, and Full-Stack Software Engineering**.

**Live Website:** [https://salahhassani.github.io/MyPortfolio/](https://salahhassani.github.io/MyPortfolio/)

---

## Why This Repository Exists

This repository serves as a single, interactive hub for my academic background, software engineering experience, and technical projects as an **M.Sc. Data Science student at Freie Universität Berlin** and **B.Sc. Computer Science graduate from Eötvös Loránd University (ELTE)**.

Rather than relying on a static resume, this portfolio is built to:
- **Showcase End-to-End Projects:** Provide searchable, filterable breakdowns of my work across deep learning, medical image segmentation, diffusion models, LLM applications, and ETL data pipelines—complete with architecture details and evaluation metrics.
- **Offer an Interactive, Printable CV:** Allow recruiters and academic supervisors to inspect or export a formatted PDF resume directly from the browser.
- **Streamline Direct Communication:** Enable visitors to reach out directly via an integrated contact form routed to my university inbox.
- **Automate Continuous Deployment:** Demonstrate a clean modern frontend workflow with automated CI/CD publishing via GitHub Actions.

---

## Key Features

- **Interactive Project Explorer:** Filter projects by domain (*Featured, AI & Deep Learning, Generative AI, Backend & Data, Software Dev*) or search by keyword, with modal architecture breakdowns for each build.
- **Categorized Technical Stack:** Interactive filtering across AI/ML frameworks (`PyTorch`, `Transformers`, `Diffusers`, `LangChain`), Data Science tools, Backend APIs (`FastAPI`, `Spring Boot`), Databases, and DevOps.
- **Academic & Professional Timeline:** Highlights graduate studies at **FU Berlin**, software engineering internship experience at **NIX United**, and **Stipendium Hungaricum** scholarship honors at **ELTE**.
- **Browser-Ready Printable CV:** One-click modal formatted with dedicated `@media print` CSS rules for clean PDF export.
- **Direct Email Contact Form:** Integrated FormSubmit delivery to `salau02@zedat.fu-berlin.de` with automatic `mailto:` fallback.

---

## Project Structure

```text
my_portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Actions build & Pages deployment
├── images/
│   └── profile_pic.jpg       # Profile portrait bundled via Vite
├── src/
│   ├── App.jsx               # Main portfolio application & structured data
│   ├── index.css             # Tailwind CSS v4 & print stylesheet rules
│   └── main.jsx              # React root entry point
├── index.html                # HTML shell & SEO metadata
├── package.json              # Dependencies & build scripts
└── vite.config.js            # Vite configuration (base: '/MyPortfolio/')