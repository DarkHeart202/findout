"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { Location } from "@/icons";
import { useFavorites } from "@/context/FavoriteContext";
import { useEffect, useState } from "react";

export default function ItemCard({ item, locale }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isRtl = locale === "ar";

  const isFavInContext = isFavorite(item?.id);
  const [isFav, setIsFav] = useState(isFavInContext);

  useEffect(() => {
    return () => {
      if (isFav !== isFavInContext) {
        toggleFavorite(item);
      }
    };
  }, [isFav, isFavInContext, item, toggleFavorite]);

  function handleToggleFav(e) {
    e.preventDefault();
    setIsFav((prev) => !prev);
  }

  // 🌟 دالة معالجة واستخراج النص باللغة الحالية بشكل آمن 🌟
  const getLocalizedProp = (prop) => {
    if (!prop) return "";
    if (typeof prop === "object") {
      return prop[locale] || prop["ar"] || prop["en"] || "";
    }
    return prop;
  };

  const titleText = getLocalizedProp(item?.title);
  const locationText = getLocalizedProp(item?.location);

  const rawDescription = getLocalizedProp(item?.description);
  const descriptionText =
    rawDescription ||
    (isRtl
      ? "إقامة هادئة بتفاصيل عملية بالقرب من أبرز وجهات الرياض."
      : "A peaceful stay with practical touches, close to Riyadh's key destinations.");

  const truncatedDesc = descriptionText
    ? descriptionText.split(" ").slice(0, 15).join(" ") +
      (descriptionText.split(" ").length > 15 ? "..." : "")
    : "";

  const [time, textTime] = item?.startTime?.[locale]?.split(" ") || [];

  return (
    <div className="w-full bg-white rounded-2xl p-4 md:p-6 shadow-[0_6px_20px_rgba(11,27,43,0.06)] border border-slate-100 flex flex-col md:flex-row-reverse justify-between items-center gap-6 transition-all hover:shadow-md relative">
      {/* زر المفضلة */}
      <button
        onClick={handleToggleFav}
        className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} p-3 rounded-xl transition-colors ${
          isFav ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-[#FFF9F9]"
        } z-10 shadow-sm cursor-pointer`}
      >
        {isFav ? (
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none">
            <path
              d="M9.61392 18.6349C9.85694 18.7224 10.1486 18.7612 10.4499 18.7612C10.7513 18.7612 11.0429 18.7224 11.2859 18.6349C14.9993 17.3614 20.8998 12.851 20.8998 6.16302C20.8998 2.77044 18.1488 0 14.766 0C13.1231 0 11.5873 0.641576 10.4499 1.78864C9.31257 0.641576 7.77668 0 6.13386 0C2.751 0 0 2.76072 0 6.16302C0 12.8412 5.90056 17.3614 9.61392 18.6349Z"
              fill="#EF4444"
            />
          </svg>
        ) : (
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none">
            <path
              d="M14.7656 0.75C17.7304 0.75 20.1494 3.18086 20.1494 6.16309C20.1494 9.27348 18.7799 11.9008 16.9316 13.9238C15.0767 15.9542 12.7799 17.3301 11.043 17.9258L11.0322 17.9287C10.8947 17.9782 10.6946 18.0117 10.4502 18.0117C10.2056 18.0117 10.0057 17.9782 9.86816 17.9287L9.85742 17.9258L9.52539 17.8047C7.83534 17.1552 5.7081 15.8249 3.96875 13.9199C2.12024 11.8954 0.75002 9.26845 0.75 6.16309C0.75 3.17193 3.16826 0.750037 6.13379 0.75C7.57776 0.75 8.92144 1.31252 9.91699 2.31641L10.4502 2.85352L10.9824 2.31641C11.9779 1.31247 13.3217 0.75009 14.7656 0.75Z"
              stroke="#EF4444"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </button>

      {/* المحتوى */}
      <div className="flex flex-col justify-between w-full h-full flex-1">
        <div className="mb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            {item.rating && (
              <span className="flex items-center gap-1 text-[10px] bg-[#eaf6fb] text-light-header px-3 py-2 rounded-full font-semibold">
                {item.rating.toFixed(0)} {isRtl ? "نجوم" : "Stars"}
              </span>
            )}
            <span className="text-slate-300">•</span>
            <span className="text-lg font-semibold text-xs">
              {locationText}
            </span>
          </div>
        </div>

        {/* العنوان والوصف */}
        <div className="mb-4">
          <h3 className="text-xl md:text-xl font-bold text-dark-b mb-1">
            {titleText}
          </h3>
          <p className="text-xs md:text-sm text-[#9ca3af] mt-1.5">
            {truncatedDesc}
          </p>
        </div>

        {/* الموقع والوقت */}
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500 mb-4">
          {item?.startTime && (
            <div className="flex items-center gap-1 text-normal-gray text-xs">
              <Clock className="w-4 h-4 text-main-orange shrink-0" />
              <span className="font-bold text-light-header">{time}</span>
              <span>{textTime}</span>
            </div>
          )}

          {item?.rating && (
            <div className="flex items-center gap-1 text-normal-gray text-xs">
              <Star className="w-4 h-4 text-main-orange shrink-0" />
              <span className="font-bold text-light-header">{item.rating}</span>
              <span className="text-normal-gray text-xs">{`(${item.views}) ${isRtl ? "تقييم" : "Rating"}`}</span>
            </div>
          )}
          <div className="flex items-center text-normal-gray text-xs gap-1">
            <Location className="w-4 h-4 text-main-blue shrink-0" />
            <span>{locationText} </span>
            {isRtl
              ? "حي الديرة شارع الأمير فهد 112"
              : "Al-Deira District, Prince Fahd Street 112"}
          </div>
        </div>

        <hr className="border-[#EEF3F6] my-2" />

        {/* السعر والأزرار */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-1">
            <span className="text-lg text-sm">
              {isRtl ? "يبدأ من" : "Starts from"}
            </span>
            <span className="text-[20px] flex gap-1 items-center font-bold text-main-orange">
              {item.price || "520"}
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.416 14.9893C16.3075 15.8666 16.2606 16.2474 15.8555 17.1025L9.63379 18.3877C9.7768 17.4633 9.96748 16.7499 10.2773 16.3223L16.416 14.9893ZM7.75098 8.93848L9.61035 8.53516V2.66113C10.303 1.88359 10.7284 1.53412 11.5645 1.09277V8.11133L16.416 7.05762C16.3075 7.93498 16.2606 8.31574 15.8555 9.1709L11.5645 10.0781V12.0508L16.416 11.0244C16.3076 11.9015 16.2604 12.2818 15.8555 13.1367L11.5645 14.0225V14.042L9.61035 14.4453V10.4912L7.75098 10.8838V13.376L7.71875 13.3818C7.29121 14.1316 6.68826 15.0328 6.10645 15.752L0 16.915C0.0547459 16.1294 0.169205 15.6868 0.524414 14.8955L5.7959 13.752V11.2979L0.910156 12.3311C0.964906 11.5454 1.07931 11.1029 1.43457 10.3115L5.7959 9.36328V1.56836C6.4886 0.79075 6.91485 0.441374 7.75098 0V8.93848Z"
                  fill="#F58220"
                />
              </svg>
            </span>
            <span className="text-lg text-sm">
              / {isRtl ? "لليلة" : "night"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={item.reviewsUrl || "#"}
              className="bg-white hover:bg-slate-50 border border-main-blue text-main-blue text-xs md:text-sm font-medium py-2.5 px-4 rounded-[8px] transition-colors"
            >
              {isRtl ? "عرض المراجعات" : "View Reviews"}
            </Link>

            <Link
              href={
                item?.startTime ? `/events/${item.id}` : `/places/${item.id}`
              }
              className="group bg-main-blue hover:bg-blue-600 text-white text-xs md:text-sm font-medium py-2.5 px-4 rounded-[8px] flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>{isRtl ? "عرض التفاصيل" : "View Details"}</span>
              <svg
                className={`w-4 h-4 transition-transform group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5 duration-300 rtl:rotate-180`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
        </div>
      </div>

      {/* الصورة */}
      <div className="relative w-full md:w-64 h-44 rounded-xl overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={titleText || "Card image"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
