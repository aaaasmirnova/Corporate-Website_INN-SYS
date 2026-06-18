import { Header } from "@/components/Common/Header/Header";
import { Footer } from "@/components/Common/Footer";
import { Career } from "@/components/Home/Career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { InvestorSection } from "@/components/Home/InvestorSection/InvestorSection";
import { Contacts } from "@/components/Home/Contacts/Contacts";
import { ProductEcosystem } from "@/components/Home/ProductEcosystem/ProductEcosystem";
import { Partners } from "@/components/Home/Partners/Partners";
import ContactsForm from "../../components/Common/ContactsForm/ContactsForm";
import { AboutSection } from "@/components/Home/AboutComponent/AboutSection";
import { HeroSection } from "@/components/Home/HeroComponent/HeroSection";
import { KeyIndicatorsSection } from "@/components/Home/KeyIndicatorsComponent/KeyIndicatorsSection";

export default function Home() {
  return (
    <MainLayout>
      <Header hasButton={false} />
      <HeroSection />
      <AboutSection />
      <KeyIndicatorsSection />
      <ProductEcosystem />
      <Partners />
      <InvestorSection />
      <Career />
      <Contacts />
      <ContactsForm />
      {/* <Footer /> */}
    </MainLayout>
  );
}
