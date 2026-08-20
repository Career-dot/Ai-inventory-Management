// src/pages/About.jsx
import retailIcon from "../assets/retail.png";
import ecommerceIcon from "../assets/ecommerce.png";
import warehouseIcon from "../assets/warehouse.png";
import procurementIcon from "../assets/procurement.png";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-xl px-gutter max-w-container-max mx-auto mesh-gradient text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary font-eyebrow text-eyebrow mb-md">
          ABOUT STOCKPILOT AI
        </span>
        <h1 className="font-h1-mobile md:font-h1-desktop text-h1-mobile md:text-h1-desktop mb-md max-w-3xl mx-auto">
          Turning Complex Inventory Data into Effortless Control
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          StockPilot AI was built for operations managers, e-commerce owners, and warehouse
          teams who are tired of guessing. We combine machine-learning forecasting with a
          clean, trustworthy interface so every business — technical or not — can act on
          real-time inventory intelligence.
        </p>
      </section>

      {/* Mission */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-lg items-center">
          <div>
            <span className="text-eyebrow font-eyebrow text-primary tracking-widest uppercase mb-sm block">
              Our Mission
            </span>
            <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-md">
              Outcome-led, not jargon-led
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-md">
              Businesses managing physical or e-commerce inventory lose revenue every year to
              manual stock tracking and reactive reordering. StockPilot AI exists to close
              that gap — translating advanced AI forecasting into plain, measurable outcomes
              like fewer stockouts, lower carrying costs, and hours of manual work saved
              every week.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We work with retail operations managers, e-commerce store owners, warehouse
              and 3PL managers, and the IT/procurement teams who need to sign off on it all —
              without needing four different products to do it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-md">
            <div className="glass-card p-md rounded-xl text-center">
              <div className="font-h1-desktop text-h1-desktop text-primary mb-xs">500+</div>
              <p className="font-body-sm text-on-surface-variant">Businesses onboarded</p>
            </div>
            <div className="glass-card p-md rounded-xl text-center">
              <div className="font-h1-desktop text-h1-desktop text-primary mb-xs">30%</div>
              <p className="font-body-sm text-on-surface-variant">Avg. fewer stockouts</p>
            </div>
            <div className="glass-card p-md rounded-xl text-center">
              <div className="font-h1-desktop text-h1-desktop text-primary mb-xs">99.9%</div>
              <p className="font-body-sm text-on-surface-variant">Platform uptime</p>
            </div>
            <div className="glass-card p-md rounded-xl text-center">
              <div className="font-h1-desktop text-h1-desktop text-primary mb-xs">14</div>
              <p className="font-body-sm text-on-surface-variant">Day free trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-xl bg-surface-container-low px-gutter">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop mb-sm">
              Built for Every Inventory Team
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              One platform, tailored messaging and workflows for each buyer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              { img: retailIcon, title: "Retail Operations", desc: "Manage stock across store locations without hiring extra headcount." },
              { img: ecommerceIcon, title: "E-commerce Owners", desc: "Automated reorder alerts plugged directly into your sales channel." },
              { img: warehouseIcon, title: "Warehouse / 3PL", desc: "Forecasting accuracy plus integration with your existing WMS/ERP." },
              { img: procurementIcon, title: "IT / Procurement", desc: "Clear security posture, data handling, and integration answers." },
            ].map((persona) => (
              <div key={persona.title} className="glass-card p-md rounded-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 mb-md">
                  <img src={persona.img} alt={persona.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-h3 text-h3 mb-sm">{persona.title}</h3>
                <p className="font-body-sm text-on-surface-variant">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-xl px-gutter">
        <div className="max-w-4xl mx-auto glass-card p-xl rounded-2xl flex flex-col md:flex-row items-center gap-lg">
          <div className="flex-1">
            <span className="text-eyebrow font-eyebrow text-secondary tracking-widest uppercase mb-sm block">
              Security &amp; Compliance
            </span>
            <h2 className="font-h3 mb-md">Enterprise-grade trust, by default</h2>
            <p className="text-on-surface-variant mb-md">
              Your operational data is your most valuable asset. StockPilot AI protects it
              with SOC2 Type II compliance, GDPR-ready data handling, and AES-256 encryption
              at rest and in transit — so your procurement team gets a straight answer, not
              a sales pitch.
            </p>
            <div className="flex gap-md flex-wrap">
              <div className="flex items-center gap-xs text-body-sm font-bold">
                <span className="material-symbols-outlined text-secondary">verified</span>
                SOC2 Certified
              </div>
              <div className="flex items-center gap-xs text-body-sm font-bold">
                <span className="material-symbols-outlined text-secondary">verified</span>
                GDPR Ready
              </div>
              <div className="flex items-center gap-xs text-body-sm font-bold">
                <span className="material-symbols-outlined text-secondary">verified</span>
                AES-256 Encryption
              </div>
            </div>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-primary rounded-full text-on-primary shrink-0 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-6xl">lock</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xl px-gutter max-w-container-max mx-auto mb-xl">
        <div className="bg-primary p-xl rounded-xl text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop text-on-primary mb-md relative z-10">
            See it work on your own data
          </h2>
          <p className="font-body-lg text-on-primary-container mb-lg max-w-2xl mx-auto relative z-10">
            Start a free 14-day trial, or book a demo with our team — no credit card
            required.
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

export default About;