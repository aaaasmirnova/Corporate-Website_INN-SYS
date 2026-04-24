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
      className={`${customClassName} whitespace-nowrap text-[12px] leading-4.5 rounded-2xl px-4 py-1.5 ${
        isActive ? "btn-picked" : "btn-default"
      }`}
      onClick={changeFilters}
    >
      {text}
    </button>
  );
};
