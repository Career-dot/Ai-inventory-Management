// src/pages/Features.jsx
import globeIcon from "../assets/globe.png";
import locationIcon from "../assets/location.png";

// New imports
import problemIcon from "../assets/problem.png";
import solveIcon from "../assets/Solve.png";
import customNeuralIcon from "../assets/Custom-neural.png";
import dataFabricIcon from "../assets/datafabric.png";
import enterpriseIcon from "../assets/enterprise.png";

function Features() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-xl px-gutter max-w-container-max mx-auto text-center">
        <span className="inline-block py-1 px-3 bg-surface-container rounded-full text-eyebrow font-eyebrow text-primary uppercase mb-md">
          Platform Capabilities
        </span>
        <h1 className="font-h1-mobile md:font-h1-desktop text-h1-mobile md:text-h1-desktop mb-md max-w-4xl mx-auto">
          The Full Power of AI-Driven Inventory Control
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
          Scale your operations with precision. From predictive forecasting to automated
          workflows, StockPilot AI turns complex data into seamless execution.
        </p>
        <div className="flex flex-col md:flex-row gap-md justify-center">
          <button className="bg-primary text-on-primary px-xl py-4 rounded-xl font-bold shadow-lg border-2 border-primary hover:bg-white hover:text-primary hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
            Watch Demo
          </button>
          <button className="border border-outline text-on-surface px-xl py-4 rounded-xl font-bold hover:bg-surface-container transition-all">
            View Documentation
          </button>
        </div>
      </section>

      {/* AI Demand Forecasting */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-lg items-center">
          <div className="order-2 md:order-1">
            <span className="text-eyebrow font-eyebrow text-primary tracking-widest uppercase mb-sm block">
              Predictive Analytics
            </span>
            <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-md">
              AI Demand Forecasting
            </h2>
            <p className="text-on-surface-variant mb-lg leading-relaxed">
              Never miss a sale or overstock again. Our neural networks analyze historical
              trends, seasonal shifts, and external market signals to predict demand with
              98.4% accuracy.
            </p>
            <ul className="space-y-md">
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
                <span>Historical trend decomposition & seasonality adjustment</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary">insights</span>
                <span>External signal integration (Weather, Market Trends, Local Events)</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary">auto_graph</span>
                <span>Automated outlier detection to prevent skewed predictions</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 glass-card rounded-xl p-md shadow-sm">
            <div className="aspect-video bg-surface-container-highest rounded-lg overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="AI demand forecast dashboard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3la4S73tw1iCAmA2RyZKxGJRujH4_xCrDmgCGOvExDQYwuoWRI5D-UELzwsoJPYxZ8xd0qq9XGmOu9j2uImnF34_Y_zfm4IJCxGYvIwRSbj8L5UYPJfYrnbsmkRSu_CD-oUl8zMIiMz1ItiDc99QyYEaTaLVaN1pDTQ0GX0pVZqoR0Z8s2Q8_7HlNb5zuLINWP6sXg_yFzD3O_U0EqQR31Gbu-WRxJgi3WKYO4M2hrRhebNennmXy"
              />
              <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-full">
                <span className="text-eyebrow font-eyebrow text-secondary">LIVE FORECAST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Auto-Reordering */}
      <section className="py-xl bg-surface-container-low px-gutter">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-lg items-center">
          <div className="glass-card rounded-xl p-md shadow-sm">
            <div className="aspect-video bg-surface-container-highest rounded-lg overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                alt="Workflow automation visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsiJ_IM0YILL88NiOefk72QdiAj6QHjEV2jqS6WV123F-2VejKkoFw-WpiE69dPRjYxDxWPrUamvORkIwQ34G5qjgaktxI4dw8HZJabkLlxPD_pJKQ55uNc9TrbXko9fZKRLoxZOHYcK-thIRTImQk_RmPluhbvT4yMNHiLTeu0Jcd9mFt_19TmxpNzzFhqza8bQNOWsRvHeobmdHYngSidSbo8TnZNKER8x1yZ9KVX5khDt-lk5OP"
              />
            </div>
          </div>
          <div>
            <span className="text-eyebrow font-eyebrow text-primary tracking-widest uppercase mb-sm block">
              Workflow Automation
            </span>
            <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-md">
              Smart Auto-Reordering
            </h2>
            <p className="text-on-surface-variant mb-lg leading-relaxed">
              Set your supply chain on autopilot. StockPilot AI monitors stock levels in
              real-time and triggers purchase orders based on custom lead times and vendor
              performance data.
            </p>
            <div className="grid grid-cols-2 gap-md">
              <div className="p-md bg-surface rounded-xl border border-outline-variant">
                <div className="font-h3 mb-xs">0ms</div>
                <div className="text-body-sm opacity-70">Manual Data Entry</div>
              </div>
              <div className="p-md bg-surface rounded-xl border border-outline-variant">
                <div className="font-h3 mb-xs">24/7</div>
                <div className="text-body-sm opacity-70">Vendor Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Inventory Sync */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-lg items-center">
          <div>
            <span className="text-eyebrow font-eyebrow text-primary tracking-widest uppercase mb-sm block">
              Multi-Location Sync
            </span>
            <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-md">
              Global Inventory Sync
            </h2>
            <p className="text-on-surface-variant mb-lg leading-relaxed">
              Whether you have two warehouses or two hundred stores, keep every location in
              perfect harmony. View real-time stock levels across your entire network from a
              single pane of glass.
            </p>
            <div className="space-y-md">
              <div className="flex items-center gap-md glass-card p-4 rounded-lg">
                <img src={globeIcon} alt="Globe" className="w-10 h-10" />
                <div>
                  <div className="font-bold">Omnichannel Ready</div>
                  <p className="text-body-sm text-on-surface-variant">
                    Syncs with Shopify, Amazon, and ERP systems.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-md glass-card p-4 rounded-lg">
                <img src={locationIcon} alt="Location" className="w-10 h-10" />
                <div>
                  <div className="font-bold">Intelligent Allocation</div>
                  <p className="text-body-sm text-on-surface-variant">
                    Moves stock to where it's needed most based on demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-md shadow-sm min-h-[400px]">
            <div className="w-full h-full rounded-lg bg-surface-container-highest overflow-hidden relative">
              <img
                className="w-full h-full object-cover opacity-80"
                alt="Global supply chain map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNd3VqJtJ5Ibh4zUPCeZpZF1r_fQJEHh-ZbXTydXRIV7VSWRAMMV3O0yvlQQby-kB57fRyE3Y0hYENwAHa7qCo4YfUQUhCp8AbwZ9dQg9X8uhyAGPZJuCoJZeZQMdblBnbOc4mgg93D5HShBsB03rZC_O-Xg-4QJ9YUGwFGZ7Phh3BN27912xhb7iyOq8CMbeXhJCH-qVi-Rwax_cn6oba3Y5xL5HsGC3M-z9RxPTi6Ep_-oqG_IKy"
              />
              <div className="absolute bottom-6 left-6 p-4 glass-card rounded-xl">
                <div className="flex items-center gap-sm">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-body-sm font-bold">LHR-1 Warehouse Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-Stock Intelligence */}
      <section className="py-xl bg-inverse-surface text-surface px-gutter overflow-hidden">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-lg items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all" />
            <div className="relative glass-card bg-surface/10 border-white/10 rounded-xl p-lg space-y-md">
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex gap-md items-center">
                  <img src={problemIcon} alt="Problem" className="w-6 h-6" />
                  <span>Critical Alert: SKU #98221 Low</span>
                </div>
                <span className="text-xs opacity-50">Just now</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex gap-md items-center">
                  <img src={solveIcon} alt="Solve" className="w-6 h-6" />
                  <span>PO Generated: Supplier A</span>
                </div>
                <span className="text-xs opacity-50">12m ago</span>
              </div>
              <div className="p-md bg-white/5 rounded-lg border border-white/10 italic opacity-70 text-body-sm">
                "AI Prediction: Stockout likely in 4 days if action is not taken today."
              </div>
            </div>
          </div>
          <div>
            <span className="text-eyebrow font-eyebrow text-secondary-fixed-dim tracking-widest uppercase mb-sm block">
              Smart Alerts
            </span>
            <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-md">
              Low-Stock Intelligence
            </h2>
            <p className="text-surface-variant/70 mb-lg leading-relaxed">
              Static thresholds are a thing of the past. Our "Dynamic Buffer" system adapts
              to changing lead times and surge periods, ensuring you're alerted exactly when
              needed—not too late, and never too early.
            </p>
            <button className="bg-secondary text-on-secondary px-8 py-3 rounded-xl font-bold border-2 border-secondary hover:bg-white hover:text-secondary hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all">
              Configure Alerts
            </button>
          </div>
        </div>
      </section>

      {/* Technical Infrastructure */}
      <section className="py-xl px-gutter max-w-container-max mx-auto text-center">
        <span className="text-eyebrow font-eyebrow text-primary uppercase mb-sm block">
          Technical Infrastructure
        </span>
        <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-xl">
          The Engine Behind the Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {[
            { img: customNeuralIcon, title: "Custom Neural Kernels", desc: "Proprietary forecasting algorithms optimized for high-volume SKU rotation and complex supply chains." },
            { img: dataFabricIcon, title: "Real-time Data Fabric", desc: "Sub-second latency across all connected endpoints. Data is processed locally and synced globally instantly." },
            { img: enterpriseIcon, title: "Enterprise Connector", desc: "Native hooks for SAP, Oracle, NetSuite, and Microsoft Dynamics 365 for seamless procurement integration." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-lg glass-card rounded-xl text-left hover:shadow-lg transition-all border-t-4 border-t-primary"
            >
              <img src={item.img} alt={item.title} className="w-12 h-12 mb-md" />
              <h3 className="font-h3 mb-sm">{item.title}</h3>
              <p className="text-on-surface-variant text-body-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="py-xl bg-surface-container-high px-gutter">
        <div className="max-w-4xl mx-auto glass-card p-xl rounded-2xl border-outline-variant flex flex-col md:flex-row items-center gap-lg">
          <div className="flex-1">
            <h2 className="font-h3 mb-md">Enterprise-Grade Security by Default</h2>
            <p className="text-on-surface-variant mb-md">
              Your operational data is your most valuable asset. We protect it with SOC2
              Type II compliance and AES-256 encryption at rest and in transit.
            </p>
            <div className="flex gap-md flex-wrap">
              <div className="flex items-center gap-xs text-body-sm font-bold">
                <span className="material-symbols-outlined text-secondary">verified</span>
                SOC2 Certified
              </div>
              <div className="flex items-center gap-xs text-body-sm font-bold">
                <span className="material-symbols-outlined text-secondary">verified</span>
                GDPR Compliant
              </div>
              <div className="flex items-center gap-xs text-body-sm font-bold">
                <span className="material-symbols-outlined text-secondary">verified</span>
                99.99% Uptime
              </div>
            </div>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-primary rounded-full text-on-primary shrink-0 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-6xl">lock</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;