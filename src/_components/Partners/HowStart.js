"use client";

import { useTranslations } from "next-intl";
import Container from "@/_components/Container";
import Image from "next/image";

export default function ContactSection() {
  const t = useTranslations("Partners.Contact");

  return (
    <section className="border border-border-section py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-main-orange font-semibold text-sm sm:text-base uppercase mb-3 block">
            {t("badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-light-header mb-4">
            {t("title")}
          </h2>
        </div>

        {/* Content Layout - ltr:flex-row و rtl:flex-row-reverse يضمنان الترتيب الصحيح بحسب اللغة */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Steps List Side - هيبدأ دائماً من بداية النص (يمين في العربية، شمال في الإنجليزية) */}
          <div className="flex flex-col gap-10 sm:gap-14 w-full lg:max-w-[580px]">
            {/* Step 1 */}
            <div className="flex items-start gap-4 sm:gap-6.5 ltr:text-left rtl:text-right">
              <div className="bg-[#EFE9FF] rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(239,233,255,0.47)] w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 sm:h-7 sm:w-7"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7143 5.42859L8.85718 22"
                    stroke="#6421F2"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5713 5.42859L15.7141 22"
                    stroke="#6421F2"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.9999 10H6.57129"
                    stroke="#6421F2"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.857 17.4286H5.42847"
                    stroke="#6421F2"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                <h3 className="text-sub-text text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {t("sendRequest.title")}
                </h3>
                <p className="font-normal text-sm sm:text-base lg:text-[20px] text-titles-c leading-relaxed">
                  {t("sendRequest.description")}
                </p>
                <div className="w-full h-1.5 sm:h-2.5 bg-sub-text mt-2" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 sm:gap-6.5 ltr:text-left rtl:text-right">
              <div className="bg-[#E9F4FF] rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(233,244,255,0.47)] w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 sm:h-7 sm:w-7"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7143 17.4286C15.7656 17.4286 17.4286 15.7656 17.4286 13.7143C17.4286 11.663 15.7656 10 13.7143 10C11.663 10 10 11.663 10 13.7143C10 15.7656 11.663 17.4286 13.7143 17.4286Z"
                    stroke="#2168F2"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7142 21.9999C9.13811 21.9999 5.42847 18.2903 5.42847 13.7142C5.42847 9.13811 9.13811 5.42847 13.7142 5.42847C21.4999 5.42847 21.9999 10.4285 21.9999 13.7142V15.1428C21.9999 16.4052 20.9766 17.4285 19.7142 17.4285C18.4518 17.4285 17.4285 16.4052 17.4285 15.1428V9.9999"
                    stroke="#2168F2"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                <h3 className="text-sub-text text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {t("directContact.title")}
                </h3>
                <p className="font-normal text-sm sm:text-base lg:text-[20px] text-titles-c leading-relaxed">
                  {t("directContact.description")}
                </p>
                <div className="w-full h-1.5 sm:h-2.5 bg-[#D4D4D8] mt-2" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 sm:gap-6.5 ltr:text-left rtl:text-right">
              <div className="bg-[#FFE9E9] rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(255,233,233,0.47)] w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 sm:h-7 sm:w-7"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.143 10H6.57157C5.94039 10 5.42871 10.5117 5.42871 11.1429V17.4286C5.42871 18.0598 5.94039 18.5714 6.57157 18.5714H7.143C7.77417 18.5714 8.28585 18.0598 8.28585 17.4286V11.1429C8.28585 10.5117 7.77417 10 7.143 10Z"
                    stroke="#D73E3E"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0002 5.42847H13.4287C12.7975 5.42847 12.2859 5.94015 12.2859 6.57132V17.4285C12.2859 18.0597 12.7975 18.5713 13.4287 18.5713H14.0002C14.6314 18.5713 15.143 18.0597 15.143 17.4285V6.57132C15.143 5.94015 14.6314 5.42847 14.0002 5.42847Z"
                    stroke="#D73E3E"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.42871 22H22.0001"
                    stroke="#D73E3E"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.8574 10H20.2859C19.6547 10 19.1431 10.5117 19.1431 11.1429V17.4286C19.1431 18.0598 19.6547 18.5714 20.2859 18.5714H20.8574C21.4886 18.5714 22.0002 18.0598 22.0002 17.4286V11.1429C22.0002 10.5117 21.4886 10 20.8574 10Z"
                    stroke="#D73E3E"
                    strokeWidth="1.71429"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                <h3 className="text-sub-text text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {t("dataAnalysis.title")}
                </h3>
                <p className="font-normal text-sm sm:text-base lg:text-[20px] text-titles-c leading-relaxed">
                  {t("dataAnalysis.description")}
                </p>
                <div className="w-full h-1.5 sm:h-2.5 bg-[#D4D4D8] mt-2" />
              </div>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] h-[450px] sm:h-[540px] lg:h-[615px] flex items-center justify-center mx-auto">
            {/* 1. Background Concentric Circles */}
            <div className="absolute w-[130px] sm:w-[170px] h-[130px] sm:h-[170px] top-[20%] ltr:left-[16%] sm:ltr:left-[18%] rtl:right-[15%] sm:rtl:right-[16%] pointer-events-none z-0">
              <Image
                src="/Circle.svg"
                alt="Decorative Circle"
                fill
                className="object-contain"
              />
            </div>

            {/* 2. Back Post Card */}
            <div className="z-10  shadow-[0_12px_24px_-4px_rgba(15,23,42,0.08)] blur-[0.5px] absolute top-0 ltr:right-0 rtl:left-0 w-[210px] sm:w-[260px] lg:w-[300px]">
              <Image
                src="/Cards/add1.png"
                alt="Card Details"
                width={300}
                height={504}
                className=" w-full h-auto object-contain rounded-2xl"
              />
            </div>

            <div className="absolute rounded-full w-60 h-60 -top-11 blur-[40px] -inset-e-15 bg-[#4A90E2]/15 z-0" />
            <div className="absolute rounded-full w-60 h-60 -bottom-20 blur-[35px] -inset-s-15 bg-[#F58220]/15 z-0" />

            {/* 3. Overlapping Front Card */}
            <div className="absolute bottom-0 ltr:left-0 rtl:right-0 w-[200px] sm:w-[270px] lg:w-[320px] h-[220px] sm:h-[290px] lg:h-[350px] rounded-[24px] sm:rounded-[36px] bg-white p-1.5 sm:p-2.5 shadow-[0_12px_24px_-4px_rgba(15,23,42,0.08)] border border-white z-20">
              <div className="relative w-full h-full rounded-[18px] sm:rounded-[28px] overflow-hidden">
                <Image
                  src="/Cards/Riyadh_Skyline.jpg"
                  alt="Brighton Pier"
                  fill
                  quality={100}
                  className="object-cover object-[80%_center]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
