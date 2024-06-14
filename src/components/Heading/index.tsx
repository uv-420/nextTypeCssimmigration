import React from "react";

const sizes = {
  "3xl": "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  "2xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  xl: "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  "4xl": "text-[80px] font-bold md:text-5xl",
  s: "text-[15px] font-bold",
  md: "text-lg font-semibold",
  xs: "text-sm font-semibold",
  lg: "text-[22px] font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-teal-900 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
