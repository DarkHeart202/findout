import { AuthCard as SignInCard } from "@/_components/SignInCard";
import { Particles } from "@/components/ui/particles";
import { Link } from "@/i18n/navigation";
import { ChevronLeftIcon } from "lucide-react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl ? "تسجيل الدخول" : "Login", // ترجع النص مباشرة، مثلاً: "المفضلة"
  };
}

export default async function LoginPage({ params }) {
  const { locale } = await params;
  const isRtl = locale === "ar";

  return (
    <div className="relative md:h-screen md:overflow-hidden w-full">
      <Particles
        color="#4A90E2"
        quantity={220}
        ease={20}
        className="absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 isolate -z-10 contain-strict"
      >
        <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4">
        <Link
          href="/"
          className="absolute top-4 gap-2 left-4 flex items-center text-sm font-medium hover:bg-lightest-primary p-3 rounded-lg transition-colors"
        >
          {isRtl ? (
            <>
              <span>الرئيسية</span>
              <ChevronLeftIcon className=" size-4" />
            </>
          ) : (
            <>
              <ChevronLeftIcon className="me-2 size-4" />
              <span>Home</span>
            </>
          )}
        </Link>

        <div className="mx-auto space-y-4 sm:w-sm">
          <SignInCard />
        </div>
      </div>
    </div>
  );
}
