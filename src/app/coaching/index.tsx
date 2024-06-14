import { Img, Heading } from "../../components";
import CoachingRowview from "../../components/CoachingRowview";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { Suspense } from "react";

const data = [
  {},
  {
    oetcoaching: "IELTS Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "TOFEL Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "OET Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "OET Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "OET Coaching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  { oetcoaching: "Skills Exam", therearemany: "There are many variati of passages of engineer", readmore: "Read More" },
  {
    oetcoaching: "PTE Couching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
  {
    oetcoaching: "SAT Couching",
    therearemany: "There are many variati of passages of engineer",
    readmore: "Read More",
  },
];

export default function CoachingPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header className="md:flex-col" />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[156px] md:py-5">
            <div className="container-xs mb-[31px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Coaching
                </Heading>
                <div className="relative mt-[-9px] flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px] self-start" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Coaching
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="flex flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <CoachingRowview {...d} key={"coaching" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex justify-between gap-5 md:flex-col">
              <Img
                src="img_company_logo.svg"
                width={171}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[13%] md:w-full"
              />
              <Img
                src="img_company_logo_gray_900.svg"
                width={108}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[8%] md:w-full"
              />
              <Img
                src="img_company_logo_blue_gray_800.svg"
                width={114}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[9%] md:w-full"
              />
              <div className="flex w-[10%] items-end justify-center gap-1.5 md:w-full">
                <Img src="img_lock_red_300.svg" width={26} height={24} alt="lock" className="mb-[9px] mt-3 h-[24px]" />
                <Img src="img_settings.svg" width={92} height={17} alt="settings" className="mb-3 h-[17px] w-[78%]" />
              </div>
              <Img
                src="img_company_logo_cyan_700.svg"
                width={144}
                height={48}
                alt="companylogo"
                className="h-[48px] w-[11%] md:w-full"
              />
            </div>
          </div>
        </div>
        <Footer className="self-stretch" />
      </div>
    </div>
  );
}
