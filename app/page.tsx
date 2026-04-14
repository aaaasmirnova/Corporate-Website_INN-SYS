import { Footer } from "@/components/Footer";
import { Career } from "@/components/Career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { InvestorSection } from "@/components/InvestorSection/InvestorSection";

export default function Home() {
  return (
    <MainLayout>
      <InvestorSection />
      <Career />
      {/* <Footer /> */}
    </MainLayout>
  );
}
