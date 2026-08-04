"use client";

import { motion } from "motion/react";
import * as React from "react";

import { ImageWithFallback } from "../media/ImageWithFallback";
import { useLanguage } from "../providers/LanguageProvider";
import { Button } from "../ui/button";


const ALLERGEN_IMAGES: Record<string, { src: string; alt: string }> = {
  gluten: { src: "/allergens/gluten.svg", alt: "Gluten" },
  lacteos: { src: "/allergens/lacteos.svg", alt: "Lácteos" },
  pescado: { src: "/allergens/pescado.svg", alt: "Pescado" },
  "frutos-secos": { src: "/allergens/frutos-secos.svg", alt: "Frutos secos" },
  huevos: { src: "/allergens/huevos.svg", alt: "Huevos" },
  crustaceos: {src: "/allergens/crustaceos.svg", alt: "Crustáceos"},
  mostaza: {src: "/allergens/mostaza.svg",alt: "Mostaza"},
  soja: {src: "/allergens/soja.svg",alt: "Soja"},
};

export function Menu() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState("all");

 const menuItems = [
  {
    id: "chocolate-2",
    name: t("menu.item.foto8.name"),
    description: t("menu.item.foto8.desc"),
    price: "€11",
    priceNote: "½ €7",
    image: "/Food8.png?v=2",
    category: "entradas",
    allergens: ["gluten", "crustaceos", "huevos", "lacteos"],
  },
  {
    id: "salmon-2",
    name: t("menu.item.foto7.name"),
    description: t("menu.item.foto7.desc"),
    price: "€11",
    priceNote: "½ €7",
    image: "/Food7.png?v=2",
    category: "entradas",
   
    allergens: ["gluten", "pescado", "mostaza", "lacteos","huevos"],
  },
  {
    id: "ribeye-1",
    name: t("menu.item.foto1.name"),
    description: t("menu.item.foto1.desc"),
    price: "€22",
    image: "/Food11.JPG?v=1",
    category: "plato-principal",
    
    allergens: ["lacteos", "huevos", "soja"],
  },
  {
    id: "pasta-1",
    name: t("menu.item.foto2.name"),
    description: t("menu.item.foto2.desc"),
    price: "€20",
    image: "/Food2.jpg?v=3",
    category: "plato-principal",
   
    allergens: ["gluten", "huevos", "lacteos"],
  },
  {
    id: "salmon-1",
    name: t("menu.item.foto3.name"),
    description: t("menu.item.foto3.desc"),
    price: "€19",
    image: "/Food3.jpg?v=3",
    category: "plato-principal",

    allergens: ["lacteos", "huevos"],
  },
  {
    id: "food-9",
    name: t("menu.item.food9.name"),
    description: t("menu.item.food9.desc"),
    price: "€18",
    image: "/Food9.png?v=2",
    category: "plato-principal",
  
   allergens: ["gluten", "huevos", "lacteos", "soja"],
  },
  {
    id: "food-10",
    name: t("menu.item.food10.name"),
    description: t("menu.item.food10.desc"),
    price: "€26.50",
    image: "/Food101.jpg?v=1",
    category: "plato-principal",
    
    allergens: ["gluten", "pescado", "lacteos", "huevos", "crustaceos"],
  },
  {
    id: "pasta-2",
    name: t("menu.item.foto6.name"),
    description: t("menu.item.foto6.desc"),
    price: "€11",
    image: "/Food6.jpg?v=3",
    category: "postres",
    // Bizcocho de almendra
    allergens: ["gluten", "lacteos", "huevos", "frutos-secos"],
  },
  {
    id: "chocolate-1",
    name: t("menu.item.chocolate.name"),
    description: t("menu.item.chocolate.desc"),
    price: "€8",
    image: "/Food4.png?v=2",
    category: "postres",
    // Crumble
    allergens: ["gluten"],
  },
];

  const filters = [
    { id: "all", label: t("menu.filter.all") },
    { id: "entradas", label: t("menu.filter.entradas") },
    { id: "plato-principal", label: t("menu.filter.platoPrincipal") },
    { id: "postres", label: t("menu.filter.postres") },
  ];

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 4);

  return (
    <section id="menu" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("menu.badge")}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAll(false);
              }}
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

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-card overflow-hidden rounded-2xl shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className={`h-56 w-full object-cover ${item.image.startsWith("/Food2.") ? "object-[60%_center]" : ""}`}
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-foreground font-serif text-lg">
                      {item.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-primary text-sm font-medium block">
                        {item.price}
                      </span>
                      {"priceNote" in item && (item as { priceNote?: string }).priceNote && (
                        <span className="text-primary text-sm font-medium block">
                          {(item as { priceNote: string }).priceNote}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

            
              {item.allergens && item.allergens.length > 0 && (
                <div className="px-4 pb-4 flex flex-wrap gap-2 items-center">
                  {item.allergens.map((allergen) => {
                    const allergenData = ALLERGEN_IMAGES[allergen];
                    if (!allergenData) return null;

                    return (
                      <img
                        key={allergen}
                        src={allergenData.src}
                        alt={allergenData.alt}
                        title={t(`menu.allergen.${allergen}`) || allergenData.alt}
                        className="h-6 w-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-4 transition-all hover:scale-105"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? t("menu.cta.less") : t("menu.cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
