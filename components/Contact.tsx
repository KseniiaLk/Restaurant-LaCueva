"use client";

import * as React from "react";
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
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [eventData, setEventData] = React.useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "10",
    type: "private",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success(t("contact.toast"));
    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  const handleEventSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success(t("events.toast"));
    setEventData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "10",
      type: "private",
      message: "",
    });
  };

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
          viewport={{ once: true }}
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
            viewport={{ once: true }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <item.icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 font-medium">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

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

            <div id="events" className="bg-card rounded-2xl p-4 shadow-xl">
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
        </div>
      </div>
    </section>
  );
}
