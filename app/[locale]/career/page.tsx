import { Footer } from "@/components/common/Footer";
import { Career } from "@/components/career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";

export default function CareerPage() {
  return (
    <MainLayout>
      <Career />
      <ContactsForm />
      {/* <Footer /> */}
    </MainLayout>
  );
}
