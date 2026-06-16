import React from 'react';
import { useQuery } from '@tanstack/react-query';

const defaultInsights = [
  {
    id: 1,
    category: 'Attribution',
    date: 'April 2026',
    title: 'Why click-based attribution is failing — and what to replace it with.',
    color: 'paid',
    metricValue: '26%',
    metricLabel: 'ATTRIBUTION 2.0',
    svgType: 'attribution',
  },
  {
    id: 2,
    category: 'Creative',
    date: 'March 2026',
    title: 'The creative testing framework that took our clients from 0.4% to 2.1% CTR.',
    color: 'brand',
    metricValue: '5×',
    metricLabel: 'CREATIVE PERFORMANCE',
    svgType: 'creative',
  },
  {
    id: 3,
    category: 'Pipeline',
    date: 'February 2026',
    title: 'Replacing MQLs with sales-accepted opportunities: a 90-day playbook.',
    color: 'content',
    metricValue: '8.2×',
    metricLabel: 'PIPELINE INTELLIGENCE',
    svgType: 'pipeline',
  },
];

const fetchInsights = async () => {
  const res = await fetch('/api/insights');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export default function Insights() {
  const { data: insights, error } = useQuery({
    queryKey: ['insights'],
    queryFn: fetchInsights,
    initialData: defaultInsights,
  });

  const renderSvg = (type, val, lbl) => {
    if (type === 'attribution') {
      return (
        <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#FAF7F2" />
          <circle cx="450" cy="180" r="120" fill="#1B49FF" opacity="0.1" />
          <circle cx="450" cy="180" r="80" fill="#1B49FF" opacity="0.22" />
          <circle cx="450" cy="180" r="40" fill="#1B49FF" />
          <text x="40" y="60" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#1B49FF" letterSpacing="2">
            {lbl}
          </text>
          <text
            x="40"
            y="350"
            fontFamily="Bricolage Grotesque,sans-serif"
            fontSize="56"
            fontWeight="500"
            fill="#0A0A0A"
            letterSpacing="-2"
          >
            {val}
          </text>
        </svg>
      );
    }
    if (type === 'creative') {
      return (
        <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="380" fill="#0B1934" />
          <rect x="40" y="280" width="60" height="60" fill="#8B7FFF" opacity="0.3" />
          <rect x="120" y="240" width="60" height="100" fill="#8B7FFF" opacity="0.5" />
          <rect x="200" y="180" width="60" height="160" fill="#8B7FFF" opacity="0.75" />
          <rect x="280" y="120" width="60" height="220" fill="#8B7FFF" />
          <rect x="360" y="80" width="60" height="260" fill="#C8A96E" />
          <text x="40" y="60" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#8B7FFF" letterSpacing="2">
            {lbl}
          </text>
          <text
            x="460"
            y="200"
            fontFamily="Bricolage Grotesque,sans-serif"
            fontSize="46"
            fontWeight="500"
            fill="#fff"
            letterSpacing="-1.5"
          >
            {val}
          </text>
        </svg>
      );
    }
    // pipeline & fallback
    return (
      <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#FAF7F2" />
        <path d="M 40 320 L 140 280 L 240 240 L 340 180 L 440 120 L 540 80" fill="none" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="540" cy="80" r="8" fill="#14B8A6" />
        <circle cx="540" cy="80" r="16" fill="#14B8A6" opacity="0.2" />
        <text x="40" y="60" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#14B8A6" letterSpacing="2">
          {lbl}
        </text>
        <text
          x="40"
          y="200"
          fontFamily="Bricolage Grotesque,sans-serif"
          fontSize="56"
          fontWeight="500"
          fill="#0A0A0A"
          letterSpacing="-2"
        >
          {val}
        </text>
      </svg>
    );
  };

  const list = insights || defaultInsights;

  return (
    <section id="insights">
      <div className="wrap">
        <div className="insights-head reveal">
          <div>
            <span className="label">Fresh thinking</span>
            <h2 className="h-display" style={{ marginTop: '20px' }}>
              Data-driven <em>insights<span className="dot">.</span></em>
            </h2>
          </div>
          <a href="/insights" className="btn btn-ghost">
            View all insights
            <svg className="arrow" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <div className="insights-grid">
          {list.map((item) => (
            <a key={item.id} href="#" className="insight reveal">
              <div className="insight-img">{renderSvg(item.svgType, item.metricValue, item.metricLabel)}</div>
              <div className="insight-meta">
                <span className="cat">{item.category}</span>
                <span className="sep"></span>
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
