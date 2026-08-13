// src/components/Button.jsx
function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "px-lg py-sm rounded-xl font-body-lg font-bold transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    accent:
      "bg-secondary text-on-secondary shadow-md hover:brightness-110 hover:scale-105",
    primary:
      "border-2 border-primary text-primary hover:bg-primary/5",
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