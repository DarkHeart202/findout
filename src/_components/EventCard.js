import { Link } from "@/i18n/navigation";
import { Location } from "@/icons";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

function EventCard({ event }) {
  const locale = useLocale();
  const t = useTranslations("Home");
  return (
    <Link
      href={`/events/${event.id}`}
      className="relative rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col justify-between h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="py-4.5 px-3 flex-col flex gap-1.5">
        <span className="font-normal text-xs text-sub-text rtl:font-almarai mb-1.5">
          {event.date[locale]}
        </span>
        <p className="text-base font-bold text-header">{event.title[locale]}</p>
        <div className="rtl:font-almarai flex justify-between items-center">
          <p className="text-lg font-normal text-xs flex gap-0.5">
            <Location
              strokeWidth={1.5}
              className="w-3.5 h-3.5 text-main-orange"
            />
            {event.location[locale]}
          </p>
          <div className="px-2.5 py-1 bg-[#E6F3FC] text-[10px] font-bold rounded-full">
            {event.timeLeft[locale]}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
