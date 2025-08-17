import React from "react";
import clsx from "clsx";

export default function Button({ children, variant = "default", className, ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-colors duration-300";

  const variants = {
    default: "bg-gray-800 text-white hover:bg-gray-700",
    gold: "bg-mofay-gold text-black hover:bg-yellow-400",
    outline:
      "border border-mofay-gold text-mofay-gold hover:bg-mofay-gold hover:text-black",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
