import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-neutral-black-elbrus">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-8 xl:px-24">
        {children}
      </div>
    </div>
  );
};
