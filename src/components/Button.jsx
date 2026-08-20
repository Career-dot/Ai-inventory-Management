// src/components/Button.jsx
function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-lg py-sm rounded-xl font-body-lg font-bold transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    accent:
      "bg-secondary text-on-secondary shadow-md border-2 border-secondary hover:bg-white hover:text-secondary hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5",
    primary:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
    ghost:
      "text-primary hover:opacity-80",
    onDark:
      "bg-transparent border-2 border-on-primary text-on-primary hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;