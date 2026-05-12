import { Expertise } from "@/components/Expertise/Expertise";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <Expertise />
    </MainLayout>
  )
}
