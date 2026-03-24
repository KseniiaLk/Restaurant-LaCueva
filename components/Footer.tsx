"use client";

import { motion } from "motion/react";

import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    [t("footer.section.about")]: [
      { label: t("footer.link.history"), href: "#about" },
      { label: t("footer.link.team"), href: "#story" },
    ],
    [t("footer.section.services")]: [
      { label: t("footer.link.menu"), href: "#menu" },
      { label: t("footer.link.gallery"), href: "#gallery" },
      { label: t("footer.link.reservations"), href: "#contact" },
      { label: t("footer.link.events"), href: "#events" },
    ],
    [t("footer.section.contact")]: [
      { label: t("contact.info.address.content"), href: "#contact" },
      { label: t("contact.info.phone.content"), href: "tel:+34604127064" },
      { label: t("contact.info.email.content"), href: "mailto:Lacueva708@gmail.com" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <motion.div
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="mb-12 flex flex-col items-center">
          <a href="#home" className="flex flex-col items-center">
            <span className="mb-2 text-lg font-light tracking-[0.2em] text-[#d4af37] drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)] md:text-xl">
              Grottan
            </span>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <svg
                viewBox="0 0 16 10"
                className="h-10 w-auto shrink-0 self-center rounded-sm md:h-12"
              >
                <rect width="16" height="10" fill="#006AA7" />
                <rect x="5" width="2" height="10" fill="#FECC00" />
                <rect y="4" width="16" height="2" fill="#FECC00" />
              </svg>
              <Logo className="h-36 w-auto self-center md:h-48" />
              <svg
                viewBox="0 0 24 16"
                className="h-10 w-auto shrink-0 self-center rounded-sm md:h-12"
              >
                <rect width="24" height="16" fill="#C60B1E" />
                <rect y="5.33" width="24" height="5.33" fill="#FFC400" />
              </svg>
            </div>
          </a>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-medium">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={`${link.label}-${link.href}`}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-primary-foreground/20 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} La Cueva. {t("footer.rights")}
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t("footer.link.privacy")}
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {t("footer.link.terms")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
