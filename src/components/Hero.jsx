import './Hero.css';

function Hero() {
  // Beginner-friendly smooth scrolling function
  const scrollToSection = (e, targetSelector) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* 1. Subtle background grid pattern */}
      <div className="hero-grid-pattern" aria-hidden="true" />

      {/* 2. Soft background glowing orbs */}
      <div className="hero-glow hero-glow-blue" aria-hidden="true" />
      <div className="hero-glow hero-glow-purple" aria-hidden="true" />

      {/* 3. Subtle floating particles */}
      <div className="hero-particle particle-1" aria-hidden="true" />
      <div className="hero-particle particle-2" aria-hidden="true" />
      <div className="hero-particle particle-3" aria-hidden="true" />

      {/* 4. Main 2-column content container */}
      <div className="hero-container">
        {/* Left Column: Text & Call-to-actions */}
        <div className="hero-text-content">
          {/* Small Top Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>AI/ML Engineer • Developer • Creator</span>
          </div>

          {/* Main Heading with structured line breaks */}
          <h1 className="hero-title">
            <span className="hero-title-line">I build things that</span>
            <span className="hero-title-line highlight-think">think,</span>
            <span className="hero-title-line">and create things</span>
            <span className="hero-title-line highlight-feel">that feel.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-description">
            I'm a Computer Science student focused on Artificial Intelligence and
            Machine Learning, building practical projects while exploring the
            creative side of technology.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
              onClick={(e) => scrollToSection(e, '.projects')}
            >
              <span>View My Work</span>
              <svg
                className="btn-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-secondary"
              onClick={(e) => scrollToSection(e, '.contact')}
            >
              <span>Let's Connect</span>
            </a>
          </div>
        </div>

        {/* Right Column: Abstract AI & Creative Visual */}
        <div className="hero-visual-wrapper" aria-hidden="true">
          <svg
            className="hero-svg-art"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bluePurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>

              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#0ea5e9" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#070913" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Creative Harmonic Waves */}
            <g className="creative-wave" opacity="0.45">
              <path
                d="M 60 200 C 110 130, 160 270, 200 200 C 240 130, 290 270, 340 200"
                stroke="url(#bluePurpleGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <path
                d="M 70 200 C 120 150, 170 250, 200 200 C 230 150, 280 250, 330 200"
                stroke="#38bdf8"
                strokeWidth="1"
                opacity="0.6"
              />
            </g>

            {/* Outer Orbital Ring */}
            <g className="orbit-ring-outer">
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="url(#bluePurpleGrad)"
                strokeWidth="1.5"
                strokeDasharray="16 12"
                opacity="0.6"
              />
              <circle cx="200" cy="60" r="5" fill="#38bdf8" className="node-glow-1" />
              <circle cx="340" cy="200" r="4.5" fill="#c084fc" className="node-glow-2" />
              <circle cx="200" cy="340" r="4" fill="#818cf8" className="node-glow-1" />
              <circle cx="60" cy="200" r="4.5" fill="#60a5fa" className="node-glow-2" />
            </g>

            {/* Inner Orbital Ring */}
            <g className="orbit-ring-inner">
              <circle
                cx="200"
                cy="200"
                r="95"
                stroke="#818cf8"
                strokeWidth="1.2"
                strokeDasharray="8 8"
                opacity="0.5"
              />
              <line x1="200" y1="200" x2="267" y2="133" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="133" y2="267" stroke="#c084fc" strokeWidth="1" opacity="0.4" />
              <circle cx="267" cy="133" r="3.5" fill="#38bdf8" />
              <circle cx="133" cy="267" r="3.5" fill="#e879f9" />
            </g>

            {/* Central AI Core */}
            <circle
              className="core-pulse"
              cx="200"
              cy="200"
              r="48"
              fill="url(#coreGlow)"
            />
            <circle cx="200" cy="200" r="8" fill="#ffffff" opacity="0.9" />
            <circle cx="200" cy="200" r="16" fill="#38bdf8" opacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
