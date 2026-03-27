"use client";

import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/MAIN.png"
          alt="Restaurant interior"
          className="h-full w-full object-cover object-center"
        />
        <div className="from-black/60 via-black/40 to-background/90 absolute inset-0 bg-gradient-to-b" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-14 flex flex-col items-center md:mt-20 lg:mt-40">
            <div className="-mb-24 flex justify-center">
              <span className="text-[#d4af37] text-2xl font-light tracking-[0.22em] normal-case drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-3xl">
                Grottan
              </span>
            </div>
            <div className="-mb-8 flex justify-center">
              <Logo className="h-[22rem] w-auto md:h-[28rem] lg:h-[26rem]" />
            </div>
          </div>

          <h1 className="mt-10 mb-6 text-center md:mb-8">
            <span className="text-white/80 text-2xl font-light tracking-[0.22em] normal-case md:text-3xl">
              {t("hero.title.line1")}
              <span className="text-[#d4af37]"> {t("hero.title.line2")}</span>
            </span>
          </h1>


          <motion.div
            className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              onClick={() =>
                document.getElementById("menu")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full border border-primary/30 px-6 py-2 text-sm tracking-widest uppercase transition-all hover:scale-105"
              size="lg"
            >
              {t("hero.cta.menu")}
            </Button>
          </motion.div>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary/50 text-primary hover:bg-primary/10 h-9 rounded-lg px-4 gap-2"
            >
              <span className="text-lg leading-none">
                {language === "en" && "🇬🇧"}
                {language === "es" && "🇪🇸"}
                {language === "sv" && "🇸🇪"}
              </span>
              {language.toUpperCase()}
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
