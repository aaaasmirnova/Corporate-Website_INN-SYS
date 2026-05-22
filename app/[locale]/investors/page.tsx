import { Header } from "@/components/common/Header/Header";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import ContactsForm from "@/app/components/ContactsForm/ContactsForm";
import { InvestorsHero } from "@/components/InvestorsPage/InvestorsHero";
import { AnnualReport } from "@/components/InvestorsPage/AnnualReport";
import { CompanyRule } from "@/components/InvestorsPage/CompanyRule";
import InvestorsNumber from "@/app/components/InvestorsNumber/InvestorsNumber";
import InvestorsFinance from "@/app/components/InvestorsFinance/InvestorsFinance";

export default function InvestorsPage() {
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
