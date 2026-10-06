"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Calendar } from "@/icons";
import MusicIcon from "@/icons/MusicIcon";
import TimeIcon from "@/icons/TimeIcon";
import Button from "@/_components/Button";
import Reveal from "@/_components/Reveal";

export default function AvailableOptions() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  // مصفوفة البيانات باستخدام نظام الـ Objects للغات (ar / en)
  const cardsData = [
    {
      id: 1,
      image: "/cards/event4.webp",
      title: {
        ar: "الجناح الملكي (رويال بافيليون)",
        en: "Royal Pavilion",
      },
      location: {
        ar: "طريق الأمير محمد بن عبد العزيز، العليا، الرياض السعودية",
        en: "Prince Mohammed bin Abdulaziz Road, Al Olaya, Riyadh",
      },
      time: "16:00 - 18:00",
      dateNum: "16",
      month: {
        ar: "أغس",
        en: "Aug",
      },
    },
    {
      id: 2,
      image: "/cards/event3.webp",
      title: {
        ar: "قبة برايتون (برايتون دوم)",
        en: "Brighton Dome",
      },
      location: {
        ar: "شارع كورنيش البحر، حي المحطة حي المحطة، جدة",
        en: "Sea Corniche Road, Al Mahatah District, Jeddah",
      },
      time: "18:30 - 21:00",
      dateNum: "20",
      month: {
        ar: "سبت",
        en: "Sep",
      },
    },
    {
      id: 3,
      image: "/cards/card4.png",
      title: {
        ar: "أكواريوم سي لايف",
        en: "Sea Life Aquarium",
      },
      location: {
        ar: "واجهة البحر، مارينا الديرة، حي المحطة الرياض",
        en: "Waterfront, Al Deerah Marina, Riyadh",
      },
      time: "15:00 - 19:00",
      dateNum: "05",
      month: {
        ar: "أكت",
        en: "Oct",
      },
    },
    {
      id: 4,
      image: "/cards/C_H04646.webp",
      title: {
        ar: "قصر الفنون التراثية",
        en: "Heritage Arts Palace",
      },
      location: {
        ar: "اكتشف الجمال الفاخر والتاريخ العريق لأحد أشهر المعالم الملكية الاستثنائية.",
        en: "Discover the luxury and heritage of one of the most exceptional.",
      },
      time: "17:00 - 22:00",
      dateNum: "12",
      month: {
        ar: "نوف",
        en: "Nov",
      },
    },
  ];

  return (
    <Reveal className=" py-6">
      <div className="flex items-center justify-between mb-6.5  mt-10">
        {/* العنوان الرئيسي والوصف */}
        <div>
          <h2 className="text-3xl font-semibold text-header">
            {isRtl ? "فعاليات مشابهة" : "Similar Options"}
          </h2>
          <p className="text-sm text-lg rtl:font-almarai mt-1">
            {isRtl
              ? "تصفح فعاليات شبيهه وقريبة"
              : "Browse similar and nearby events"}
          </p>
        </div>

        {/* زر عرض جميع الخيارات مع السهم اللي بيعكس اتجاهه تلقائياً في الإنجليزي */}
        <Link
          href="/events"
          className="hidden md:flex items-center gap-2 text-main-blue font-semibold group transition-colors"
        >
          {isRtl ? "عرض جميع الفعاليات" : "View all Events"}
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
            <div className="relative w-full h-44 bg-white rounded-xl flex items-center justify-center overflow-hidden mb-4">
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
            <div className="relative w-full  p-2  flex flex-col justify-between  overflow-hidden">
              {/* شارة التاريخ البرتقالية في أعلى اليمين (أو اليسار حسب اللوجيك) */}
              <div className="flex  mb-4.5">
                <div className="bg-[#f97316] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="text-sm gap-1 font-bold flex">
                    <Calendar
                      className="w-4 h-4 flex items-center justify-center"
                      strokeWidth="2"
                    />
                    {card.dateNum}
                    <span className="font-normal">{card.month[locale]}</span>
                  </span>
                </div>
              </div>

              {/* العنوان الرئيسي */}
              <div className="mb-2 text-start">
                <h3 className="text-[18px]  font-semibold text-hard-gray line-clamp-1">
                  {typeof card.title === "object"
                    ? card.title[locale]
                    : card.title}
                </h3>
              </div>

              {/* الموقع الجغرافي */}
              <div className="flex items-start justify-start gap-3  text-start">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-main-blue" />
                <p className="text-xs md:text-sm text-hard-gray/60  line-clamp-2 leading-relaxed">
                  {typeof card.location === "object"
                    ? card.location[locale]
                    : card.location}
                </p>
              </div>

              {/* الوقت في الأسفل */}
              <div className="flex items-center justify-start gap-3 pt-3 ">
                <span className="text-main-blue w-5 h-5 flex items-center justify-center shrink-0">
                  <TimeIcon />
                </span>
                <span className="text-xs md:text-sm font-medium text-[#7d7d7d] dir-ltr">
                  {card.time}
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
          href="/events"
        >
          {isRtl ? "عرض جميع الفعاليات" : "View All Events"}
        </Button>
      </div>
    </Reveal>
  );
}
