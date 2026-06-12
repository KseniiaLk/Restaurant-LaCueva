"use client";

import { Calendar, Euro, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function Events() {
 
  const whatsappUrl = "https://wa.me/604127064"; // Reemplaza con el número real

  return (
    <section id="events" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/30 px-4 py-2">
            <span className="text-primary text-sm tracking-widest uppercase">
              Próximos Eventos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Midsommar en La Cueva
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/50 max-w-sm w-full">
              <img
                src="/images/restaurant/midsommar-event.jpeg"
                alt="Midsommar Event Flyer"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              VILL DU FIRA MIDSOMMAR MED OSS?
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Disfruta con nosotros de una auténtica celebración del solsticio de verano sueco. 
              Hemos preparado un buffet tradicional con una exquisita selección de especialidades nórdicas.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/60">
                <Calendar className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Fecha</p>
                  <p className="font-medium text-sm">Viernes 19 de Junio</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/60">
                <Euro className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Precio Buffet</p>
                  <p className="font-medium text-sm">27€ por persona</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
               ¡Plazas limitadas! Reserva antes del 11 de Junio.
            </div>

           
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="h-5 w-5" />
                Reservar Mesa vía WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
