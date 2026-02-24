"use client";

import { motion } from "motion/react";
import { Clock, Users, Award } from "lucide-react";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t("about.feature.experience.title"),
      description: t("about.feature.experience.desc"),
    },
    {
      icon: Users,
      title: t("about.feature.team.title"),
      description: t("about.feature.team.desc"),
    },
    {
      icon: Award,
      title: t("about.feature.michelin.title"),
      description: t("about.feature.michelin.desc"),
    },
  ];

  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex justify-center">
          <div className="rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              {t("about.badge")}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="/RobEsp.jpg"
                alt="RobEsp"
                className="h-[500px] w-full object-cover object-[50%_30%]"
              />
            </div>
            <div className="bg-secondary/20 absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h2 className="text-foreground mb-6 font-serif text-4xl md:text-5xl">
              {t("about.title.line1")}
              <span className="text-primary"> {t("about.title.line2")}</span>
            </h2>

            <p className="text-muted-foreground mb-6 text-lg">
              {t("about.paragraph1")}
            </p>

            {t("about.paragraph2") ? (
              <p className="text-muted-foreground mb-8 text-lg">
                {t("about.paragraph2")}
              </p>
            ) : null}

            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <feature.icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 font-medium">
                      {feature.title}
                    </h4>
                    {feature.description ? (
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
