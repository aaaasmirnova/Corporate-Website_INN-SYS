import { Footer } from "@/components/common/Footer";
import { Career } from "@/components/home/Career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { InvestorSection } from "@/components/home/InvestorSection/InvestorSection";
import { Contacts } from "@/components/home/Contacts/Contacts";
import { ProductEcosystem } from "@/components/home/ProductEcosystem/ProductEcosystem";
import { Partners } from "@/components/home/Partners/Partners";

export default function Home() {
  return (
    <MainLayout>
      <ProductEcosystem />
      <Partners />
      <InvestorSection />
      <Career />
      <Contacts />
      <Footer />
    </MainLayout>
  );
}
