import { WrapperProps } from "../../types";

const GridWrapper = ({ children, style }: WrapperProps) => {
  return <div className={`grid ${style}`}>{children}</div>;
};

export default GridWrapper;
