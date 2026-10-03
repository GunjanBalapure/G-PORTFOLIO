import './Experience.css';

// Reusable experience timeline data
const experienceData = [
  {
    id: 'hp-ci-indiaai',
    title: 'Applied Machine Learning & AI',
    organization: 'HP – CII – IndiaAI',
    period: 'June – July 2026',
    description:
      'Completed a foundational program focused on Applied Machine Learning and Artificial Intelligence, strengthening my understanding of practical AI and ML concepts.',
    tags: ['Machine Learning', 'Artificial Intelligence', 'Python'],
  },
  {
    id: 'lenovo-leap',
    title: 'NextGen Scholar Program',
    organization: 'Lenovo LEAP',
    period: '2026',
    description:
      'Participated in the Lenovo LEAP NextGen Scholar Program, gaining exposure to professional development, technology, and career-oriented learning.',
    tags: ['Professional Development', 'Technology', 'Career Skills'],
  },
  {
    id: 'cisco-academy',
    title: 'Networking Academy',
    organization: 'Cisco Networking Academy',
    period: '2026',
    description:
      'Completed multiple Cisco Networking Academy courses covering networking and foundational technology concepts.',
    tags: ['Networking', 'Cisco', 'Technology'],
  },
];

// Reusable certifications data
const certificationsData = [
  {
    id: 'cert-hp',
    organization: 'HP – CII – IndiaAI',
    title: 'Applied Machine Learning and AI',
    year: '2026',
    status: 'COMPLETED',
  },
  {
    id: 'cert-cisco',
    organization: 'Cisco Networking Academy',
    title: 'Networking courses',
    year: '2026',
    status: 'CERTIFIED',
  },
  {
    id: 'cert-lenovo',
    organization: 'Lenovo LEAP',
    title: 'NextGen Scholar Program',
    year: '2026',
    status: 'COMPLETED',
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      {/* Background ambient glow decoration */}
      <div className="experience-ambient-glow" aria-hidden="true" />

      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="section-badge">
            <span className="badge-dot-purple" />
            <span>EXPERIENCE & LEARNING</span>
          </div>

          <h2 className="experience-heading">
            Learning by <span className="experience-heading-accent">doing.</span>
          </h2>

          <p className="experience-description">
            My journey so far has been a mix of internships, technical
            programs, certifications, projects, and continuous experimentation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-wrapper">
          {/* Glowing vertical connector line */}
          <div className="timeline-line" aria-hidden="true" />

          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Glowing dot on the timeline */}
              <div className="timeline-dot" aria-hidden="true" />

              {/* Experience Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <span className="timeline-org">{item.organization}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-text">{item.description}</p>

                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subsection: Certifications & Learning */}
        <div className="certifications-section">
          <h3 className="certifications-title">Certifications & Learning</h3>

          <div className="certifications-grid">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-card-top">
                  <span
                    className={`cert-status-badge ${
                      cert.status === 'CERTIFIED'
                        ? 'status-certified'
                        : 'status-completed'
                    }`}
                  >
                    {cert.status}
                  </span>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <div className="cert-card-body">
                  <span className="cert-org">{cert.organization}</span>
                  <h4 className="cert-name">{cert.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
