import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-neutral-black-elbrus">
      <div className="w-full min-h-screen flex flex-col items-center relative">{children}</div>
    </div>
  );
};
