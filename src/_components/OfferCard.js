import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

function OfferCard({ offer }) {
  const locale = useLocale();

  return (
    <div className="relative group w-full h-[280px] sm:h-[240px] rounded-xl overflow-hidden p-5 py-7 flex flex-col justify-between items-start">
      {/* 1. خلفية الصورة (Absolute لتغطي الكارت) */}
      <Image
        src={offer.image}
        alt={offer.title[locale]}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
      />

      {/* 2. تدرج أسود خفيف (Absolute) */}
      <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 transition-all duration-500 ease-in-out group-hover:h-full group-hover:from-black/85 group-hover:via-black/35 pointer-events-none" />

      {/* 3. الجزء العلوي (البادج) متوزع بالـ Flex */}

      {offer.badge && (
        <span className="z-20 px-3 py-1.5 rounded-full bg-main-orange text-hard-gray text-xs font-bold shadow-sm">
          {offer.badge[locale]}
        </span>
      )}

      {/* 4. الجزء السفلي (العنوان والزرار) متوزع بالـ Flex */}
      <div className="relative z-20 flex flex-col items-start gap-1">
        <h3 className="text-white sm:text-xl text-2xl font-bold leading-tight">
          {offer.title[locale]}
        </h3>

        <p className="text-subtitle text-xs font-semibold mb-3 mt-0.5">
          {offer.subtitle[locale]}
        </p>

        {/* زر اكتشف العرض */}
        <Link
          href={`/events`}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg
    bg-white/10 backdrop-blur-md 
    border border-white/20 
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.3)] 
    text-white text-xs font-semibold 
    transition-all duration-300 hover:bg-white/20  active:scale-95"
        >
          {locale === "ar" ? "اكتشف العرض" : "Explore Offer"}
        </Link>
      </div>
    </div>
  );
}

export default OfferCard;
