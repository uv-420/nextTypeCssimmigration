import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[30px]",
} as const;
const variants = {
  fill: {
    white_A700_19: "bg-white-A700_19",
    white_A700: "bg-white-A700 text-teal-900",
    light_green_A700_19: "bg-light_green-A700_19",
    light_green_50_01: "bg-light_green-50_01 text-gray-600",
    light_green_A700: "bg-light_green-A700 text-white-A700",
  },
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
    light_green_A700: "border-light_green-A700 border border-solid text-teal-900",
    gray_300: "border-gray-300 border border-solid text-gray-600",
  },
} as const;
const sizes = {
  "2xl": "h-[51px] px-3.5",
  "8xl": "h-[96px] px-[35px] text-3xl",
  lg: "h-[44px] px-[23px] text-base",
  xl: "h-[50px] px-[35px] text-sm",
  "3xl": "h-[54px] px-[7px]",
  "7xl": "h-[70px] px-5 text-[22px]",
  "5xl": "h-[60px] px-[25px] text-[22px]",
  xs: "h-[30px] px-[7px]",
  sm: "h-[40px] px-[11px]",
  md: "h-[40px] px-[9px] text-base",
  "4xl": "h-[60px] px-[17px]",
  "6xl": "h-[60px] px-[29px] text-sm",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "6xl",
  color = "light_green_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
