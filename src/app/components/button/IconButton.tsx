import { ButtonProps } from "../../types";
import { SmallText } from "..";

const IconButton = ({ text, link, icon }: ButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer w-fit rounded-lg bg-indigo-500 text-center px-3 py-1 text-white hover:bg-indigo-100 hover:text-black  duration-500 ease-in-out"
    >
      <button className="flex gap-1 items-center">
        <SmallText text={text} />
        <div className="text-xl">{icon}</div>
      </button>
    </a>
  );
};

export default IconButton;
