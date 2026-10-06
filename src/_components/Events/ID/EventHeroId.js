"use client";
import Reveal from "@/_components/Reveal";
import { useFavorites } from "@/context/FavoriteContext";
import { Calendar, Heart, HeartFilled } from "@/icons";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // النتيجة في متصفح العميل (Client)
    () => false, // النتيجة في السيرفر (Server)
  );
}

export default function PlaceHeroId({ event, locale }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isRtl = locale === "ar";
  const isClient = useIsClient(); // 👈 ترجع true في العميل و false في السيرفر بديل نظيف لـ mounted

  const active = isClient && isFavorite(event.id);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleFavorite(event);
  };
  return (
    <Reveal className="relative w-full h-128.75 mb-9 rounded-3xl overflow-hidden shadow-2xl my-6">
      <Image
        src={event.image}
        alt={event.title}
        fill
        priority
        className="object-cover"
      />

      {/* التدرج اللوني */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(${
            locale === "ar" ? "90deg" : "270deg"
          }, rgba(255, 255, 255, 0) 0%, rgba(81, 150, 255, 0.5) 45%, #111827 100%)`,
        }}
      />

      {/* محتوى الهيرو */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between py-12 p-8 text-white shadow-[0_15px_40px_rgba(30,41,59,0.12)]">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={handleToggle}
            aria-label="Add to favorites"
            className="cursor-pointer pointer-events-auto shadow-[0_4.26px_8.52px_rgba(0,0,0,0.1)] w-12.5 h-12.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center p-0 transition-transform active:scale-90"
          >
            {active ? (
              <HeartFilled
                strokeWidth={2}
                className="w-6.5 h-6.5 text-red-500 transition-colors duration-200"
              />
            ) : (
              <Heart
                strokeWidth={2}
                className="w-6.5 h-6.5 text-[#c9cbd0] hover:text-red-500 transition-colors duration-200"
              />
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col  lg:flex-row items-center gap-4">
            <div className="items-center lg:items-start  gap-6.5 flex flex-col lg:text-start max-w-[600px]">
              <div className="py-2 px-5 w-fit rounded-full bg-main-orange">
                {isRtl ? "فعالية مميزة" : "Special Event"}
              </div>
              <h1 className="text-3xl md:text-4xl  font-semibold tracking-wide">
                {event.title[locale]}
              </h1>
              <div className="flex  flex-col gap-3">
                <p className="flex gap-2 items-center">
                  <Calendar className="w-4.5 h-4.5" />
                  <span className="text-sm font-semibold">
                    {event.date[locale]}
                  </span>
                </p>

                <h2 className="flex gap-2 items-center">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-5 h-5"
                  >
                    <g clipPath="url(#clip0_607_3198)">
                      <path
                        d="M13.75 6.8753C13.75 10.308 9.94194 13.883 8.66319 14.9871C8.54406 15.0767 8.39905 15.1251 8.25 15.1251C8.10095 15.1251 7.95594 15.0767 7.83681 14.9871C6.55806 13.883 2.75 10.308 2.75 6.8753C2.75 5.41661 3.32946 4.01767 4.36091 2.98622C5.39236 1.95477 6.79131 1.37531 8.25 1.37531C9.70869 1.37531 11.1076 1.95477 12.1391 2.98622C13.1705 4.01767 13.75 5.41661 13.75 6.8753Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.25 8.93774C9.38909 8.93774 10.3125 8.01433 10.3125 6.87524C10.3125 5.73616 9.38909 4.81274 8.25 4.81274C7.11091 4.81274 6.1875 5.73616 6.1875 6.87524C6.1875 8.01433 7.11091 8.93774 8.25 8.93774Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_607_3198">
                        <rect width="16.5" height="16.5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-base text-start font-normal lg:line-clamp-1">
                    {event.location[locale]}{" "}
                    {isRtl
                      ? "طريق الأمير محمد بن عبد العزيز،  122، المملكة العربية السعودية"
                      : "Prince Mohammed bin Abdulaziz Road, Riyadh 122, Kingdom of Saudi Arabia"}
                  </span>
                </h2>

                <p className="flex gap-2 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_607_3194)">
                      <path
                        d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 3.74976V7.49976L10 8.74976"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_607_3194">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-sm font-semibold">
                    {`${event.startTime[locale]} - ${event.endTime[locale]}`}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 flex flex-col items-end gap-4">
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-xs text-white">
                {event.label[locale]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
