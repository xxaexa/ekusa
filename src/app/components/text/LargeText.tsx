import { TextProps } from "../../types";

const LargeText = ({ text, style }: TextProps) => {
  return (
    <p className={`mb-2 text-center text-xl md:text-2xl ${style}`}>{text}</p>
  );
};

export default LargeText;
