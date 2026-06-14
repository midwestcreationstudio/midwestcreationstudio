import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title text-center">About The Studio</h2>
                <div className="about-content">
                    <p>
                        Midwest Creation Studio is an independent software studio from the Green Bay Area
                        (GO PACK GO!), but happy to work with anyone from anywhere. Built on years of experience
                        in <strong>software architecture and applied AI</strong>, we design and build clean,
                        reliable systems, from web platforms to accessibility tools to custom applications,
                        architected to scale and built to last.
                    </p>
                    <p>
                        From products built for accessibility like Orien to polished sites for local organizations,
                        we bring architectural rigor and modern AI to every engagement, taking projects from
                        concept to launch with a focus on craft, clarity, and quality that holds up.
                        If you have something to build, let's talk.
                    </p>
                    <div className="contact-info">
                        <a href="#contact" className="contact-link">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          font-size: 1.1rem;
        }
        .about-content p {
          margin-bottom: var(--spacing-sm);
        }
        .contact-info {
          margin-top: var(--spacing-md);
          padding-top: var(--spacing-sm);
          border-top: 1px solid var(--color-border);
        }
        .contact-link {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .contact-link:hover {
          color: var(--color-accent);
          text-shadow: 0 0 10px var(--color-accent);
        }
      `}</style>
        </section>
    );
};

export default About;
