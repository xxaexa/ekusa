import { TextProps } from "../../types";

const SmallText = ({ text, style }: TextProps) => {
  return <p className={`text-sm md:text-lg font-medium ${style}`}>{text}</p>;
};

export default SmallText;
