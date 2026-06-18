import { Header } from "@/components/Common/Header/Header";
import { Career } from "@/components/Career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import CareerForm from "@/components/Common/CareerForm/CareerForm";

export default function CareerPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <Career />
      <CareerForm />
    </MainLayout>
  );
}
