
import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer";
import { Career } from "@/components/career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import CareerForm from "@/app/components/CareerForm/CareerForm";

export default function CareerPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <Career />
      <CareerForm />
      {/* <Footer /> */}
    </MainLayout>
  );
}
