"use client";

import { useLocale, useTranslations } from "next-intl";
import Container from "@/_components/Container";
import { ArrowDown } from "@/icons";
import { Star, MapPin, HomeIcon } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import SparkleIcon from "@/icons/SparkleIcon";

export default function HeroSectionPartners() {
  const t = useTranslations("Partners");

  return (
    <section className="relative bg-app-bg min-h-140 lg:min-h-160 flex items-center overflow-hidden py-10">
      {/* الـ SVG والدوائر الضوئية في الخلفية */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/vectors/partnerHero.svg"
          alt="Partners Hero Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute top-[clamp(200px,59.5%,438px)] -inset-s-60 w-[clamp(280px,60vw,864px)] aspect-[864/736] bg-[#7DD3FC]/15 blur-[80px] rounded-full z-10" />
        <div className="absolute bottom-[clamp(200px,50.5%,438px)] -inset-e-100 w-[clamp(280px,60vw,864px)] aspect-[864/736] bg-[#7DD3FC]/15 blur-[200px] rounded-full z-10" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col min-h-140 lg:min-h-160 py-8">
          {/* Navigation Breadcrumbs */}
          <nav className="pt-10 relative flex gap-1 items-center text-base text-slate-500 font-medium w-fit mb-8">
            <Link
              href="/"
              className="hover:text-main-blue z-10 gap-1 items-center flex"
            >
              <HomeIcon className="h-5 w-5" />
              {t("breadcrumbs.home")}
            </Link>
            <ArrowDown
              strokeWidth={1.6}
              className="w-5 h-3 rtl:rotate-90 ltr:rotate-270 z-10"
            />
            <span className="text-slate-800 font-bold z-10">
              {t("breadcrumbs.partners")}
            </span>

            <div className="absolute blur-2xl w-32 h-32 -bottom-8 -end-10 scale-[2] z-0 pointer-events-none rounded-full bg-[#EDF5FB]" />
          </nav>

          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-20">
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start">
              {/* Badge */}
              <span className="z-20 shadow-[0_2px_25px_-3px_rgba(30,41,59,0.15)] mb-6 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-header bg-[#E6F3FC] rounded-full border border-sky-100">
                <SparkleIcon className="text-main-orange text-base leading-none" />
                {t("badge")}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-light-header mb-6 leading-tight">
                {t.rich("title", {
                  highlight: (chunks) => (
                    <span className="text-main-blue">{chunks}</span>
                  ),
                  orange: (chunks) => (
                    <span className="text-main-orange">{chunks}</span>
                  ),
                })}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg/80 text-[18px] rtl:font-almarai leading-relaxed mb-8 max-w-2xl">
                {t("description")}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => {
                  document
                    .getElementById("target-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-block bg-main-orange hover:bg-orange-600 text-white font-bold px-8 sm:px-10 py-3.5 rounded-[12px] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_10px_20px_rgba(249,115,22,0.25)] active:scale-95 text-center cursor-pointer"
              >
                {t("joinNow")}
              </button>
            </div>

            {/* Image Section */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] aspect-[500/421] lg:flex-1 mx-auto lg:mx-0">
              {/* Background card pattern */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl scale-105 -z-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.05) 2px, transparent 2px)
                  `,
                  backgroundSize: "25px 25px",
                }}
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full">
                {/* 1. خلفية الإضاءة/الباترن (خارج حاوية overflow-hidden عشان تبان حوافها والـ Blur) */}

                {/* 2. حاوية الصورة فقط هي اللي تاخد overflow-hidden */}
                <div className="absolute -inset-2 -z-[10px] scale-[1.05]  bg-[#F6F7FB] -rotate-4 rounded-3xl blur-[8px] rounded-3xl   pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/hero/partnersHero.webp"
                    alt="Partnership"
                    fill
                    priority
                    className="object-cover object-[5%_100%] scale-[1.15]"
                  />
                </div>
              </div>

              {/* كارد 1 - المدن (23+) */}
              <div className="absolute shadow-[0_20px_40px_-5px_rgba(2,132,199,0.10)]  -top-3 sm:-top-4 -inset-s-2 sm:-start-8 z-20 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl  border border-slate-100 flex items-center gap-2.5 sm:gap-3 scale-90 sm:scale-100 origin-top-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-main-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <span className="block text-light-header font-bold text-xs sm:text-base leading-tight">
                    23+
                  </span>
                  <span className="text-[11px] sm:text-sm text-slate-500 block -mt-0.5">
                    {t("stats.cities")}
                  </span>
                </div>
              </div>

              {/* كارد 2 - الشركاء (2400+) */}
              <div className="absolute -bottom-3 shadow-[0_20px_40px_-5px_rgba(2,132,199,0.10)] sm:-bottom-6 -end-2 sm:-end-8 z-20 bg-[radial-gradient(circle_at_center,_#FFFFFF_34%,_rgba(238,249,255,0.9)_100%)] px-3 sm:px-4 py-3 sm:py-4 rounded-2xl sm:rounded-3xl  border border-slate-100 scale-90 sm:scale-100 origin-bottom-end">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                  <Image
                    src="/vectors/avatars.svg"
                    alt="Avatars"
                    width={100}
                    height={32}
                    className="w-20 sm:w-24 h-auto shrink-0 object-contain"
                  />
                  <div>
                    <span className="block  text-sm sm:text-[18px] font-bold text-light-header leading-tight">
                      2400
                      <span className="text-main-blue">+</span>
                    </span>
                    <span className="text-[11px] sm:text-sm text-light-header block">
                      {t("stats.partners")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0"
                    >
                      <path
                        d="M5.25806 7.92625L7.80815 9.37869C8.27515 9.64488 8.84662 9.25139 8.72372 8.75374L8.0478 6.02244L10.3029 4.18229C10.7146 3.84667 10.4934 3.21014 9.95268 3.16963L6.98475 2.93238L5.82339 0.351538C5.61446 -0.117179 4.90167 -0.117179 4.69274 0.351538L3.53138 2.92659L0.563451 3.16384C0.0227096 3.20435 -0.198503 3.84088 0.213198 4.17651L2.46833 6.01666L1.79241 8.74795C1.66951 9.2456 2.24098 9.63909 2.70798 9.37291L5.25806 7.92625Z"
                        fill="#fdc700"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M3.53138 2.92838L4.69274 0.351753C4.79721 0.117251 5.02764 0 5.25806 0V7.9311L2.70798 9.37864C2.24098 9.64499 1.66951 9.25126 1.79241 8.7533L2.46833 6.02034L0.213198 4.17906C-0.198503 3.84323 0.0227096 3.20631 0.563451 3.16578L3.53138 2.92838Z"
                        fill="#fdc700"
                      />
                    </svg>

                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-500 ms-1">
                    4.9 {t("rating")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
