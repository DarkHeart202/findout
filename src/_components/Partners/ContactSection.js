"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Container from "@/_components/Container";
import Image from "next/image";

export default function PartnerRegistrationSection() {
  const t = useTranslations("Partners.Form");
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    category: "",
    city: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="border border-border-section py-16 lg:py-20 bg-gray-50">
      <Container>
        {/* Main Card Container - Edge to Edge Blue Side */}
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Blue Side Container - Fixed Width + Full Height Edge to Edge */}
          <div className="w-full md:w-[380px] lg:w-[420px] bg-gradient-to-b from-[#2B75CF] to-[#1D5496] p-8 text-white flex flex-col justify-between relative overflow-hidden flex-shrink-0 ltr:text-left rtl:text-right">
            {/* Top Section */}
            <div className="relative z-10 space-y-4">
              {/* Top Paper Plane Icon */}
              <div className="flex ">
                <div className="w-14 h-14 bg-main-orange rounded-2xl flex items-center justify-center shadow-lg text-white">
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M27.9812 44.0707C26.6631 45.1838 25.4499 45.4421 24.4731 45.3597C22.5629 45.1986 19.9748 43.614 18.3597 36.9741L17.6643 34.0735C17.5652 33.6935 17.0882 33.1286 16.7302 32.9672L13.987 31.7957C7.69965 29.1012 6.57275 26.2625 6.74381 24.3641C6.89316 22.4639 8.47962 19.8541 15.1177 18.2607L29.4452 14.7909C33.0054 13.9216 35.8532 14.5007 37.4631 16.4073C39.0731 18.3138 39.1669 21.2184 37.7254 24.5727L31.9047 38.1166C30.5855 41.1861 29.2287 43.0173 27.9812 44.0707ZM10.0929 22.8868C9.45743 23.4234 9.09233 23.9938 9.04473 24.5582C8.90113 26.131 11.1008 28.0436 14.8882 29.6638L17.6414 30.847C18.6639 31.294 19.6378 32.4473 19.9072 33.5303L20.6026 36.4309C21.5754 40.448 23.0826 42.9252 24.6572 43.0471C26.2301 43.1907 28.1426 40.991 29.7746 37.1936L35.5952 23.6497C36.6678 21.1715 36.6916 19.0749 35.6879 17.8862C34.6841 16.6975 32.6013 16.3797 29.9784 17.022L15.6609 20.5035C13.1167 21.1197 11.1874 21.9626 10.0929 22.8868Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25.4284 28.0837L19.0733 33.4501C18.5908 33.8575 17.8527 33.7953 17.4453 33.3128C17.0378 32.8302 17.1001 32.0922 17.5826 31.6848L23.9377 26.3183C24.4203 25.9109 25.1583 25.9731 25.5657 26.4556C25.9732 26.9382 25.9109 27.6762 25.4284 28.0837Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Titles */}
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight pt-2">
                {t("sideCard.title")}
              </h3>

              <p className="text-blue-100/90 text-sm leading-relaxed font-normal">
                {t("sideCard.subtitle")}
              </p>

              {/* Separator Line */}
              <div className="w-full h-[1px] bg-white/30 my-6" />

              {/* Features List */}
              <div className="space-y-4 text-xs sm:text-sm text-white font-normal">
                {/* Feature 1: Response Time */}
                <div className="flex items-center gap-3 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M9.16457 18.3254C13.6558 18.3254 17.2967 14.6839 17.2967 10.192C17.2967 5.70003 13.6558 2.05859 9.16457 2.05859C4.67333 2.05859 1.03247 5.70003 1.03247 10.192C1.03247 14.6839 4.67333 18.3254 9.16457 18.3254Z"
                      stroke="white"
                      strokeWidth="1.54035"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.73438 6.6792V11.5592L11.9872 13.1859"
                      stroke="white"
                      strokeWidth="1.54035"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("sideCard.responseTime")}</span>
                </div>

                {/* Feature 2: Privacy */}
                <div className="flex items-center gap-3 ">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path
                      d="M17.4708 9.50662C17.4708 13.5866 14.5088 17.408 10.4622 18.526C10.1869 18.6011 9.88649 18.6011 9.61115 18.526C5.56449 17.408 2.60254 13.5866 2.60254 9.50662V5.84378C2.60254 5.15961 3.11985 4.38366 3.7623 4.12501L8.40968 2.22271C9.45263 1.79718 10.6291 1.79718 11.672 2.22271L16.3194 4.12501C16.9535 4.38366 17.4791 5.15961 17.4791 5.84378L17.4708 9.50662Z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("sideCard.privacy")}</span>
                </div>
              </div>
            </div>
            {/* Background Logo Graphic */}
            <div className="absolute rtl:bottom-10 rtl:left-9 scale-[1.35]  ltr:bottom-12 ltr:right-11  pointer-events-none z-0 ">
              <Image
                src="/LogoBanner.png"
                alt="Logo Banner"
                width={240}
                height={300}
                className="object-contain ltr:-scale-x-100"
              />
            </div>

            <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-blue-400/20 blur-xl pointer-events-none" />
          </div>

          {/* Form Side - Flex 1 */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 p-6 sm:p-8 lg:p-10 space-y-5 text-start"
          >
            {/* Row 1: Business Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("labels.businessName")}
                </label>
                <input
                  type="text"
                  placeholder={t("placeholders.businessName")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-main-blue/20 focus:border-main-blue transition-colors text-sm text-start"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("labels.phone")}
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  placeholder={t("placeholders.phone")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-main-blue/20 focus:border-main-blue transition-colors text-sm text-start rtl:placeholder:text-right ltr:placeholder:text-left"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Row 2: Category & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("labels.category")}
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main-blue/20 focus:border-main-blue transition-colors text-sm text-gray-500 text-start"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="">{t("placeholders.selectCategory")}</option>
                  <option value="restaurant">
                    {t("categories.restaurant")}
                  </option>
                  <option value="entertainment">
                    {t("categories.entertainment")}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("labels.city")}
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main-blue/20 focus:border-main-blue transition-colors text-sm text-gray-500 text-start"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                >
                  <option value="">{t("placeholders.selectCity")}</option>
                  <option value="riyadh">{t("cities.riyadh")}</option>
                  <option value="jeddah">{t("cities.jeddah")}</option>
                </select>
              </div>
            </div>

            {/* Row 3: Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                {t("labels.email")}
              </label>
              <input
                type="email"
                placeholder={t("placeholders.email")}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-main-blue/20 focus:border-main-blue transition-colors text-sm text-start"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Row 4: Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                {t("labels.description")}
              </label>
              <textarea
                placeholder={t("placeholders.description")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-main-blue/20 focus:border-main-blue transition-colors text-sm resize-none text-start"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-main-orange hover:bg-dark-o text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-500/20 cursor-pointer text-base"
            >
              {t("submitButton")}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
