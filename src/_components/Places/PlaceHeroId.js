"use client";
import { useFavorites } from "@/context/FavoriteContext";
import { FullStar, HalfStar, Heart, HeartFilled } from "@/icons";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useSyncExternalStore } from "react";
import Reveal from "../Reveal";

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function PlaceHeroId({ place }) {
  const rating = place.rating || 4.0;
  const { isFavorite, toggleFavorite } = useFavorites();
  const locale = useLocale();
  const isClient = useIsClient();

  const active = isClient && isFavorite(place.id);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleFavorite(place);
  };

  const getLocalizedProp = (prop) => {
    if (!prop) return "";
    if (typeof prop === "object") {
      return prop[locale] || prop.ar || prop.en || "";
    }
    return prop;
  };

  const titleText = getLocalizedProp(place?.title);
  const descriptionText = getLocalizedProp(place?.description);

  // استخراج قائمة الـ labels بناءً على اللغة
  const labelsList =
    place?.labels?.[locale] ||
    place?.labels?.ar ||
    place?.labels?.en ||
    (Array.isArray(place?.labels) ? place.labels : []);

  return (
    <Reveal className="relative w-full h-128.75 mb-9 rounded-3xl overflow-hidden shadow-2xl my-6">
      <Image
        src={place.image}
        alt={titleText || "Place Hero"}
        fill
        priority
        className="object-cover"
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(${
            locale === "ar" ? "90deg" : "270deg"
          }, rgba(255, 255, 255, 0) 0%, rgba(81, 150, 255, 0.5) 45%, #111827 100%)`,
        }}
      />

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
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-white/30 overflow-hidden bg-white/10 backdrop-blur-md shadow-lg relative">
              <Image
                src={place.image}
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center lg:text-start max-w-[426.79px] space-y-2">
              <h1 className="text-3xl md:text-4xl mb-6.25 font-semibold tracking-wide">
                {titleText}
              </h1>
              <p className="text-gray-200 text-sm md:text-base line-clamp-2">
                {descriptionText}
              </p>

              <div className="mx-auto lg:mx-0 flex items-center gap-3 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 w-fit mt-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFull = star <= Math.floor(rating);
                    const isHalf =
                      !isFull &&
                      star === Math.ceil(rating) &&
                      rating % 1 >= 0.5;

                    return (
                      <span key={star} className="text-base flex items-center">
                        {isFull ? (
                          <FullStar className="w-4 h-4" />
                        ) : isHalf ? (
                          <HalfStar className="w-4 h-4" />
                        ) : (
                          <FullStar className="w-4 h-4" color="#7a8291" />
                        )}
                      </span>
                    );
                  })}
                </div>
                <span className="text-white font-bold text-sm">
                  {rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 flex flex-col items-end gap-4">
            <div className="flex flex-wrap items-center justify-end gap-2">
              {Array.isArray(labelsList) &&
                labelsList.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-xs text-white"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
