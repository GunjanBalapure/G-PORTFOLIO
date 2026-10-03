import { useScrollReveal } from '../hooks/useScrollReveal';
import './Creative.css';

function Creative() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="creative reveal-hidden" id="creative">
      <div className="creative-scrapbook-sheet">
        
        {/* CREATIVE MINION: Peeking behind the creative sheet / left side */}
        <div className="minion-wrapper minion-creative-wrap minion-hide-tablet">
          <img 
            src="/assets/minions/minion-creative.png" 
            alt="Minion character" 
            className="minion minion-creative minion-float"
            onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
          />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

        <div className="pin pin-yellow creative-pin"></div>
        
        <div className="creative-header">
          <div className="handwritten creative-label">Beyond Code</div>
          <h2 className="creative-heading typewriter-text">
            Technology is what I build.<br/>
            <span className="highlight-blue">Creativity is how I express.</span>
          </h2>
          <p className="creative-description">
            Outside of code, I write poetry, explore songwriting, sing, compose, and experiment with visual storytelling. Creativity helps me look at technical problems differently — and technology gives me new ways to express ideas.
          </p>
        </div>

        <div className="creative-cards-container">
          
          {/* Card 1: Poetry */}
          <article className="creative-note note-poetry">
            <div className="tape" style={{ top: '-10px', left: '20px', transform: 'rotate(-3deg)' }}></div>
            <div className="creative-icon">
              {/* Simple handwritten lines icon */}
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 10H35 M10 20H30 M5 30H25" />
              </svg>
            </div>
            <h3 className="creative-title typewriter-text">Words that stay.</h3>
            <p className="creative-text">
              I write poetry in Hindi, English and Hinglish, exploring emotions, observations, memories and everyday experiences.
            </p>
          </article>

          {/* Card 2: Music */}
          <article className="creative-note note-music">
            <div className="tape" style={{ top: '-10px', right: '20px', transform: 'rotate(2deg)' }}></div>
            <div className="creative-icon">
              {/* Small music note / waveform doodle */}
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 28V12L28 8V24 M12 28C12 30.2 10.2 32 8 32C5.8 32 4 30.2 4 28C4 25.8 5.8 24 8 24C9.5 24 11 25 12 26V28ZM28 24C28 26.2 26.2 28 24 28C21.8 28 20 26.2 20 24C20 21.8 21.8 20 24 20C25.5 20 27 21 28 22V24Z" />
              </svg>
            </div>
            <h3 className="creative-title typewriter-text">Stories through sound.</h3>
            <p className="creative-text">
              I enjoy singing, songwriting and composition, and I'm currently exploring guitar as another way to create and express ideas.
            </p>
          </article>

          {/* Card 3: Visual Storytelling */}
          <article className="creative-note note-visual">
            <div className="tape" style={{ top: '50%', left: '-15px', transform: 'translateY(-50%) rotate(-85deg)', width: '40px' }}></div>
            <div className="creative-icon">
              {/* Film frame style doodle */}
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="8" width="32" height="24" rx="2" />
                <circle cx="12" cy="20" r="3" />
                <circle cx="28" cy="20" r="3" />
              </svg>
            </div>
            <h3 className="creative-title typewriter-text">Visual narratives.</h3>
            <p className="creative-text">
              I love capturing moments and experimenting with visual storytelling to share perspectives and ideas.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Creative;
