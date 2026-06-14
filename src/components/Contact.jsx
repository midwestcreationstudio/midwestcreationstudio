import React, { useState } from 'react';

// Web3Forms access key. Submissions are emailed to the address registered to
// this key (midwestcreationstudio@gmail.com) without exposing it in the page.
// Get a free key in ~30s at https://web3forms.com (no account required).
const WEB3FORMS_ACCESS_KEY = '1eaedb93-fd31-42ff-bed5-b40f243220ed';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title text-center">Let's Build Something</h2>
        <p className="contact-intro text-center">
          Have a project in mind? Send us a note and we'll get back to you.
        </p>

        {status === 'success' ? (
          <div className="contact-success">
            <p>Thanks for reaching out. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New inquiry from Midwest Creation Studio" />
            <input type="hidden" name="from_name" value="Midwest Creation Studio Website" />
            {/* Honeypot field for spam bots */}
            <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required autoComplete="email" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="contact-error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
      <style>{`
        .contact-intro {
          max-width: 600px;
          margin: 0 auto var(--spacing-md);
          font-size: 1.1rem;
          opacity: 0.85;
        }
        .contact-form {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          background: rgba(255, 255, 255, 0.05);
          padding: var(--spacing-lg);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          backdrop-filter: blur(5px);
        }
        .form-row {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
        }
        .form-group label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
        }
        .form-group input,
        .form-group textarea {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: var(--color-text);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 8px rgba(0, 243, 255, 0.25);
        }
        .form-group textarea {
          resize: vertical;
        }
        .contact-form .btn {
          align-self: center;
          min-width: 200px;
        }
        .contact-success {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          padding: var(--spacing-lg);
          border-radius: 16px;
          border: 1px solid var(--color-primary);
          font-size: 1.2rem;
          color: var(--color-primary);
        }
        .contact-error {
          text-align: center;
          color: var(--color-accent);
          margin: 0;
        }
        @media (min-width: 600px) {
          .form-row {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
