import { Instagram, Facebook } from "lucide-react";

import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const footerLinks = {
    About: [
      { label: "History", href: "#about" },
      { label: "Team", href: "#about" },
      { label: "Careers", href: "#" },
    ],
    Services: [
      { label: "Menu", href: "#menu" },
      { label: "Reservations", href: "#contact" },
      { label: "Events", href: "#" },
    ],
    Contact: [
      { label: "Calle Artilleros 3 03002 Alicante, Spain", href: "#contact" },
      { label: "+34 604 12 70 64", href: "tel:+34604127064" },
      { label: "Lacueva708@gmail.com", href: "mailto:Lacueva708@gmail.com" },
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
              Enjoy good food, right in the city.
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
                  <li key={link.label}>
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
              © {currentYear} La Cueva. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
