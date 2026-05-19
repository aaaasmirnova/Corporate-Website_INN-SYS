import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { ExpertiseTabs } from "@/app/components/ExpertiseTabs/ExpertiseTabs";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
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
