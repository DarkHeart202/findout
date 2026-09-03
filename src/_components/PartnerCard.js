"use client";
import { Link } from "@/i18n/navigation";
import { ArrowBtn, Location, Star } from "@/icons";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

function PartnerCard({ partner }) {
  const locale = useLocale();
  const t = useTranslations("Home");

  return (
    <Link
      href={`/partners/${partner.id}`}
      className="relative rounded-2xl overflow-hidden bg-white border border-border-section shadow-sm flex flex-col justify-between h-full transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
    >
      {/* الصورة والـ Badge */}
      <div className="relative h-48 w-full">
        <Image
          src={partner.image}
          alt={partner.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Badge العروض / التصنيف */}
        {partner.badge && (
          <div className="absolute top-3 ltr:left-3 rtl:right-3 z-10">
            <span className="px-3 py-1 rounded-full bg-[#E5EFFF] backdrop-blur-md text-main-blue text-[10px] font-bold shadow-sm">
              {partner.badge[locale]}
            </span>
          </div>
        )}
      </div>

      {/* المحتوى */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* العنوان والتقييم */}
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className="font-semibold text-base text-header leading-snug ">
              {partner.title[locale]}
            </h3>
            <div className="flex items-center gap-1 shrink-0 mt-0.5">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-sm text-yellow-500">
                {partner.rating}
              </span>
            </div>
          </div>

          {/* الوصف القصير */}
          <p className="text-xs text-lg font-medium line-clamp-2 mb-3">
            {partner.subtitle[locale]}
          </p>
        </div>

        {/* المكان ورابط التفاصيل */}
        <div className="pt-3 border-t border-border flex justify-between items-center text-xs">
          <p className="text-lg flex items-center gap-1 rtl:font-almarai font-normal">
            <Location className="w-3.5 h-3.5 text-main-orange shrink-0" />
            <span>{partner.location[locale]}</span>
          </p>

          {/* زر عرض التفاصيل بالشكل والتحريك المظبوط */}
          <span className="inline-flex items-center gap-1 group/btn">
            <span className="text-main-blue font-bold">
              {t("partners.viewDetails")}
            </span>
            <ArrowBtn className="scale-80 w-3.5 h-3.5 text-main-blue shrink-0 transition-transform duration-300 ease-out ltr:rotate-180 group-hover/btn:-translate-x-1 ltr:group-hover/btn:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default PartnerCard;
