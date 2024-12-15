import { WrapperProps } from "../../types";

const MainWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="min-h-screen duration-500 ease-linear dark:bg-slate-900 dark:text-white bg-white">
      {children}
    </div>
  );
};

export default MainWrapper;
