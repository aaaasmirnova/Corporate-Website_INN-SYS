interface ButtonProps {
  children: React.ReactNode;
  customClassName: string;
  onClick?: () => void;
}

export const Button = ({ children, customClassName, onClick }: ButtonProps) => {
  return (
    <button className={`${customClassName} py-3`} onClick={onClick}>
      {children}
    </button>
  );
};
