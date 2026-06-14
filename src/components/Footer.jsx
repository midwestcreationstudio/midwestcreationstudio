import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Midwest Creation Studio LLC. All rights reserved.</p>
        <p className="location">Green Bay Area, Wisconsin</p>
        <div className="footer-links">
          <a href="/#contact" className="footer-link">Contact</a>
          <span className="footer-sep">·</span>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
      </div>
      <style>{`
        .footer {
          padding: var(--spacing-md) 0;
          border-top: 1px solid var(--color-border);
          margin-top: var(--spacing-lg);
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .location {
          margin-top: var(--spacing-xs);
          font-size: 0.8rem;
        }
        .footer-links {
          margin-top: var(--spacing-sm);
        }
        .footer-link {
          color: var(--color-text);
          text-decoration: none;
          opacity: 0.7;
          font-size: 0.8rem;
          transition: opacity var(--transition-fast);
        }
        .footer-sep {
          opacity: 0.4;
          font-size: 0.8rem;
          margin: 0 0.5rem;
        }
        .footer-link:hover {
          opacity: 1;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
