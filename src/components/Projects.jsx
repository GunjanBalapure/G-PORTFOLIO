import './Projects.css';

// Reusable project data array containing the 6 featured projects
const projectsData = [
  {
    number: '01',
    title: 'VisualMath',
    category: 'Interactive Web Experience',
    description:
      'An interactive mathematics visualization platform that makes mathematical concepts easier to understand through visual and interactive representations.',
    technologies: ['React', 'TypeScript', 'Canvas', 'SVG'],
  },
  {
    number: '02',
    title: 'Sahayak AI',
    category: 'AI / Intelligent Systems',
    description:
      'An AI-powered system designed to simplify scholarship discovery by helping students understand available opportunities and identify scholarships relevant to their profile.',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'LLMs', 'n8n'],
  },
  {
    number: '03',
    title: 'HajAIri',
    category: 'Computer Vision / AI',
    description:
      'An AI-based classroom attendance system that uses computer vision to identify students from classroom images and manage attendance intelligently.',
    technologies: ['Python', 'Computer Vision', 'FastAPI', 'PostgreSQL', 'AI'],
  },
  {
    number: '04',
    title: 'MoodMate',
    category: 'AI / Machine Learning',
    description:
      'A personalized mood companion that combines mood detection and intelligent recommendations to create a more interactive emotional support experience.',
    technologies: ['Python', 'Streamlit', 'OpenCV', 'NLP', 'Machine Learning'],
  },
  {
    number: '05',
    title: 'Fake News Detector',
    category: 'Machine Learning',
    description:
      'A machine learning project that analyzes textual information and predicts whether a news article is likely to be real or fake.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'],
  },
  {
    number: '06',
    title: 'CarboNIL',
    category: 'Sustainability / AI',
    description:
      'A carbon footprint awareness application designed to help users understand and reduce the environmental impact of everyday activities.',
    technologies: ['Python', 'Machine Learning', 'Web Development'],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Background subtle ambient glow */}
      <div className="projects-ambient-glow" aria-hidden="true" />

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-badge">
            <span className="badge-dot-blue" />
            <span>SELECTED WORK</span>
          </div>

          <h2 className="projects-heading">
            Things I've built{' '}
            <span className="projects-heading-accent">while learning.</span>
          </h2>

          <p className="projects-description">
            A collection of projects where I explored AI, machine learning,
            software development, and interactive experiences.
          </p>
        </div>

        {/* 3-Column Responsive Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.number} className="project-card">
              {/* Subtle background number watermark */}
              <span className="project-number-bg" aria-hidden="true">
                {project.number}
              </span>

              {/* Card Content Top */}
              <div className="project-content">
                {/* Number & Category Row */}
                <div className="project-meta">
                  <span className="project-number-tag">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                {/* Title & Description */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technology Pills */}
                <div className="project-techs">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: View Project Action */}
              <div className="project-footer">
                <button
                  type="button"
                  className="project-btn"
                  onClick={() => {
                    // Placeholder action: can be wired to actual project link or modal later
                    console.log(`Clicked project: ${project.title}`);
                  }}
                >
                  <span>View Project</span>
                  <span className="project-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
