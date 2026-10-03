import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'Applied Machine Learning and AI',
    organization: 'HP – CII – IndiaAI',
    period: '2026',
    description: 'Completed a foundational program focused on Applied Machine Learning and Artificial Intelligence, strengthening my understanding of practical AI and ML concepts.',
  },
  {
    id: 2,
    title: 'NextGen Scholar Program',
    organization: 'Lenovo LEAP',
    period: '2026',
    description: 'Participated in the Lenovo LEAP NextGen Scholar Program, gaining exposure to professional development and technical skills.',
  },
  {
    id: 3,
    title: 'Networking Courses',
    organization: 'Cisco Networking Academy',
    period: '2026',
    description: 'Completed comprehensive networking courses to build a strong foundation in computer networks and infrastructure.',
  },
];

function Experience() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="experience reveal-hidden" id="experience">
      <div className="exp-paper-sheet">
        <div className="tape exp-tape-1"></div>
        <div className="tape exp-tape-2"></div>
        
        <div className="exp-header">
          <div className="handwritten exp-label">Experience & Learning</div>
          <h2 className="exp-heading typewriter-text">
            Learning by doing.
          </h2>
          <p className="exp-description">
            My journey so far has been a mix of technical programs, certifications, projects, and continuous experimentation.
          </p>
        </div>

        <div className="exp-timeline">
          {/* Hand-drawn style vertical line */}
          <div className="timeline-line"></div>
          
          {experienceData.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-date handwritten">
                {item.period}
              </div>
              
              <div className="timeline-content">
                <h3 className="timeline-title typewriter-text">{item.title}</h3>
                <h4 className="timeline-org handwritten">{item.organization}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
