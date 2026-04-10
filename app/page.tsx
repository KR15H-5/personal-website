"use client";

import Image from "next/image";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    role: "Quantitative Developer Intern",
    company: "Goldman Sachs",
    sub: "Systematic eTrading Platforms · Incoming Analyst 2026",
    period: "Jun 2025 – Aug 2025",
    location: "London, UK",
    bullets: [
      "Developed internal trading and monitoring tools for co-located exchange platforms, contributing to latency-sensitive infrastructure used in global electronic trading.",
      "Contributed to the design of an internal packet capture tool for analysing network traffic and reporting latency metrics across high-speed trading systems.",
      "Researched AI edge inference on FPGAs for real-time decision support in latency-constrained trading environments.",
    ],
    tags: ["C++", "FPGA", "Networking", "Low Latency"],
  },
  {
    role: "Project Lead & Software Engineer",
    company: "Kerridge Commercial Systems",
    sub: "University Industry Project",
    period: "Sep 2024 – Jun 2025",
    location: "Nottingham, UK",
    bullets: [
      "Led development of RentaCheck, a CNN-based damage detection platform for construction machinery, managing an 8-member team with ML efforts focused on YOLOv8.",
      "Built scalable infrastructure using AWS S3, EC2, and SageMaker for image storage, real-time inference, and automated weekly model updates.",
    ],
    tags: ["YOLOv8", "AWS", "Python", "Team Lead"],
  },
  {
    role: "Software & AI Engineering Intern",
    company: "Alwrite",
    sub: "",
    period: "Jun 2024 – Sep 2024",
    location: "Mumbai, IN",
    bullets: [
      "Built an AI risk management system for commercial insurance underwriters — 20% improvement in risk assessment accuracy using HuggingFace Transformers and LLaMA 3.1.",
      "Analysed image data from 10,000+ commercial spaces; deployed models via AWS SageMaker with RAG for policy analysis, increasing report speed by 45%.",
    ],
    tags: ["LLaMA 3.1", "RAG", "AWS SageMaker", "HuggingFace"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University of Nottingham",
    sub: "Visualization, Text Analytics & Graphics Group (VisTAG)",
    period: "Oct 2023 – Jun 2025",
    location: "Nottingham, UK",
    bullets: [
      "Processed and analysed stock data to generate actionable insights from historical trading patterns.",
      "Collaborated on publication tasks including streamlining BibTeX entries for a EuroVis short paper.",
    ],
    tags: ["Research", "Data Analysis", "Python"],
  },
];

const PROJECTS = [
  {
    name: "EssayLLMFineTune",
    desc: "Full-stack app for fine-tuning LLaMA on user essays — FastAPI/Uvicorn backend, JavaScript frontend, Supabase managing 200+ essays with JWT & OAuth auth.",
    tags: ["Python", "FastAPI", "LLaMA", "Supabase", "Docker"],
    href: "https://github.com/KR15H-5/EssayLLMFineTune",
  },
  {
    name: "GoChat",
    desc: "Real-time full-stack messaging app with Go WebSocket backend and React frontend — dynamic UI with live notifications.",
    tags: ["Go", "React", "WebSockets", "Docker"],
    href: "https://github.com/KR15H-5/GoChat",
  },
  {
    name: "SWE Internship Tracker",
    desc: "Web app tracking UK software engineering internship positions, organising opportunities by status and deadlines.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://github.com/KR15H-5",
  },
  {
    name: "Big O Showdown",
    desc: "Interactive game helping users practise data structures and algorithms through complexity analysis challenges.",
    tags: ["React", "Supabase", "JavaScript"],
    href: "https://github.com/KR15H-5",
  },
  {
    name: "AI Risk Management System",
    desc: "Insurance risk assessment platform achieving 20% accuracy improvement, processing imagery from 10,000+ commercial spaces with RAG policy analysis.",
    tags: ["Python", "LLaMA 3.1", "RAG", "AWS"],
    href: "https://github.com/KR15H-5",
  },
  {
    name: "PaletteAI",
    desc: "Full-stack platform that analyses website colour palettes — designed for designers seeking accessible and aesthetic colour systems.",
    tags: ["Express", "MongoDB", "React"],
    href: "https://github.com/KR15H-5",
  },
];

