// src/pages/Home.jsx
import Button from "../components/Button";
import StatCounter from "../components/StatCounter";
import HeroDashboard from "../components/HeroDashboard";

// Icons imports (agar aapne ye images public folder mein rakhi hain)
import aiDemandImg from "../assets/Ai demand forecasting.png";
import automatedReorderImg from "../assets/real-time POS.png";
import multiLocationImg from "../assets/location.png";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-xl pb-xl px-gutter max-w-container-max mx-auto mesh-gradient">
        <div className="text-center max-w-3xl mx-auto mb-xl relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary font-eyebrow text-eyebrow mb-md">
            AI-POWERED INVENTORY MANAGEMENT
          </span>
          <h1 className="font-h1-mobile md:font-h1-desktop text-h1-mobile md:text-h1-desktop text-on-surface mb-md">
            Master Your Inventory with <span className="text-primary">AI Precision</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-lg">
            StockPilot AI synchronizes your operations in real-time. Predict demand with
            99% accuracy and never miss a sale or overstock again.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-md">
            <Button variant="accent">Start Free Trial</Button>
            <Button variant="primary">Book a Demo</Button>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto mt-lg animate-floating">
          <HeroDashboard />
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
        </div>
      </section>

      {/* Trust row */}
      <section
        className="py-xl bg-surface-container-low relative"
        style={{
          boxShadow:
            "inset 0 8px 12px -6px rgba(27,27,36,0.28), inset 0 -8px 12px -6px rgba(27,27,36,0.28)",
        }}
      >
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <p className="font-eyebrow text-eyebrow text-on-surface-variant uppercase tracking-widest mb-lg">
            Integrated with your favorite tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-xl opacity-70 hover:opacity-100 transition-opacity">
            {[
              { icon: "shopping_bag", name: "Shopify" },
              { icon: "storefront", name: "Amazon" },
              { icon: "calculate", name: "QuickBooks" },
              { icon: "hub", name: "SAP" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="h-10 px-md flex items-center gap-xs bg-surface-container-lowest rounded-lg border border-outline-variant/40"
              >
                <span className="material-symbols-outlined text-primary text-lg">
                  {tool.icon}
                </span>
                <span className="font-body-sm font-bold text-on-surface-variant">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-lg flex justify-center gap-lg">
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="font-body-sm font-bold">SOC2 Compliant</span>
            </div>
            <div className="flex items-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="font-body-sm font-bold">GDPR Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlight cards */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {[
            { img: aiDemandImg, title: "Demand Forecasting", desc: "Leverage proprietary AI models to predict seasonality, trends, and market shifts with surgical precision." },
            { img: automatedReorderImg, title: "Automated Reordering", desc: "Set smart thresholds that trigger purchase orders automatically when stock is low, based on lead times." },
            { img: multiLocationImg, title: "Multi-location Sync", desc: "Manage warehouses across continents in a single pane of glass with sub-second synchronization latency." },
          ].map((card) => (
            <div
              key={card.title}
              className="glass-card p-md rounded-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-md p-2">
                <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm">{card.title}</h3>
              <p className="font-body-sm text-on-surface-variant">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden bg-inverse-surface text-surface shadow-2xl"
          style={{
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.35), inset 1px 0 0 rgba(255,255,255,0.06), inset -1px 0 0 rgba(0,0,0,0.25)",
          }}
        >
          {/* subtle glow accents */}
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-surface-dim/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative py-[96px] px-xl grid grid-cols-1 md:grid-cols-3 text-center">
            <div className="px-lg py-md md:py-0">
              <StatCounter target={30} suffix="%" label="fewer stockouts" />
            </div>
            <div
              className="px-lg py-md md:py-0 md:border-x md:border-surface/15"
              style={{
                boxShadow:
                  "inset 1px 0 0 rgba(255,255,255,0.08), inset -1px 0 0 rgba(0,0,0,0.3)",
              }}
            >
              <StatCounter target={25} suffix="%" label="reduced carrying costs" />
            </div>
            <div className="px-lg py-md md:py-0">
              <StatCounter target={100} suffix="%" label="real-time accuracy" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-xl relative">
        <div className="max-w-4xl mx-auto px-gutter text-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-md inline-block">
            format_quote
          </span>
          <h2 className="font-h2-desktop text-h2-desktop text-on-surface italic mb-lg">
            "StockPilot AI turned our warehouse chaos into a streamlined engine. We've
            seen a massive boost in efficiency and our customers never see 'out of
            stock' labels anymore."
          </h2>
          <div className="flex items-center justify-center gap-md">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img
                className="w-full h-full object-cover"
                alt="Sarah Chen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2mimNFAF3e4gzj-8Zwkzs7h4pc1N0YcooLaJ9o8pGqk9Hov_J38xteag3S260rxjqZljhYvLmRJAeuXzPjTY-E1sT-6fzvncG4YRBS0Q-aMuN4kEpM3Vza-SqVvFGt3rdfqz5B4rG9ILFnBR4E0065McJxxYTa0_j_WZusxsR-jKaDC3g_sEOKJlMWU064IQuqRG1fG0Pf1uqySJnfUUldotNZnhxgOnv3BQ4-l3nh1BFl8cTK3CH"
              />
            </div>
            <div className="text-left">
              <p className="font-body-lg font-bold text-on-surface">Sarah Chen</p>
              <p className="font-body-sm text-on-surface-variant">
                Operations Manager at Global Goods Co.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 mesh-gradient opacity-30" />
      </section>

      {/* Final CTA */}
      <section className="py-xl px-gutter max-w-container-max mx-auto mb-xl">
        <div className="bg-primary p-xl rounded-xl text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface-container-highest opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2" />
          <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop text-on-primary mb-md relative z-10">
            Ready to scale with precision?
          </h2>
          <p className="font-body-lg text-on-primary-container mb-lg max-w-2xl mx-auto relative z-10">
            Join over 5,000 businesses using StockPilot AI to automate their growth and
            dominate their market.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-sm">
            <button className="bg-secondary text-on-secondary px-md py-2 text-sm rounded-lg font-bold border-2 border-secondary hover:bg-white hover:text-secondary hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all">
              Start Free Trial
            </button>
            <button className="bg-transparent border border-on-primary text-on-primary px-md py-2 text-sm rounded-lg font-bold hover:bg-white hover:text-primary hover:border-white hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;