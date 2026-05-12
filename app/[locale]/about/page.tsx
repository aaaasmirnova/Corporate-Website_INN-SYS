import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { Business } from "@/components/Business/Business";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPhilosophy } from "@/components/about/AboutPhilosophy";
import { AboutSubstract } from "@/components/about/about-subtract/AboutSubstract";

export default function AboutPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <AboutHero />
      <AboutPhilosophy />
      <AboutSubstract />
      <Business />
      <ContactsForm />
    </MainLayout>
  );
}
