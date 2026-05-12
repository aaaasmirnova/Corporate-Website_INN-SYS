import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer";
import { Career } from "@/components/home/Career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { InvestorSection } from "@/components/home/InvestorSection/InvestorSection";
import { Contacts } from "@/components/home/Contacts/Contacts";
import { ProductEcosystem } from "@/components/home/ProductEcosystem/ProductEcosystem";
import { Partners } from "@/components/home/Partners/Partners";
import ContactsForm from "../components/ContactsForm/ContactsForm";
import { AboutSection } from "@/components/home/AboutComponent/AboutSection";
import { HeroSection } from "@/components/home/HeroComponent/HeroSection";
import { KeyIndicatorsSection } from "@/components/home/KeyIndicatorsComponent/KeyIndicatorsSection";

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
