"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images = [] }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleSlides, setVisibleSlides] = React.useState(3);

  // تحديد عدد الصور الظاهرة حسب عرض الشاشة
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1); // صورة واحدة في الموبايل
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2); // صورتين في التابلت
      } else {
        setVisibleSlides(3); // 3 صور في الديسكتوب
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // أقصى index مسموح به
  const maxIndex = Math.max(0, images.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? maxIndex : next;
    });
  };

  // نسبة الخطوة الواحدة بناءً على عدد الصور الظاهرة
  const stepPercentage = 100 / visibleSlides;

  return (
    <div className="py-10 px-8 bg-white rounded-[18px]  shadow-[0_0_15px_rgba(0,0,0,0.05)]">
      {/* عنوان المعرض */}
      <h3 className="text-2xl font-semibold text-header mb-8">
        {isRtl ? "المعرض" : "Gallery"}
      </h3>

      {/* الحاوية الرئيسية مع مساحة جانبية للأسهم */}
      <div className="relative w-full mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${
                isRtl
                  ? currentIndex * stepPercentage
                  : -currentIndex * stepPercentage
              }%)`,
            }}
          >
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-1 box-border"
              >
                <div className="p-1">
                  <div className="flex aspect-[4/3] items-center justify-center p-0 rounded-[8px] overflow-hidden shadow-md bg-transparent">
                    <img
                      src={imgSrc}
                      alt={`Gallery item ${index + 1}`}
                      className="w-full h-full object-cover rounded-[8px] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* زر السهم الأيسر */}
        <button
          onClick={isRtl ? nextSlide : prevSlide}
          className="border-4 md:border-7 border-white absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-main-orange hover:bg-orange-600 text-white flex items-center justify-center transition-all cursor-pointer "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* زر السهم الأيمن */}
        <button
          onClick={isRtl ? prevSlide : nextSlide}
          className="border-4 md:border-7 border-white absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-main-orange hover:bg-orange-600 text-white flex items-center justify-center transition-all cursor-pointer "
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
