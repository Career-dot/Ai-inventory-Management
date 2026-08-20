// src/components/HeroDashboard.jsx
import { useEffect, useRef, useState } from "react";

// Small helper: counts a number up once it scrolls into view
function useCountUp(target, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, decimals ? value.toFixed(decimals) : Math.floor(value)];
}

const bars = [
  { label: "Asia", value: 78, color: "bg-primary" },
  { label: "US", value: 55, color: "bg-secondary" },
  { label: "EU", value: 62, color: "bg-secondary-fixed-dim" },
  { label: "MEA", value: 38, color: "bg-primary-fixed-dim" },
];

const rows = [
  { name: "Widget A", status: "Optimal", tone: "bg-secondary" },
  { name: "Gadget Pro", status: "Low Stock", tone: "bg-amber-400" },
  { name: "Circuit Board", status: "Reorder in 3 Days", tone: "bg-primary" },
];

function HeroDashboard() {
  const [stockRef, stockVal] = useCountUp(4.1, 1);
  const [itemsRef, itemsVal] = useCountUp(1.2, 1);
  const [locRef, locVal] = useCountUp(14);
  const [avoidedRef, avoidedVal] = useCountUp(76);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Twinkling sparkles */}
      <span className="hd-sparkle absolute -top-4 right-6 md:right-14 text-secondary text-base z-20">
        ✦
      </span>
      <span
        className="hd-sparkle absolute top-1/3 -right-3 text-primary text-xs z-20"
        style={{ animationDelay: "0.8s" }}
      >
        ✦
      </span>
      <span
        className="hd-sparkle absolute bottom-6 -left-3 text-secondary-fixed-dim text-sm z-20"
        style={{ animationDelay: "1.4s" }}
      >
        ✦
      </span>

      {/* Floating "Demand Up" badge */}
      <div className="hd-badge absolute -top-3 left-4 md:left-8 z-20 px-2.5 py-1 glass-card rounded-lg shadow-lg flex items-center gap-1">
        <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
        <span className="font-body-sm text-[11px] font-bold text-on-surface">Demand Up 12%</span>
      </div>

      <div className="glass-card rounded-xl overflow-hidden shadow-2xl p-2 md:p-3 relative">
        {/* Shine sweep effect */}
        <div className="hd-shimmer pointer-events-none absolute inset-0 z-30" />

        <div className="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/40 overflow-hidden">
          {/* Fake browser/app top bar */}
          <div className="flex items-center gap-xs px-3 py-1.5 border-b border-outline-variant/40 bg-surface-container-low">
            <span className="w-2 h-2 rounded-full bg-error/70" />
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="w-2 h-2 rounded-full bg-secondary/70" />
            <span className="ml-auto flex items-center gap-xs text-on-surface-variant">
              <span className="hd-live-dot w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-body-sm text-[10px] font-bold uppercase tracking-wide">
                Live
              </span>
            </span>
          </div>

          <div className="p-3 md:p-4">
            <p className="hd-fade-up font-h3 text-sm text-on-surface mb-0.5">
              Welcome, Sarah
            </p>
            <p
              className="hd-fade-up font-body-sm text-[11px] text-on-surface-variant mb-2.5"
              style={{ animationDelay: "0.05s" }}
            >
              Here's your global stock overview
            </p>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-1.5 mb-2.5">
              <div
                ref={stockRef}
                className="hd-fade-up bg-surface-container-low rounded-md p-1.5"
                style={{ animationDelay: "0.1s" }}
              >
                <p className="font-body-sm text-[9px] text-on-surface-variant mb-0.5 leading-tight">
                  Stock Value
                </p>
                <p className="font-h3 text-xs text-on-surface">${stockVal}M</p>
              </div>
              <div
                ref={itemsRef}
                className="hd-fade-up bg-surface-container-low rounded-md p-1.5"
                style={{ animationDelay: "0.16s" }}
              >
                <p className="font-body-sm text-[9px] text-on-surface-variant mb-0.5 leading-tight">
                  Items
                </p>
                <p className="font-h3 text-xs text-on-surface">{itemsVal}M</p>
              </div>
              <div
                ref={locRef}
                className="hd-fade-up bg-surface-container-low rounded-md p-1.5"
                style={{ animationDelay: "0.22s" }}
              >
                <p className="font-body-sm text-[9px] text-on-surface-variant mb-0.5 leading-tight">
                  Locations
                </p>
                <p className="font-h3 text-xs text-on-surface">{locVal}</p>
              </div>
              <div
                ref={avoidedRef}
                className="hd-fade-up bg-surface-container-low rounded-md p-1.5"
                style={{ animationDelay: "0.28s" }}
              >
                <p className="font-body-sm text-[9px] text-on-surface-variant mb-0.5 leading-tight">
                  Avoided
                </p>
                <p className="font-h3 text-xs text-secondary">+{avoidedVal}%</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {/* Animated line chart */}
              <div
                className="hd-fade-up col-span-2 bg-surface-container-low rounded-md p-1.5"
                style={{ animationDelay: "0.34s" }}
              >
                <p className="font-body-sm text-[9px] font-bold text-on-surface-variant uppercase tracking-wide mb-1">
                  Inventory Levels
                </p>
                <svg viewBox="0 0 320 90" className="w-full h-12">
                  <polyline
                    className="hd-line-path"
                    fill="none"
                    stroke="#3525cd"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,60 45,42 90,66 135,32 180,50 225,20 270,40 320,15"
                  />
                  <polyline
                    fill="none"
                    stroke="#006c49"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                    className="hd-line-path"
                    style={{ animationDelay: "0.2s" }}
                    points="0,75 45,70 90,50 135,60 180,46 225,55 270,34 320,48"
                  />
                </svg>
              </div>

              {/* Animated donut */}
              <div
                className="hd-fade-up bg-surface-container-low rounded-md p-1.5 flex flex-col items-center justify-center"
                style={{ animationDelay: "0.4s" }}
              >
                <svg viewBox="0 0 90 90" className="w-11 h-11">
                  <circle cx="45" cy="45" r="38" fill="none" stroke="#eae6f4" strokeWidth="12" />
                  <circle
                    className="hd-donut"
                    cx="45"
                    cy="45"
                    r="38"
                    fill="none"
                    stroke="#006c49"
                    strokeWidth="12"
                    strokeDasharray="239"
                    strokeLinecap="round"
                    transform="rotate(-90 45 45)"
                  />
                </svg>
                <p className="font-body-sm text-[9px] text-on-surface-variant mt-1 text-center leading-tight">
                  <span className="text-secondary font-bold">85%</span> In Stock
                </p>
              </div>
            </div>

            {/* Animated bar chart */}
            <div
              className="hd-fade-up bg-surface-container-low rounded-md p-1.5 mt-1.5"
              style={{ animationDelay: "0.46s" }}
            >
              <p className="font-body-sm text-[9px] font-bold text-on-surface-variant uppercase tracking-wide mb-1">
                Stock by Region
              </p>
              <div className="flex items-end justify-between gap-1 h-10">
                {bars.map((bar, i) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                    <div
                      className={`hd-bar w-full rounded-t ${bar.color}`}
                      style={{ height: `${bar.value}%`, animationDelay: `${0.55 + i * 0.08}s` }}
                    />
                    <span className="font-body-sm text-[8px] text-on-surface-variant">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini alert rows */}
            <div
              className="hd-fade-up mt-1.5 space-y-1"
              style={{ animationDelay: "0.7s" }}
            >
              {rows.map((row, i) => (
                <div
                  key={row.name}
                  className="hd-fade-up flex items-center justify-between px-2 py-1 rounded bg-surface-container-low"
                  style={{ animationDelay: `${0.75 + i * 0.08}s` }}
                >
                  <span className="font-body-sm text-[10px] text-on-surface">{row.name}</span>
                  <span className="flex items-center gap-xs">
                    <span className={`w-1 h-1 rounded-full ${row.tone}`} />
                    <span className="font-body-sm text-[9px] text-on-surface-variant">
                      {row.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDashboard;