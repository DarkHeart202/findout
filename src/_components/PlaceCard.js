"use client";

import Image from "next/image";
import { useFavorites } from "@/context/FavoriteContext";
import { useSyncExternalStore } from "react";
import { HeartFilled, IconsaxEye, Star, Heart, Location } from "@/icons";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

// دالة لمعرفة هل نحن في متصفح العميل أم في السيرفر
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // النتيجة في متصفح العميل (Client)
    () => false, // النتيجة في السيرفر (Server)
  );
}

export default function PlaceCard({ place }) {
  const t = useTranslations("Home");
  const locale = useLocale(); // 👈 جلب اللغـة الحالية ('ar' أو 'en')
  const { isFavorite, toggleFavorite } = useFavorites();
  const isClient = useIsClient();

  const active = isClient && isFavorite(place.id);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleFavorite(place);
  };

  // 🌟 دالة مساعدة لاستخراج النص حسب اللغة الحالية بآمان 🌟
  const getLocalizedProp = (prop) => {
    if (!prop) return "";
    if (typeof prop === "object") {
      return prop[locale] || prop["ar"] || prop["en"] || "";
    }
    return prop;
  };

  const titleText = getLocalizedProp(place?.title);
  const locationText = getLocalizedProp(place?.location);
  const entryText = getLocalizedProp(place?.entry);
  const badgeLabelText = place?.badge
    ? getLocalizedProp(place.badge.label)
    : "";

  return (
    <Link
      href={`/places/${place.id}`}
      className="relative rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col justify-between h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-48">
        <Image
          src={place.image}
          alt={titleText || "Place image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />

        <div className="absolute inset-x-0 top-3 px-3 flex items-center justify-between z-10 pointer-events-none">
          {place.badge ? (
            <span
              className={`pointer-events-auto text-xs font-semibold px-2.5 py-1 rounded-full ${
                place.badge.type === "open"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {badgeLabelText}
            </span>
          ) : (
            <div />
          )}

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

      <div className="px-4 py-4">
        <div className="flex justify-between items-center pb-4.5 border-b-1 border-b-border">
          <div>
            <h3 className="font-bold mt-1 text-base rtl:font-almarai font-normal">
              {titleText}
            </h3>
            <p className="text-xs text-lg flex gap-0.5 mt-1.5 ">
              <Location
                strokeWidth={1.5}
                className="w-3.5 h-3.5 text-main-orange"
              />
              {locationText}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-yellow-500">{place.rating}</span>
            </div>
            <div className="w-[1.45px] rounded-full h-2.5 bg-icon-color" />
            <div className="flex items-center gap-1">
              <IconsaxEye
                strokeWidth={2.3}
                className="w-4 h-4 text-main-blue"
              />
              <span className="font-normal text-[#4B5563]">{place.views}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs pt-3 text-lg rtl:font-almarai">
          <span>{entryText}</span>
          <span>
            {place.distance} {t("places.unit.km")}
          </span>
        </div>
      </div>
    </Link>
  );
}
