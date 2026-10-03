import './Skills.css';

// Reusable data array organizing the 4 skill categories
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    tag: 'Core Logic',
    accentColor: 'blue',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    tag: 'Intelligence',
    accentColor: 'purple',
    skills: [
      'Machine Learning',
      'Artificial Intelligence',
      'Generative AI',
      'LLMs',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    id: 'development',
    title: 'Development',
    tag: 'Engineering',
    accentColor: 'cyan',
    skills: [
      'React',
      'HTML',
      'CSS',
      'Node.js',
      'FastAPI',
      'REST APIs',
      'Git & GitHub',
    ],
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    tag: 'Productivity',
    accentColor: 'violet',
    skills: [
      'Jupyter',
      'Google Colab',
      'Streamlit',
      'MongoDB',
      'PostgreSQL',
      'n8n',
      'LangChain',
      'LangGraph',
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Background ambient lighting */}
      <div className="skills-ambient-glow" aria-hidden="true" />

      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="section-badge">
            <span className="badge-dot-cyan" />
            <span>SKILLS & TECHNOLOGIES</span>
          </div>

          <h2 className="skills-heading">
            Tools I use to turn ideas into{' '}
            <span className="skills-heading-accent">working things.</span>
          </h2>

          <p className="skills-description">
            I enjoy learning by building — from machine learning models and AI
            applications to interactive web experiences.
          </p>
        </div>

        {/* 4 Category Cards in Responsive Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`skill-card card-${category.accentColor}`}
            >
              <div className="skill-card-top">
                <span className="category-tag">{category.tag}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skill-tags-wrapper">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
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
