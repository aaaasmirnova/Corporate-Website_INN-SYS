interface ButtonProps {
  children: React.ReactNode;
  customClassName: string;
  onClick?: () => void;
}

export const Button = ({ children, customClassName, onClick }: ButtonProps) => {
  return (
    <button
      className={`${customClassName} rounded-2xl py-3 cursor-pointer transition-250ms`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
