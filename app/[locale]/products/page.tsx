import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { ProductsList } from "@/components/Products/ProductsList";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <ProductsList />
    </MainLayout>
  )
}
