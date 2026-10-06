"use client";
import { Link } from "@/i18n/navigation";
import LocationIcon from "@/icons/LocationIcon";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function PlaceMap({ place }) {
  const locale = useLocale();
  const lat = place?.lat || 24.7136;
  const lng = place?.lng || 46.6753;

  const handleOpenNavigation = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank",
    );
  };

  const getLocalizedProp = (prop) => {
    if (!prop) return "";
    if (typeof prop === "object") {
      return prop[locale] || prop.ar || prop.en || "";
    }
    return prop;
  };

  const titleText = getLocalizedProp(place?.title);

  return (
    <div className="py-6 px-5 bg-white rounded-[18px] shadow-[0_0_15px_rgba(0,0,0,0.05)] space-y-6">
      {/* الخريطة الثابتة */}
      <div
        onClick={handleOpenNavigation}
        className="relative w-full mb-2 h-[220px] md:h-[330px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group transition-transform duration-200 hover:shadow-md"
      >
        <div className="w-full h-full relative bg-gray-100">
          <Image
            src="/avatar/map.jpg"
            alt={titleText || "Place Location"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg text-primary flex items-center justify-center pointer-events-none">
          <svg
            className="w-8 h-8"
            fill="#5096ff"
            stroke="#5096ff"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              fill="#ffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg">
          {locale === "ar" ? "انقر لعرض الاتجاهات" : "Click to view Directions"}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start border-b border-gray-100 pb-2 gap-2">
          <h3 className="font-semibold text-[18px] text-header/70">
            {locale === "ar" ? "العنوان" : "Address"}
          </h3>
          <div className="flex items-start justify-center gap-3">
            <span className="w-5 h-5 mt-1.5 text-main-orange flex-shrink-0">
              <LocationIcon className="w-5.5 h-5.5" />
            </span>

            <p className="text-hard-gray/70 text-sm md:text-sm leading-relaxed">
              {`${locale === "ar" ? "طريق الأمير محمد بن عبد العزيز، الرياض 122، المملكة العربية السعودية" : "Prince Mohammed Bin Abdulaziz Road, KSA"}`}
            </p>
          </div>
        </div>

        {/* أزرار التواصل الاجتماعي */}
        <div className="grid grid-cols-3 gap-4 text-center pb-2">
          <button
            onClick={handleOpenNavigation}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-13 h-13 rounded-full border border-[#808080/30] flex items-center justify-center bg-white shadow-sm group-hover:border-main-blue transition-colors">
              <span className="w-6 h-6 flex items-center justify-center group-hover:text-main-blue">
                <LocationIcon className="w-8 h-8 text-main-blue" />
              </span>
            </div>
            <span className="text-xs md:text-sm text-[#727272] font-medium">
              {locale === "ar" ? "الإتجاه" : "Direction"}
            </span>
          </button>

          <Link
            href={`tel:${place?.phone || "+201032187603"}`}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-13 h-13 rounded-full border border-[#808080/30] flex items-center justify-center bg-white shadow-sm group-hover:border-main-blue transition-colors">
              <span className="w-7 h-7 flex items-center justify-center text-gray-500 group-hover:text-main-blue">
                <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.86491 3.91194C7.23145 4.31825 7.11523 4.77855 6.79114 5.2153C6.7143 5.31885 6.62574 5.42087 6.51876 5.5333C6.46742 5.58726 6.42738 5.62785 6.34364 5.71167C6.15345 5.90205 5.99357 6.06201 5.864 6.19158C5.80116 6.25441 6.23017 7.11168 7.06275 7.94508C7.89488 8.77803 8.7521 9.20733 8.81523 9.14416L9.29454 8.66459C9.5585 8.40037 9.69828 8.2729 9.89036 8.14688C10.2897 7.88491 10.7252 7.81372 11.0926 8.14219C12.292 9.00012 12.9707 9.5266 13.3032 9.87209C13.9517 10.546 13.8667 11.5833 13.3069 12.175C13.1127 12.3802 12.8666 12.6265 12.5758 12.9068C10.8171 14.6665 7.1054 13.5956 4.26078 10.7482C1.41552 7.90015 0.345214 4.18809 2.10024 2.43212C2.41532 2.11209 2.5192 2.00826 2.82606 1.7059C3.39738 1.14296 4.48253 1.05482 5.14219 1.70646C5.48918 2.04922 6.04236 2.76098 6.86491 3.91194ZM10.1788 9.54913L9.69938 10.0288C8.8845 10.8441 7.49672 10.1491 6.17841 8.82953C4.85919 7.50901 4.16497 6.12176 4.98013 5.30666C5.10953 5.17727 5.26926 5.01746 5.4593 4.82723C5.53598 4.75047 5.57105 4.71492 5.61315 4.67067C5.67051 4.61039 5.71764 4.55744 5.75538 4.51059C5.02641 3.49514 4.53086 2.86063 4.26372 2.59673C4.12575 2.46045 3.81682 2.48554 3.70341 2.59729C3.40093 2.89533 3.30151 2.9947 2.9877 3.31342C1.85905 4.4427 2.72307 7.43933 5.14512 9.86376C7.56642 12.2874 10.5626 13.1519 11.6998 12.0141C11.9861 11.7381 12.2193 11.5047 12.3988 11.315C12.5286 11.1779 12.5517 10.8949 12.4025 10.7399C12.154 10.4816 11.5455 10.0072 10.4948 9.25267C10.4182 9.31431 10.3241 9.40372 10.1788 9.54913ZM12.5107 3.38639L9.19977 6.69727L8.31514 5.81263L11.626 2.50175H9.38299V1.25069H13.7617V5.62942H12.5107V3.38639Z"
                    fill="#4A90E2"
                  />
                </svg>
              </span>
            </div>
            <span className="text-xs md:text-sm text-gray-700 font-medium">
              {locale === "ar" ? "اتصل الآن" : "Call Us"}
            </span>
          </Link>
          <Link
            href={`#`}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-13 h-13 rounded-full border border-[#808080/30] flex items-center justify-center bg-white shadow-sm group-hover:border-main-blue transition-colors">
              <span className="w-7 h-7 flex items-center justify-center text-gray-500 group-hover:text-main-blue">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_609_5181)">
                    <path
                      d="M8.58695 5.08667C6.45551 5.08667 4.68945 6.82228 4.68945 8.98417C4.68945 11.1461 6.42506 12.8817 8.58695 12.8817C10.7488 12.8817 12.4845 11.1156 12.4845 8.98417C12.4845 6.85272 10.7184 5.08667 8.58695 5.08667ZM8.58695 11.481C7.21674 11.481 6.09012 10.3544 6.09012 8.98417C6.09012 7.61396 7.21674 6.48733 8.58695 6.48733C9.95717 6.48733 11.0838 7.61396 11.0838 8.98417C11.0838 10.3544 9.95717 11.481 8.58695 11.481Z"
                      fill="#4A90E2"
                    />
                    <path
                      d="M12.636 5.8786C13.1236 5.8786 13.519 5.48326 13.519 4.99558C13.519 4.50789 13.1236 4.11255 12.636 4.11255C12.1483 4.11255 11.7529 4.50789 11.7529 4.99558C11.7529 5.48326 12.1483 5.8786 12.636 5.8786Z"
                      fill="#4A90E2"
                    />
                    <path
                      d="M14.92 2.71155C14.1283 1.88942 13.0017 1.46313 11.7228 1.46313H5.45029C2.80121 1.46313 1.03516 3.22919 1.03516 5.87827V12.1204C1.03516 13.4297 1.46145 14.5563 2.31402 15.3784C3.13615 16.1701 4.23232 16.566 5.48074 16.566H11.6924C13.0017 16.566 14.0979 16.1397 14.8896 15.3784C15.7117 14.5868 16.138 13.4601 16.138 12.1508V5.87827C16.138 4.5994 15.7117 3.50323 14.92 2.71155ZM14.7982 12.1508C14.7982 13.0947 14.4633 13.856 13.9152 14.3736C13.3671 14.8912 12.6059 15.1653 11.6924 15.1653H5.48074C4.56727 15.1653 3.80604 14.8912 3.25795 14.3736C2.70986 13.8255 2.43582 13.0643 2.43582 12.1204V5.87827C2.43582 4.9648 2.70986 4.20356 3.25795 3.65548C3.77559 3.13784 4.56727 2.8638 5.48074 2.8638H11.7533C12.6668 2.8638 13.428 3.13784 13.9761 3.68593C14.4937 4.23401 14.7982 4.99524 14.7982 5.87827V12.1508Z"
                      fill="#4A90E2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_609_5181">
                      <rect width="17.2647" height="17.2647" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <span className="text-xs md:text-sm text-gray-700 font-medium">
              {locale === "ar" ? "انستقرام" : "Instgram"}
            </span>
          </Link>

          {/* باقي أزرار السوشيال بنفس الطريقة السابقة */}
        </div>
      </div>
    </div>
  );
}
