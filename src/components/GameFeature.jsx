
import React from 'react';
import { Link } from 'react-router-dom';
import orienIcon from '../assets/orien/icon.jpg';

const games = [
  {
    id: 'orien',
    title: 'Orien',
    description: "The first 100% hands-free AAC platform for individuals with ALS and motor impairments. No head tracking required. Just your eyes.",
    image: orienIcon,
    tags: ['Accessibility', 'iOS', 'True Gaze'],
    action: { text: 'Learn More', link: '/orien', disabled: false }
  },
  {
    id: 'runir',
    title: 'Runir',
    description: "Public market insight pages with clean, detailed cards for each name, scoring dealer positioning in the open, four times a day.",
    image: '/assets/runir.png',
    tags: ['Web', 'Finance', 'Data'],
    action: { text: 'Visit Site', link: 'https://runir.app', disabled: false }
  },
  {
    id: 'mariogod',
    title: 'Mariogod',
    description: "A gritty parody platformer where Mario meets C-suite corporate grunge. A side project, just for fun.",
    image: '/assets/mariogod-screenshot.png',
    tags: ['Platformer', 'Parody', 'Side Project'],
    action: { text: 'Play', link: 'http://mariogod.vercel.app', disabled: false, variant: 'outline' }
  }
];

const GameFeature = () => {
  return (
    <section id="games" className="game-feature section">
      <div className="container">
        <h2 className="section-title text-center">Featured Work</h2>
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image-wrapper">
                <img src={game.image} alt={`${game.title} Icon`} className="game-image" />
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.description}</p>
                <div className="game-tags">
                  {game.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {game.action.disabled ? (
                  <button className={`btn btn-${game.action.variant || 'primary'}`} disabled>{game.action.text}</button>
                ) : game.action.link.startsWith('/') ? (
                  <Link to={game.action.link} className={`btn btn-${game.action.variant || 'primary'}`}>
                    {game.action.text}
                  </Link>
                ) : (
                  <a href={game.action.link} target="_blank" rel="noopener noreferrer" className={`btn btn-${game.action.variant || 'primary'}`}>
                    {game.action.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .game-feature {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-lg);
          color: var(--color-secondary);
          text-shadow: 0 0 10px var(--color-secondary);
        }
        .games-grid {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .game-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
          background: rgba(255, 255, 255, 0.05);
          padding: var(--spacing-md);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          backdrop-filter: blur(5px);
          transition: transform var(--transition-normal);
        }
        .game-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.1);
        }
        .game-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .game-image {
          max-width: 350px; /* Increased from 250px */
          width: 100%;
          border-radius: 24px; /* Increased from 12px to cut off white corners */
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          transition: transform var(--transition-normal);
          object-fit: cover;
        }
        .game-info {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .game-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-primary);
        }
        .game-description {
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
        }
        .game-tags {
          display: flex;
          gap: var(--spacing-xs);
          justify-content: center;
          margin-bottom: var(--spacing-md);
          flex-wrap: wrap;
        }
        .tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        @media (min-width: 768px) {
          .game-card {
            flex-direction: row;
            text-align: left;
            padding: var(--spacing-lg);
          }
          /* Alternate layout for variety */
          .game-card:nth-child(even) {
            flex-direction: row-reverse;
          }
          .game-info {
            text-align: left;
            align-items: flex-start;
          }
          .game-tags {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default GameFeature;
