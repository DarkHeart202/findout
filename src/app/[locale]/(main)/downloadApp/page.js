import FeaturesSection from "@/_components/Download/FeaturesSection";
import HeroSectionDownload from "@/_components/Download/HeroSectionDownload";
import BannerDownload from "@/_components/Download/BannerDownload";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl ? "تحميل التطبيق" : "Download App", // ترجع النص مباشرة، مثلاً: "المفضلة"
  };
}

function HomePage() {
  return (
    <>
      <HeroSectionDownload />
      <FeaturesSection />
      <BannerDownload />
    </>
  );
}

export default HomePage;
