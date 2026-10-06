import { useLocale } from "next-intl";

export default function EventMainContent({ event }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  if (!event) return null;

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-[0_0_11.7px_rgba(0,0,0,0.04)] ">
      {/* عنوان القسم */}
      <h2 className="text-xl md:text-2xl font-semibold text-hard-gray mb-8">
        {isRtl ? "عن الفعالية" : "About Event"}
      </h2>

      {/* العنوان الفرعي الملون */}
      <h3 className="text-base  font-bold text-dark-b mb-8  rtl:font-almarai">
        {typeof event.aboutTitle === "object"
          ? event.aboutTitle[locale]
          : event.aboutTitle ||
            (isRtl
              ? "موسم الرياض — احتفالية خيالية تجمع العالم في العاصمة"
              : "Riyadh Season — A magical celebration bringing the world to the capital")}{" "}
      </h3>

      {/* نص الوصف التفصيلي */}
      <p className="text-[#7c7c7c] text-sm  leading-relaxed ">
        {event.description[locale]}
        <br />{" "}
        {event.id === "diriyah-jazz-night" && isRtl
          ? "يضم الموسم مجموعة واسعة من الأنشطة التي تناسب جميع الأذواق، بدءاً من الحفلات الموسيقية الضخمة والعروض المسرحية العالمية، وصولاً إلى تجارب الطهي الاستثنائية ومناطق الألعاب والمغامرات المبتكرة في مناطق شهيرة مثل بوليفارد سيتي وبوليفارد ورلد. أكثر من مجرد مهرجان، موسم الرياض هو احتفال بالإبداع والثقافة والتنوع، حيث يستقطب ملايين الزوار سنوياً ليصنع تجارب لا تُنسى في أجواء مفعمة بالحيوية والحداثة في قلب المملكة."
          : "The season features a wide array of activities catering to all tastes—ranging from massive concerts and world-class theatrical performances to exceptional culinary experiences, gaming zones, and innovative adventure areas in renowned locations like Boulevard City and Boulevard World. More than just a festival, Riyadh Season is a celebration of creativity, culture, and diversity, attracting millions of visitors annually and creating unforgettable experiences within a vibrant, modern atmosphere in the heart of the Kingdom."}
      </p>
    </div>
  );
}
