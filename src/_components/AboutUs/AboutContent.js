"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Reveal from "../Reveal";

export default function AboutContentSection() {
  const locale = useLocale();
  return (
    <Reveal
      id="about-content"
      className="py-16 bg-app-bg overflow-hidden border border-app-border-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* شبكة التقسيم: عمودين على البي سي، عمود واحد على الموبايل */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* الجانب الأيمن (في الديسكتوب): الصورة الكبيرة الرأسية */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[617px] rounded-[32px] overflow-hidden shadow-lg">
            <Image
              src="/hero/about1.jpg"
              alt="Find Out Destination"
              fill
              className="object-cover"
            />
          </div>

          {/* الجانب الأيسر (في الديسكتوب): النصوص + الصورة الأفقية التحتية */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            {/* صندوق النص ووصف الشركة */}
            <div className="p-4 gap-7 sm:p-2 rounded-[32px] flex flex-col">
              {/* أيقونة الاقتباس في الخلفية */}
              <div className="text-[#D0D0D0]">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8427 20.3516H36.0502C35.9102 12.1791 34.3002 10.8316 29.2777 7.85655C28.7002 7.50655 28.5077 6.77156 28.8577 6.17656C29.2077 5.59906 29.9427 5.40656 30.5377 5.75656C36.4527 9.25656 38.5177 11.3916 38.5177 21.5766V31.009C38.5177 34.0015 36.0852 36.4165 33.1102 36.4165H27.8602C24.7802 36.4165 22.4527 34.089 22.4527 31.009V25.759C22.4352 22.6791 24.7627 20.3516 27.8427 20.3516Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.9075 20.3516H17.115C16.975 12.1791 15.365 10.8316 10.3425 7.85655C9.765 7.50655 9.5725 6.77156 9.9225 6.17656C10.2725 5.59906 11.0075 5.40656 11.6025 5.75656C17.5175 9.25656 19.5825 11.3916 19.5825 21.5766V31.009C19.5825 34.0015 17.15 36.4165 14.175 36.4165H8.925C5.8275 36.4165 3.5 34.089 3.5 31.009V25.759C3.5 22.6791 5.8275 20.3516 8.9075 20.3516Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p className="text-sub-text text-base sm:text-2xl leading-[1.8] font-semibold relative z-10">
                {locale === "ar"
                  ? "نحن شركة سعودية طموحة تهدف إلى إحداث ثورة في تسهيل اكتشاف الأنشطة، الأماكن الفريدة، والفعاليات الحصرية في جميع أنحاء المملكة العربية السعودية. من خلال رؤيتنا المبتكرة، نقدم تجربة رقمية متكاملة تساعد المستخدمين ليس فقط في العثور على أفضل الوجهات بكل سهولة وراحة، بل في التخطيط لمغامراتهم القادمة وخلق ذكريات تدوم طويلًا."
                  : "We are an ambitious Saudi company dedicated to revolutionizing the way people discover activities, unique locations, and exclusive events across the Kingdom of Saudi Arabia. Through our innovative vision, we offer a comprehensive digital experience that helps users not only find the best destinations with ease and convenience but also plan their next adventures and create lasting memories."}
              </p>
            </div>

            {/* الصورة الأفقية التحتية */}
            <div className="relative w-full aspect-[21/9] lg:h-[173px] rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/hero/about2.jpg"
                alt="Find Out Landscape"
                fill
                className="object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
