"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState, useRef } from "react";

export default function Template({ children }) {
  const pathname = usePathname();
  const locale = useLocale();
  const isRtl = locale === "ar";

  // حالة لتحديد اتجاه التنقل: 'forward' أو 'back'
  const [direction, setDirection] = useState("forward");
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // جلب السجل الحالي من sessionStorage
    const historyStack = JSON.parse(
      sessionStorage.getItem("nav_history") || "[]",
    );

    const currentIndex = historyStack.indexOf(pathname);
    const prevIndex = historyStack.indexOf(prevPathRef.current);

    if (currentIndex !== -1 && prevIndex !== -1 && currentIndex < prevIndex) {
      // المستخدم رجع لصفحة سابقة
      setDirection("back");
    } else {
      // المستخدم بينتقل لصفحة جديدة
      setDirection("forward");
      if (currentIndex === -1) {
        historyStack.push(pathname);
        sessionStorage.setItem("nav_history", JSON.stringify(historyStack));
      }
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  // تحديث أبعاد الحركة بناءً على الاتجاه واللغة
  const getXOffset = (type) => {
    const isBack = direction === "back";

    if (type === "initial") {
      // لو العميل راجع للخلف: يعكس الاتجاه تماماً
      if (isBack) {
        return isRtl ? "100vw" : "-100vw";
      }
      return isRtl ? "-100vw" : "100vw";
    }

    if (type === "exit") {
      if (isBack) {
        return isRtl ? "-100vw" : "100vw";
      }
      return isRtl ? "100vw" : "-100vw";
    }

    return 0;
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: getXOffset("initial"),
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      x: getXOffset("exit"),
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
