import React from "react";

interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export function Tr({ children, ...rest }: TrProps) {
  return (
    <tr className="bg-primaryOpace font-bold h-12 rounded-lg" {...rest}>
      {children}
    </tr>
  );
}
