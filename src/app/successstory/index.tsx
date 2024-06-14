import { Button, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SuccessstoryCard from "../../components/SuccessstoryCard";
import React, { Suspense } from "react";

const data = [
  {},
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Eleanor Pena",
    jobtitle: "Dog Trainer",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Ronald Richards",
    jobtitle: "President of Sales",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Savannah Nguyen",
    jobtitle: "Marketing Coordinator",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Jerome Bell",
    jobtitle: "Web Designer",
  },
  {
    description:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    name: "Annette Black",
    jobtitle: "Nursing Assistant",
  },
];

export default function SuccessstoryPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header className="md:flex-col" />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[157px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Success Story
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Success Story
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
            <div className="grid grid-cols-2 justify-center gap-[30px] self-stretch md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <SuccessstoryCard {...d} key={"post" + index} className="shadow-xs hover:shadow-xs" />
                ))}
              </Suspense>
            </div>
            <div className="flex gap-[15px]">
              <Button size="5xl" variant="outline" className="min-w-[60px] rounded-[5px] font-bold sm:px-5">
                1
              </Button>
              <Button
                color="gray_300"
                size="5xl"
                variant="outline"
                className="min-w-[60px] rounded-[5px] font-bold !text-teal-900 sm:px-5"
              >
                2
              </Button>
              <Button
                color="gray_300"
                size="5xl"
                variant="outline"
                className="min-w-[60px] rounded-[5px] font-bold !text-teal-900 sm:px-5"
              >
                3
              </Button>
              <Button color="gray_300" size="4xl" variant="outline" className="w-[60px] rounded-[5px]">
                <Img src="img_arrow_left.svg" width={12} height={24} />
              </Button>
            </div>
          </div>
        </div>
        <Footer className="self-stretch" />
      </div>
    </div>
  );
}
