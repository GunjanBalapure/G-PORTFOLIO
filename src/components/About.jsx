import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

function About() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="about reveal-hidden" id="about">
      <div className="about-scrapbook-sheet">
        {/* ABOUT MINION: Sitting on left edge */}
        <div className="minion-wrapper minion-about-wrap minion-hide-tablet">
          <img 
            src="/assets/minions/minion-about.png?v=2" 
            alt="Minion character" 
            className="minion minion-about minion-float"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

        <div className="pin pin-red about-pin-1"></div>
        <div className="pin pin-blue about-pin-2"></div>
        
        <div className="about-container">
          {/* Left Column: Heading, Story & Location */}
          <div className="about-left">
            <div className="handwritten about-section-label">
              About Me
            </div>

            <h2 className="about-heading typewriter-text">
              Curious about how things work.<br/>
              Driven to build what comes <span className="highlight-yellow">next.</span>
            </h2>

            <div className="about-description">
              <p>
                I'm a Computer Science student specializing in Artificial
                Intelligence and Machine Learning. I enjoy turning ideas into
                practical projects, experimenting with new technologies, and
                learning by building.
              </p>
              <p>
                Beyond technology, I enjoy writing poetry, exploring songwriting,
                singing, composing, and visual storytelling.
              </p>
            </div>

            <div className="about-location handwritten">
              📍 Based in Maharashtra, India
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="about-right">
            {/* Card 1: Education */}
            <div className="about-card card-education">
              <div className="tape card-tape"></div>
              <span className="card-label handwritten">Education</span>
              <h3 className="card-title">
                B.Tech in Artificial Intelligence Engineering
                <span className="card-subtitle">
                  MIT Academy of Engineering, Pune
                </span>
              </h3>
            </div>

            {/* Card 2: Focus */}
            <div className="about-card card-focus">
              <div className="tape card-tape"></div>
              <span className="card-label handwritten">Focus</span>
              <h3 className="card-title">
                Artificial Intelligence • Machine Learning
              </h3>
            </div>

            {/* Card 3: Currently Exploring */}
            <div className="about-card card-exploring">
              <div className="tape card-tape"></div>
              <span className="card-label handwritten">Currently Exploring</span>
              <h3 className="card-title">
                Generative AI • LLMs • Agentic AI • Full-Stack Development
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
