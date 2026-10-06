import { Star } from "@/icons";
import { useLocale } from "next-intl";

function FastInfo({ place }) {
  const locale = useLocale();

  const getLocalizedProp = (prop) => {
    if (!prop) return "";
    if (typeof prop === "object") {
      return prop[locale] || prop.ar || prop.en || "";
    }
    return prop;
  };

  const locationText = getLocalizedProp(place?.location);
  const rating = place?.rating || 4;
  const views = place?.views || 0;
  const licenseNumber = place?.licenseNumber || "";

  return (
    <div className="py-6 px-4 bg-white rounded-[18px] shadow-[0_0_15px_rgba(0,0,0,0.05)]">
      <h3 className="text-xl font-semibold text-header mb-4 pb-2">
        {locale === "ar" ? "معلومات سريعة" : "Quick Info"}
      </h3>

      <div className="space-y-4.5 text-sm">
        {/* 1. الموقع */}
        <div className="flex items-start gap-3">
          <span className="text-blue-500 text-lg mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_629_1013)">
                <path
                  d="M12.8278 6.41489C12.8278 9.6177 9.27477 12.9533 8.08165 13.9835C7.9705 14.0671 7.8352 14.1122 7.69614 14.1122C7.55707 14.1122 7.42177 14.0671 7.31062 13.9835C6.1175 12.9533 2.56445 9.6177 2.56445 6.41489C2.56445 5.05388 3.10511 3.74862 4.06749 2.78624C5.02987 1.82386 6.33513 1.2832 7.69614 1.2832C9.05714 1.2832 10.3624 1.82386 11.3248 2.78624C12.2872 3.74862 12.8278 5.05388 12.8278 6.41489Z"
                  stroke="#4A90E2"
                  strokeWidth="1.15463"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.69684 8.33875C8.75965 8.33875 9.62122 7.47718 9.62122 6.41437C9.62122 5.35156 8.75965 4.48999 7.69684 4.48999C6.63404 4.48999 5.77246 5.35156 5.77246 6.41437C5.77246 7.47718 6.63404 8.33875 7.69684 8.33875Z"
                  stroke="#4A90E2"
                  strokeWidth="1.15463"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_629_1013">
                  <rect width="15.395" height="15.395" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div>
            <p className="font-bold text-hard-gray text-sm">
              {locale === "ar" ? "الموقع" : "Location"}
            </p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              {`${locationText} ${locale === "ar" ? "طريق الأمير محمد بن عبد العزيز، الرياض 12222، المملكة العربية السعودية" : "Prince Mohammed Bin Abdulaziz Road, KSA"}`}
            </p>
          </div>
        </div>

        <hr className="border-hard-gray/10" />

        {/* 2. التقييمات */}
        <div className="flex items-start gap-3">
          <span className="text-blue-500 text-lg mt-0.5">
            <Star
              className="w-5 h-5"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="1.8"
            />
          </span>
          <div>
            <p className="font-bold text-hard-gray text-sm">
              {locale === "ar" ? "التقييمات" : "Ratings"}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {rating}{" "}
              {locale === "ar" ? "من 5 (427 تقييم)" : "out of 5 (427 reviews)"}
            </p>
          </div>
        </div>

        <hr className="border-hard-gray/10" />

        {/* 3. أوقات العمل */}
        <div className="flex items-start gap-3">
          <span className="text-blue-500 text-lg mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_629_1615)">
                <path
                  d="M7.79751 14.2965C11.3861 14.2965 14.2952 11.387 14.2952 7.7978C14.2952 4.20865 11.3861 1.29907 7.79751 1.29907C4.20893 1.29907 1.2998 4.20865 1.2998 7.7978C1.2998 11.387 4.20893 14.2965 7.79751 14.2965Z"
                  stroke="#4A90E2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M7.79688 3.89905V7.79829L10.396 9.09803"
                  stroke="#4A90E2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </g>
              <defs>
                <clipPath id="clip0_629_1615">
                  <rect width="15.5945" height="15.597" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div>
            <p className="font-bold text-hard-gray text-sm">
              {locale === "ar" ? "أوقات العمل" : "Work Hours"}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {locale === "ar"
                ? "من 9:00 ص الى 12:00 م"
                : "From 9:00 AM to 12:00 PM"}
            </p>
          </div>
        </div>

        <hr className="border-hard-gray/10" />

        {/* 4. عدد الزيارات */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_629_1606)">
                <mask
                  id="mask0_629_1606"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="-1"
                  y="-2"
                  width="16"
                  height="16"
                >
                  <path
                    d="M14.9022 -1.46436H-0.887695V13.3027H14.9022V-1.46436Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_629_1606)">
                  <path
                    d="M7.00695 8.58382C5.43455 8.58382 4.1582 7.39014 4.1582 5.91959C4.1582 4.44904 5.43455 3.25537 7.00695 3.25537C8.57937 3.25537 9.85572 4.44904 9.85572 5.91959C9.85572 7.39014 8.57937 8.58382 7.00695 8.58382ZM7.00695 4.17831C5.98061 4.17831 5.14507 4.95973 5.14507 5.91959C5.14507 6.87945 5.98061 7.66087 7.00695 7.66087C8.0333 7.66087 8.86885 6.87945 8.86885 5.91959C8.86885 4.95973 8.0333 4.17831 7.00695 4.17831Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M7.00704 11.4696C4.53328 11.4696 2.19769 10.1159 0.592377 7.7655C-0.105011 6.75026 -0.105011 5.09512 0.592377 4.07371C2.20426 1.72328 4.53986 0.369629 7.00704 0.369629C9.47422 0.369629 11.8098 1.72328 13.4151 4.07371C14.1125 5.08896 14.1125 6.74411 13.4151 7.7655C11.8098 10.1159 9.47422 11.4696 7.00704 11.4696ZM7.00704 1.29257C4.88197 1.29257 2.84902 2.48625 1.42793 4.5721C0.934492 5.29201 0.934492 6.54721 1.42793 7.26711C2.84902 9.35296 4.88197 10.5466 7.00704 10.5466C9.1321 10.5466 11.1651 9.35296 12.5861 7.26711C13.0796 6.54721 13.0796 5.29201 12.5861 4.5721C11.1651 2.48625 9.1321 1.29257 7.00704 1.29257Z"
                    fill="#4A90E2"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_629_1606">
                  <rect width="14" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div>
            <p className="font-bold text-hard-gray text-sm">
              {locale === "ar" ? "عدد الزيارات" : "Views"}
            </p>
            <p className="text-gray-500 text-xs mt-1">{views}</p>
          </div>
        </div>

        <hr className="border-hard-gray/10" />

        {/* 5. رقم الترخيص */}
        <div className="flex items-start gap-3">
          <span className="text-blue-500 text-lg mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1234 0.577271H1.86007C1.15153 0.577271 0.577148 1.15165 0.577148 1.86019V8.27479C0.577148 8.98333 1.15153 9.55772 1.86007 9.55772H12.1234C12.832 9.55772 13.4064 8.98333 13.4064 8.27479V1.86019C13.4064 1.15165 12.832 0.577271 12.1234 0.577271Z"
                stroke="#4A90E2"
                strokeWidth="1.15463"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.577148 3.78491H13.4064"
                stroke="#4A90E2"
                strokeWidth="1.15463"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <p className="font-bold text-hard-gray text-sm">
              {locale === "ar" ? "رقم الترخيص" : "License Number"}
            </p>
            <p className="text-gray-500 text-xs mt-1 font-mono">
              {licenseNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastInfo;
