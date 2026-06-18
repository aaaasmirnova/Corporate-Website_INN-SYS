import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const navItems = [
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "expertise", href: "/expertise" },
  { key: "investors", href: "/investors" },
  { key: "career", href: "/career" },
  { key: "contacts", href: "/contact" },
];

export const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container text-white relative">
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 928"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto"
          preserveAspectRatio="none"
          style={{
            transform: "translateY(-290px)",
            minHeight: "500px",
          }}
        >
          <rect
            width="1440"
            height="928"
            fill="url(#paint0_radial_2969_5817)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2969_5817"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 986) rotate(-90) scale(986 1530)"
            >
              <stop stopColor="#03496A" />
              <stop offset="0.48" stopColor="#1A191A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="nav-glow pt-12 relative z-10">
        <div className="mx-auto">
          <div className="flex justify-start mb-6 md:hidden">
            <Image
              src="/icons/Logo.svg"
              alt={t("Logo_alt")}
              width={40}
              height={53}
            />
          </div>
          <div className="">
            <ul className="grid grid-cols-2 gap-4 text-left md:flex md:flex-row md:flex-wrap md:gap-9 lg:gap-20 justify-center mb-10">
              {navItems.map((elem) => (
                <li key={elem.key}>
                  <Link
                    href={elem.href}
                    className="text-[14px] lg:text-[16px] hover:text-accent-2 transition-colors"
                  >
                    {t(`Nav.${elem.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-neutral-black-elbrus pb-8">
        <div className="mx-auto">
          <div className="">
            <address className="flex flex-col md:flex-row  md:justify-between not-italic pt-10">
              <p className="text-[14px]  md:text-[16px] lg:text-[18px] leading-[150%] text-neutral-200 w-67.5 mb-5.5 font-medium">
                {t("Contacts.address")}
              </p>
              <div className="hidden md:block">
                <Image
                  src="/icons/Logo.svg"
                  alt={t("Logo_alt")}
                  width={40}
                  height={53}
                />
              </div>
              <div className="flex flex-col gap-5.75 md:gap-1.25 space-y-1 text-left md:text-right mb-11.75 md:mb-24">
                <a
                  href="mailto:innovaticasystems@inbox.ru"
                  className="block text-[14px]  md:text-[16px] lg:text-[18px] text-brand-400 hover:text-link-hover active:text-link-active font-medium"
                >
                  {t("Contacts.email_1")}
                </a>
                <a
                  href="mailto:systemsinnovatica@gmail.com"
                  className="block text-[14px]  md:text-[16px] lg:text-[18px] text-neutral-200 hover:text-link-hover active:text-link-active font-medium"
                >
                  {t("Contacts.email_2")}
                </a>
              </div>
            </address>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 md:gap-6">
              <a className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active font-open-sans">
                {t("Policies.privacy")}
              </a>
              <a className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active font-open-sans">
                {t("Policies.terms")}
              </a>
              <a className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 hover:text-link-hover active:text-link-active mb-11.25 md:mb-0 font-open-sans md:text-center md:w-50.25">
                {t("Policies.data_protection")}{" "}
              </a>
            </div>
            <div className="text-[10px] md:text-[11px] lg:text-[12px] text-neutral-200 mt-4">
              {t("Copyright", { year: currentYear })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
