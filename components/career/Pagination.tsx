"use client";
import ArrowLeft from "@/public/icons/career/arrowLeft.svg";
import ArrowRight from "@/public/icons/career/arrowRight.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    // Скроллим к началу секции с вакансиями
    const vacanciesSection = document.getElementById("vacancies-section");
    if (vacanciesSection) {
      setTimeout(() => {
        vacanciesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    // Всегда показываем первую страницу
    pages.push(1);

    if (currentPage <= 2) {
      // Страницы 1, 2: показываем 2, 3
      for (let i = 2; i <= 3 && i < totalPages; i++) {
        pages.push(i);
      }
      if (totalPages > 4) pages.push("...");
    } else if (currentPage >= totalPages - 2) {
      // Страницы в конце
      pages.push("...");
      for (let i = totalPages - 3; i < totalPages; i++) {
        if (i > 1) pages.push(i);
      }
    } else {
      // Страницы в середине: показываем 3 страницы: текущая-1, текущая, текущая+1
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
    }

    // Всегда показываем последнюю страницу
    if (totalPages > 1) {
      if (pages[pages.length - 1] !== totalPages) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Стрелка влево */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === 1
            ? "text-accent-6 cursor-not-allowed"
            : "text-neutral-bright-beginning hover:text-white "
        }`}
      >
        <ArrowLeft />
      </button>

      {/* Номера страниц */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`dots-${index}`} className="px-3 py-2 text-neutral-500">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`text-[16px] md:text-[22px] px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === page
                  ? " text-neutral-bright-beginning "
                  : "text-neutral-200 hover:text-white hover:underline"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Стрелка вправо */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? "text-accent-6 cursor-not-allowed"
            : "text-neutral-200 hover:text-white"
        }`}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
