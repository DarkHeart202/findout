import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Calendar, Icons, Search } from "@/icons";

export default function FeaturesSection() {
  const t = useTranslations("DownloadApp.FeaturesSection");

  return (
    <section className="relative overflow-hidden bg-white border border-border-section py-16 overflow-hidden bg-[#F4F8FB]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header - نفس الستايل القياسي مع المتغيرات */}
        <div className="text-center max-w-3xl mx-auto lg:-mb-12">
          <h2 className="text-3xl lg:text-[40px] font-bold text-light-header mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-[16px] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Content Section */}
        <div className="relative flex justify-center items-center">
          {/* الخلفية الزرقاء المنحنية خلف الموبايل */}
          <div className="absolute bottom-0 w-[500px] h-[300px] sm:w-[650px] sm:h-[380px] bg-[#91C7F2]/40 rounded-t-full -z-10 pointer-events-none" />

          {/* الكروت العائمة اليمنى (تظهر جانبية في الشاشات الكبيرة وفوق الموبايل في الموبايل) */}
          <div className="absolute left-0 lg:left-12 xl:left-20 top-[70%] -translate-y-1/2 flex flex-col gap-12 sm:gap-24 z-20 hidden md:flex">
            {/* Card 1 */}
            <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-full sm:rounded-3xl shadow-[0_10px_30px_-4px_rgba(15,23,42,0.1)] border border-app-border flex items-center gap-4 min-w-[240px] sm:min-w-[270px] transform translate-x-[10px] hover:scale-105 transition-transform duration-300">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-transparent"
                style={{
                  background: `
      linear-gradient(135deg, #C8FFEA 0%, #FFFBFB 100%) padding-box,
      linear-gradient(135deg, #10B981 0%, #F5FFFC 100%) border-box
    `,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_598_5839)">
                    <mask
                      id="mask0_598_5839"
                      maskType="luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path d="M24 0H0V24H24V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_598_5839)">
                      <path
                        d="M20.9999 10.23C20.5499 10.23 20.0999 10.05 19.7599 9.72001L14.2899 4.25001C13.7899 3.75001 13.6399 3.00001 13.9099 2.34001C14.1799 1.68001 14.8199 1.26001 15.5299 1.26001H20.9999C21.9599 1.26001 22.7499 2.05001 22.7499 3.01001V8.48001C22.7499 9.19001 22.3299 9.82001 21.6699 10.1C21.4499 10.19 21.2199 10.23 20.9999 10.23ZM15.5299 2.75001C15.3799 2.75001 15.3199 2.85001 15.2999 2.90001C15.2799 2.96001 15.2499 3.07001 15.3499 3.17001L20.8199 8.64001C20.9199 8.74001 21.0299 8.72001 21.0899 8.69001C21.1499 8.67001 21.2399 8.61001 21.2399 8.46001V3.00001C21.2399 2.86001 21.1299 2.75001 20.9899 2.75001H15.5199H15.5299Z"
                        fill="#10B981"
                      />
                      <path
                        d="M10.6308 17.88C10.1808 17.88 9.73078 17.71 9.39078 17.37L6.56078 14.54C5.88078 13.86 5.88078 12.75 6.56078 12.07L14.8108 3.82004C15.1008 3.53004 15.5808 3.53004 15.8708 3.82004L20.1108 8.06004C20.4008 8.35004 20.4008 8.83004 20.1108 9.12004L11.8608 17.37C11.5208 17.71 11.0708 17.88 10.6208 17.88H10.6308ZM15.3408 5.41004L7.62078 13.13C7.52078 13.23 7.52078 13.39 7.62078 13.48L10.4508 16.31C10.5508 16.41 10.7108 16.41 10.8008 16.31L18.5208 8.59004L15.3408 5.41004Z"
                        fill="#10B981"
                      />
                      <path
                        d="M1.99945 22.75C1.80945 22.75 1.61945 22.68 1.46945 22.53C1.17945 22.24 1.17945 21.76 1.46945 21.47L8.02945 14.91C8.31945 14.62 8.79945 14.62 9.08945 14.91C9.37945 15.2 9.37945 15.68 9.08945 15.97L2.52945 22.53C2.37945 22.68 2.18945 22.75 1.99945 22.75Z"
                        fill="#10B981"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_598_5839">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  {t("cards.offers.title")}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t("cards.offers.desc")}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-full sm:rounded-3xl shadow-[0_10px_30px_-4px_rgba(15,23,42,0.1)] border border-app-border flex items-center gap-4 min-w-[240px] sm:min-w-[270px] transform -translate-x-[60px] hover:scale-105 transition-transform duration-300">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-transparent"
                style={{
                  background: `
      linear-gradient(135deg, #DFC8FF 0%, #FEFBFF 100%) padding-box,
      linear-gradient(135deg, #7C3AED 0%, #CAAAF8 100%) border-box
    `,
                }}
              >
                <Calendar className="h-5.5 w-5.5 text-[#7C3AED]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  {t("cards.schedule.title")}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t("cards.schedule.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* حاوية الموبايل في المنتصف */}
          <div className="relative w-[390px] sm:w-[340px] lg:w-[380px] h-[802px] lg:h-[480px] z-10 mx-auto">
            {/* 2. حاوية صورة الموبايل */}
            <div className="relative w-full  h-full rounded-[36px] sm:rounded-[44px] overflow-hidden mt-[25px] lg:mt-[100px] ">
              <Image
                src="/Phone.svg"
                alt="App Interface"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* الكروت العائمة اليسرى */}
          <div className="absolute right-0 lg:right-5 xl:right-20 top-[70%] -translate-y-1/2 flex flex-col gap-12 sm:gap-24 z-20 hidden md:flex">
            {/* Card 3 */}
            <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-full sm:rounded-3xl shadow-[0_10px_30px_-4px_rgba(15,23,42,0.1)] border border-app-border flex items-center gap-4 min-w-[240px] sm:min-w-[270px] transform  lg:-translate-x-[20px] sm:-translate-x-10 translate-x-4 hover:scale-105 transition-transform duration-300">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-transparent"
                style={{
                  background: `
      linear-gradient(135deg, #C8E2FF 0%, #FBFDFF 100%) padding-box,
      linear-gradient(135deg, #0777D0 0%, #AAE8F8 100%) border-box
    `,
                }}
              >
                <Search className="w-6.5 h-6.5 text-main-blue" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  {t("cards.discover.title")}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t("cards.discover.desc")}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_-4px_rgba(15,23,42,0.1)] border border-app-border flex items-center gap-4 min-w-[240px] sm:min-w-[270px] transform translate-x-[60px]  hover:scale-105 transition-transform duration-300">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-transparent"
                style={{
                  background: `
      linear-gradient(135deg, #FFE4C9 0%, #FFFEFB 100%) padding-box,
      linear-gradient(135deg, #FE8B16 0%, #FFD3A6 100%) border-box
    `,
                }}
              >
                <Icons className="w-6.5 h-6.5 text-main-orange" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  {t("cards.map.title")}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t("cards.map.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
