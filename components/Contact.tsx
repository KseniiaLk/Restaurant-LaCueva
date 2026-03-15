"use client";

import * as React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  const EMAILJS_SERVICE_ID = "service_lwi4o5j";
  const EMAILJS_TEMPLATE_ID = "template_lnb2p0s";
  const EMAILJS_EVENT_TEMPLATE_ID = "template_nmsn38j";
  const EMAILJS_PUBLIC_KEY = "ol8m9qtnLYjQWqHvS";
  const RESTAURANT_EMAIL = "lacuevarestlacueva@gmail.com";
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [eventData, setEventData] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "10",
    type: "private",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const params = {
        email: formData.email,
        user_name: formData.name,
        name: formData.name,
        phone: formData.phone,
        reservation_date: formData.date,
        reservation_time: formData.time,
        guests: formData.guests,
        title: `Reservation for ${formData.guests} guests on ${formData.date} at ${formData.time}`,
      };

      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
          publicKey: EMAILJS_PUBLIC_KEY,
        }),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            ...params,
            email: RESTAURANT_EMAIL,
          },
          { publicKey: EMAILJS_PUBLIC_KEY },
        ),
      ]);

      toast.success(t("contact.toast"));
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
      });
    } catch (error) {
      console.error("EmailJS reservation error", error);
      toast.error(t("contact.toastError"));
    }
  };

  const handleEventSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const params = {
        email: eventData.email,
        user_name: eventData.name,
        name: eventData.name,
        phone: eventData.phone,
        reservation_date: eventData.date,
        reservation_time: eventData.time,
        guests: eventData.guests,
        event_type: eventData.type,
        message: eventData.message,
        title: `Event booking - ${eventData.type} on ${eventData.date} at ${eventData.time}`,
      };

      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_EVENT_TEMPLATE_ID, params, {
          publicKey: EMAILJS_PUBLIC_KEY,
        }),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_EVENT_TEMPLATE_ID,
          {
            ...params,
            email: RESTAURANT_EMAIL,
          },
          { publicKey: EMAILJS_PUBLIC_KEY },
        ),
      ]);

      toast.success(t("events.toast"));
      setEventData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "10",
        type: "private",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS event error", error);
      toast.error(t("events.toastError"));
    }
  };

  const whatsappNumber = "34604127064";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Calle Artilleros 3 03002 Alicante, Spain",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+34 604 12 70 64",
      whatsapp: true,
    },
    {
      icon: Mail,
      title: "Email",
      content: "Lacueva708@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sun: 18:00 - 01:30",
    },
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-32">
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
              {t("contact.badge")}
            </span>
          </div>
          <h2 className="text-foreground mb-4 font-serif text-4xl md:text-5xl">
            {t("contact.title.line1")}{" "}
            <span className="text-primary">{t("contact.title.line2")}</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                    placeholder="Juan Pérez"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    placeholder="name@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({ ...formData, phone: event.target.value })
                    }
                    placeholder="+34 604 12 70 64"
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm">
                      {t("contact.form.date")}
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(event) =>
                        setFormData({ ...formData, date: event.target.value })
                      }
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm">
                      {t("contact.form.time")}
                    </label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(event) =>
                      setFormData({ ...formData, time: event.target.value })
                    }
                    min="18:30"
                    max="00:30"
                    step={1800}
                    required
                    className="w-full"
                  />
                  </div>
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("contact.form.guests")}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(event) =>
                      setFormData({ ...formData, guests: event.target.value })
                    }
                    className="bg-input-background border-border focus:ring-ring w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num}{" "}
                        {num === 1
                          ? t("contact.form.guest")
                          : t("contact.form.guestsPlural")}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                >
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>

            <div id="events" className="bg-card mt-6 rounded-2xl p-4 shadow-xl">
              <h3 className="text-foreground mb-4 font-serif text-xl">
                {t("events.form.title")}
              </h3>
              <form onSubmit={handleEventSubmit} className="space-y-3">
                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("events.form.name")}
                  </label>
                  <Input
                    type="text"
                    value={eventData.name}
                    onChange={(event) =>
                      setEventData({ ...eventData, name: event.target.value })
                    }
                    placeholder="Juan Pérez"
                    required
                    className="h-7 w-full text-sm"
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("events.form.email")}
                  </label>
                  <Input
                    type="email"
                    value={eventData.email}
                    onChange={(event) =>
                      setEventData({ ...eventData, email: event.target.value })
                    }
                    placeholder="name@email.com"
                    required
                    className="h-7 w-full text-sm"
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("events.form.phone")}
                  </label>
                  <Input
                    type="tel"
                    value={eventData.phone}
                    onChange={(event) =>
                      setEventData({ ...eventData, phone: event.target.value })
                    }
                    placeholder="+34 604 12 70 64"
                    required
                    className="h-7 w-full text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-foreground mb-2 block text-sm">
                      {t("events.form.date")}
                    </label>
                    <Input
                      type="date"
                      value={eventData.date}
                      onChange={(event) =>
                        setEventData({ ...eventData, date: event.target.value })
                      }
                      required
                      className="h-7 w-full text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-foreground mb-2 block text-sm">
                      {t("events.form.time")}
                    </label>
                  <Input
                    type="time"
                    value={eventData.time}
                    onChange={(event) =>
                      setEventData({ ...eventData, time: event.target.value })
                    }
                    min="18:30"
                    max="00:30"
                    step={1800}
                    required
                    className="h-7 w-full text-sm"
                  />
                  </div>
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("events.form.guests")}
                  </label>
                  <Input
                    type="number"
                    min={1}
                    value={eventData.guests}
                    onChange={(event) =>
                      setEventData({
                        ...eventData,
                        guests: event.target.value,
                      })
                    }
                    className="h-7 w-full text-sm"
                  />
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("events.form.type")}
                  </label>
                  <select
                    value={eventData.type}
                    onChange={(event) =>
                      setEventData({ ...eventData, type: event.target.value })
                    }
                    className="bg-input-background border-border focus:ring-ring h-7 w-full rounded-lg border px-2 py-0.5 text-sm focus:outline-none focus:ring-2"
                  >
                    <option value="private">
                      {t("events.form.type.private")}
                    </option>
                    <option value="birthday">
                      {t("events.form.type.birthday")}
                    </option>
                    <option value="corporate">
                      {t("events.form.type.corporate")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm">
                    {t("events.form.message")}
                  </label>
                  <Textarea
                    value={eventData.message}
                    onChange={(event) =>
                      setEventData({
                        ...eventData,
                        message: event.target.value,
                      })
                    }
                    placeholder=""
                    className="min-h-16 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                >
                  {t("events.form.submit")}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <item.icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 font-medium">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground flex items-center gap-2">
                      {item.content}
                      {"whatsapp" in item && item.whatsapp && (
                        <a
                          href={`https://wa.me/${whatsappNumber}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Chat on WhatsApp"
                          className="inline-flex shrink-0"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 text-[#25D366]"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.tripadvisor.se/Restaurant_Review-g1064230-d34244977-Reviews-Grottan_la_Cueva-Alicante_Costa_Blanca_Province_of_Alicante_Valencian_Community.html"
                target="_blank"
                rel="noreferrer"
                aria-label="TripAdvisor"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-3 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.976 5.976 0 0 0 4.075 1.6 5.997 5.997 0 0 0 4.04-10.43L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.91l-2.789 3.024a2.396 2.396 0 0 0-3.43 0L6.496 7.165a11.48 11.48 0 0 1 5.504-.91zM6.003 9.03a3.599 3.599 0 0 1 3.598 3.598 3.599 3.599 0 0 1-3.598 3.598A3.599 3.599 0 0 1 2.405 12.63 3.599 3.599 0 0 1 6.003 9.03zm11.994 0a3.599 3.599 0 0 1 3.598 3.598 3.599 3.599 0 0 1-3.598 3.598 3.599 3.599 0 0 1-3.598-3.598 3.599 3.599 0 0 1 3.598-3.598zM6.003 11.228a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm11.994 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
                </svg>
                <span className="text-sm font-medium">TripAdvisor</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Grottan+la+Cueva+Alicante"
                target="_blank"
                rel="noreferrer"
                aria-label="Google"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-3 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-medium">Google</span>
              </a>
            </div>

            <div className="bg-card overflow-hidden rounded-2xl shadow-lg">
              <div className="h-64">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=La%20Cueva%20grottan%2C%20Calle%20Artilleros%203%2003002%20Alicante%2C%20Spain"
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full w-full"
                  aria-label="Open address in Google Maps"
                >
                  <iframe
                    title="Calle Artilleros 3 03002 Alicante, Spain"
                    src="https://maps.google.com/maps?q=Calle%20Artilleros%203%2003002%20Alicante%2C%20Spain&z=17&ie=UTF8&iwloc=B&output=embed"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
              <div className="border-border/60 border-t p-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=La%20Cueva%20grottan%2C%20Calle%20Artilleros%203%2003002%20Alicante%2C%20Spain"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
