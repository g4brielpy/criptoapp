import { ReactNode } from "react";
import { Header } from "../components/Header";

interface LayoutRootProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutRootProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
