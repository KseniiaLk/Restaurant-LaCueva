"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

export function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState("all");
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [autoScroll, setAutoScroll] = React.useState(true);
  const autoScrollTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!autoScroll) return;
    let frameId = 0;
    let lastTime = 0;

    const tick = (time: number) => {
      const scroller = scrollerRef.current;
      if (scroller) {
        if (!lastTime) lastTime = time;
        const delta = time - lastTime;
        lastTime = time;

        const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
        const speed = 0.03; // px per ms
        const nextLeft = scroller.scrollLeft + delta * speed;

        scroller.scrollLeft =
          nextLeft >= maxScrollLeft - 1 ? 0 : nextLeft;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [autoScroll]);

  const pauseAutoScroll = React.useCallback(() => {
    setAutoScroll(false);
    if (autoScrollTimeoutRef.current) {
      window.clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = window.setTimeout(() => {
      setAutoScroll(true);
    }, 5000);
  }, []);

  const galleryItems = [
    { id: "food-1", image: "/All.JPG", category: "food", title: "Gallery" },
    { id: "food-2", image: "/All.JPG", category: "food", title: "Gallery" },
    {
      id: "interior-1",
      image: "/All.JPG",
      category: "interior",
      title: "Gallery",
    },
    {
      id: "interior-2",
      image: "/All.JPG",
      category: "interior",
      title: "Gallery",
    },
    { id: "chef-1", image: "/All.JPG", category: "chef", title: "Gallery" },
    { id: "chef-2", image: "/All.JPG", category: "chef", title: "Gallery" },
  ];

  const filters = [
    { id: "all", label: t("gallery.filter.all") },
    { id: "food", label: t("gallery.filter.food") },
    { id: "interior", label: t("gallery.filter.interior") },
    { id: "chef", label: t("gallery.filter.team") },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="bg-background py-20 md:py-32">
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
              {t("gallery.badge")}
            </span>
          </div>
          <h2 className="text-foreground mb-4 font-serif text-4xl md:text-5xl">
            {t("gallery.title.line1")}{" "}
            <span className="text-primary">{t("gallery.title.line2")}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              pauseAutoScroll();
              scrollerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
            }}
            className="bg-background/80 text-foreground hover:bg-background absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => {
              pauseAutoScroll();
              scrollerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
            }}
            className="bg-background/80 text-foreground hover:bg-background absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
          <div
            ref={scrollerRef}
            className="overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={pauseAutoScroll}
            onTouchStart={pauseAutoScroll}
          >
            <div className="flex min-w-max gap-6">
            {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative aspect-square w-72 shrink-0 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              layout
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="from-black/80 via-black/20 to-transparent absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
