"use client";

import { useFavorites } from "@/context/FavoriteContext";
import { Link } from "@/i18n/navigation";
import { Heart, HeartFilled, Location } from "@/icons";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function EventCard({ event }) {
  const locale = useLocale();
  const { isFavorite, toggleFavorite } = useFavorites();
  const isClient = useIsClient();

  const active = isClient && isFavorite(event.id);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleFavorite(event);
  };

  return (
    <Link
      href={`/events/${event.id}`}
      className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-full transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={
            typeof event.title === "object" ? event.title[locale] : event.title
          }
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* الطبقة العلوية: شارة التاريخ + زر المفضلة */}
        <div className="absolute inset-x-0 top-3 px-3 flex items-center justify-between z-10 pointer-events-none">
          {/* شارة التاريخ (اليوم / الشهر) أعلى اليمين */}
          {event.day && event.month ? (
            <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-2 py-2 rounded-xl shadow-sm text-center gap-1.5 flex flex-col items-center min-w-[44px]">
              <span className="text-xs font-bold text-main-blue leading-none">
                {event.day}
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">
                {typeof event.month === "object"
                  ? event.month[locale]
                  : event.month}
              </span>
            </div>
          ) : (
            <div />
          )}

          {/* زر التفضيل (أعلى اليسار) */}
          <button
            type="button"
            onClick={handleToggle}
            aria-label="Add to favorites"
            className="cursor-pointer pointer-events-auto shadow-[0_4.26px_8.52px_rgba(0,0,0,0.1)] w-8 h-8 rounded-full bg-white/90 flex items-center justify-center p-0 transition-transform active:scale-90"
          >
            {active ? (
              <HeartFilled className="w-4.5 h-4.5 text-red-500 transition-colors duration-200" />
            ) : (
              <Heart
                strokeWidth={1.5}
                className="w-4.5 h-4.5 text-[#c9cbd0] hover:text-red-500 transition-colors duration-200"
              />
            )}
          </button>
        </div>
      </div>

      {/* تفاصيل الكارد */}
      <div className="p-4 flex flex-col gap-2">
        <span className="font-normal text-xs text-slate-500 rtl:font-almarai">
          {typeof event.date === "object" ? event.date[locale] : event.date}
        </span>

        <h3 className="text-base font-bold text-slate-900 line-clamp-1">
          {typeof event.title === "object" ? event.title[locale] : event.title}
        </h3>

        <div className="rtl:font-almarai flex items-center justify-between mt-1">
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <Location
              strokeWidth={1.5}
              className="w-3.5 h-3.5 text-main-orange shrink-0"
            />
            <span className="line-clamp-1">
              {typeof event.location === "object"
                ? event.location[locale]
                : event.location}
            </span>
          </p>

          {event.timeLeft && (
            <div className="px-2.5 py-1 bg-[#E6F3FC] text-main-blue text-[10px] font-bold rounded-full shrink-0">
              {typeof event.timeLeft === "object"
                ? event.timeLeft[locale]
                : event.timeLeft}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
