import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    id: 'languages',
    title: 'LANGUAGES',
    rotation: '-1.5deg',
    tapeColor: 'rgba(255, 255, 255, 0.5)',
    pinColor: 'pin-blue',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    rotation: '1deg',
    tapeColor: 'rgba(232, 106, 122, 0.3)',
    pinColor: 'pin-red',
    skills: ['Machine Learning', 'Artificial Intelligence', 'Generative AI', 'LLMs', 'NLP', 'Computer Vision'],
  },
  {
    id: 'development',
    title: 'DEVELOPMENT',
    rotation: '-0.5deg',
    tapeColor: 'rgba(127, 183, 126, 0.3)',
    pinColor: 'pin-yellow',
    skills: ['React', 'HTML', 'CSS', 'Node.js', 'FastAPI', 'REST APIs', 'Git & GitHub'],
  },
  {
    id: 'tools',
    title: 'TOOLS & WORKFLOW',
    rotation: '1.5deg',
    tapeColor: 'rgba(244, 211, 94, 0.4)',
    pinColor: 'pin-blue',
    skills: ['Jupyter', 'Google Colab', 'Streamlit', 'MongoDB', 'PostgreSQL', 'n8n', 'LangChain', 'LangGraph'],
  },
];

function Skills() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="skills reveal-hidden" id="skills">
      <div className="skills-container">
        
        {/* SKILLS MINION: Looking at cards from right */}
        <div className="minion-wrapper minion-skills-wrap minion-hide-tablet">
          <img 
            src="/assets/minions/minion-skills.png?v=2" 
            alt="Minion character" 
            className="minion minion-skills minion-float"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

        <div className="skills-header">
          <div className="handwritten skills-label">Skills & Technologies</div>
          <h2 className="skills-heading typewriter-text">
            Tools I use to turn ideas into <span className="highlight-yellow">working things.</span>
          </h2>
          <p className="skills-description">
            I enjoy learning by building — from machine learning models and AI applications to interactive web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="skill-paper-card"
              style={{ '--final-rot': `rotate(${category.rotation})` }}
            >
              <div className="tape" style={{ background: category.tapeColor, top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(2deg)' }}></div>
              <div className={`pin ${category.pinColor}`} style={{ top: '8px', right: '12px' }}></div>
              
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skill-tags-wrapper">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-sticker handwritten">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
