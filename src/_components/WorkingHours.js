import React from "react";
import { useLocale } from "next-intl"; // أو حسب طريقة جلب اللغة عندك

export default function WorkingHours() {
  const locale = useLocale(); // بنجيب اللغة الحالية ('ar' أو 'en')

  // مصفوفة أيام العمل مع دعم اللغتين
  const workingHoursData = [
    {
      id: 1,
      day: { ar: "الإثنين", en: "Monday" },
      time: { ar: "09:00 ص - 10:00 م", en: "09:00 AM - 10:00 PM" },
    },
    {
      id: 2,
      day: { ar: "الثلاثاء", en: "Tuesday" },
      time: { ar: "09:00 ص - 10:00 م", en: "09:00 AM - 10:00 PM" },
    },
    {
      id: 3,
      day: { ar: "الأربعاء", en: "Wednesday" },
      time: { ar: "09:00 ص - 10:00 م", en: "09:00 AM - 10:00 PM" },
    },
    {
      id: 4,
      day: { ar: "الخميس", en: "Thursday" },
      time: { ar: "09:00 ص - 10:00 م", en: "09:00 AM - 10:00 PM" },
    },
    {
      id: 5,
      day: { ar: "الجمعة", en: "Friday" },
      time: { ar: "09:00 ص - 10:00 م", en: "09:00 AM - 10:00 PM" },
    },
    {
      id: 6,
      day: { ar: "السبت", en: "Saturday" },
      time: { ar: "09:00 ص - 10:00 م", en: "09:00 AM - 10:00 PM" },
    },
  ];

  return (
    <div
      className="  py-6 px-8 bg-white rounded-[18px]  shadow-[0_0_15px_rgba(0,0,0,0.05)] "
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* عنوان القسم */}
      <h3 className="text-2xl font-semibold text-header mb-8">
        {locale === "ar" ? "ساعات العمل" : "Working Hours"}
      </h3>

      {/* قائمة الأيام باستخدام الـ map */}
      <div className="divide-y divide-hard-gray/10">
        {workingHoursData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4.5 text-sm md:text-base"
          >
            {/* اسم اليوم */}
            <span className="font-medium text-gray-800">
              {item.day[locale]}
            </span>

            {/* أوقات العمل */}
            <span className="text-gray-500 font-sans">{item.time[locale]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
