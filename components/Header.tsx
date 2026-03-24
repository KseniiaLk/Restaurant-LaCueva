"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "./ui/button";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.story"), href: "#story" },
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const navLinkClass = isScrolled
    ? "text-[#3d2b1f]/80 hover:text-[#2c1810]"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#2c1810]/[0.06] bg-[#f7f2eb]/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center gap-8">
          <div />

          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${navLinkClass} group relative transition-colors`}
              >
                {item.label}
                <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex ml-auto">
            <Button
              className="bg-[#E8DFD5] text-[#2C1810] hover:bg-[#E2D6C8] rounded-full"
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.event")}
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.book")}
            </Button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? "text-[#2c1810]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#2c1810]/[0.08] bg-[#f7f2eb]/98 py-4 backdrop-blur-md md:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#3d2b1f]/85 hover:text-[#2c1810] py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <Button
                  className="bg-[#E8DFD5] text-[#2C1810] hover:bg-[#E2D6C8] flex-1 rounded-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("events")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("nav.event")}
                </Button>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 rounded-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("nav.book")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
