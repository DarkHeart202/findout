"use client";

import * as React from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import CalendarIcon from "@/icons/Calendar";
import { Plus, Minus, ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";

export default function BookingWidget() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [date, setDate] = React.useState(() => {
    const today = new Date();
    return {
      from: today,
      to: new Date(today.getTime() + 86400000 * 3),
    };
  });

  const [guests, setGuests] = React.useState(3);
  const [rooms, setRooms] = React.useState(4);

  // قاموس النصوص
  const t = {
    ar: {
      title: "احجز إقامتك",
      subtitle: "احجز بسعر 250 ريال في الليلة",
      dateLabel: "تسجيل الوصول / تسجيل المغادرة",
      to: "إلى",
      guestsLabel: "عدد الأفراد",
      guestsUnit: "أفراد",
      roomsLabel: "عدد الغرف",
      roomsUnit: "غرف",
      submitBtn: "تحقق من التوفر",
      checking: "جاري التحقق من التوفر...",
    },
    en: {
      title: "Book Your Stay",
      subtitle: "Book at 250 SAR per night",
      dateLabel: "Check-in / Check-out",
      to: "to",
      guestsLabel: "Guests",
      guestsUnit: "guests",
      roomsLabel: "Rooms",
      roomsUnit: "rooms",
      submitBtn: "Check Availability",
      checking: "Checking availability...",
    },
  };

  const currentText = t[locale] || t.ar;

  return (
    <div className="w-full relative mx-auto p-6 bg-[#4A90E2]/95 backdrop-blur-xl rounded-[18px] shadow-2xl text-white flex flex-col gap-4 border border-white/20 overflow-hidden">
      <Image
        src="/vectors/card.svg"
        alt="Background"
        fill
        priority
        quality={80}
        className="object-cover pointer-events-none"
      />

      {/* العنوان الرئيسي */}
      <div
        className={`space-y-1 mb-2 relative z-10 ${isRtl ? "text-right" : "text-left"}`}
      >
        <h2 className="text-[23px] font-semibold tracking-wide">
          {currentText.title}
        </h2>
        <p className="text-white/80 text-sm">{currentText.subtitle}</p>
      </div>

      {/* حقل اختيار نطاق التواريخ */}
      <div className="relative z-10">
        <Popover>
          <PopoverTrigger className="w-full">
            <div className="w-full bg-white/15 hover:bg-white/20 transition-all border border-white/25 rounded-[18px] p-4 cursor-pointer flex justify-between items-center">
              <div className="flex flex-col gap-2 items-start overflow-hidden">
                <span className="text-xs text-white/70 font-medium">
                  {currentText.dateLabel}
                </span>
                <span className="flex gap-2 text-sm sm:text-sm font-semibold mt-0.5 truncate items-center">
                  <CalendarIcon className="w-5 h-5" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "PP", { locale: enUS })}{" "}
                        {currentText.to}{" "}
                        {format(date.to, "PP", { locale: enUS })}
                      </>
                    ) : (
                      format(date.from, "PP", { locale: enUS })
                    )
                  ) : locale === "ar" ? (
                    "اختر التاريخ"
                  ) : (
                    "Select Date"
                  )}
                </span>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 bg-white text-gray-900 rounded-3xl shadow-2xl border-none"
            align="center"
            dir="ltr"
            lang="en"
          >
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              locale={enUS}
              className="p-3"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* عدد الأفراد */}
      <div className="w-full bg-white/15 border border-white/25 rounded-2xl p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start">
            <span className="text-xs text-white/70 font-medium">
              {currentText.guestsLabel}
            </span>
            <span className="text-sm font-semibold mt-0.5 flex gap-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2636 13.3258V12.0429C10.2636 11.3624 9.99332 10.7098 9.51213 10.2286C9.03094 9.74738 8.37831 9.47705 7.69781 9.47705H3.84904C3.16854 9.47705 2.51591 9.74738 2.03472 10.2286C1.55353 10.7098 1.2832 11.3624 1.2832 12.0429V13.3258"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.2637 1.86182C10.8139 2.00446 11.3012 2.32576 11.649 2.7753C11.9969 3.22483 12.1856 3.77715 12.1856 4.34555C12.1856 4.91396 11.9969 5.46627 11.649 5.91581C11.3012 6.36534 10.8139 6.68664 10.2637 6.82928"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.1129 13.3259V12.043C14.1124 11.4745 13.9232 10.9222 13.5749 10.4729C13.2266 10.0236 12.7389 9.70267 12.1885 9.56055"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.77385 6.91147C7.19092 6.91147 8.33969 5.7627 8.33969 4.34563C8.33969 2.92855 7.19092 1.77979 5.77385 1.77979C4.35677 1.77979 3.20801 2.92855 3.20801 4.34563C3.20801 5.7627 4.35677 6.91147 5.77385 6.91147Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              {guests} {currentText.guestsUnit}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
            className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setGuests((prev) => prev + 1)}
            className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* عدد الغرف */}
      <div className="w-full bg-white/15 border border-white/25 rounded-2xl p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start">
            <span className="text-xs text-white/70 font-medium">
              {currentText.roomsLabel}
            </span>
            <span className="text-sm font-semibold mt-0.5 flex gap-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_609_5087)">
                  <path
                    d="M13.75 13.1058V2.6058H11V0.262207L2.75 1.68461V13.1058H0.5V14.1058H3.21563L11 15.1795V3.6058H12.75V14.1058H15.5V13.1058H13.75ZM10 14.0321L3.75 13.1701V2.52699L10 1.44955V14.0321Z"
                    fill="white"
                  />
                  <path d="M8 7.10596H9V9.10596H8V7.10596Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_609_5087">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {rooms} {currentText.roomsUnit}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
            className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setRooms((prev) => prev + 1)}
            className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* زر التحقق من التوفر */}
      <button
        type="button"
        onClick={() => alert(currentText.checking)}
        className="w-full py-4 mt-2 rounded-2xl bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 relative z-10"
      >
        <span>{currentText.submitBtn}</span>
        {isRtl ? (
          <ArrowLeft className="w-5 h-5" />
        ) : (
          <ArrowRight className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
