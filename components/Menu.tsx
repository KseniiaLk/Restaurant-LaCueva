"use client";

import { motion } from "motion/react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageProvider";

export function Menu() {
  const { t } = useLanguage();

  const menuItems = [
    {
      name: t("menu.item.ribeye.name"),
      description: t("menu.item.ribeye.desc"),
      price: "€65",
      image: "/4.png",
    },
    {
      name: t("menu.item.pasta.name"),
      description: t("menu.item.pasta.desc"),
      price: "€48",
      image: "/1.JPG",
    },
    {
      name: t("menu.item.salmon.name"),
      description: t("menu.item.salmon.desc"),
      price: "€38",
      image: "/3.png",
    },
    {
      name: t("menu.item.chocolate.name"),
      description: t("menu.item.chocolate.desc"),
      price: "€18",
      image: "/2.png",
    },
  ];

  return (
    <section id="menu" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("menu.badge")}
            </span>
          </div>
          <h2 className="text-foreground mb-4 font-serif text-4xl md:text-5xl">
            {t("menu.title.line1")}{" "}
            <span className="text-primary">{t("menu.title.line2")}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("menu.subtitle")}
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-card overflow-hidden rounded-2xl shadow-lg"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-foreground font-serif text-lg">
                    {item.name}
                  </h3>
                  <span className="text-primary text-sm font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 transition-all hover:scale-105"
          >
            {t("menu.cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
