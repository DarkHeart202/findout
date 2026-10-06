"use client";
import { useLocale } from "next-intl";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Video({ place }) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  // 1. الفيديو الافتراضي لو مش موجود في الـ API
  const defaultVideoId = "1N_z4c8PNlI";

  const videoVar = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 0.5,
      },
    },
  };
  // 2. استخراج الـ ID من الداتا لو موجود، أو استخدام الافتراضي
  // (لو الـ API بيجيب رابط يوتيوب كامل، أو لو بيجيب الـ ID جاهز)
  const videoId = place?.youtubeVideoId || defaultVideoId;

  const quality = "maxresdefault" || "hqdefault";
  // 3. صورة مصغرة (Thumbnail) افتراضية من يوتيوب مباشرة باستخدام الـ ID أو صورة المكان
  const thumbnailUrl =
    place?.videoThumbnail ||
    `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;

  return (
    <>
      {/* كارد الفيديو الرئيسي مع صورة الـ Thumbnail وزرار يوتيوب في النص */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full h-[250px] md:h-[350px]  overflow-hidden rounded-[18px] shadow-[0_0_15px_rgba(0,0,0,0.05)] cursor-pointer group"
      >
        {/* صورة الغلاف (Thumbnail) */}
        <img
          src={thumbnailUrl}
          alt={place?.title || "Video Preview"}
          // زودنا هنا scale-110 عشان نكبر الصورة غصب عنها وتأكل المساحات السودا
          className="w-full h-full object-cover scale-120 group-hover:scale-130 transition-transform duration-500"
        />

        {/* طبقة تظليل خفيفة فوق الصورة */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

        {/* أيقونة يوتيوب في المنتصف */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-9 h-9 text-white fill-current translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* تلميح صغير */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg">
          {locale === "ar"
            ? "انقر لمشاهدة الفيديو "
            : "Click to watch the Video"}
        </div>
      </div>

      {/* الـ Modal (الشاشة المنبثقة) لعرض الفيديو */}

      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
            <motion.div
              variants={videoVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video"
            >
              {/* زر الإغلاق (X) */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* مشغل يوتيوب (iframe) */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            {/* إغلاق المودال عند الضغط في أي مكان برا */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
      <div className="px-4 py-6 rounded-[18px] shadow-[0_0_15px_rgba(0,0,0,0.05)] flex justify-between">
        <p className="text-base text-hard-gray font-normal">
          {locale === "ar" ? "مشاركة عبر:" : "Share Via:"}
        </p>
        <span>
          <svg
            width="85"
            height="100%"
            viewBox="0 0 79 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_629_1234)">
              <mask
                id="mask0_629_1234"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="-1"
                width="20"
                height="21"
              >
                <path
                  d="M19.9707 -0.223877H0.454102V19.2928H19.9707V-0.223877Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_629_1234)">
                <path
                  d="M14.4245 4.47448C13.9045 4.47448 13.483 4.89603 13.483 5.41607C13.483 5.93611 13.9045 6.35766 14.4245 6.35766C14.9446 6.35766 15.3661 5.93611 15.3661 5.41607C15.3661 4.89603 14.9446 4.47448 14.4245 4.47448ZM10.2385 5.68207C8.05799 5.68207 6.28341 7.45573 6.28341 9.6362C6.28341 11.8167 8.05707 13.5903 10.2385 13.5903C12.4199 13.5903 14.1926 11.8167 14.1926 9.6362C14.1926 7.45573 12.4189 5.68207 10.2385 5.68207ZM10.2385 12.1692C8.84126 12.1692 7.70546 11.0325 7.70546 9.6362C7.70546 8.23992 8.84219 7.1032 10.2385 7.1032C11.6347 7.1032 12.7715 8.23992 12.7715 9.6362C12.7715 11.0325 11.6347 12.1692 10.2385 12.1692ZM18.2185 6.34938C18.2185 3.68568 16.0592 1.52637 13.3946 1.52637H7.02803C4.36433 1.52637 2.2041 3.68568 2.2041 6.34938V12.7159C2.2041 15.3796 4.36341 17.5389 7.02803 17.5389H13.3946C16.0583 17.5389 18.2185 15.3796 18.2185 12.7159V6.34938ZM16.7072 12.7159C16.7072 14.5457 15.2244 16.0285 13.3946 16.0285H7.02803C5.19823 16.0285 3.71543 14.5457 3.71543 12.7159V6.34938C3.71543 4.51958 5.19823 3.03678 7.02803 3.03678H13.3946C15.2244 3.03678 16.7072 4.51958 16.7072 6.34938V12.7159Z"
                  fill="#4A90E2"
                />
              </g>
            </g>
            <g clipPath="url(#clip1_629_1234)">
              <mask
                id="mask1_629_1234"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="28"
                y="-1"
                width="19"
                height="21"
              >
                <path
                  d="M46.9939 -0.223877H28.9785V19.2928H46.9939V-0.223877Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_629_1234)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.1456 9.59362V17.0159C36.1456 17.1227 36.2255 17.2092 36.324 17.2092H38.8686C38.9672 17.2092 39.0471 17.1227 39.0471 17.0159V9.47305H40.8916C40.9842 9.47305 41.0615 9.39573 41.0692 9.29633L41.2467 7.02381C41.2552 6.91059 41.1737 6.81395 41.0692 6.81395H39.0471V5.20137C39.0471 4.82308 39.33 4.5175 39.6783 4.5175H41.0998C41.1983 4.5175 41.2782 4.43098 41.2782 4.32421V2.05169C41.2782 1.94492 41.1983 1.8584 41.0998 1.8584H38.6979C37.2884 1.8584 36.1456 3.09637 36.1456 4.62335V6.81487H34.8737C34.7752 6.81487 34.6953 6.90139 34.6953 7.00816V9.28068C34.6953 9.38745 34.7752 9.47397 34.8737 9.47397H36.1456V9.59454V9.59362Z"
                  fill="#4A90E2"
                />
              </g>
            </g>
            <g clipPath="url(#clip2_629_1234)">
              <mask
                id="mask2_629_1234"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="57"
                y="-1"
                width="20"
                height="21"
              >
                <path
                  d="M76.2689 -0.223877H57.5029V19.2928H76.2689V-0.223877Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask2_629_1234)">
                <path
                  d="M73.5872 16.3235C73.5775 16.3051 73.5704 16.2931 73.5625 16.2812L69.1754 9.64218C68.9214 9.25836 68.6683 8.87455 68.4134 8.49073C68.4143 8.48889 68.4161 8.48797 68.4169 8.48613L73.1217 2.79976C73.1315 2.78872 73.1394 2.77675 73.15 2.76019L73.4138 2.38281H72.704C72.4332 2.38281 72.1624 2.38281 71.8915 2.38281H71.8907C71.7933 2.38281 71.711 2.42147 71.6473 2.49879C71.3145 2.90285 70.9809 3.306 70.6463 3.70914L67.647 7.33376L65.6433 4.30189C65.2512 3.70822 64.8592 3.11455 64.4671 2.52088C64.4078 2.43067 64.3211 2.38373 64.2158 2.38373H64.2149C63.1847 2.38373 62.1545 2.38373 61.1244 2.38373H60.4376C60.4252 2.38373 60.4128 2.38373 60.3987 2.38557L60.0128 2.40398L60.211 2.7473C60.219 2.76111 60.2252 2.77215 60.2323 2.78228L64.1281 8.67758C64.4848 9.21695 64.8415 9.75723 65.1981 10.2957C64.6707 10.9317 64.1441 11.5677 63.6175 12.2046L60.2553 16.2674C60.2464 16.2784 60.2376 16.2904 60.227 16.306L59.9854 16.653L60.3995 16.6834C60.4172 16.6852 60.4314 16.6862 60.4456 16.6862H60.7615C61.0022 16.6862 61.243 16.6862 61.4837 16.6862H61.4846C61.581 16.6862 61.6651 16.6457 61.728 16.5693C62.6139 15.4979 63.4998 14.4265 64.3857 13.3561L65.961 11.4517L68.3293 15.0349C68.6621 15.5384 68.9949 16.0428 69.3276 16.5463C69.3878 16.6374 69.4754 16.6853 69.5816 16.6853H69.5852C69.6825 16.6843 69.7799 16.6843 69.8772 16.6853H73.7819L73.5846 16.3244L73.5872 16.3235ZM70.1914 15.3764C69.279 14.0188 68.3665 12.6612 67.454 11.3035L62.3652 3.73491C62.776 3.73491 63.19 3.73491 63.6015 3.73491C64.4467 4.99313 65.2919 6.25043 66.1371 7.50772L71.4278 15.3764H71.2667C70.9083 15.3764 70.549 15.3764 70.1905 15.3764H70.1914Z"
                  fill="#4A90E2"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_629_1234">
                <rect width="18.0154" height="19.5166" fill="white" />
              </clipPath>
              <clipPath id="clip1_629_1234">
                <rect
                  width="18.0154"
                  height="19.5166"
                  fill="white"
                  transform="translate(28.5244)"
                />
              </clipPath>
              <clipPath id="clip2_629_1234">
                <rect
                  width="18.766"
                  height="19.5166"
                  fill="white"
                  transform="translate(57.0488)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </>
  );
}
