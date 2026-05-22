import { useTranslations } from "next-intl";
import { Button } from "../UI/Button";
import Link from "next/link";

export const Page404 = () => {
  const t = useTranslations("Page404");
  return (
    <section className="flex flex-col items-center">
      <h1 className="gradient-text text-[80px] md:text-[140px] lg:text-[180px] leading-[100%] font-semibold mt-[271px] md:mt-[300px] lg:mt-[232px] mb-6">
        404
      </h1>
      <p className="gradient-text text-[24px] lg:text-[50px] leading-[150%] font-open-sans font-normal mb-16">
        {t("description")}
      </p>
      <Link href="/">
        <Button customClassName="text-neutral-bright-beginning rounded-[12px] px-[47.5px] bg-button-secondary-default hover:bg-button-secondary-hover active:bg-button-secondary-active ">
          {t("buttonToMain")}
        </Button>
      </Link>
    </section>
  );
};
