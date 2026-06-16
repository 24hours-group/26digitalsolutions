import React, { useEffect, useRef, useState } from 'react';

function StatItem({ target, prefix = '', suffix = '', label }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let start = null;
            const duration = 1600;

            const animate = (timestamp) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              setValue(target * eased);
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const formattedValue = Math.round(value).toLocaleString();

  return (
    <div className="stat" ref={elementRef}>
      <span className="stat-num">
        {prefix}{formattedValue}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        <div className="stats-grid reveal">
          <StatItem target={50} suffix="+" label="Brands Scaled" />
          <StatItem target={180} prefix="$" suffix="M+" label="Revenue Driven" />
          <StatItem target={66} label="Total Services" />
          <StatItem target={98} suffix="%" label="Client Retention" />
        </div>
      </div>
    </div>
  );
}
