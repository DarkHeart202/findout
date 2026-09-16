import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import Container from "../Container";

function AddEventBanner() {
  const t = useTranslations("Events.addEventBanner");

  // ظل ناعم ومطابق لـ Figma

  const circleShadow = "shadow-[10px_15px_30px_rgba(0,0,0,0.18)]";

  return (
    <section className="py-16 bg-white border-1 app-border-section">
      <Container>
        {/* التدرج المائل: يبدأ من أعلى اليمين (to bottom left) */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-[#017BBA] via-[#0168A2] to-[#002D6E] flex items-center justify-between px-8 py-10 lg:px-14 lg:py-12">
          {/* المحتوى النصي - على اليمين مع بداية اللون الفاتح */}

          <div className="max-w-md relative z-10">
            <span className="block w-35 h-35 bg-white/10 absolute -top-[100px] start-0 rounded-full blur-[1.7px]" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug">
              {t("title")}
            </h2>

            <p className="text-sm text-white/90 mt-4 leading-relaxed font-normal">
              {t("description")}
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-main-orange hover:bg-orange-500/90 text-white font-bold text-sm px-6 py-3 rounded-full mt-6 transition-colors shadow-md"
            >
              {t("cta")}

              <span className="w-5 h-5 rounded-full bg-gradient-to-b from-white from-[10%] to-transparent to-[80%]" />
            </Link>
          </div>

          {/* الدوائر التراكبية - في الزاوية العلوية على اليسار */}

          <div className="absolute top-0 end-0 pointer-events-none select-none">
            {/* الدائرة 1 (الكبيرة) */}

            <div
              className={`absolute top-[-80px] end-[-80px] w-[380px] h-[380px] rounded-full bg-white/15 ${circleShadow} z-1`}
            />

            {/* الدائرة 2 */}

            <div
              className={`absolute top-[-60px] end-[-60px] w-[300px] h-[300px] rounded-full bg-white/25 ${circleShadow} z-2`}
            />

            {/* الدائرة 3 */}

            <div
              className={`absolute top-[-40px] end-[-40px] w-[220px] h-[220px] rounded-full bg-white/35 ${circleShadow} z-3`}
            />

            {/* الدائرة 4 (الأصغر والأفتح) */}

            <div
              className={`blur-[1px] absolute top-[-20px] end-[-20px] w-[140px] h-[140px] rounded-full bg-white/45  z-4`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AddEventBanner;
