"use client";

import * as React from "react";
import { useLocale } from "next-intl";
// استبدل المسار ده بالمسار الحقيقي لأيقونات النجوم الجاهزة عندك
import { FullStar, HalfStar, Star } from "@/icons";

function renderStars(rating) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = star <= Math.floor(rating);
        const isHalf =
          !isFull && star === Math.ceil(rating) && rating % 1 >= 0.5;

        return (
          <span key={star} className="text-base flex items-center">
            {isFull ? (
              <FullStar className="w-5 h-5" />
            ) : isHalf ? (
              <HalfStar className="w-5 h-5" />
            ) : (
              <FullStar className="w-5 h-5" color="#ffe8d0" />
            )}
          </span>
        );
      })}
    </div>
  );
}

function ReviewsSection({ overallRating = 4.8, totalReviews = 2965 }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  const reviews = [
    {
      name: isRtl ? "أحمد ياسر" : "Ahmed Yasser",
      role: isRtl ? "مسوق عقاري" : "Real Estate Marketer",
      rating: 5.0,
      comment: isRtl
        ? "لوريم إيبسوم دولار سيت أميت, كونكتكتور أداپيا يوسكينغ أليت, سيت دو إيوسمود تيمبور أنسيديدونتلي لابور آت دولار ماغنا ألكويا."
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/avatar/avatar1.avif",
    },
    {
      name: isRtl ? "جمال عثمان" : "Gamal Osman",
      role: isRtl ? "مسوق عقاري" : "Real Estate Marketer",
      rating: 4.5,
      comment: isRtl
        ? "لوريم إيبسوم دولار سيت أميت, كونكتكتور أداپيا يوسكينغ أليت, سيت دو إيوسمود تيمبور أنسيديدونتلي لابور آت دولار ماغنا ألكويا."
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/avatar/avatar2.avif",
    },
    {
      name: isRtl ? "أحمد ياسر" : "Ahmed Yaser",
      role: isRtl ? "مسوق عقاري" : "Real Estate Marketer",
      rating: 3.8,
      comment: isRtl
        ? "لوريم إيبسوم دولار سيت أميت, كونكتكتور أداپيا يوسكينغ أليت, سيت دو إيوسمود تيمبور أنسيديدونتلي لابور آت دولار ماغنا ألكويا."
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/avatar/avatar1.avif",
    },
  ];

  return (
    <div className="py-10 px-8 bg-white rounded-[18px]  shadow-[0_0_15px_rgba(0,0,0,0.05)]">
      <h3 className="text-2xl font-semibold text-header mb-8">
        {isRtl ? "المراجعات" : "Reviews"}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center">
        {/* التقييم العام (باستخدام الباراميتر المرسل) */}
        <div className="lg:col-span-4 bg-[#EDF4FD] p-6 rounded-2xl flex flex-col  justify-between items-start text-start h-full">
          <div>
            <h4 className="text-header text-xl font-semibold mb-3">
              {isRtl ? "التقييم العام" : "Overall Rating"}
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-inter font-semibold text-header">
                {overallRating}
              </span>
              {renderStars(overallRating)}
            </div>
          </div>
          <p className="text-sm text-lg">
            {isRtl
              ? `استنادا الى ${totalReviews} تقييما موثقا`
              : `Based on ${totalReviews} verified reviews`}
          </p>
        </div>
        {/* توزيع النسب المئوية */}
        <div className="lg:col-span-8 space-y-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 w-10 justify-end font-semibold text-gray-700">
                <Star className="w-6.5  h-6.5" />
                <span className="text-sm font-bold text-main-blue">
                  {item.stars}
                </span>
              </div>
              <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-main-blue h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="w-8 text-gray-400 font-medium text-left">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* قائمة المراجعات الفردية */}
      <div className="space-y-4 mb-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-100 bg-app-bg hover:bg-gray-100/80 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-base text-header">
                    {review.name}
                  </h4>
                  <p className="text-xs font-normal text-lg">{review.role}</p>
                </div>
              </div>

              {/* التقييم بالنجوم للمراجعة الفردية */}
              <div className="flex items-center justify-center gap-1">
                <span className="text-base font-medium font-inter text-header ">
                  {review.rating.toFixed(1)}
                </span>
                {<Star className="w-6  h-6" />}
              </div>
            </div>

            <p className="text-hard-gray text-sm leading-relaxed text-start">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="w-full  py-3 px-6 rounded-xl border border-[#BFDBFE] text-main-blue font-semibold hover:bg-blue-50 transition-colors cursor-pointer text-sm">
          {isRtl ? "عرض كل التقييمات (250)" : "View All Reviews (250)"}
        </button>
      </div>
    </div>
  );
}

export default ReviewsSection;
