import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-neutral-black-elbrus">
      <div>{children}</div>
    </div>
  );
};
