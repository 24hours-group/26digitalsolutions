import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-ghost" aria-hidden="true">26</div>
      <div className="hero-decor" aria-hidden="true">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <div className="wrap">
        <div className="hero-eyebrow">
          <span className="line"></span>
          <span className="dot"></span>
          <span>26 — Digital Solutions / Est. 2008</span>
        </div>

        <h1 className="hero-display">
          <span className="ln">The science</span>
          <span className="ln">of scalable</span>
          <span className="ln">growth<span className="dot">.</span></span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            Three integrated divisions. Sixty-six services. One revenue engine — engineered to take every business from first impression through closed deal to repeat customer.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Conversation
              <svg className="arrow" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#solutions" className="btn btn-ghost">Explore the 66</a>
          </div>
        </div>
      </div>
    </section>
  );
}
