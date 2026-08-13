// src/components/StatCounter.jsx
import { useEffect, useRef, useState } from "react";

function StatCounter({ target, suffix = "", label }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const duration = 2000;
          let start = null;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <div className="font-h1-desktop text-h1-desktop text-secondary-fixed-dim mb-xs">
        {value}
        {suffix}
      </div>
      <p className="font-body-lg text-surface-variant/80">{label}</p>
    </div>
  );
}

export default StatCounter;