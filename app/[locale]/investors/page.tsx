import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { InvestorsHero } from "@/components/investors/InvestorsHero";
import { AnnualReport } from "@/components/investors/AnnualReport";
import { CompanyRule } from "@/components/investors/CompanyRule";
import InvestorsNumber from "@/app/components/InvestorsNumber/InvestorsNumber";
import InvestorsFinance from "@/app/components/InvestorsFinance/InvestorsFinance";

export default function ProductsPage() {
  return (
    <MainLayout>
      <Header hasButton={true} />
      <InvestorsHero />
      <InvestorsNumber />
      <InvestorsFinance />
      <AnnualReport />
      <CompanyRule />
      <ContactsForm />
    </MainLayout>
  );
}
