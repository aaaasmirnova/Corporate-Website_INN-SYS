export const SendResumeCard = () => {
  return (
    <div className=" hover:bg-surface-2 active:bg-surface-3 p-8 rounded-[24px] flex flex-col h-full">
      <h3 className="text-[18px] md:text-[22px] leading-[150%] mb-3">
        Нет нужной вакансии?
      </h3>
      <a
        href="#"
        className="text-[14px] md:text-[16px] leading-[150%] text-secondary"
      >
        Можете отправить ваше резюме
        {/* <span>→</span> */}
      </a>
    </div>
  );
};
