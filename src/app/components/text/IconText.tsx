import { TextProps } from "../../types";
import SmallText from "./SmallText";

const IconText = ({ icon, text }: TextProps) => {
  return (
    <div className="flex gap-3 items-center my-1">
      <div className="text-xl">{icon}</div>
      <SmallText text={text} />
    </div>
  );
};

export default IconText;
