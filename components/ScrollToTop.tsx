"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export function ScrollToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={`border-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full border shadow-lg transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      aria-label={t("ui.scrollToTop")}
    >
      <ArrowUp className="size-5" strokeWidth={2.25} aria-hidden />
    </button>
  );
}
