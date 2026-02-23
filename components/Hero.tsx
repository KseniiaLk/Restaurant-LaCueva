"use client";

import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/main.png"
          alt="Restaurant interior"
          className="h-full w-full object-cover"
        />
        <div className="from-black/60 via-black/40 to-background/90 absolute inset-0 bg-gradient-to-b" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-24 mb-4 inline-block translate-y-10 rounded-full border border-secondary/30 px-4 py-2">
            <span className="text-secondary text-sm tracking-widest uppercase">
              {t("hero.badge")}
            </span>
          </div>

          <div className="-mb-8 flex justify-center">
            <Logo className="h-[22rem] w-auto md:h-[30rem]" />
          </div>

          <h1
            className="mb-4 font-serif text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", lineHeight: "1.2" }}
          >
            {t("hero.title.line1")}{" "}
            <span className="text-white">{t("hero.title.line2")}</span>
          </h1>


          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 transition-all hover:scale-105"
              size="lg"
            >
              {t("hero.cta.menu")}
            </Button>
            <Button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              variant="outline"
              className="hover:bg-white/10 rounded-lg border-2 border-white/80 bg-transparent px-8 py-4 text-white transition-all hover:scale-105"
              size="lg"
            >
              {t("hero.cta.about")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
