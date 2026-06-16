import React from 'react';

export default function GlobalMap() {
  return (
    <section id="global">
  <div className="wrap">
    <div className="global-head reveal">
      <span className="label on-dark">Global by design</span>
      <h2 className="h-display">Talent without<br /><em>borders<span className="dot">.</span></em></h2>
      <p>12 cities. 9 countries. 4 continents. Two global headquarters in Miami and Zurich, ten regional hubs — one coordinated team operating around the clock so growth never sleeps.</p>
    </div>

    <div className="map-wrap reveal">
      <svg className="world-map" viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#C8A96E" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1B49FF" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#1B49FF" stopOpacity="0"/>
          </radialGradient>
        </defs>

        
        <g fill="rgba(255,255,255,0.13)">
          
          <circle cx="160" cy="120" r="1.6"/><circle cx="180" cy="120" r="1.6"/><circle cx="200" cy="120" r="1.6"/><circle cx="220" cy="120" r="1.6"/>
          <circle cx="140" cy="140" r="1.6"/><circle cx="160" cy="140" r="1.6"/><circle cx="180" cy="140" r="1.6"/><circle cx="200" cy="140" r="1.6"/><circle cx="220" cy="140" r="1.6"/><circle cx="240" cy="140" r="1.6"/><circle cx="260" cy="140" r="1.6"/>
          <circle cx="120" cy="160" r="1.6"/><circle cx="140" cy="160" r="1.6"/><circle cx="160" cy="160" r="1.6"/><circle cx="180" cy="160" r="1.6"/><circle cx="200" cy="160" r="1.6"/><circle cx="220" cy="160" r="1.6"/><circle cx="240" cy="160" r="1.6"/><circle cx="260" cy="160" r="1.6"/><circle cx="280" cy="160" r="1.6"/>
          <circle cx="120" cy="180" r="1.6"/><circle cx="140" cy="180" r="1.6"/><circle cx="160" cy="180" r="1.6"/><circle cx="180" cy="180" r="1.6"/><circle cx="200" cy="180" r="1.6"/><circle cx="220" cy="180" r="1.6"/><circle cx="240" cy="180" r="1.6"/><circle cx="260" cy="180" r="1.6"/><circle cx="280" cy="180" r="1.6"/><circle cx="300" cy="180" r="1.6"/>
          <circle cx="140" cy="200" r="1.6"/><circle cx="160" cy="200" r="1.6"/><circle cx="180" cy="200" r="1.6"/><circle cx="200" cy="200" r="1.6"/><circle cx="220" cy="200" r="1.6"/><circle cx="240" cy="200" r="1.6"/><circle cx="260" cy="200" r="1.6"/><circle cx="280" cy="200" r="1.6"/>
          <circle cx="160" cy="220" r="1.6"/><circle cx="180" cy="220" r="1.6"/><circle cx="200" cy="220" r="1.6"/><circle cx="220" cy="220" r="1.6"/><circle cx="240" cy="220" r="1.6"/><circle cx="260" cy="220" r="1.6"/>
          <circle cx="200" cy="240" r="1.6"/><circle cx="220" cy="240" r="1.6"/><circle cx="240" cy="240" r="1.6"/><circle cx="260" cy="240" r="1.6"/>
          <circle cx="240" cy="260" r="1.6"/><circle cx="260" cy="260" r="1.6"/>

          
          <circle cx="220" cy="280" r="1.6"/><circle cx="240" cy="280" r="1.6"/><circle cx="260" cy="280" r="1.6"/>

          
          <circle cx="280" cy="300" r="1.6"/><circle cx="300" cy="300" r="1.6"/>
          <circle cx="280" cy="320" r="1.6"/><circle cx="300" cy="320" r="1.6"/><circle cx="320" cy="320" r="1.6"/>
          <circle cx="280" cy="340" r="1.6"/><circle cx="300" cy="340" r="1.6"/><circle cx="320" cy="340" r="1.6"/><circle cx="340" cy="340" r="1.6"/>
          <circle cx="280" cy="360" r="1.6"/><circle cx="300" cy="360" r="1.6"/><circle cx="320" cy="360" r="1.6"/><circle cx="340" cy="360" r="1.6"/>
          <circle cx="280" cy="380" r="1.6"/><circle cx="300" cy="380" r="1.6"/><circle cx="320" cy="380" r="1.6"/>
          <circle cx="300" cy="400" r="1.6"/><circle cx="320" cy="400" r="1.6"/>
          <circle cx="300" cy="420" r="1.6"/><circle cx="320" cy="420" r="1.6"/>
          <circle cx="300" cy="440" r="1.6"/><circle cx="320" cy="440" r="1.6"/>
          <circle cx="320" cy="460" r="1.6"/>

          
          <circle cx="540" cy="120" r="1.6"/><circle cx="560" cy="120" r="1.6"/><circle cx="580" cy="120" r="1.6"/><circle cx="600" cy="120" r="1.6"/><circle cx="620" cy="120" r="1.6"/>
          <circle cx="540" cy="140" r="1.6"/><circle cx="560" cy="140" r="1.6"/><circle cx="580" cy="140" r="1.6"/><circle cx="600" cy="140" r="1.6"/><circle cx="620" cy="140" r="1.6"/><circle cx="640" cy="140" r="1.6"/><circle cx="660" cy="140" r="1.6"/>
          <circle cx="540" cy="160" r="1.6"/><circle cx="560" cy="160" r="1.6"/><circle cx="580" cy="160" r="1.6"/><circle cx="600" cy="160" r="1.6"/><circle cx="620" cy="160" r="1.6"/><circle cx="640" cy="160" r="1.6"/><circle cx="660" cy="160" r="1.6"/><circle cx="680" cy="160" r="1.6"/>
          <circle cx="540" cy="180" r="1.6"/><circle cx="560" cy="180" r="1.6"/><circle cx="580" cy="180" r="1.6"/><circle cx="600" cy="180" r="1.6"/><circle cx="620" cy="180" r="1.6"/><circle cx="640" cy="180" r="1.6"/><circle cx="660" cy="180" r="1.6"/>
          <circle cx="560" cy="200" r="1.6"/><circle cx="580" cy="200" r="1.6"/><circle cx="600" cy="200" r="1.6"/><circle cx="620" cy="200" r="1.6"/><circle cx="640" cy="200" r="1.6"/>

          
          <circle cx="540" cy="240" r="1.6"/><circle cx="560" cy="240" r="1.6"/><circle cx="580" cy="240" r="1.6"/><circle cx="600" cy="240" r="1.6"/><circle cx="620" cy="240" r="1.6"/><circle cx="640" cy="240" r="1.6"/>
          <circle cx="540" cy="260" r="1.6"/><circle cx="560" cy="260" r="1.6"/><circle cx="580" cy="260" r="1.6"/><circle cx="600" cy="260" r="1.6"/><circle cx="620" cy="260" r="1.6"/><circle cx="640" cy="260" r="1.6"/><circle cx="660" cy="260" r="1.6"/>
          <circle cx="540" cy="280" r="1.6"/><circle cx="560" cy="280" r="1.6"/><circle cx="580" cy="280" r="1.6"/><circle cx="600" cy="280" r="1.6"/><circle cx="620" cy="280" r="1.6"/><circle cx="640" cy="280" r="1.6"/>
          <circle cx="540" cy="300" r="1.6"/><circle cx="560" cy="300" r="1.6"/><circle cx="580" cy="300" r="1.6"/><circle cx="600" cy="300" r="1.6"/><circle cx="620" cy="300" r="1.6"/><circle cx="640" cy="300" r="1.6"/>
          <circle cx="560" cy="320" r="1.6"/><circle cx="580" cy="320" r="1.6"/><circle cx="600" cy="320" r="1.6"/><circle cx="620" cy="320" r="1.6"/>
          <circle cx="560" cy="340" r="1.6"/><circle cx="580" cy="340" r="1.6"/><circle cx="600" cy="340" r="1.6"/><circle cx="620" cy="340" r="1.6"/>
          <circle cx="580" cy="360" r="1.6"/><circle cx="600" cy="360" r="1.6"/>
          <circle cx="580" cy="380" r="1.6"/><circle cx="600" cy="380" r="1.6"/>
          <circle cx="580" cy="400" r="1.6"/>

          
          <circle cx="660" cy="200" r="1.6"/><circle cx="680" cy="200" r="1.6"/><circle cx="700" cy="200" r="1.6"/>
          <circle cx="660" cy="220" r="1.6"/><circle cx="680" cy="220" r="1.6"/><circle cx="700" cy="220" r="1.6"/>
          <circle cx="680" cy="240" r="1.6"/><circle cx="700" cy="240" r="1.6"/>

          
          <circle cx="700" cy="120" r="1.6"/><circle cx="720" cy="120" r="1.6"/><circle cx="740" cy="120" r="1.6"/><circle cx="760" cy="120" r="1.6"/><circle cx="780" cy="120" r="1.6"/><circle cx="800" cy="120" r="1.6"/><circle cx="820" cy="120" r="1.6"/><circle cx="840" cy="120" r="1.6"/><circle cx="860" cy="120" r="1.6"/><circle cx="880" cy="120" r="1.6"/><circle cx="900" cy="120" r="1.6"/>
          <circle cx="700" cy="140" r="1.6"/><circle cx="720" cy="140" r="1.6"/><circle cx="740" cy="140" r="1.6"/><circle cx="760" cy="140" r="1.6"/><circle cx="780" cy="140" r="1.6"/><circle cx="800" cy="140" r="1.6"/><circle cx="820" cy="140" r="1.6"/><circle cx="840" cy="140" r="1.6"/><circle cx="860" cy="140" r="1.6"/><circle cx="880" cy="140" r="1.6"/><circle cx="900" cy="140" r="1.6"/><circle cx="920" cy="140" r="1.6"/>
          <circle cx="700" cy="160" r="1.6"/><circle cx="720" cy="160" r="1.6"/><circle cx="740" cy="160" r="1.6"/><circle cx="760" cy="160" r="1.6"/><circle cx="780" cy="160" r="1.6"/><circle cx="800" cy="160" r="1.6"/><circle cx="820" cy="160" r="1.6"/><circle cx="840" cy="160" r="1.6"/><circle cx="860" cy="160" r="1.6"/><circle cx="880" cy="160" r="1.6"/><circle cx="900" cy="160" r="1.6"/><circle cx="920" cy="160" r="1.6"/><circle cx="940" cy="160" r="1.6"/>
          <circle cx="720" cy="180" r="1.6"/><circle cx="740" cy="180" r="1.6"/><circle cx="760" cy="180" r="1.6"/><circle cx="780" cy="180" r="1.6"/><circle cx="800" cy="180" r="1.6"/><circle cx="820" cy="180" r="1.6"/><circle cx="840" cy="180" r="1.6"/><circle cx="860" cy="180" r="1.6"/><circle cx="880" cy="180" r="1.6"/><circle cx="900" cy="180" r="1.6"/><circle cx="920" cy="180" r="1.6"/>
          <circle cx="720" cy="200" r="1.6"/><circle cx="740" cy="200" r="1.6"/><circle cx="760" cy="200" r="1.6"/><circle cx="780" cy="200" r="1.6"/><circle cx="800" cy="200" r="1.6"/><circle cx="820" cy="200" r="1.6"/><circle cx="840" cy="200" r="1.6"/><circle cx="860" cy="200" r="1.6"/><circle cx="880" cy="200" r="1.6"/><circle cx="900" cy="200" r="1.6"/>
          <circle cx="740" cy="220" r="1.6"/><circle cx="760" cy="220" r="1.6"/><circle cx="780" cy="220" r="1.6"/><circle cx="800" cy="220" r="1.6"/><circle cx="820" cy="220" r="1.6"/><circle cx="840" cy="220" r="1.6"/><circle cx="860" cy="220" r="1.6"/><circle cx="880" cy="220" r="1.6"/>
          <circle cx="760" cy="240" r="1.6"/><circle cx="780" cy="240" r="1.6"/><circle cx="800" cy="240" r="1.6"/><circle cx="820" cy="240" r="1.6"/><circle cx="840" cy="240" r="1.6"/><circle cx="860" cy="240" r="1.6"/><circle cx="880" cy="240" r="1.6"/>
          <circle cx="780" cy="260" r="1.6"/><circle cx="820" cy="260" r="1.6"/><circle cx="860" cy="260" r="1.6"/>
          <circle cx="900" cy="240" r="1.6"/><circle cx="920" cy="220" r="1.6"/>

          
          <circle cx="880" cy="280" r="1.6"/><circle cx="900" cy="280" r="1.6"/><circle cx="920" cy="280" r="1.6"/>
          <circle cx="900" cy="300" r="1.6"/><circle cx="920" cy="300" r="1.6"/>

          
          <circle cx="940" cy="380" r="1.6"/><circle cx="960" cy="380" r="1.6"/><circle cx="980" cy="380" r="1.6"/><circle cx="1000" cy="380" r="1.6"/>
          <circle cx="940" cy="400" r="1.6"/><circle cx="960" cy="400" r="1.6"/><circle cx="980" cy="400" r="1.6"/><circle cx="1000" cy="400" r="1.6"/><circle cx="1020" cy="400" r="1.6"/>
          <circle cx="960" cy="420" r="1.6"/><circle cx="980" cy="420" r="1.6"/><circle cx="1000" cy="420" r="1.6"/>
        </g>

        
        <g fill="none" stroke="rgba(200,169,110,0.25)" strokeWidth="0.8" strokeDasharray="2 4">
          
          <path d="M 270 235 Q 220 230 165 200"/>
          <path d="M 270 235 Q 250 220 245 200"/>
          <path d="M 270 235 Q 290 210 280 175"/>
          <path d="M 270 235 Q 240 252 220 260"/>
          
          <path d="M 605 190 Q 590 184 575 175"/>
          <path d="M 605 190 Q 645 200 685 220"/>
          <path d="M 605 190 Q 645 188 690 195"/>
          <path d="M 605 190 Q 605 250 605 320"/>
          <path d="M 605 190 Q 700 200 800 220"/>
          <path d="M 605 190 Q 760 220 920 285"/>
        </g>

        
        <path d="M 270 235 Q 440 100 605 190" fill="none" stroke="rgba(200,169,110,0.45)" strokeWidth="1.2" strokeDasharray="6 4"/>

        
        <g>
          <circle cx="270" cy="235" r="40" fill="url(#hqGlow)"/>
          <circle cx="270" cy="235" r="6" fill="#C8A96E"/>
          <circle cx="270" cy="235" r="10" fill="none" stroke="#C8A96E" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="6;16;6" dur="2.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite"/>
          </circle>
          <text x="270" y="257" textAnchor="middle" className="city-label hq">MIAMI ★</text>
        </g>
        <g>
          <circle cx="605" cy="190" r="40" fill="url(#hqGlow)"/>
          <circle cx="605" cy="190" r="6" fill="#C8A96E"/>
          <circle cx="605" cy="190" r="10" fill="none" stroke="#C8A96E" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="6;16;6" dur="2.4s" repeatCount="indefinite" begin="1.2s"/>
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" begin="1.2s"/>
          </circle>
          <text x="605" y="212" textAnchor="middle" className="city-label hq">ZURICH ★</text>
        </g>

        
        
        <g><circle cx="165" cy="200" r="22" fill="url(#hubGlow)"/><circle cx="165" cy="200" r="4" fill="#1B49FF"/><text x="165" y="220" textAnchor="middle" className="city-label">LOS ANGELES</text></g>
        <g><circle cx="245" cy="200" r="22" fill="url(#hubGlow)"/><circle cx="245" cy="200" r="4" fill="#1B49FF"/><text x="245" y="186" textAnchor="middle" className="city-label">DALLAS</text></g>
        <g><circle cx="280" cy="175" r="22" fill="url(#hubGlow)"/><circle cx="280" cy="175" r="4" fill="#1B49FF"/><text x="280" y="166" textAnchor="middle" className="city-label">MONTRÉAL</text></g>
        <g><circle cx="220" cy="260" r="22" fill="url(#hubGlow)"/><circle cx="220" cy="260" r="4" fill="#1B49FF"/><text x="220" y="280" textAnchor="middle" className="city-label">MEXICO CITY</text></g>

        
        <g><circle cx="575" cy="175" r="22" fill="url(#hubGlow)"/><circle cx="575" cy="175" r="4" fill="#1B49FF"/><text x="575" y="166" textAnchor="middle" className="city-label">LONDON</text></g>

        
        <g><circle cx="685" cy="220" r="22" fill="url(#hubGlow)"/><circle cx="685" cy="220" r="4" fill="#1B49FF"/><text x="685" y="240" textAnchor="middle" className="city-label">TEL AVIV</text></g>
        <g><circle cx="690" cy="195" r="22" fill="url(#hubGlow)"/><circle cx="690" cy="195" r="4" fill="#1B49FF"/><text x="690" y="186" textAnchor="middle" className="city-label">TBILISI</text></g>
        <g><circle cx="605" cy="320" r="22" fill="url(#hubGlow)"/><circle cx="605" cy="320" r="4" fill="#1B49FF"/><text x="605" y="340" textAnchor="middle" className="city-label">ABUJA</text></g>

        
        <g><circle cx="800" cy="220" r="22" fill="url(#hubGlow)"/><circle cx="800" cy="220" r="4" fill="#1B49FF"/><text x="800" y="240" textAnchor="middle" className="city-label">NEW DELHI</text></g>
        <g><circle cx="920" cy="285" r="22" fill="url(#hubGlow)"/><circle cx="920" cy="285" r="4" fill="#1B49FF"/><text x="920" y="305" textAnchor="middle" className="city-label">MANILA</text></g>

        
        <g transform="translate(28, 510)">
          <circle cx="6" cy="0" r="5" fill="#C8A96E"/>
          <text x="20" y="3" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="rgba(255,255,255,0.7)" letterSpacing="2">HEADQUARTERS</text>
          <circle cx="160" cy="0" r="4" fill="#1B49FF"/>
          <text x="172" y="3" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="rgba(255,255,255,0.7)" letterSpacing="2">REGIONAL HUB</text>
          <line x1="290" y1="0" x2="320" y2="0" stroke="rgba(200,169,110,0.5)" strokeWidth="0.8" strokeDasharray="2 4"/>
          <text x="328" y="3" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="rgba(255,255,255,0.7)" letterSpacing="2">CONNECTED</text>
        </g>
      </svg>
    </div>

    <div className="global-stats reveal">
      <div className="global-stat"><span className="v">12</span><span className="k">Cities</span></div>
      <div className="global-stat"><span className="v">9</span><span className="k">Countries</span></div>
      <div className="global-stat"><span className="v">120+</span><span className="k">Specialists</span></div>
      <div className="global-stat"><span className="v">18</span><span className="k">Languages</span></div>
      <div className="global-stat"><span className="v">24/7</span><span className="k">Operations</span></div>
    </div>
  </div>
</section>


  );
}
