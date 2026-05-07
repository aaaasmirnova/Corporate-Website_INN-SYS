import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
}: ButtonProps) => {
  const baseClasses = "font-open-sans rounded transition-colors";

  const variantClasses = {
    primary: "bg-primary-1 hover:bg-primary-2 text-white",
    secondary: "bg-accent-2 hover:bg-accent-3 text-white",
    accent: "bg-accent-1 hover:bg-accent-2 text-white",
  };

  const sizeClasses = {
    small: "text-body-mobile px-4 py-2",
    medium: "text-body-desktop px-6 py-3",
    large: "text-h4-desktop px-8 py-4",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
