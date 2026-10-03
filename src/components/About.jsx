import './About.css';

function About() {
  return (
    <section className="about" id="about">
      {/* Background ambient glow decoration */}
      <div className="about-glow" aria-hidden="true" />

      <div className="about-container">
        {/* Left Column: Heading, Story & Location */}
        <div className="about-left">
          {/* Section Label */}
          <div className="section-badge">
            <span className="badge-dot-purple" />
            <span>ABOUT ME</span>
          </div>

          {/* Heading */}
          <h2 className="about-heading">
            Curious about how things work. <br />
            <span className="about-heading-accent">Driven to build what comes next.</span>
          </h2>

          {/* Main Paragraphs */}
          <div className="about-description">
            <p>
              I'm a Computer Science student specializing in Artificial
              Intelligence and Machine Learning. I enjoy turning ideas into
              practical projects, experimenting with new technologies, and
              learning by building.
            </p>
            <p>
              Beyond technology, I'm also interested in writing, poetry, music,
              singing and creative expression. I like working at the intersection
              of technology and creativity.
            </p>
          </div>

          {/* Location Badge */}
          <div className="about-location">
            <svg
              className="location-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Based in Maharashtra, India</span>
          </div>
        </div>

        {/* Right Column: Structured Information Cards */}
        <div className="about-right">
          {/* Card 1: Education */}
          <div className="about-card card-education">
            <div className="card-header">
              <div className="card-icon-box icon-blue">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="card-label">Education</span>
            </div>
            <h3 className="card-title">B.Tech — Artificial Intelligence Engineering</h3>
          </div>

          {/* Card 2: Focus */}
          <div className="about-card card-focus">
            <div className="card-header">
              <div className="card-icon-box icon-purple">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span className="card-label">Focus</span>
            </div>
            <h3 className="card-title">
              AI / ML • Software Development • Intelligent Systems
            </h3>
          </div>

          {/* Card 3: Currently Exploring */}
          <div className="about-card card-exploring">
            <div className="card-header">
              <div className="card-icon-box icon-cyan">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <span className="card-label">Currently Exploring</span>
            </div>
            <h3 className="card-title">
              Generative AI • LLMs • Agentic AI • Full-Stack Development
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
