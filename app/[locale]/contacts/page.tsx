import { MainLayout } from "@/components/MainLayout/MainLayout";

import CareerForm from "@/app/components/CareerForm/CareerForm";
import { ContactsHero } from "@/components/contacts/ContactsHero";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";

export default function ContactsPage() {
  return (
    <MainLayout>
      <ContactsHero />
      <ContactsForm />
    </MainLayout>
  );
}
