import { useLocale } from "next-intl";

import AC from "@/icons/AC";
import {
  BathroomIcon,
  ForkIcon,
  PoolIcon,
  RingIcon,
  WifiIcon,
} from "@/icons/Amenities";

function PlaceMainContent({ place }) {
  const locale = useLocale();

  const getLocalizedProp = (prop) => {
    if (!prop) return "";
    if (typeof prop === "object") {
      return prop[locale] || prop.ar || prop.en || "";
    }
    return prop;
  };

  const titleText = getLocalizedProp(place?.title);
  const descriptionText = getLocalizedProp(place?.description);
  const categoryLabelText = getLocalizedProp(place?.categoryLabel);

  const amenities = [
    {
      id: 1,
      icon: <AC className="w-6 h-6 text-main-blue" />,
      name: { ar: "تكييف هواء", en: "Air Condition" },
    },
    {
      id: 2,
      icon: <RingIcon className="w-6 h-6 text-main-blue" />,
      name: { ar: "خدمات الغرف", en: "Room Service" },
    },
    {
      id: 3,
      icon: <ForkIcon className="w-6 h-6 text-main-blue" />,
      name: { ar: "وجبات طعام", en: "Dining & Food" },
    },
    {
      id: 4,
      icon: <BathroomIcon className="w-6 h-6 text-main-blue" />,
      name: { ar: "اضافات الحمام", en: "Bath Supplies" },
    },
    {
      id: 5,
      icon: <PoolIcon className="w-6 h-6 text-main-blue" />,
      name: { ar: "مرافق المسبح", en: "Pool Facilities" },
    },
    {
      id: 6,
      icon: <WifiIcon className="w-6 h-6 text-main-blue" />,
      name: { ar: "واي فاي", en: "Free WiFi" },
    },
  ];

  return (
    <div className="py-10 px-8 bg-white rounded-[18px] shadow-[0_0_15px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-end gap-3 text-gray-500 mb-5 text-sm">
        <span>{locale === "ar" ? "مشاركة عبر:" : "Share via:"}</span>
        {/* أيقونات السوشيال ميديا الحالية */}
      </div>

      <h1 className="text-2xl md:text-xl font-bold text-header mb-8">
        {`${titleText} ${
          locale === "ar" ? "— تجربة إقامة فاخرة" : "— A luxury stay experience"
        }`}
      </h1>

      <div className="mb-10 rtl:font-almarai">
        <h2 className="text-[18px] font-semibold text-dark-b mb-3">
          {locale === "ar" ? "عن" : "About"} {categoryLabelText}
        </h2>
        <p className="text-hard-gray leading-relaxed text-sm md:text-base">
          {descriptionText}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-[18px] font-semibold text-dark-b mb-3">
          {locale === "ar"
            ? "تجربة استثنائية في قلب المدينة"
            : "An Exceptional Experience"}
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
          {locale === "ar"
            ? `"تتطلع إدارة المكان إلى تقديم تجربة إقامة فاخرة تجمع بين الراحة والعصرية في قلب المدينة. تم تجهيز جميع المساحات بأحدث المرافق والخدمات التي تلبي احتياجات الزوار، مع اهتمام بالغ بأدق التفاصيل لضمان إقامة مريحة وممتعة سواء كنت في رحلة عمل أو عطلة استرخاء مع العائلة."`
            : `"The management looks forward to providing a luxurious accommodation experience that combines comfort and modernity in the heart of the city. All spaces are equipped with the latest facilities and services to meet visitors' needs, with meticulous attention to detail to ensure a comfortable and enjoyable stay whether you are on a business trip or a relaxing family vacation."`}
        </p>
      </div>

      <div>
        <h2 className="text-hard-gray font-semibold text-[18px] mb-6">
          {locale === "ar" ? "وسائل الراحة" : "Amenities"}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8 gap-4">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-5 bg-app-bg rounded-xl transition-all duration-300 text-center hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5 hover:bg-blue-500/5 cursor-pointer"
            >
              <span className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="text-xs md:text-sm font-medium text-sub-text">
                {item.name[locale]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaceMainContent;
