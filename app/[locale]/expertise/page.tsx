import { ExpertiseHero } from "@/components/Expertise/ExpertiseHero";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <ExpertiseHero />
      <ContactsForm />
    </MainLayout>
  );
}
