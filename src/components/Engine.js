import React from 'react';

export default function Engine() {
  return (
    <section id="engine">
      <div className="wrap">
        <div className="engine-head reveal">
          <div>
            <span className="label on-dark">Proprietary technology</span>
            <h2 className="h-display" style={{ marginTop: '20px' }}>
              The 26 Intelligence <em>Engine<span className="dot">.</span></em>
            </h2>
          </div>
          <p>
            One control plane connecting Marketing, Technology, and Dispatch — four AI-powered modules that ingest signals
            from every channel, every system, and every conversation, then optimize execution in real time.
          </p>
        </div>

        <div className="engine-pillars reveal">
          <div className="pillar">
            <span className="pillar-num">01 / Audience</span>
            <h3>Audience Intelligence</h3>
            <p>AI-driven psychographic and behavioral modeling that identifies your highest-value segments before a dollar of media is spent.</p>
          </div>
          <div className="pillar">
            <span className="pillar-num">02 / Predict</span>
            <h3>Predictive Analytics</h3>
            <p>Forward-looking models forecasting performance, budget efficiency, and LTV:CAC ratios — updated continuously with live data.</p>
          </div>
          <div className="pillar">
            <span className="pillar-num">03 / Creative</span>
            <h3>Creative Optimization</h3>
            <p>Machine learning systems that test, iterate, and promote top-performing creative across formats — static, video, interactive.</p>
          </div>
          <div className="pillar">
            <span className="pillar-num">04 / Attribute</span>
            <h3>Attribution Engine</h3>
            <p>Multi-touch, data-driven attribution that eliminates dark-funnel blind spots and ties every touchpoint to pipeline and revenue.</p>
          </div>
        </div>

        <div className="dashboard-mock reveal">
          <svg viewBox="0 0 1200 540" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="g" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#C8A96E" strokeWidth="0.3" opacity="0.18" />
              </pattern>
            </defs>
            <rect width="1200" height="540" fill="#060F22" />
            <rect width="1200" height="540" fill="url(#g)" />
            <rect x="0" y="0" width="1200" height="48" fill="#0B1934" />
            <line x1="0" y1="48" x2="1200" y2="48" stroke="#C8A96E" strokeWidth="1" opacity="0.4" />
            <text x="28" y="30" fontFamily="JetBrains Mono,monospace" fontSize="13" fontWeight="700" fill="#C8A96E">26</text>
            <text x="50" y="30" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff" opacity="0.6" letterSpacing="2">INTELLIGENCE ENGINE</text>
            <circle cx="1155" cy="24" r="4" fill="#14B8A6" />
            <text x="1163" y="28" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff" opacity="0.55">LIVE</text>

            <g>
              <rect x="28" y="68" width="280" height="100" fill="#0B1934" stroke="#1B49FF" strokeOpacity="0.3" />
              <text x="44" y="92" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#1B49FF" letterSpacing="2">REVENUE DRIVEN</text>
              <text x="44" y="132" fontFamily="Bricolage Grotesque,sans-serif" fontSize="34" fontWeight="600" fill="#fff">$2.4M</text>
              <text x="44" y="155" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#14B8A6">▲ 34.2% vs last period</text>
            </g>
            <g>
              <rect x="324" y="68" width="280" height="100" fill="#0B1934" stroke="#FF5A47" strokeOpacity="0.3" />
              <text x="340" y="92" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#FF5A47" letterSpacing="2">BLENDED ROAS</text>
              <text x="340" y="132" fontFamily="Bricolage Grotesque,sans-serif" fontSize="34" fontWeight="600" fill="#fff">4.8×</text>
              <text x="340" y="155" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#14B8A6">▲ 12.6% vs last period</text>
            </g>
            <g>
              <rect x="620" y="68" width="280" height="100" fill="#0B1934" stroke="#8B7FFF" strokeOpacity="0.3" />
              <text x="636" y="92" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8B7FFF" letterSpacing="2">COST PER LEAD</text>
              <text x="636" y="132" fontFamily="Bricolage Grotesque,sans-serif" fontSize="34" fontWeight="600" fill="#fff">$18.40</text>
              <text x="636" y="155" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#14B8A6">▼ 22.1% vs last period</text>
            </g>
            <g>
              <rect x="916" y="68" width="256" height="100" fill="#0B1934" stroke="#C8A96E" strokeOpacity="0.4" />
              <text x="932" y="92" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#C8A96E" letterSpacing="2">AI SCORE</text>
              <text x="932" y="132" fontFamily="Bricolage Grotesque,sans-serif" fontSize="34" fontWeight="600" fill="#fff">94<tspan fontSize="14" fill="#C8A96E" opacity="0.7">/100</tspan></text>
              <rect x="932" y="148" width="220" height="3" fill="#C8A96E" opacity="0.18" />
              <rect x="932" y="148" width="207" height="3" fill="#C8A96E" />
            </g>

            <g>
              <rect x="28" y="190" width="780" height="320" fill="#0B1934" stroke="#1B49FF" strokeOpacity="0.2" />
              <text x="44" y="216" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#1B49FF" letterSpacing="2">REVENUE TRAJECTORY — 12 MONTHS</text>
              <line x1="28" y1="226" x2="808" y2="226" stroke="#1B49FF" strokeWidth="0.5" opacity="0.18" />
              <line x1="44" y1="280" x2="792" y2="280" stroke="#fff" strokeWidth="0.4" opacity="0.05" />
              <line x1="44" y1="350" x2="792" y2="350" stroke="#fff" strokeWidth="0.4" opacity="0.05" />
              <line x1="44" y1="420" x2="792" y2="420" stroke="#fff" strokeWidth="0.4" opacity="0.05" />
              <path d="M 70 470 L 180 430 L 290 410 L 400 365 L 510 320 L 620 280 L 730 235 L 790 230 L 790 480 L 70 480 Z" fill="#1B49FF" fillOpacity="0.14" />
              <path d="M 70 470 L 180 430 L 290 410 L 400 365 L 510 320 L 620 280 L 730 235 L 790 230" fill="none" stroke="#1B49FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="70" cy="470" r="3" fill="#0B1934" stroke="#1B49FF" strokeWidth="1.5" />
              <circle cx="290" cy="410" r="3" fill="#0B1934" stroke="#1B49FF" strokeWidth="1.5" />
              <circle cx="510" cy="320" r="3" fill="#0B1934" stroke="#1B49FF" strokeWidth="1.5" />
              <circle cx="790" cy="230" r="5" fill="#C8A96E" />
              <circle cx="790" cy="230" r="9" fill="#C8A96E" opacity="0.3" />
              <text x="70" y="498" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">JUN</text>
              <text x="220" y="498" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">SEP</text>
              <text x="400" y="498" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">DEC</text>
              <text x="580" y="498" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">MAR</text>
              <text x="760" y="498" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">JUN</text>
            </g>

            <g>
              <rect x="828" y="190" width="344" height="320" fill="#0B1934" stroke="#8B7FFF" strokeOpacity="0.2" />
              <text x="844" y="216" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8B7FFF" letterSpacing="2">REAL-TIME SIGNALS</text>
              <line x1="828" y1="226" x2="1172" y2="226" stroke="#8B7FFF" strokeWidth="0.5" opacity="0.18" />
              
              <g transform="translate(844, 250)">
                <circle cx="6" cy="12" r="3" fill="#14B8A6" />
                <text x="20" y="10" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff">Google Ads CPC optimized</text>
                <text x="20" y="22" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">Just now · Blended CPA -$2.40</text>
              </g>
              <g transform="translate(844, 310)">
                <circle cx="6" cy="12" r="3" fill="#1B49FF" />
                <text x="20" y="10" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff">Lead Qualified by Agent #412</text>
                <text x="20" y="22" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">2 mins ago · Enterprise SaaS segment</text>
              </g>
              <g transform="translate(844, 370)">
                <circle cx="6" cy="12" r="3" fill="#C8A96E" />
                <text x="20" y="10" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff">Miami HQ Axis load sync</text>
                <text x="20" y="22" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">14 mins ago · Latency 42ms</text>
              </g>
              <g transform="translate(844, 430)">
                <circle cx="6" cy="12" r="3" fill="#FF5A47" />
                <text x="20" y="10" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff">Vapi Voice Agent deployed</text>
                <text x="20" y="22" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#fff" opacity="0.4">44 mins ago · Inbound lines active</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
