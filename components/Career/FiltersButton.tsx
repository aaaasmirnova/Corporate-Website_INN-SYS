interface FiltersButtonProps {
  text: string;
  changeFilters?: () => void;
  isActive?: boolean;
  customClassName?: string;
}

export const FiltersButton = ({
  text,
  changeFilters,
  isActive,
  customClassName,
}: FiltersButtonProps) => {
  return (
    <button
      className={`${customClassName} whitespace-nowrap text-body-description-desktop rounded-[16px] px-4 py-1.5 ${
        isActive ? "btn-active" : "btn-inactive"
      }`}
      onClick={changeFilters}
    >
      {text}
    </button>
  );
};
