import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { Business } from "@/components/Business/Business";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { AboutHero } from "@/app/components/About/AboutHero";
import { AboutPhilosophy } from "@/app/components/About/AboutPhilosophy";
import { AboutSubstract } from "@/app/components/About/AboutSubtract/AboutSubstract";
import { AboutInfo } from "@/app/components/About/AboutInfo/AboutInfo";

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
