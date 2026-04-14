interface ButtonProps {
  text: string;
  customClassName: string;
}

export const Button = ({ text, customClassName }: ButtonProps) => {
  return (
    <button className={`${customClassName} rounded-[16px] py-3`}>{text}</button>
  );
};
