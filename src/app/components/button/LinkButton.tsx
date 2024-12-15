import { ButtonProps } from "../../types";

const LinkButton = ({ text, link }: ButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer rounded-lg bg-indigo-500 text-center px-3 py-0.5 text-white hover:bg-indigo-100 hover:text-black duration-500 ease-in-out text-sm"
    >
      <button>{text}</button>
    </a>
  );
};

export default LinkButton;
