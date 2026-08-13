// src/pages/SolutionsRetail.jsx

import strainIcon from "../assets/strain.png";
import solutionIcon from "../assets/solution.png";
import posIcon from "../assets/real-time POS.png";
import omnichannelIcon from "../assets/omnichanal.png";
import transferIcon from "../assets/store to store transfer.png";
import forecastIcon from "../assets/Ai demand forecasting.png";

function SolutionsRetail() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-xl pb-lg">
        <div className="relative max-w-container-max mx-auto px-gutter grid lg:grid-cols-2 gap-lg items-center">
          <div className="flex flex-col gap-sm">
            <span className="inline-block px-3 py-1 bg-surface-container-highest text-primary font-eyebrow text-eyebrow rounded-full w-fit">
              RETAIL SOLUTIONS
            </span>
            <h1 className="font-h1-desktop text-h1-desktop tracking-tight">
              Optimized Inventory for <span className="text-primary">Modern Retailers</span>
            </h1>
            <p className="text-on-surface-variant text-body-lg max-w-lg">
              Unify your brick-and-mortar and digital storefronts with AI-driven forecasting
              that anticipates customer demand before it happens.
            </p>

            <div className="flex flex-wrap gap-sm pt-sm">
              <button className="bg-primary text-on-primary px-lg py-4 rounded-xl font-bold text-body-lg hover:shadow-lg transition-all">
                Get Started
              </button>
              <button className="flex items-center gap-2 border border-outline px-lg py-4 rounded-xl font-bold text-body-lg hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">play_circle</span> Watch Demo

              </button>
            </div>
          </div>
          <div className="relative animate-floating">
            <div className="glass-card p-4 rounded-xl shadow-2xl overflow-hidden border-2 border-primary/10">
              <img
                className="w-full h-auto rounded-lg"
                alt="Retail inventory dashboard mockup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcOQQyzyLAo5-VP0NsblDCK8q9jrOQDIugv49P5HpL_X5y036T6D12mRqkRYgu6Tm41-_Nf09u6C9UBsT7ohYhGB5z_cab7oAFK0Pd6SoMXVdsjOySW1EiZhcn-p_FKqaYFf2KOeeQjssJQzuVi_pZsO-DKslrVXeL2YBc0vdeZvgTNKNX5T0aXV4YiVmFVSR4Pd3fp0e4Bvc1WwOGOZAekxDnqfxVB9So8C8CUToZqGaYEtoZOjJG"
              />
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-sm rounded-lg shadow-xl hidden md:block">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
                <span className="font-bold text-secondary">+24% Efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid md:grid-cols-2 gap-xl items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-h2-desktop text-h2-desktop mb-md">
                Stockouts are costing you. <br />
                <span className="text-error">We fix that.</span>
              </h2>
              <div className="space-y-lg">
                <div className="flex gap-md">
                  <div className="bg-error/10 p-sm rounded-xl h-fit w-14 h-14 flex items-center justify-center">
                    <img src={strainIcon} alt="Problem icon" className="w-8 h-8" />

                  </div>
                  <div>
                    <h4 className="font-bold text-h3 mb-1">The Problem</h4>
                    <p className="text-on-surface-variant">
                      Fragmented data across multiple stores leads to overstocking dead
                      items and losing sales on high-demand products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-md">
                  <div className="bg-secondary/10 p-sm rounded-xl h-fit w-14 h-14 flex items-center justify-center">
                    <img src={solutionIcon} alt="Solution icon" className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-h3 mb-1">The StockPilot Solution</h4>
                    <p className="text-on-surface-variant">

                      Our AI engine predicts localized demand, suggesting precise

                      store-to-store transfers and automated reorders.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Updated image container: 10% smaller and centered */}

            <div className="order-1 md:order-2 flex justify-center">

              <div className="relative aspect-square w-[90%] glass-card rounded-3xl overflow-hidden">

                <img

                  className="w-full h-full object-cover grayscale-[30%] brightness-90"

                  alt="Boutique store interior"

                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxGzHBnYGa9yoOT3t6yctZBHIk7SeKQeDqH6mRSB-ivTuNF864nN6VO-CWff6ToeGUYxVzqjuNh33s6TQNSPPfOLXSzcNXZvxc12lCfkUgqQuC00J1z0w7lVdZvkABcCjZeLtXC4wkiv8--oxYjZAgL0hg-qJNKItPquGYTEN0n5Pk9RISI9to2Demic3uUvd6KSSUzWWhXOcOlahTdPnMgogJwyxenVkA8thkrlEdTLZgSZ0FaUAA"

                />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Bento feature grid */}

      <section className="py-xl px-gutter max-w-container-max mx-auto">

        <div className="text-center mb-xl">

          <h2 className="font-h2-desktop text-h2-desktop mb-sm">Built for Scalable Retail</h2>

          <p className="text-on-surface-variant max-w-2xl mx-auto">

            The tools you need to manage one store or one thousand, seamlessly synced

            across the cloud.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-md">

          <div className="md:col-span-2 glass-card p-lg rounded-3xl flex flex-col justify-between hover:border-primary/50 transition-colors group">

            <div className="flex justify-between items-start mb-lg">

              <div className="bg-primary/10 p-sm rounded-xl w-12 h-12 flex items-center justify-center">

                <img src={posIcon} alt="Real-time POS Sync" className="w-7 h-7" />

              </div>

              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">

                arrow_outward

              </span>

            </div>

            <div>

              <h3 className="font-h3 text-h3 mb-2">Real-time POS Sync</h3>

              <p className="text-on-surface-variant">

                Connect your point-of-sale directly to our AI engine. Every sale is

                instantly accounted for, updating stock levels across all channels in

                milliseconds.

              </p>

            </div>

          </div>

          <div className="glass-card p-lg rounded-3xl hover:border-secondary/50 transition-colors group">

            <div className="bg-secondary/10 p-sm rounded-xl w-12 h-12 flex items-center justify-center mb-lg">

              <img src={omnichannelIcon} alt="Omnichannel Visibility" className="w-7 h-7" />

            </div>

            <h3 className="font-h3 text-h3 mb-2">Omnichannel Visibility</h3>

            <p className="text-on-surface-variant">

              A single source of truth for your website, warehouse, and physical showrooms.

            </p>

          </div>

          <div className="glass-card p-lg rounded-3xl hover:border-primary/50 transition-colors group">

            <div className="bg-primary/10 p-sm rounded-xl w-12 h-12 flex items-center justify-center mb-lg">

              <img src={transferIcon} alt="Store-to-Store Transfers" className="w-7 h-7" />

            </div>

            <h3 className="font-h3 text-h3 mb-2">Store-to-Store Transfers</h3>

            <p className="text-on-surface-variant">

              Don't let inventory sit idle. Move stock where it's actually selling.

            </p>

          </div>

          <div className="md:col-span-2 glass-card p-lg rounded-3xl flex items-center gap-lg hover:border-secondary/50 transition-colors group">

            <div className="flex-1">

              <h3 className="font-h3 text-h3 mb-2">AI Demand Forecasting</h3>

              <p className="text-on-surface-variant">

                Machine learning models that analyze seasonal trends, local events, and

                historical data to prevent stockouts.

              </p>

            </div>

            <div className="hidden sm:flex w-48 h-32 bg-surface-container rounded-xl items-center justify-center">

              <img src={forecastIcon} alt="AI Demand Forecasting" className="w-20 h-20" />

            </div>

          </div>

        </div>

      </section>



      {/* Success story */}

      <section className="py-xl bg-inverse-surface text-surface relative overflow-hidden">

        <div className="max-w-container-max mx-auto px-gutter relative">

          <div className="grid md:grid-cols-5 gap-xl items-center">

            <div className="md:col-span-2">

              <div className="aspect-[3/4] max-w-[90%] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">

                <img

                  className="w-full h-full object-cover"

                  alt="Retail business owner reviewing inventory"

                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgfultOzjyj8AUL5dPZyVVHcJnlYjIrS3G1bTOP0kv-POH_fR_3rllEJDVJNxNO2Jf0nh-YTff4Q6_1hSIQnd34exJ_KptVLFgW6EtOFgJvKkPAbTD-fMwH4bFxSc-HdTKbTQepifQFdx6WzV-K1IdMWtL-Uvs9zl9Dn4o5nWtduSFRoczG7PcuSaojofut7lSvlFuiSvW5O5-_tbnNqsJxdixeiYOD1HZk0O8hcdkYIOA56ngtQS9"

                />

              </div>

            </div>

            <div className="md:col-span-3">

              <span className="font-eyebrow text-secondary-fixed text-eyebrow mb-sm block">

                SUCCESS STORY

              </span>

              <h2 className="font-h2-desktop text-h2-desktop mb-md">

                "StockPilot turned our 12-store chain into a unified machine."

              </h2>

              <blockquote className="text-h3 font-body-lg italic mb-lg text-surface-variant">

                "Before StockPilot, we were guessing. Now, our replenishment is 98%

                accurate, and our inventory turnover has increased by 40%. We scaled to

                three new cities without hiring extra ops staff."

              </blockquote>

              <div>

                <p className="font-bold text-lg">Sarah Jenkins</p>

                <p className="text-surface-variant">CEO, Velvet & Oak Retailers</p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* POS integrations */}

      <section className="py-xl">

        <div className="max-w-container-max mx-auto px-gutter text-center">

          <h3 className="font-h3 text-h3 mb-xl">Integrated with your favorite POS</h3>

          <div className="flex flex-wrap justify-center gap-xl opacity-60">

            {[

              { icon: "payments", label: "Shopify" },

              { icon: "square", label: "Square" },

              { icon: "inventory_2", label: "Lightspeed" },

              { icon: "shopping_cart", label: "Clover" },

              { icon: "database", label: "Oracle NetSuite" },

            ].map((pos) => (

              <div

                key={pos.label}

                className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default"

              >

                <span className="material-symbols-outlined text-4xl">{pos.icon}</span>

                <span className="font-h3">{pos.label}</span>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Final CTA */}
 <section className="py-xl px-gutter max-w-container-max mx-auto mb-xl">
        <div className="bg-primary p-xl rounded-xl text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-h2-mobile md:font-h2-desktop text-h2-mobile md:text-h2-desktop text-on-primary mb-md relative z-10">
            Ready to automate your retail operations?
          </h2>
          <p className="font-body-lg text-on-primary-container mb-lg max-w-2xl mx-auto relative z-10">
           Join 500+ retailers who have reclaimed their time and increased their profits with StockPilot AI.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-sm">
            <button className="bg-secondary text-on-secondary px-md py-2 text-sm rounded-lg font-bold hover:scale-105 transition-transform shadow-md">
              Start Free Trial
            </button>
            <button className="bg-transparent border border-on-primary text-on-primary px-md py-2 text-sm rounded-lg font-bold hover:bg-white/10 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );

}

export default SolutionsRetail;