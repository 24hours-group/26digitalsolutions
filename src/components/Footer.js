import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/#hero" className="logo">
              <span className="num">26</span>
              <span className="small">Digital Solutions</span>
            </a>
            <p>
              The science of scalable growth. Three integrated divisions — Marketing, Technology, Dispatch — engineered for
              revenue. Founded 2008.
            </p>
          </div>
          <div className="footer-col">
            <h5>Marketing · 26</h5>
            <ul>
              <li><a href="/#solutions">Performance & Paid</a></li>
              <li><a href="/#solutions">AI & Intelligence</a></li>
              <li><a href="/#solutions">Brand & Creative</a></li>
              <li><a href="/#solutions">Content & Lifecycle</a></li>
              <li><a href="/#solutions">Strategy & Consulting</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Technology · 20</h5>
            <ul>
              <li><a href="/#solutions">Web & App Development</a></li>
              <li><a href="/#solutions">AI & Automation</a></li>
              <li><a href="/#solutions">CRM & Integrations</a></li>
              <li><a href="/#solutions">Data & Reporting</a></li>
              <li><a href="/#solutions">Contact Center Tech</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Dispatch · 20</h5>
            <ul>
              <li><a href="/#solutions">Inbound & Reception</a></li>
              <li><a href="/#solutions">AI Voice Agents</a></li>
              <li><a href="/#solutions">Outbound & Sales</a></li>
              <li><a href="/#solutions">Scheduling & Field</a></li>
              <li><a href="/#solutions">Quality & Operations</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="/#intro">About</a></li>
              <li><a href="/#engine">Technology Stack</a></li>
              <li><a href="/#global">Global Offices</a></li>
              <li><a href="/#insights">Insights</a></li>
              <li><a href="/#careers">Careers</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 26 Digital Solutions · All rights reserved</p>
          {/* <div className="social">
            <a href="#" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
