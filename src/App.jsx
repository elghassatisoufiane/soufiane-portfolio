
import React, { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaCode,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiMysql,
  SiLinux,
  SiGit,
  SiMongodb,
  SiDotnet,
  SiExpo,
} from "react-icons/si";

const github = "https://github.com/elghassatisoufiane";

// Remplacer plus tard par ton vrai profil LinkedIn
const linkedin = "https://www.linkedin.com/in/soufiane-el-ghassati-769158424/";

const skills = [
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "C# / .NET", icon: SiDotnet, color: "#9b4fdf" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "React Native", icon: SiReact, color: "#61dafb" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Oracle", icon: FaDatabase, color: "#f80000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Linux", icon: SiLinux, color: "#fcc624" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Expo", icon: SiExpo, color: "#ffffff" },
  { name: "Networking", icon: FaNetworkWired, color: "#60a5fa" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="portfolio-grid" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          Soufiane<span className="dot">.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github"
        >
          <FaGithub />
          GitHub
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Engineering Student · École Marocaine des Sciences de l’Ingénieur Casablanca
            </div>

            <p className="intro">Hello, I'm</p>

            <h1>
              Soufiane
              <br />
              <span className="gradient-text">El Ghassati.</span>
            </h1>

            <h2 className="hero-subtitle">
              Software Development
              <span className="subtitle-separator"> / </span>
              IT & Networks
            </h2>

            <p className="hero-description">
              Computer Engineering student passionate about building
              modern applications, exploring technologies, and
              solving real-world problems through code.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <FaArrowRight />
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <span className="social-divider" />
              <span>Based in Morocco</span>
            </div>
          </div>

          {/* CODE WINDOW */}
          <div className="hero-visual">
            <div className="floating-badge badge-top">
              <FaCode /> Developer
            </div>

            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>developer.js</span>
                <FaCode />
              </div>

              <div className="code-content">
                <div>
                  <span className="line-number">01</span>
                  <span className="code-purple">const </span>
                  <span className="code-blue">developer </span>
                  = {"{"}
                </div>
                <div>
                  <span className="line-number">02</span>
                  {"  "}name: <span className="code-green">"Soufiane El Ghassati"</span>,
                </div>
                <div>
                  <span className="line-number">03</span>
                  {"  "}role: <span className="code-green">"Engineering Student"</span>,
                </div>
                <div>
                  <span className="line-number">04</span>
                  {"  "}school: <span className="code-green">"École Marocaine des Sciences de l’Ingénieur"</span>,
                </div>
                <div>
                  <span className="line-number">05</span>
                  {"  "}location: <span className="code-green">"Morocco"</span>,
                </div>
                <div>
                  <span className="line-number">06</span>
                  {"  "}passion: [
                </div>
                <div>
                  <span className="line-number">07</span>
                  {"    "}<span className="code-green">"Development"</span>,
                </div>
                <div>
                  <span className="line-number">08</span>
                  {"    "}<span className="code-green">"Technology"</span>
                </div>
                <div>
                  <span className="line-number">09</span>
                  {"  "}],
                </div>
                <div>
                  <span className="line-number">10</span>
                  {"  "}learning: <span className="code-purple">true</span>
                </div>
                <div>
                  <span className="line-number">11</span>
                  {"};"}
                </div>
                <div>
                  <span className="line-number">12</span>
                  <span className="code-comment">
                    // Always building something new...
                  </span>
                </div>
              </div>

              <div className="window-footer">
                <span className="footer-dot" />
                System online
                <span>JavaScript</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <FaServer /> IT & Networks
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="content-section section-container">
          <div className="section-heading">
            <span className="section-number">01 / ABOUT</span>
            <h2>
              Get to <span className="gradient-text">know me.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="glass-card about-text">
              <h3>Who am I?</h3>
              <p>
                I'm Soufiane El Ghassati, a Computer Engineering
                student at École Marocaine des Sciences de l’Ingénieur Casablanca, specializing in
                Informatique et Réseaux.
              </p>
              <p>
                I'm developing my skills in software engineering,
                databases, operating systems, and computer networks.
                I enjoy learning by building practical projects.
              </p>
            </div>

            <div className="about-details">
              <div className="glass-card detail-card">
                <FaGraduationCap />
                <div>
                  <h3>Education</h3>
                  <p>École Marocaine des Sciences de l’Ingénieur · Engineering Cycle</p>
                  <span>Computer Science & Networks</span>
                </div>
              </div>

              <div className="glass-card detail-card">
                <FaMapMarkerAlt />
                <div>
                  <h3>Location</h3>
                  <p>Casablanca, Morocco</p>
                  <span>Open to learning and collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="content-section section-container">
          <div className="section-heading">
            <span className="section-number">02 / SKILLS</span>
            <h2>
              My <span className="gradient-text">tech stack.</span>
            </h2>
            <p>Technologies I'm learning and working with.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="skill-card" key={skill.name}>
                  <Icon
                    size={30}
                    style={{ color: skill.color }}
                  />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="content-section section-container">
          <div className="section-heading">
            <span className="section-number">03 / PROJECTS</span>
            <h2>
              Featured <span className="gradient-text">work.</span>
            </h2>
            <p>My portfolio is growing as I build new projects.</p>
          </div>

          <div className="projects-grid">
            <div className="glass-card project-card">
              <div className="project-icon">
                <FaLaptopCode />
              </div>

              <span className="project-category">
                WEB DEVELOPMENT
              </span>

              <h3>Personal Portfolio</h3>

              <p>
                A modern responsive portfolio built with React,
                featuring a futuristic design and interactive layout.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>Vite</span>
              </div>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile <FaExternalLinkAlt />
              </a>
            </div>

            <div className="glass-card project-card">
              <div className="project-icon">
                <FaDatabase />
              </div>

              <span className="project-category">
                COMING SOON
              </span>

              <h3>More Projects Ahead</h3>

              <p>
                I'm continuing to learn and develop practical
                applications. New projects will be added here.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>.NET</span>
                <span>Databases</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="content-section section-container">
          <div className="glass-card contact-card">
            <span className="section-number">04 / CONTACT</span>

            <h2>
              Let's <span className="gradient-text">connect.</span>
            </h2>

            <p>
              Interested in connecting, sharing ideas, or
              collaborating on a project? Find me on GitHub
              or LinkedIn.
            </p>

            <div className="contact-actions">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Soufiane El Ghassati
        </span>
        <span>
          Built with React <FaCode />
        </span>
      </footer>
    </div>
  );
}

export default App;
