import { Footer } from "@/components/Footer/Footer";
import { Career } from "@/components/Career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { InvestorSection } from "@/components/InvestorSection/InvestorSection";
import { Contacts } from "@/components/Contacts/Contacts";
import { ProductEcosystem } from "@/components/ProductEcosystem/ProductEcosystem";
import { Partners } from "@/components/Partners/Partners";

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
