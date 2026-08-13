// src/pages/Pricing.jsx
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    desc: "Perfect for growing retail brands.",
    features: [
      { text: "1 Location", included: true },
      { text: "500 SKUs", included: true },
      { text: "Basic AI Forecasting", included: true },
      { text: "Auto-reorder", included: false },
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    desc: "Scalable solution for multi-channel sales.",
    features: [
      { text: "5 Locations", included: true },
      { text: "Unlimited SKUs", included: true },
      { text: "AI Auto-reorder", included: true },
      { text: "Priority Support", included: true },
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Bespoke systems for global supply chains.",
    features: [
      { text: "Unlimited Locations", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Custom Integrations (API)", included: true },
      { text: "SLA Guarantees", included: true },
    ],
    highlight: false,
  },
];

const comparisonRows = [
  { feature: "Inventory Tracking", starter: "Up to 500 SKUs", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Predictive Analytics", starter: "Basic (30 days)", growth: "Advanced (90 days)", enterprise: "Custom Horizons" },
  { feature: "Auto-Reordering", starter: false, growth: true, enterprise: true },
  { feature: "Multi-Warehouse", starter: "1 Location", growth: "5 Locations", enterprise: "Unlimited" },
  { feature: "API Access", starter: "Read-Only", growth: "Full Access", enterprise: "White-label & Webhooks" },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. If you upgrade mid-cycle, the new rate will be prorated.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a 14-day full-featured trial on all our plans. No credit card is required to start your trial of StockPilot AI.",
  },
  {
    q: "How secure is my data?",
    a: "Security is our top priority. We use industry-standard AES-256 encryption for all data at rest and TLS for data in transit. Our infrastructure is hosted on SOC2 Type II compliant servers.",
  },
];

function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter text-center mb-xl pt-xl">
        <span className="inline-block px-4 py-1 rounded-full bg-surface-container-highest text-primary font-eyebrow text-eyebrow uppercase tracking-widest mb-md">
          Plans &amp; Pricing
        </span>
        <h1 className="font-h1-mobile md:font-h1-desktop text-h1-mobile md:text-h1-desktop max-w-4xl mx-auto mb-md">
          Simple, Transparent Pricing for Every Growth Stage
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Optimize your inventory management with AI-driven insights. Choose the plan that
          scales with your business complexity and volume.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card p-md rounded-xl flex flex-col relative ${
              plan.highlight ? "border-2 border-primary shadow-2xl scale-105 z-10" : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-eyebrow uppercase">
                Most Popular
              </div>
            )}
            <div className="mb-md">
              <h3 className="font-h3 text-h3 mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-xs">
                <span className="text-h2-desktop font-h2-desktop">{plan.price}</span>
                <span className="text-on-surface-variant text-body-sm">{plan.period}</span>
              </div>
              <p className="text-body-sm mt-1 text-on-surface-variant">
                {plan.desc}
              </p>
            </div>
            <ul className="space-y-1 mb-md flex-grow">
              {plan.features.map((f) => (
                <li
                  key={f.text}
                  className={`flex items-center gap-xs ${!f.included ? "text-on-surface-variant/40" : ""}`}
                >
                  <span
                    className={`material-symbols-outlined text-lg ${f.included ? "text-secondary" : ""}`}
                  >
                    {f.included ? "check_circle" : "cancel"}
                  </span>
                  <span className="text-body-sm">{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="bg-secondary text-on-secondary px-lg py-2 text-sm rounded-xl font-bold hover:scale-105 transition-transform shadow-md">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison table */}
      <section className="max-w-container-max mx-auto px-gutter mb-xl">
        <div className="text-center mb-lg">
          <h2 className="font-h2-desktop text-h2-desktop mb-sm">Detailed Feature Comparison</h2>
          <p className="text-on-surface-variant">Every detail you need to make the right choice.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse glass-card rounded-xl">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-md font-h3 text-body-lg border-b border-outline-variant">Features</th>
                <th className="p-md font-h3 text-body-lg border-b border-outline-variant">Starter</th>
                <th className="p-md font-h3 text-body-lg border-b border-outline-variant text-primary">Growth</th>
                <th className="p-md font-h3 text-body-lg border-b border-outline-variant">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-body-sm">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-surface-container-highest transition-colors">
                  <td className="p-md border-b border-outline-variant font-medium">{row.feature}</td>
                  <td className="p-md border-b border-outline-variant">
                    {typeof row.starter === "boolean" ? (
                      <span className="material-symbols-outlined text-error">close</span>
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td className="p-md border-b border-outline-variant text-primary">
                    {typeof row.growth === "boolean" ? (
                      <span className="material-symbols-outlined text-secondary">check</span>
                    ) : (
                      row.growth
                    )}
                  </td>
                  <td className="p-md border-b border-outline-variant">
                    {typeof row.enterprise === "boolean" ? (
                      <span className="material-symbols-outlined text-secondary">check</span>
                    ) : (
                      row.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-gutter mb-xl">
        <h2 className="font-h2-desktop text-h2-desktop text-center mb-lg">
          Frequently Asked Questions
        </h2>
        <div className="space-y-sm">
          {faqs.map((item, i) => (
            <div key={item.q} className="glass-card rounded-xl overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-md text-left transition-colors hover:bg-surface-container-low"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-body-lg">{item.q}</span>
                <span
                  className="material-symbols-outlined transition-transform duration-300"
                  style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  expand_more
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out bg-surface-container-lowest"
                style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
              >
                <p className="p-md text-body-sm text-on-surface-variant">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-container-max mx-auto px-gutter mb-xl">
        <div className="glass-card p-xl rounded-xl bg-primary text-on-primary text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-h2-desktop text-h2-desktop mb-md">Ready to Pilot Your Growth?</h2>
            <p className="text-body-lg mb-lg max-w-xl mx-auto opacity-90">
              Join 2,000+ businesses using AI to eliminate stockouts and reduce excess
              inventory by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm justify-center">
              <button className="bg-secondary text-on-secondary px-md py-2 text-sm rounded-lg font-bold hover:scale-105 transition-transform shadow-md">
                Start Free Trial
              </button>
              <button className="bg-primary-container text-on-primary-container px-md py-2 text-sm rounded-lg font-bold hover:bg-on-primary-container hover:text-primary-container transition-colors border border-on-primary-container">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;