import { getSiteUrl } from "@/lib/site";

export function RestaurantJsonLd() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Grottan La Cueva",
    alternateName: ["La Cueva", "Grottan"],
    image: `${base}/MAIN.png`,
    url: base,
    telephone: "+34604127064",
    email: "lacuevarestlacueva@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Artilleros 3",
      addressLocality: "Alicante",
      postalCode: "03002",
      addressCountry: "ES",
    },
    servesCuisine: ["Scandinavian", "Swedish", "European"],
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "01:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "12:00", closes: "01:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "12:00", closes: "01:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "12:00", closes: "01:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "12:00", closes: "02:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "02:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "01:30" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