const SKILLS: Record<string, string[]> = {
  Languages: ["Python", "Go", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  Frameworks: ["React", "Next.js", "FastAPI", "Node.js", "Express", "JUnit"],
  "ML / AI": ["PyTorch", "HuggingFace", "Sklearn", "YOLOv8", "LLaMA", "RAG", "FPGA Inference"],
  Infrastructure: ["AWS (S3, EC2, SageMaker)", "Docker", "Git", "Redis", "MongoDB", "Supabase"],
  Libraries: ["pandas", "NumPy", "Matplotlib"],
};

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: "linear-gradient(180deg, rgba(6,6,10,0.96) 0%, transparent 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <span className="mono accent" style={{ fontSize: "0.85rem", letterSpacing: "0.15em", opacity: 0.9 }}>
          KS.
        </span>
        <div className="flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="nav-link hidden sm:block">
              {n.label}
            </a>
          ))}
          <a
            href="https://github.com/KR15H-5"
            className="btn-primary"
            style={{ padding: "6px 16px", fontSize: "0.68rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24"
        style={{ paddingTop: "96px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 w-full">
          {/* Left: text */}
          <div className="flex-1">
            <p className="section-label fade-up-1" style={{ marginBottom: "16px" }}>
              &gt; init portfolio.sh
            </p>
            <h1
              className="fade-up-2 glow-text"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                marginBottom: "16px",
              }}
            >
              Krish
              <br />
              <span className="accent">Shroff</span>
              <span className="cursor-blink" />
            </h1>
            <p
              className="fade-up-3 mono"
              style={{
                fontSize: "0.82rem",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                marginBottom: "20px",
              }}
            >
              Quant Developer · AI Engineer · Full Stack
            </p>
            <p
              className="fade-up-4"
              style={{
                fontSize: "0.98rem",
                color: "var(--text-muted)",
                lineHeight: 1.78,
                maxWidth: "500px",
                marginBottom: "36px",
              }}
            >
              CS with AI student at the{" "}
              <span style={{ color: "var(--text)" }}>University of Nottingham</span> (First-Class
              Honours). Incoming Analyst at{" "}
              <span style={{ color: "var(--text)" }}>Goldman Sachs</span>, previously building
              low-latency trading infrastructure there. Passionate about the intersection of
              quantitative finance and machine learning.
            </p>
            <div className="fade-up-5 flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">View Experience</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>

            {/* Social links */}
            <div className="fade-up-6 flex flex-wrap gap-6" style={{ marginTop: "32px" }}>
              <a
                href="https://github.com/KR15H-5"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mono"
                style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                KR15H-5
              </a>
              <a
                href="https://linkedin.com/in/krish--shroff"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mono"
                style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                krish--shroff
              </a>
              <a
                href="mailto:psyks17@nottingham.ac.uk"
                className="social-link mono"
                style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
                psyks17@nottingham.ac.uk
              </a>
            </div>
          </div>

          {/* Right: image + badge */}
          <div className="fade-up-3 flex-shrink-0">
            <div className="profile-ring">
              <Image
                src="https://avatars.githubusercontent.com/u/53829884?v=4"
                alt="Krish Shroff"
                width={210}
                height={210}
                className="rounded-full"
                unoptimized
              />
            </div>
            <div className="card" style={{ padding: "14px 18px", maxWidth: "210px", marginTop: "16px" }}>
              <p className="section-label" style={{ fontSize: "0.58rem", marginBottom: "5px" }}>Currently</p>
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>
                Univ. of Nottingham
              </p>
              <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>
                BSc CS with AI · 2023–2026
              </p>
              <div style={{ marginTop: "10px" }}>
                <span className="tag">First-Class Honours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: "1200px", margin: "0 auto" }} />

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
      >
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>&gt; experience</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Where I&apos;ve worked
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="card" style={{ padding: "28px 30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--text)" }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--accent)", fontWeight: 500, marginTop: "3px" }}>
                    {exp.company}
                    {exp.sub && (
                      <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
                        {" "}— {exp.sub}
                      </span>
                    )}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                    {exp.period}
                  </p>
                  <p className="mono" style={{ fontSize: "0.65rem", color: "var(--text-dim)", marginTop: "2px" }}>
                    {exp.location}
                  </p>
                </div>
              </div>

              <div className="divider" style={{ margin: "16px 0" }} />

              <ul style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "18px" }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginTop: "5px", flexShrink: 0, fontSize: "0.8rem" }}>›</span>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.68 }}>{b}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ maxWidth: "1200px", margin: "0 auto" }} />

      {/* PROJECTS */}
      <section
        id="projects"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
      >
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>&gt; projects</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Things I&apos;ve built
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: "16px",
          }}
        >
          {PROJECTS.map((proj, i) => (
            <a
              key={i}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: "24px 26px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "176px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <h3 className="mono" style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text)", letterSpacing: "0.02em" }}>
                    {proj.name}
                  </h3>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ opacity: 0.65, flexShrink: 0, marginLeft: "8px", marginTop: "1px" }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <p style={{ fontSize: "0.81rem", color: "var(--text-muted)", lineHeight: 1.68 }}>
                  {proj.desc}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "16px" }}>
                {proj.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="divider" style={{ maxWidth: "1200px", margin: "0 auto" }} />

      {/* SKILLS */}
      <section
        id="skills"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
      >
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>&gt; skills</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Tech stack
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="card" style={{ padding: "22px 24px" }}>
              <p className="section-label" style={{ marginBottom: "14px", fontSize: "0.6rem" }}>
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {items.map((item) => (
                  <span key={item} className="tag" style={{ fontSize: "0.67rem" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px", marginTop: "16px" }}>
          <div
            className="card"
            style={{
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, transparent 100%)",
            }}
          >
            <div className="timeline-dot" />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)" }}>
                Imperial College Algothon 2026
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px" }}>
                Selected 1 of 200 — Traded live market signals, optimised portfolio Sharpe ratio for IMC Trading & Man Group challenges
              </p>
            </div>
            <span className="tag" style={{ flexShrink: 0 }}>Quant</span>
          </div>

          <div
            className="card"
            style={{
              padding: "20px 26px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, transparent 100%)",
            }}
          >
            <div className="timeline-dot" />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)" }}>
                QuantiHack 2026
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px" }}>
                UK&apos;s largest quant hackathon — sponsored by Jane Street, Optiver & Anthropic. 8-hour MVP build at Encode Hub, London. 114 participants, £7,500+ prize pool.
              </p>
            </div>
            <span className="tag" style={{ flexShrink: 0 }}>Quant</span>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: "1200px", margin: "0 auto" }} />

      {/* CONTACT */}
      <section
        id="contact"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px 128px" }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>&gt; contact</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "18px",
            }}
          >
            Get in touch
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.78, marginBottom: "36px" }}>
            Always open to new opportunities, collaborations, or a good conversation about quant
            finance and AI. My inbox is open.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href="mailto:psyks17@nottingham.ac.uk" className="btn-primary">
              Say hello →
            </a>
            <a href="https://linkedin.com/in/krish--shroff" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              LinkedIn
            </a>
            <a href="https://github.com/KR15H-5" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--text-dim)",
          padding: "22px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <span className="mono" style={{ fontSize: "0.66rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
          © 2025 Krish Shroff
        </span>
        <span className="mono" style={{ fontSize: "0.63rem", color: "var(--text-dim)" }}>
          Built with Next.js · Tailwind CSS
        </span>
      </footer>
    </div>
  );
}
