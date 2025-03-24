import React from "react";

interface ButtonMoreProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonMore({ children, ...rest }: ButtonMoreProps) {
  return <button {...rest}>{children}</button>;
}
