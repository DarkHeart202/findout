"use client";
import { Calendar } from "@/icons";
import MusicIcon from "@/icons/TimeIcon";
import TimeIcon from "@/icons/MusicIcon";
import { useLocale } from "next-intl";

export default function FastInfo({ event }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const infoItems = [
    {
      id: "category",
      title: isRtl ? "نوع الفعالية" : "Event Type",
      value: event.title[locale],
      icon: <TimeIcon className="w-5.5 h-5.5" />, // سيبت الأيقونة فاضية زي ما طلبت عشان تحطها براحتك
    },
    {
      id: "startTime",
      title: isRtl ? "وقت الدخول" : "Start Time",
      value: event.startTime?.[locale] || (isRtl ? "4:00 مساءً" : "4:00 PM"),
      icon: <MusicIcon className="w-5.5 h-5.5" />,
    },
    {
      id: "endTime",
      title: isRtl ? "وقت الخروج" : "End Time",
      value: event.endTime?.[locale] || (isRtl ? "4:00 مساءً" : "4:00 PM"),
      icon: <MusicIcon className="w-5.5 h-5.5" />,
    },
    {
      id: "date",
      title: isRtl ? "تاريخ بداية الفعالية" : "Start Date",
      value:
        event.date?.[locale] || (isRtl ? "11- نوفمبر-2025" : "11-Nov-2025"),
      icon: <Calendar />,
    },
    {
      id: "endDate",
      title: isRtl ? "تاريخ نهاية الفعالية" : "End Date",
      value:
        event.endDate?.[locale] || (isRtl ? "11- ديسمبر-2025" : "11-Dec-2025"),
      icon: <Calendar />,
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-6  md:p-8 md:py-10 shadow-[0_0_11.7px_rgba(0,0,0,0.04)] ">
      {/* عنوان القسم */}
      <h2 className="text-xl md:text-2xl font-semibold text-hard-gray mb-8 ">
        {isRtl ? "معلومات سريعة" : "Quick Info"}
      </h2>

      {/* شبكة العناصر مع استخدام border-e و last:border-e-0 للتوافق التام مع العربي والإنجليزي */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4.5 items-center divide-y sm:divide-y-0 divide-[#000000]/10">
        {infoItems.map((item) => (
          <div
            key={item.id}
            className="flex  gap-2  pb-5 sm:pb-0 items-start sm:items-start text-start pt-4 sm:pt-0  first:pt-0 sm:border-e sm:border-[#000000]/10 last:border-e-0"
          >
            <span className="text-main-blue w-5 h-5 flex items-center justify-center">
              {item.icon}
            </span>
            {/* العنوان الرئيسي */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold whitespace-nowrap text-hard-gray">
                {item.title}
              </span>

              <span className="text-xs font-medium text-[#7d7d7d] mt-2 sm:pr-0 line-clamp-1">
                {typeof item.value === "object"
                  ? item.value[locale]
                  : item.value}
              </span>
            </div>
            {/* القيمة */}
          </div>
        ))}
      </div>
    </div>
  );
}
