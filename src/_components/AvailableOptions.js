"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Button from "./Button";
import Reveal from "./Reveal";

export default function AvailableOptions() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  // مصفوفة البيانات باستخدام نظام الـ Objects للغات (ar / en)
  const cardsData = [
    {
      id: 1,
      image: "/cards/service1.png",
      title: {
        ar: "الجناح الملكي (رويال بافيليون)",
        en: "Royal Pavilion",
      },
      description: {
        ar: "اكتشف الجمال الفاخر والتاريخ العريق لأحد أشهر المعالم الملكية الاستثنائية.",
        en: "Discover the luxury and heritage of one of the most exceptional royal landmarks.",
      },
      price: "850",
      distance: "64",
      company: "/avatar/comp1.png",
    },
    {
      id: 2,
      image: "/cards/card2.webp",
      title: {
        ar: "قبة برايتون (برايتون دوم)",
        en: "Brighton Dome",
      },
      description: {
        ar: "استمتع بأجمل العروض الفنية والفعاليات الحية في المركز الثقافي الأبرز بالمدينة.",
        en: "Enjoy wonderful art performances and live events at the city's premier cultural center.",
      },
      price: "250",
      distance: "64",
      company: "/avatar/comp2.png",
    },
    {
      id: 3,
      image: "/cards/service2.jpg",
      title: {
        ar: "أكواريوم سي لايف",
        en: "Sea Life Aquarium",
      },
      description: {
        ar: "خض مغامرة ممتازة واستكشف عجائب أعماق المحيط والحياة البحرية عن قرب!",
        en: "Embark on an amazing adventure and explore the wonders of the deep ocean up close!",
      },
      price: "950",
      distance: "64",
      company: "/avatar/comp1.png",
    },
    {
      id: 4,
      image: "/cards/service3.jpg",
      title: {
        ar: "الجناح الملكي (رويال بافيليون)",
        en: "Royal Pavilion",
      },
      description: {
        ar: "اكتشف الجمال الفاخر والتاريخ العريق لأحد أشهر المعالم الملكية الاستثنائية.",
        en: "Discover the luxury and heritage of one of the most exceptional royal landmarks.",
      },
      price: "1050",
      distance: "64",
      company: "/avatar/comp2.png",
    },
  ];

  return (
    <Reveal className=" py-6">
      <div className="flex items-center justify-between mb-6.5  mt-10">
        {/* العنوان الرئيسي والوصف */}
        <div>
          <h2 className="text-3xl font-semibold text-header">
            {isRtl ? "الخيارات المتاحة" : "Available Options"}
          </h2>
          <p className="text-sm text-lg rtl:font-almarai mt-1">
            {isRtl
              ? "أبرز مزودي الخدمات المعتمدين"
              : "Featured certified service providers"}
          </p>
        </div>

        {/* زر عرض جميع الخيارات مع السهم اللي بيعكس اتجاهه تلقائياً في الإنجليزي */}
        <Link
          href="/places"
          className="hidden md:flex items-center gap-2 text-main-blue font-semibold group transition-colors"
        >
          {isRtl ? "عرض جميع الخيارات" : "View all options"}
          <svg
            className={`w-4 h-4 transition-transform group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5 duration-300 ${
              isRtl ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="group duration-500 hover:-translate-y-2 bg-white rounded-2xl  border border-[#E2E2E2]/50 overflow-hidden p-2 flex flex-col justify-between transition-all  shadow-[0_0_55.42px_26.17px_rgba(215,215,215,0.11)] hover:shadow-[0_0_65px_35px_rgba(215,215,215,0.40)]"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {/* حاوية الصورة مع الخلفية البيضاء */}
            <div className="relative w-full h-44 bg-white rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src={card.image}
                alt={card.title[locale]}
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover rounded-lg transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* محتوى الكارد */}
            <div className="flex flex-col gap-2 py-3.5 px-2">
              <div className="flex gap-1">
                <Image
                  width={16}
                  height={16}
                  alt={card.title}
                  src={card.company}
                  quality={100}
                  className="object-contain "
                />
                <h3 className="font-medium text-hard-gray  text-[18px] line-clamp-1">
                  {card.title[locale]}
                </h3>
              </div>

              <p className="text-[#7d7d7d] text-sm line-clamp-2 leading-relaxed">
                {card.description[locale]}
              </p>

              {/* السعر والمسافة بالسفل */}
              <div className="flex items-center justify-between pt-3 mt-1.5 border-t border-gray-100 text-xs">
                <span className="text-lg flex items-center gap-1 font-normal">
                  <MapPin className="w-4 h-4 text-main-orange" />
                  <span className="text-xs">
                    {isRtl
                      ? `يبعد ${card.distance} كيلو متر`
                      : `${card.distance} km away`}
                  </span>
                </span>

                <span className="text-main-blue font-bold text-sm flex gap-1 items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5859 9.66602C10.516 10.2317 10.4857 10.477 10.2246 11.0283L6.21289 11.8574C6.30511 11.2613 6.42811 10.8012 6.62793 10.5254L10.5859 9.66602ZM4.99805 5.76367L6.19727 5.50391V1.71582C6.64389 1.21448 6.91887 0.989672 7.45801 0.705078V5.23047L10.5859 4.55176C10.516 5.11728 10.4858 5.36264 10.2246 5.91406L7.45801 6.49805V7.77051L10.5859 7.10938C10.516 7.67485 10.4858 7.92028 10.2246 8.47168L7.45801 9.04199V9.05469L6.19727 9.31543V6.76465L4.99805 7.01758V8.62598L4.97656 8.62988C4.70086 9.11324 4.3125 9.69471 3.9375 10.1582L0 10.9072C0.0353043 10.4008 0.108942 10.1155 0.337891 9.60547L3.73828 8.86719V7.28418L0.586914 7.95117C0.622227 7.44482 0.695824 7.15951 0.924805 6.64941L3.73828 6.03809V1.01074C4.18469 0.509673 4.45912 0.284496 4.99805 0V5.76367Z"
                      fill="#4A90E2"
                    />
                  </svg>

                  {card.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-8">
        <Button
          bgColor="bg-white"
          textColor="text-main-blue"
          className="border border-[#BFDBFE] hover:bg-blue-50 hover:border-main-blue sm:hidden"
          href="/places"
        >
          {isRtl ? "عرض جميع الخيارات" : "View All Options"}
        </Button>
      </div>
    </Reveal>
  );
}
