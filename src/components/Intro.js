import React from 'react';

export default function Intro() {
  return (
    <section id="intro">
      <div className="wrap">
        <div className="intro-grid">
          <div className="reveal">
            <span className="label">Who we are</span>
            <h2 className="intro-h">
              Three divisions, one <em>revenue stack<span className="dot">.</span></em>
            </h2>
          </div>
          <div className="intro-body reveal">
            <p>
              Most agencies do one thing. We operate three integrated divisions — <strong>Marketing</strong>,{' '}
              <strong>Technology</strong>, and <strong>Dispatch</strong> — built to handle every stage from a customer's
              first impression to their final invoice. Sixty-six services across all three, run by one coordinated team.
            </p>
            <p>
              Marketing brings demand in. Technology makes it measurable, ownable, and automated. Dispatch turns it into
              booked revenue. Our proprietary <strong>26 Intelligence Engine</strong> ties them together — so the signals
              that matter never get lost between channels, systems, or shifts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
