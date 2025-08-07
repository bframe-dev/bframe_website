import React, { useState } from 'react';
import './App.css';

function DemoRequestModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Request a Demo</h2>
        <p className="modal-info">Demo access is limited to a short period. Please enter your email and accept the terms to continue.</p>
        {submitted ? (
          <div className="modal-success">Thank you! We'll contact you soon.</div>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (email && accepted) setSubmitted(true);
            }}
          >
            <label htmlFor="demo-email">Email Address</label>
            <input
              id="demo-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
            <div className="modal-terms">
              <input
                id="demo-terms"
                type="checkbox"
                checked={accepted}
                onChange={e => setAccepted(e.target.checked)}
                required
              />
              <label htmlFor="demo-terms">
                I accept the <a href="#" target="_blank" rel="noopener noreferrer">terms and conditions</a>
              </label>
            </div>
            <button type="submit" className="modal-submit" disabled={!email || !accepted}>
              Submit Request
            </button>
          </form>
        )}
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="main-layout">
      <footer className="site-footer">
        <div className="footer-content">
          <span className="company-name">bFrame</span> &nbsp;|&nbsp;
          <span className="company-address">Wemmel, Belgium</span> &nbsp;|&nbsp;
          <a className="company-email" href="mailto:info@bframe.dev">info@bframe.dev</a>
        </div>
      </footer>
      <DemoRequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
