import { Investors } from "@/components/Investors/Investors";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <Investors />
    </MainLayout>
  )
}
