import { Add1 } from "@/icons";
import Container from "./Container";
import Button from "./Button";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

function JoinPartnerBanner() {
  const t = useTranslations("Home");
  return (
    <Reveal className="py-16 bg-app-bg border border-app-border-section">
      <Container>
        <div className="relative bg-linear-to-l from-[#017BBA] to-[#002D6E] p-6 sm:p-8 lg:p-11.5 overflow-hidden rounded-[30px] flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* الدائرة المائية */}
          <span className="block w-35 h-35 bg-white/10 absolute rounded-full top-[-40px] right-[-40px] blur-[1.7px] pointer-events-none z-0" />

          {/* الجزء الأول: الأيقونة + النص والبادج والأزرار */}
          <div className="flex flex-col md:flex-row gap-5 items-center md:items-start z-10 w-full lg:w-auto">
            {/* الأيقونة */}
            <div className="w-fit shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] p-5 sm:p-6 flex items-center justify-center bg-white rounded-3xl shrink-0">
              <Add1 className="text-main-blue h-10 w-10 sm:h-11 sm:w-11" />
            </div>

            {/* النصوص والأزرار */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-5">
              <span className="px-3 py-1.5 rounded-[7px] bg-white/15 backdrop-blur-md border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] text-white text-xs font-bold">
                {t("partnerBanner.badge")}
              </span>

              <div>
                <h3 className="font-extrabold text-xl sm:text-[33px] text-white leading-tight">
                  {t("partnerBanner.title")}
                </h3>
                <p className="rtl:font-almarai text-sm font-normal text-white/90 mt-3 max-w-xl">
                  {t("partnerBanner.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 font-bold text-sm w-full sm:w-auto">
                <Button
                  className="hover:bg-dark-o h-12.5 w-full sm:w-auto"
                  bgColor="bg-main-orange"
                  href="/join-partner"
                  rounded="rounded-[11px]"
                >
                  {t("partnerBanner.ctaPrimary")}
                </Button>
                <Button
                  href="/features"
                  bgColor="bg-white/10"
                  textColor="text-white"
                  rounded="rounded-[11px]"
                  className="backdrop-blur-sm border-2 border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/15 hover:border-white/60 h-12.5 w-full sm:w-auto"
                >
                  {t("partnerBanner.ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>

          {/* الجزء الثاني: بطاقات الإحصائيات (في الموبايل تحت بعض، وفي التابلت جنب بعض، وفي الديسكتوب عمودية على الشمال) */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 z-10 w-full lg:w-81 shrink-0">
            <div className="w-full p-6 rounded-[11px] bg-white/[0.078] backdrop-blur-md border border-white/20 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(255,255,255,0.1)] flex flex-col items-start gap-1">
              <span className="font-extrabold text-2xl text-white">
                {t("partnerBanner.stats.countValue")}
              </span>
              <span className="text-xs text-white/80 font-normal">
                {t("partnerBanner.stats.countLabel")}
              </span>
            </div>

            <div className="w-full p-6 rounded-[11px] bg-white/[0.078] backdrop-blur-md border border-white/20 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(255,255,255,0.1)] flex flex-col items-start gap-1">
              <span className="font-extrabold text-xl text-white">
                {t("partnerBanner.stats.timeValue")}
              </span>
              <span className="text-xs text-white/80 font-normal">
                {t("partnerBanner.stats.timeLabel")}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Reveal>
  );
}

export default JoinPartnerBanner;
