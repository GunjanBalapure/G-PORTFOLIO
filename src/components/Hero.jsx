
import { useEffect } from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (e, targetSelector) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Highly performant scroll parallax using IntersectionObserver with 100 thresholds.
  // This smoothly maps the section's visibility ratio to CSS transform scales, 
  // without needing an expensive continuous 'scroll' event listener!
  useEffect(() => {
    const heroSheet = document.querySelector('.hero-scrapbook-sheet');
    const heroSection = document.getElementById('hero');
    
    // Check if user prefers reduced motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && heroSheet && heroSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const ratio = entry.intersectionRatio;
            
            // As ratio goes from 1 (fully visible) to 0 (leaving screen):
            // Scale goes from 1 to 0.92
            const scale = 0.92 + (0.08 * ratio);
            // Moves upward slowly
            const moveY = (1 - ratio) * -40;
            // Fades slightly
            const opacity = 0.6 + (0.4 * ratio);
            
            heroSheet.style.transform = `scale(${scale}) translateY(${moveY}px) rotate(0.5deg)`;
            heroSheet.style.opacity = opacity;
            
            // Subtle shadow softening
            heroSheet.style.boxShadow = `2px 8px ${25 * ratio}px rgba(0,0,0,${0.15 * ratio})`;
          });
        },
        // Trigger at 100 different points for buttery smoothness
        { threshold: Array.from({ length: 100 }, (_, i) => i / 100) }
      );
      
      observer.observe(heroSection);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-scrapbook-sheet">
        {/* HERO MINION: Peeking from behind top right of paper */}
        <div className="minion-wrapper minion-hero-wrap minion-keep-mobile">
          <img 
            src="/assets/minions/minion-hero.png?v=2" 
            alt="Minion character" 
            className="minion minion-hero minion-float"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

        <div className="tape tape-top-left"></div>
        <div className="tape tape-bottom-right"></div>
        
        <div className="hero-container">
          {/* LEFT COLUMN: Text */}
          <div className="hero-text-content">
            <span className="hero-hello handwritten">Hi, I'm Gunjan</span>
            
            <h1 className="hero-title typewriter-text">
              I build things that <br/>
              <span className="highlight-blue">think,</span><br/>
              and create things <br/>
              <span className="highlight-pink">that feel.</span>
            </h1>

            <div className="hero-badge-container">
              <span className="hero-role-badge">AI/ML Engineer • Developer • Creator</span>
            </div>

            <p className="hero-description">
              I'm a Computer Science student exploring AI, machine learning, software development and creative technology.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-paper-btn" onClick={(e) => scrollToSection(e, '.projects')}>
                View My Work &rarr;
              </a>
              <a href="#contact" className="hero-paper-btn btn-yellow" onClick={(e) => scrollToSection(e, '.contact')}>
                Let's Connect &rarr;
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Polaroid Photo Placeholder */}
          <div className="hero-visual-wrapper">
            <div className="polaroid-wrapper">
              <div className="tape polaroid-tape"></div>
              <div className="polaroid">
                <div className="photo-container">
                  <div className="fallback-silhouette">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="80" r="40" fill="#E2E8F0" />
                      <path d="M40 180C40 146.863 66.8629 120 100 120C133.137 120 160 146.863 160 180V200H40V180Z" fill="#E2E8F0" />
                    </svg>
                  </div>
                  <img
                    src="/profile.jpg"
                    alt="Gunjan Balapure"
                    className="profile-photo"
                    onError={(e) => { e.target.style.opacity = '0'; }}
                  />
                  <span className="handwritten future-photo-note">future photo :)</span>
                </div>
                <div className="polaroid-caption handwritten">Gunjan</div>
              </div>
              
              {/* Scattered annotations */}
              <span className="annotation annotation-1 handwritten">AI / ML</span>
              <span className="annotation annotation-2 handwritten">builder</span>
              <span className="annotation annotation-3 handwritten">creative</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
