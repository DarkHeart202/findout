"use client";
import BookingWidget from "./BookingWidget";
import FastInfo from "./FastInfo";
import Gallery from "./Gallery";
import PlaceMainContent from "./PlaceMainContent";
import PlaceMap from "./PlaceMap";
import Reveal from "./Reveal";
import ReviewsSection from "./ReviewSection";
import Video from "./Video";
import WorkingHours from "./WorkingHours";

function PlaceDetails({ place }) {
  // 1. التأكد الأول من وجود الـ place لمنع أي إيرور
  if (!place) return null;

  const { image, category } = place;

  return (
    <Reveal className="grid grid-cols-1 lg:grid-cols-7 gap-6 items-start">
      <div className="flex gap-4.5 flex-col lg:col-span-5">
        <PlaceMainContent place={place} />
        <WorkingHours />
        <Gallery
          images={[
            image,
            "/cards/add2.jpg",
            "/cards/C_H04646.webp",
            "/cards/food1.jpg",
            "/cards/card1.webp",
            "/cards/food2.avif",
          ]}
        />
        <ReviewsSection />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-2">
        <FastInfo place={place} />

        {/* إظهار كارت الحجز فقط لو النوع فندق */}
        {category === "hotel" && <BookingWidget />}

        <PlaceMap place={place} />
        <Video />
      </div>
    </Reveal>
  );
}

export default PlaceDetails;
