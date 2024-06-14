import { Button, Img, Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  username?: string;
  userrole?: string;
}

export default function HomeRow({ username = "Courtney Henry", userrole = "Medical Assistant", ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center sm:p-5 border-gray-300 border border-solid bg-white-A700 shadow-xs flex-1 rounded-[20px]`}
    >
      <div className="flex w-full items-center justify-between gap-5">
        <div className="flex flex-col items-start gap-[13px]">
          <Heading as="h5">{username}</Heading>
          <Text as="p" className="!text-gray-600">
            {userrole}
          </Text>
        </div>
        <Button size="4xl" shape="circle" className="w-[60px] !rounded-[30px] sm:px-5">
          <Img src="img_save.svg" width={14} height={16} />
        </Button>
      </div>
    </div>
  );
}
