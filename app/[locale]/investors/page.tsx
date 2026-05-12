import { Investors } from "@/components/Investors/Investors";
import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { InvestorsHero } from "@/components/investors/InvestorsHero";
import { AnnualReport } from "@/components/investors/AnnualReport";
import { CompanyRule } from "@/components/investors/CompanyRule";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
       <InvestorsHero />
      <Investors />
      <AnnualReport />
      <CompanyRule />
      <ContactsForm />
    </MainLayout>
  )
}
