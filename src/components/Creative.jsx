import './Creative.css';

// Reusable data array for the 3 creative disciplines
const creativeCards = [
  {
    id: 'poetry',
    category: 'POETRY',
    title: 'Words that stay.',
    description:
      'I write poetry in Hindi, English and Hinglish, exploring emotions, observations, memories and everyday experiences.',
    tags: ['Poetry', 'Writing', 'Hindi', 'English'],
    accentClass: 'card-rose',
    type: 'poetry',
  },
  {
    id: 'music',
    category: 'MUSIC',
    title: 'Stories through sound.',
    description:
      "I enjoy singing, songwriting and composition, and I'm currently exploring guitar as another way to create and express ideas.",
    tags: ['Singing', 'Songwriting', 'Composition', 'Guitar'],
    accentClass: 'card-purple',
    type: 'music',
  },
  {
    id: 'visual-storytelling',
    category: 'VISUAL STORYTELLING',
    title: 'Turning ideas into visuals.',
    description:
      'I enjoy combining writing, cinematography, design and technology to create visual experiences around stories and ideas.',
    tags: ['Cinematography', 'Design', 'Creative Tech', 'Visual Storytelling'],
    accentClass: 'card-cyan',
    type: 'storytelling',
  },
];

function Creative() {
  // Helper function to render pure CSS decorative artwork for each card
  const renderVisual = (type) => {
    if (type === 'poetry') {
      return (
        <div className="creative-art-container" aria-hidden="true">
          <div className="visual-poetry">
            <div className="poetry-line line-1" />
            <div className="poetry-line line-2" />
            <div className="poetry-line line-3" />
            <div className="poetry-line line-4" />
          </div>
        </div>
      );
    }

    if (type === 'music') {
      return (
        <div className="creative-art-container" aria-hidden="true">
          <div className="visual-music">
            <div className="music-bar bar-1" />
            <div className="music-bar bar-2" />
            <div className="music-bar bar-3" />
            <div className="music-bar bar-4" />
            <div className="music-bar bar-5" />
            <div className="music-bar bar-6" />
            <div className="music-bar bar-7" />
          </div>
        </div>
      );
    }

    if (type === 'storytelling') {
      return (
        <div className="creative-art-container" aria-hidden="true">
          <div className="visual-storytelling">
            <div className="story-frame story-frame-back" />
            <div className="story-frame story-frame-front">
              <span className="viewfinder-corner tl" />
              <span className="viewfinder-corner tr" />
              <span className="viewfinder-corner bl" />
              <span className="viewfinder-corner br" />
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="creative" id="creative">
      {/* Soft atmospheric ambient glow lights */}
      <div className="creative-ambient-glow-1" aria-hidden="true" />
      <div className="creative-ambient-glow-2" aria-hidden="true" />

      <div className="creative-container">
        {/* Section Header */}
        <div className="creative-header">
          <div className="section-badge">
            <span className="badge-dot-rose" />
            <span>BEYOND CODE</span>
          </div>

          <h2 className="creative-heading">
            <span className="creative-heading-line">Technology is what I build.</span>
            <span className="creative-heading-line creative-heading-accent">
              Creativity is how I express.
            </span>
          </h2>

          <p className="creative-description">
            Outside of code, I write poetry, explore songwriting, sing, compose,
            and experiment with visual storytelling. Creativity helps me look at
            technical problems differently — and technology gives me new ways to
            express ideas.
          </p>
        </div>

        {/* 3 Creative Cards in Responsive Grid */}
        <div className="creative-grid">
          {creativeCards.map((card) => (
            <article
              key={card.id}
              className={`creative-card ${card.accentClass}`}
            >
              {/* Category Tag */}
              <span className="creative-category-tag">{card.category}</span>

              {/* Pure CSS Decorative Artwork */}
              {renderVisual(card.type)}

              {/* Title & Description */}
              <div className="creative-card-content">
                <h3 className="creative-title">{card.title}</h3>
                <p className="creative-card-desc">{card.description}</p>
              </div>

              {/* Tag Pills */}
              <div className="creative-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="creative-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Creative;
