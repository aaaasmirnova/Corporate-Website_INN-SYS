import { Career } from "@/components/career/Career";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import CareerForm from "@/app/components/CareerForm/CareerForm";

export default function CareerPage() {
  return (
    <MainLayout>
      <Career />
      <CareerForm />
    </MainLayout>
  );
}
