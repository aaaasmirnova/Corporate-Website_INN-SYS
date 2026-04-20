interface ButtonProps {
  children: React.ReactNode;
  customClassName: string;
}

export const Button = ({ children, customClassName }: ButtonProps) => {
  return (
    <button className={`${customClassName} rounded-[16px] py-3`}>
      {children}
    </button>
  );
};
