import { WrapperProps } from "../../types";

const BoxWrapper = ({ children }: WrapperProps) => {
  return (
    <div
      className={
        "w-full rounded-lg p-8 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-300 bg-gray-200"
      }
    >
      {children}
    </div>
  );
};

export default BoxWrapper;
