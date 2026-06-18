import { Header } from "@/components/Common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { ExpertiseTabs } from "@/components/Expertise/ExpertiseTabs/ExpertiseTabs";
import ContactsForm from "@/components/Common/ContactsForm/ContactsForm";
import { ExpertiseHero } from "@/components/Expertise/ExpertiseHero";

export default function ExpertisePage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <ExpertiseHero />
      <ExpertiseTabs />
      <ContactsForm />
    </MainLayout>
  );
}
