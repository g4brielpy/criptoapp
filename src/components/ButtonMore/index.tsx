import React from "react";

interface ButtonMoreProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonMore({ children, ...rest }: ButtonMoreProps) {
  return (
    <button
      className="bg-teal-900 text-white px-8 py-2 rounded-md text-lg hover:opacity-85 font-bold"
      {...rest}
    >
      {children}
    </button>
  );
}
