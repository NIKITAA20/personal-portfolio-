import React, { useState } from 'react';
import SearchPageShell from '../components/SearchPageShell';
import './ContactPage.css';

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:nikitasolanki767@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <SearchPageShell
      className="contact-page"
      query="contact nikita solanki hire"
      left={
        <>
          <div className="search-result contact-hero">
            <h1 className="contact-hero__title">Let&apos;s work together</h1>
            <p className="contact-hero__sub">
              Open to internships, data analyst roles, and full-stack projects.
            </p>
          </div>

          <div className="contact-grid">
            <form className="contact-form search-result" onSubmit={handleSubmit}>
              <h2>Send a message</h2>
              <label>
                Name
                <input name="name" type="text" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required placeholder="you@company.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required placeholder="Tell me about the role..." />
              </label>
              <button type="submit" className="contact-btn contact-btn--primary">
                Send via Email
              </button>
              {sent && <p className="contact-form__note">Opening your email client…</p>}
            </form>

            <div className="contact-side">
              <div className="search-result contact-card">
                <h3>Quick connect</h3>
                <a href="mailto:nikitasolanki767@gmail.com" className="contact-link">
                  nikitasolanki767@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/nikita-datadriven20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/NIKITAA20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub →
                </a>
              </div>

              <div className="search-result contact-card">
                <h3>Book a call</h3>
                <p>Schedule a 15-min intro via Calendly.</p>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn contact-btn--outline"
                >
                  Schedule on Calendly
                </a>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default ContactPage;
