import { MainLayout } from "@/components/MainLayout/MainLayout";

import CareerForm from "@/app/components/CareerForm/CareerForm";
import { ContactsHero } from "@/components/contacts/ContactsHero";

export default function ContactsPage() {
  return (
    <MainLayout>
      <ContactsHero />
      <CareerForm />
    </MainLayout>
  );
}
