"use client";

import {
  Globe,
  IconsaxDesigntools,
  IconsaxRefreshCircle,
  StreamlinePlumpCallCenterSupportServiceRemix,
} from "@/icons";
import { useTranslations } from "next-intl";
import Reveal from "../Reveal";

export default function WhyUsSection() {
  const t = useTranslations("About.whyUs");

  return (
    <Reveal className="py-20 border border-app-border-section bg-app-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ================= نسخة الموبايل (الشارة والأنيميشن) ================= */}
        <div className="flex md:hidden flex-col items-center justify-center mb-12 w-full relative z-20">
          <div className="relative flex items-center justify-center scale-[0.75] origin-center text-white text-sm font-semibold w-[156px] h-[156px] rounded-full bg-black/[0.04] backdrop-blur-[40px] opacity-85">
            <div className="bg-[#4A90E2] shadow-[0_8px_20px_rgba(74,144,226,0.15)] text-white text-xl font-semibold px-5 py-3 rounded-full z-30">
              {t("badge")}
            </div>
            <div className="absolute inset-0 w-full h-full animate-spin-reverse pointer-events-none">
              <svg
                width="159"
                height="156"
                viewBox="0 0 159 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-[5px] top-1/2 -translate-y-1/2"
              >
                <path
                  d="M156 78C156 64.385 152.436 51.0072 145.663 39.1965C138.89 27.3858 129.143 17.5538 117.392 10.6779L115.97 13.1088C127.296 19.7364 136.691 29.2134 143.22 40.5976C149.748 51.9818 153.184 64.8766 153.184 78H156Z"
                  fill="url(#paint0_linear_mobile_right)"
                />
                <circle cx="154.457" cy="80.2281" r="4.45714" fill="#4A90E2" />
                <defs>
                  <linearGradient
                    id="paint0_linear_mobile_right"
                    x1="118.114"
                    y1="10.0286"
                    x2="156"
                    y2="78"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A90E2" stopOpacity="0" />
                    <stop
                      offset="0.508873"
                      stopColor="#4A90E2"
                      stopOpacity="0.508873"
                    />
                    <stop offset="1" stopColor="#4A90E2" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                width="159"
                height="156"
                viewBox="0 0 158 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-1 top-1/2 -translate-y-1/2"
              >
                <path
                  d="M49.2886 149.699C36.7733 144.339 25.8793 135.796 17.6895 124.919C9.4997 114.043 4.29948 101.212 2.60582 87.7029L5.39975 87.3526C7.03226 100.374 12.0448 112.742 19.9389 123.225C27.833 133.709 38.3338 141.944 50.3973 147.111L49.2886 149.699Z"
                  fill="url(#paint0_linear_mobile_left)"
                />
                <circle cx="4.45714" cy="89.1427" r="4.45714" fill="#4A90E2" />
                <defs>
                  <linearGradient
                    id="paint0_linear_mobile_left"
                    x1="53.2571"
                    y1="156"
                    x2="1.99997"
                    y2="78"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A90E2" stopOpacity="0" />
                    <stop offset="1" stopColor="#4A90E2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* الخط الأيمن */}
            <div className="absolute right-[180px] top-1/2 -translate-y-1/2 w-[220px] h-[3px] bg-[linear-gradient(90deg,rgba(74,144,226,0)_0%,rgba(96,165,250,0.7)_50%,rgba(74,144,226,0)_100%)] pointer-events-none" />

            {/* الخط الأيسر */}
            <div className="absolute left-[180px] top-1/2 -translate-y-1/2 w-[220px] h-[3px] bg-[linear-gradient(90deg,rgba(74,144,226,0)_0%,rgba(96,165,250,0.7)_50%,rgba(74,144,226,0)_100%)] pointer-events-none" />
          </div>
        </div>
        {/* ====================================================================== */}

        {/* شبكة الـ 4 كاردات */}
        <div className="relative flex flex-col md:grid md:grid-cols-2">
          {/* ================= نسخة الديسكتوب (في المنتصف مع الخطوط) ================= */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-sm font-semibold w-[156px] h-[156px] rounded-full bg-black/[0.04] backdrop-blur-[40px] opacity-85 z-20">
            <div className="absolute right-[180px] top-1/2 -translate-y-1/2 w-[220px] h-[3px] bg-[linear-gradient(90deg,rgba(74,144,226,0)_0%,rgba(96,165,250,0.7)_50%,rgba(74,144,226,0)_100%)] pointer-events-none" />
            <div className="absolute left-[180px] top-1/2 -translate-y-1/2 w-[220px] h-[3px] bg-[linear-gradient(90deg,rgba(74,144,226,0)_0%,rgba(96,165,250,0.7)_50%,rgba(74,144,226,0)_100%)] pointer-events-none" />

            <div className="bg-[#4A90E2] shadow-[0_8px_20px_rgba(74,144,226,0.15)] text-white text-xl font-semibold px-5 py-3 rounded-full z-30">
              {t("badge")}
            </div>

            <div className="absolute inset-0 w-full h-full animate-spin-reverse pointer-events-none">
              <svg
                width="159"
                height="156"
                viewBox="0 0 159 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-[5px] top-1/2 -translate-y-1/2"
              >
                <path
                  d="M156 78C156 64.385 152.436 51.0072 145.663 39.1965C138.89 27.3858 129.143 17.5538 117.392 10.6779L115.97 13.1088C127.296 19.7364 136.691 29.2134 143.22 40.5976C149.748 51.9818 153.184 64.8766 153.184 78H156Z"
                  fill="url(#paint0_linear_1016_729)"
                />
                <circle cx="154.457" cy="80.2281" r="4.45714" fill="#4A90E2" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1016_729"
                    x1="118.114"
                    y1="10.0286"
                    x2="156"
                    y2="78"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A90E2" stopOpacity="0" />
                    <stop
                      offset="0.508873"
                      stopColor="#4A90E2"
                      stopOpacity="0.508873"
                    />
                    <stop offset="1" stopColor="#4A90E2" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                width="159"
                height="156"
                viewBox="0 0 158 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-1 top-1/2 -translate-y-1/2"
              >
                <path
                  d="M49.2886 149.699C36.7733 144.339 25.8793 135.796 17.6895 124.919C9.4997 114.043 4.29948 101.212 2.60582 87.7029L5.39975 87.3526C7.03226 100.374 12.0448 112.742 19.9389 123.225C27.833 133.709 38.3338 141.944 50.3973 147.111L49.2886 149.699Z"
                  fill="url(#paint0_linear_1016_730)"
                />
                <circle cx="4.45714" cy="89.1427" r="4.45714" fill="#4A90E2" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1016_730"
                    x1="53.2571"
                    y1="156"
                    x2="1.99997"
                    y2="78"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A90E2" stopOpacity="0" />
                    <stop offset="1" stopColor="#4A90E2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* ====================================================================== */}

          {/* 1. الكارد الثاني (تصميم بسيط - أزرق) -> ترتيب 1 في الموبايل */}
          <div className="flex flex-col items-center text-center p-8 md:min-h-[400px] justify-center order-1 md:order-1">
            <div className="w-16 h-16 rounded-full bg-[#f1f7ff] flex items-center justify-center mb-6 text-main-blue ">
              <IconsaxDesigntools className="w-7 h-7 " />
            </div>
            <h3 className="text-xl sm:text-4xl font-normal text-light-header mb-3">
              {t("design.title")}
            </h3>
            <p className="text-light-header/60 text-base sm:text-xl leading-[1.8] font-normal max-w-[403.37px]">
              {t("design.description")}
            </p>
          </div>

          {/* 2. الكارد الثالث (الدعم - أزرق) -> نخليه رقم 3 في الموبايل عشان يجي بعد البرتقالي */}
          <div className="flex flex-col items-center text-center p-8 md:min-h-[400px] justify-center order-3 md:order-4">
            <div className="w-16 h-16 rounded-full bg-[#F0F7FF] flex items-center justify-center mb-6 ">
              <span>
                <StreamlinePlumpCallCenterSupportServiceRemix className="w-7 h-7 text-main-blue" />
              </span>
            </div>
            <h3 className="text-xl sm:text-4xl font-normal text-light-header mb-3">
              {t("support.title")}
            </h3>
            <p className="text-light-header/60 text-base sm:text-xl leading-[1.8] font-normal max-w-[403.37px]">
              {t("support.description")}
            </p>
          </div>

          {/* 3. الكارد الأول (تغطية واسعة - برتقالي) -> نخليه رقم 2 في الموبايل */}
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(74,144,226,0.1)_100%)] flex flex-col items-center text-center p-8 md:min-h-[400px] justify-center order-2 md:order-2">
            <div className="w-16 h-16 rounded-full bg-[#FFF4E5] flex items-center justify-center mb-6 ">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-4xl font-normal text-light-header mb-3">
              {t("coverage.title")}
            </h3>
            <p className="text-light-header/60 text-base sm:text-xl leading-[1.8] font-normal max-w-[403.37px]">
              {t("coverage.description")}
            </p>
            <div className="rounded-full w-1 h-[70%] absolute bg-[linear-gradient(180deg,rgba(74,144,226,0)_0%,rgba(74,144,226,1)_52%,rgba(74,144,226,0)_100%)] ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2" />
            <div className="rounded-full h-1 w-[62%] absolute bg-[linear-gradient(90deg,rgba(74,144,226,0)_0%,rgba(74,144,226,1)_52%,rgba(74,144,226,0)_100%)] left-1/2 bottom-0 -translate-x-1/2" />
          </div>

          {/* 4. الكارد الرابع (محتوى محدث - برتقالي) -> نخليه رقم 4 في الموبايل */}
          <div className="relative flex flex-col bg-[linear-gradient(135deg,rgba(74,144,226,0.1)_0%,rgba(255,255,255,0.1)_100%)] items-center text-center p-8 md:min-h-[400px] justify-center order-4 md:order-3">
            <div className="w-16 h-16 rounded-full bg-[#FFF4E5] flex items-center justify-center mb-6">
              <span>
                <IconsaxRefreshCircle className="w-7.5 h-7.5" />
              </span>
            </div>
            <h3 className="text-xl sm:text-4xl font-normal text-light-header mb-3">
              {t("content.title")}
            </h3>
            <p className="text-light-header/60 text-base sm:text-xl leading-[1.8] font-normal max-w-[403.37px]">
              {t("content.description")}
            </p>
            <div className="rounded-full w-1 h-[70%] absolute bg-[linear-gradient(180deg,rgba(74,144,226,0)_0%,rgba(74,144,226,1)_52%,rgba(74,144,226,0)_100%)] ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2" />
            <div className="rounded-full h-1 w-[62%] absolute bg-[linear-gradient(90deg,rgba(74,144,226,0)_0%,rgba(74,144,226,1)_52%,rgba(74,144,226,0)_100%)] left-1/2 top-0 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
