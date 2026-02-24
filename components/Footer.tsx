"use client";

import { Instagram, Facebook } from "lucide-react";

import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const footerLinks = {
    [t("footer.section.about")]: [
      { label: t("footer.link.history"), href: "#about" },
      { label: t("footer.link.team"), href: "#story" },
    ],
    [t("footer.section.services")]: [
      { label: t("footer.link.menu"), href: "#menu" },
      { label: t("footer.link.reservations"), href: "#contact" },
      { label: t("footer.link.events"), href: "#" },
    ],
    [t("footer.section.contact")]: [
      { label: t("contact.info.address.content"), href: "#contact" },
      { label: t("contact.info.phone.content"), href: "tel:+34604127064" },
      { label: t("contact.info.email.content"), href: "mailto:Lacueva708@gmail.com" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-24 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

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
      </div>
    </footer>
  );
}
