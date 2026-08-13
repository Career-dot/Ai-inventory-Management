// src/pages/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a front-end preview only. Auth backend isn't connected yet.");
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-gutter py-md mesh-gradient">
      <div className="w-full max-w-sm auth-gradient-bg rounded-xl p-lg shadow-2xl">
        <div className="text-center mb-md">
          <Link to="/" className="text-h3 font-h3 text-white">
            StockPilot AI
          </Link>
          <h1 className="font-h2-mobile text-lg font-bold text-white mt-1">Welcome back</h1>
          <p className="text-white/80 font-body-sm text-xs">
            Log in to your dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-sm">
          <div>
            <label className="block font-body-sm text-xs font-bold text-white/90 mb-1" htmlFor="email">
              Email 
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg pointer-events-none">
                mail
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-white/95 border border-white/40 rounded-lg pl-10 pr-3 py-2 text-body-sm focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block font-body-sm text-xs font-bold text-white/90 mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg pointer-events-none">
                lock
              </span>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/95 border border-white/40 rounded-lg pl-10 pr-3 py-2 text-body-sm focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
              />
            </div>
          </div>

          <div className="flex justify-end -mt-1">
            <button
              type="button"
              className="text-xs text-white font-bold px-2 py-1 rounded-full hover:bg-white/15 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <div className="flex justify-center mt-1">
            <Button
              type="submit"
              variant="accent"
              className="px-lg py-2 text-sm inline-flex items-center gap-xs hover:scale-105"
            >
              Log In
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Button>
          </div>
        </form>

        <p className="text-center text-xs text-white/80 mt-sm">
          Don't have an account?{" "}
          <Link to="/pricing" className="text-white font-bold hover:opacity-80 underline">
            Start a free trial
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;