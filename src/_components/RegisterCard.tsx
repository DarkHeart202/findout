"use client";
import React, { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { Google } from "@/icons/Googleicon";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Mail, Lock, Eye, EyeClosed, ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-slate-400 selection:bg-[#4A90E2] selection:text-white flex h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-white/80 px-3 py-1 text-base shadow-xs transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-slate-900",
        "focus-visible:border-[#4A90E2] focus-visible:ring-[#4A90E2]/20 focus-visible:ring-[3px] focus:bg-white",
        className,
      )}
      {...props}
    />
  );
}

const pathVar = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
export function RegisterCard() {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setConfirmedShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const router = useRouter();

  // 🌟 شروط التحقق من تطابق كلمة المرور 🌟
  const isConfirmNotEmpty = confirmPassword.length > 0;
  const isPasswordMatch = isConfirmNotEmpty && password === confirmPassword;
  const isPasswordMismatch = isConfirmNotEmpty && password !== confirmPassword;

  // 3D Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // منع الإرسال لو كلمات المرور غير متطابقة
    if (isPasswordMismatch) return;

    setIsLoading(true);
    setTimeout(() => {
      document.cookie =
        "token=demo_authenticated_user_token; path=/; max-age=86400; SameSite=Lax";
      setIsLoading(false);
      router.push("/");
      router.refresh();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-sm relative z-10 mx-auto"
      style={{ perspective: 1500 }}
    >
      <motion.div
        className="relative"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 10 }}
      >
        <div className="relative group">
          {/* Border Glow */}
          <motion.div
            className="absolute -inset-[2px] rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 15px 2px rgba(74, 144, 226, 0.2)",
                "0 0 25px 6px rgba(74, 144, 226, 0.4)",
                "0 0 15px 2px rgba(74, 144, 226, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Light Beams */}
          <div className="absolute -inset-[1px] rounded-3xl overflow-hidden pointer-events-none z-10">
            <motion.div
              className="absolute top-0 left-0 h-[2.5px] w-[60%] bg-gradient-to-r from-transparent via-[#4A90E2] to-transparent shadow-[0_0_12px_#4A90E2]"
              animate={{ left: ["-60%", "100%"] }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
            <motion.div
              className="absolute top-0 right-0 h-[60%] w-[2.5px] bg-gradient-to-b from-transparent via-[#4A90E2] to-transparent shadow-[0_0_12px_#4A90E2]"
              animate={{ top: ["-60%", "100%"] }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 0.55,
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-[2.5px] w-[60%] bg-gradient-to-r from-transparent via-[#4A90E2] to-transparent shadow-[0_0_12px_#4A90E2]"
              animate={{ right: ["-60%", "100%"] }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 1.1,
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[60%] w-[2.5px] bg-gradient-to-b from-transparent via-[#4A90E2] to-transparent shadow-[0_0_12px_#4A90E2]"
              animate={{ bottom: ["-60%", "100%"] }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 1.65,
              }}
            />
          </div>

          {/* كارت الـ Light Mode الرئيسي */}
          <div className="relative bg-sky-50/70 backdrop-blur-xl rounded-3xl p-6 border border-blue-100/80 shadow-[0_20px_50px_rgba(74,144,226,0.08)] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(135deg, #000000 0.5px, transparent 0.5px), linear-gradient(45deg, #000000 0.5px, transparent 0.5px)`,
                backgroundSize: "30px 30px",
              }}
            />

            {/* اللوجو والعنوان */}
            <div className="text-center space-y-1 mb-5">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="mx-auto w-13 h-13 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center relative overflow-hidden"
              >
                <span className="text-lg font-bold text-[#4A90E2]">
                  <motion.svg
                    variants={pathVar}
                    initial="hidden"
                    animate="visible"
                    width="25"
                    height="40"
                    viewBox="0 0 30 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0493441 13.9373C-0.824158 21.6242 10.1675 34.0715 11.8068 35.88C11.8817 35.9627 12.0098 35.9014 12.0098 35.7898V29.0523C12.0098 29.0449 12.0091 29.0374 12.0079 29.0301C11.8282 27.9977 12.8278 27.221 13.4132 26.9263C13.4559 26.9048 13.4834 26.8617 13.4834 26.8139V25.0322C13.4834 24.9719 13.4381 24.9203 13.3786 24.9102C7.03604 23.8325 5.23894 17.9459 5.13363 15.113C5.1334 15.1067 5.13369 15.1005 5.13444 15.0943C5.99753 7.85703 11.2745 5.71 14.5886 5.71C22.3247 6.32398 24.4531 12.7298 24.2894 15.3495C23.9263 21.8254 19.0289 24.145 16.7134 24.6019C16.6551 24.6134 16.6147 24.6638 16.6147 24.7232V26.7847C16.6147 26.8463 16.6605 26.8975 16.72 26.9133C17.3993 27.0945 17.9251 28.1105 18.1434 28.7166C18.1476 28.7285 18.1499 28.7406 18.1503 28.7531L18.3848 35.5545C18.3886 35.6646 18.5264 35.7118 18.6003 35.63C27.7665 25.4769 30.3713 17.8202 29.8887 13.6917C28.7835 4.23645 20.7897 -3.74743e-06 15.3867 0C5.1333 0 0.663317 8.53431 0.0493441 13.9373Z"
                      fill="url(#paint0_linear_563_1030)"
                    />
                    <path
                      d="M14.7067 6.44705C19.5894 6.44705 23.5481 10.4052 23.5485 15.2879L23.5367 15.743C23.321 20.002 20.0914 23.4641 15.9381 24.0428L16.0533 27.1697C16.9088 27.5488 17.5158 28.391 17.5465 29.3846L17.9528 42.5799C17.9933 43.8969 17.0511 45.0399 15.7506 45.2517C14.1673 45.5092 12.7248 44.2991 12.7037 42.6951L12.5309 29.4949C12.5174 28.4565 13.1375 27.5588 14.0299 27.1658L13.9713 24.0965C9.43325 23.7219 5.86584 19.9226 5.86584 15.2879C5.86617 10.4057 9.82461 6.44783 14.7067 6.44705ZM14.7067 7.79764C10.5706 7.79841 7.21675 11.1517 7.21643 15.2879C7.21643 19.4243 10.5704 22.7783 14.7067 22.7791C18.8436 22.7791 22.1979 19.4248 22.1979 15.2879C22.1976 11.1512 18.8434 7.79764 14.7067 7.79764ZM13.9869 8.43338C13.8164 8.45441 13.6489 8.49612 13.486 8.54764C12.0507 9.05977 10.7748 9.96924 9.74768 11.0564C9.71153 11.0937 9.67567 11.1314 9.64124 11.1687C8.59853 12.2357 8.1811 13.6921 7.86389 15.1824C7.81357 15.3478 7.75213 15.5173 7.65002 15.656C7.73039 15.5042 7.76666 15.3342 7.79456 15.1668C7.9061 13.6877 8.25816 12.0521 9.37073 10.9187L9.47815 10.8045C10.5583 9.65998 11.9469 8.80994 13.4694 8.47928C13.6406 8.44858 13.8151 8.42965 13.9869 8.43338Z"
                      fill="#FE8B16"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_563_1030"
                        x1="-1.9847"
                        y1="12.341"
                        x2="29.9422"
                        y2="21.1823"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1DB0F6" />
                        <stop offset="1" stopColor="#0381BE" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-slate-900"
              >
                {isRtl ? (
                  <span>
                    مرحبا بك في <span className="text-[#4A90E2]">فايند</span>
                    <span className="text-orange-500">أوت</span>
                  </span>
                ) : (
                  <span>
                    Welcome to <span className="text-[#4A90E2]">Find</span>
                    <span className="text-orange-500">Out</span>
                  </span>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 text-xs"
              >
                {isRtl ? "سجّل حسابك مجانا!" : "Sign up free account"}
              </motion.p>
            </div>

            {/* النموذج */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div className="space-y-3">
                {/* الإيميل */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.01 }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex items-center gap-1 overflow-hidden rounded-xl">
                    <Mail
                      className={`absolute start-3 w-4 h-4 transition-colors z-10 ${
                        focusedInput === "email"
                          ? "text-[#4A90E2]"
                          : "text-slate-400"
                      }`}
                    />
                    <Input
                      required
                      type="email"
                      placeholder={
                        isRtl ? "البريد الإلكتروني" : "Email address"
                      }
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      className="pe-3 ps-10"
                    />
                  </div>
                </motion.div>

                {/* الباسورد */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.01 }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex items-center overflow-hidden rounded-xl">
                    <Lock
                      className={`absolute start-3 w-4 h-4 transition-colors z-10 ${
                        focusedInput === "password"
                          ? "text-[#4A90E2]"
                          : "text-slate-400"
                      }`}
                    />
                    <Input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder={isRtl ? "كلمة المرور" : "Password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedInput("password")}
                      onBlur={() => setFocusedInput(null)}
                      className="ps-10 pe-10"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute end-3 cursor-pointer z-10"
                    >
                      {showPassword ? (
                        <Eye className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors" />
                      ) : (
                        <EyeClosed className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors" />
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* تأكيد الباسورد */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.01 }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative flex items-center overflow-hidden rounded-xl">
                    <Lock
                      className={`absolute start-3 w-4 h-4 transition-colors z-10 ${
                        isPasswordMismatch
                          ? "text-rose-500"
                          : isPasswordMatch
                            ? "text-emerald-500"
                            : focusedInput === "confirmPassword"
                              ? "text-[#4A90E2]"
                              : "text-slate-400"
                      }`}
                    />
                    <Input
                      required
                      type={showConfirmedPassword ? "text" : "password"}
                      placeholder={
                        isRtl ? "تأكيد كلمة المرور" : "Confirm Password"
                      }
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onFocus={() => setFocusedInput("confirmPassword")}
                      onBlur={() => setFocusedInput(null)}
                      className={cn(
                        "ps-10 pe-10 transition-colors",
                        isPasswordMismatch &&
                          "border-rose-400 focus-visible:border-rose-500 focus-visible:ring-rose-500/20",
                        isPasswordMatch &&
                          "border-emerald-400 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20",
                      )}
                    />
                    <div
                      onClick={() => setConfirmedShowPassword((s) => !s)}
                      className="absolute end-3 cursor-pointer z-10"
                    >
                      {showConfirmedPassword ? (
                        <Eye className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors" />
                      ) : (
                        <EyeClosed className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors" />
                      )}
                    </div>
                  </div>

                  {/* 🌟 رسالة وتنبيه الـ Validation لعدم التطابق أو التطابق 🌟 */}
                  <AnimatePresence>
                    {isPasswordMismatch && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-1 text-[11px] text-rose-500 mt-1 px-1 font-medium"
                      >
                        <X className="w-3 h-3" />
                        {isRtl
                          ? "كلمات المرور غير متطابقة"
                          : "Passwords do not match"}
                      </motion.p>
                    )}

                    {isPasswordMatch && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-1 text-[11px] text-emerald-600 mt-1 px-1 font-medium"
                      >
                        <Check className="w-3 h-3" />
                        {isRtl ? "كلمات المرور متطابقة" : "Passwords match"}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* زرار Sign Up */}
              <motion.button
                whileHover={{ scale: isPasswordMismatch ? 1 : 1.01 }}
                whileTap={{ scale: isPasswordMismatch ? 1 : 0.99 }}
                type="submit"
                disabled={isLoading || isPasswordMismatch}
                className={cn(
                  "w-full relative group/button mt-5 transition-opacity",
                  isPasswordMismatch && "opacity-60 cursor-not-allowed",
                )}
              >
                <div className="relative overflow-hidden cursor-pointer bg-header text-white font-medium h-11 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:bg-slate-800">
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <div className="w-4 h-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.span
                        key="button-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-1.5 text-sm font-medium"
                      >
                        {locale === "ar" ? "إنشاء حساب" : "Sign Up"}
                        <ArrowRight className="w-4 h-4 rtl:group-hover/button:-translate-x-1 ltr:group-hover/button:translate-x-1 transition-transform rtl:rotate-180" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              {/* Divider */}
              <div className="relative mt-3 mb-4 flex items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="mx-3 text-xs text-slate-400">
                  {locale === "ar" ? "أو" : "or"}
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* زرار Google */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                className="w-full relative group/google"
              >
                <div className="relative overflow-hidden bg-white text-slate-700 font-medium h-11 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                  <span className="text-[#4A90E2] font-bold text-sm">
                    <Google />
                  </span>{" "}
                  <span className="text-slate-700 text-xs font-medium">
                    {locale === "ar"
                      ? "تسجيل حساب بقوقل"
                      : "Sign up with Google"}
                  </span>
                </div>
              </motion.button>

              {/* رابط Sign in */}
              <p className="text-center text-xs text-slate-500 mt-4">
                {locale === "ar"
                  ? " لديك حساب بالفعل؟"
                  : "Already have an account? "}
                <Link
                  href="/auth/login"
                  className="text-[#4A90E2] font-semibold hover:underline"
                >
                  {locale === "ar" ? "تسجيل الدخول" : "Sign in"}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
