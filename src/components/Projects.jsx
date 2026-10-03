import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projectsData = [
  {
    number: '01',
    title: 'VisualMath',
    category: 'Interactive Web',
    description: 'An interactive mathematics visualization platform that makes mathematical concepts easier to understand through visual and interactive representations.',
    technologies: ['React', 'TypeScript', 'Canvas', 'SVG'],
    rotation: '-1.5deg',
    tapeColor: 'rgba(255, 255, 255, 0.6)'
  },
  {
    number: '02',
    title: 'Sahayak AI',
    category: 'AI / Systems',
    description: 'An AI-powered system designed to simplify scholarship discovery by helping students understand available opportunities and identify scholarships relevant to their profile.',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'LLMs'],
    rotation: '1deg',
    tapeColor: 'rgba(232, 106, 122, 0.4)'
  },
  {
    number: '03',
    title: 'HajAIri',
    category: 'Computer Vision',
    description: 'An AI-based classroom attendance system that uses computer vision to identify students from classroom images and manage attendance intelligently.',
    technologies: ['Python', 'CV', 'FastAPI', 'AI'],
    rotation: '-0.5deg',
    tapeColor: 'rgba(244, 211, 94, 0.5)'
  },
  {
    number: '04',
    title: 'MoodMate',
    category: 'Machine Learning',
    description: 'A personalized mood companion that combines mood detection and intelligent recommendations to create a more interactive emotional support experience.',
    technologies: ['Python', 'Streamlit', 'NLP', 'ML'],
    rotation: '1.5deg',
    tapeColor: 'rgba(127, 183, 126, 0.4)'
  },
  {
    number: '05',
    title: 'Fake News Detector',
    category: 'Machine Learning',
    description: 'A machine learning project that analyzes textual information and predicts whether a news article is likely to be real or fake.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'ML'],
    rotation: '-1deg',
    tapeColor: 'rgba(22, 137, 232, 0.3)'
  },
  {
    number: '06',
    title: 'CarboNIL',
    category: 'Sustainability / AI',
    description: 'A carbon footprint awareness application designed to help users understand and reduce the environmental impact of everyday activities.',
    technologies: ['Python', 'Machine Learning', 'Web'],
    rotation: '0.5deg',
    tapeColor: 'rgba(255, 255, 255, 0.6)'
  }
];

function Projects() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="projects reveal-hidden" id="projects">
      <div className="projects-container">
        
        {/* PROJECTS MINION 1: Peeking behind top left of the board */}
        <div className="minion-wrapper minion-proj-1-wrap minion-hide-tablet">
          <img src="/assets/minions/minion-projects-1.png" alt="Minion character" className="minion minion-projects-1 minion-float"
            onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

        {/* PROJECTS MINION 2: Sitting bottom right of board */}
        <div className="minion-wrapper minion-proj-2-wrap minion-keep-mobile">
          <img src="/assets/minions/minion-projects-2.png" alt="Minion character" className="minion minion-projects-2 minion-float"
            onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

        <div className="projects-header">
          <div className="handwritten projects-label">Selected Work</div>
          <h2 className="projects-heading typewriter-text">
            Things I've built <span className="highlight-pink">while learning.</span>
          </h2>
          <p className="projects-description">
            A collection of projects where I explored AI, machine learning, software development, and interactive experiences.
          </p>
        </div>

        <div className="projects-board">
          {projectsData.map((project) => (
            <article 
              key={project.number} 
              className="project-photo-card"
              style={{ '--final-rot': `rotate(${project.rotation})` }}
            >
              <div className="tape" style={{ top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-1deg)', background: project.tapeColor }}></div>
              
              <div className="project-polaroid-inner">
                <div className="project-image-placeholder">
                  <span className="project-num handwritten">{project.number}</span>
                  <h3 className="project-title typewriter-text">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <div className="project-details">
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="handwritten tech-tag">{tech}</span>
                    ))}
                  </div>

                  <button type="button" className="project-view-btn handwritten">
                    View Project &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
