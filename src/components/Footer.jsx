// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-inverse-surface py-xl border-t border-outline">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md px-gutter max-w-container-max mx-auto">
        <div>
          <span className="text-h3 font-h3 text-surface-container-lowest mb-md block">
            StockPilot AI
          </span>
          <p className="font-body-sm text-surface-dim/70">
            Intelligent inventory systems for the modern era.
          </p>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-body-lg font-bold text-secondary-fixed">Solutions</span>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Retail Solutions</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">E-commerce</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Warehouse</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Manufacturing</a>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-body-lg font-bold text-secondary-fixed">Support</span>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Contact Support</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Help Center</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">API Docs</a>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-body-lg font-bold text-secondary-fixed">Legal</span>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Privacy Policy</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Security Standards</a>
          <a className="font-body-sm text-surface-dim/70 hover:text-surface-container-lowest transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-xl pt-lg border-t border-outline/30 flex justify-center items-center">
        <p className="font-body-sm text-[11px] text-surface-dim/70 text-center">
          ©{new Date().getFullYear()} StockPilot AI. All rights reserved to CSOFT System. Powered by CSOFT System.
        </p>
      </div>
    </footer>
  );
}

export default Footer;