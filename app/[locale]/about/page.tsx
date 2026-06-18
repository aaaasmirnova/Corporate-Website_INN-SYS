import ContactsForm from "@/components/Common/ContactsForm/ContactsForm";
import { Business } from "@/components/Business/Business";
import { Header } from "@/components/Common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { AboutHero } from "@/components/About/AboutHero";
import { AboutPhilosophy } from "@/components/About/AboutPhilosophy";
import { AboutSubstract } from "@/components/About/AboutSubtract/AboutSubstract";
import { AboutInfo } from "@/components/About/AboutInfo/AboutInfo";

export default function AboutPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <AboutHero />
      <AboutPhilosophy />
      <AboutSubstract />
      <AboutInfo />
      <Business />
      <ContactsForm />
    </MainLayout>
  );
}
