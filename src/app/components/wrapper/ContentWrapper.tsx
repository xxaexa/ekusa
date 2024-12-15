import { WrapperProps } from "../../types";

const ContentWrapper = ({ children }: WrapperProps) => {
  return (
    <section className="max-w-[1250px] flex flex-col justify-center mx-auto px-4 py-16">
      {children}
    </section>
  );
};

export default ContentWrapper;
