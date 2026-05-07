import Image from "next/image";

const socialIcons = [
  { src: "/icons/contacts/youtube.svg", url: "https://youtube.com" },
  { src: "/icons/contacts/instagram.svg", url: "https://instagram.com" },
  { src: "/icons/contacts/twitter.svg", url: "https://twitter.com" },
  { src: "/icons/contacts/tiktok.svg", url: "https://tiktok.com" },
  { src: "/icons/contacts/vk.svg", url: "https://vk.com" },
  { src: "/icons/contacts/habr.svg", url: "https://habr.com" },
  { src: "/icons/contacts/linkedln.svg", url: "https://linkedin.com" },
  { src: "/icons/contacts/github.svg", url: "https://github.com" },
  { src: "/icons/contacts/union.svg", url: "https://dribbble.com" },
  { src: "/icons/contacts/dprofile.svg", url: "https://dprofile.org" },
  { src: "/icons/contacts/be.svg", url: "https://behance.net" },
];

export const ContactsHero = () => {
  return (
    <section className="container relative flex flex-col items-center h-112.5 md:h-193.5 lg:h-237.25 mb-24 md:mb-42 lg:mb-60.5 overflow-visible">
      <Image
        src="/images/contacts/logo_desktop.png"
        alt="Инноватика Системс"
        width={375}
        height={415}
        className="w-93.75 h-103.75 md:w-175 md:h-193.5 lg:w-214.5 lg:h-237.25"
        priority
      />
      <h1 className="absolute top-23.75 md:top-53 lg:top-66 gradient-text text-[24px] md:text-[40px] lg:text-[64px] leading-[150%] font-semibold">
        Контакты
      </h1>
      <p className="absolute top-38.75 md:top-76 lg:top-100.75 gradient-text text-[13px] md:text-[24px] lg:text-[28px] leading-[150%] font-semibold text-center">
        Технологическое партнёрство<br></br> начинается с коммуникации
      </p>

      <div className="absolute top-86.5 md:top-163.5 lg:top-214.75 left-0 right-0 overflow-visible">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-15 md:flex-nowrap">
          {socialIcons.map((icon, index) => (
            <div
              key={index}
              className={`flex justify-center ${index === 5 ? "md:ml-0" : ""}`}
            >
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={icon.src}
                  width={40}
                  height={40}
                  alt=""
                  className="w-10 h-10 lg:w-14 lg:h-14 neutral-500 hover:neutral-bright-beginning hover:invert"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
