// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const navLinks = [
  { to: "/solutions/retail", label: "Solutions" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant shadow-sm">
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <Link to="/" className="text-h3 font-h3 text-primary">
          StockPilot AI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-lg items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative font-body-lg text-on-surface-variant hover:text-primary transition-colors nav-underline ${
                  isActive ? "text-primary font-bold active" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-md">
          <Link
            to="/login"
            className="hidden md:block font-body-lg text-primary font-bold hover:opacity-80 transition-opacity"
          >
            Login
          </Link>
          <Button variant="accent">Start Free Trial</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-on-surface">menu</span>
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-surface z-50 flex flex-col p-gutter md:hidden">
          <div className="flex justify-between items-center mb-xl">
            <span className="text-h3 font-h3 text-primary">StockPilot AI</span>
            <button
              className="w-11 h-11 flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex flex-col gap-md">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="font-h3 text-h3 text-on-surface animate-[fadeIn_0.3s_ease-out_forwards]"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="font-h3 text-h3 text-primary"
            >
              Login
            </Link>
            <Button variant="accent" className="mt-md w-full">
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;