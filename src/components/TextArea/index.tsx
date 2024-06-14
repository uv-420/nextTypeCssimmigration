"use client";
import React from "react";

const shapes = {
  round: "rounded-[20px]",
} as const;
const variants = {
  tarOutlineTeal9003f: "!border-teal-900_3f border border-solid",
  tarWhite: "bg-white-A700",
  tarOutlineGray300: "!border-gray-300 border border-solid bg-white-A700",
} as const;
const sizes = {
  sm: "h-[167px] p-5 text-base",
  xs: "h-[130px] p-5 text-base",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className = "", name = "", placeholder = "", shape, size = "xs", variant = "tarWhite", onChange, ...restProps },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

export { TextArea };
