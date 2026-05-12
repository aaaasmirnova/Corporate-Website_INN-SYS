
import { Contacts } from "@/components/Contacts/Contacts";
import { ContactsHero } from "@/components/contacts/ContactsHero";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <ContactsHero />
      <Contacts />
      <ContactsForm />
    </MainLayout>
  )
}
