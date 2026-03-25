import { getSiteUrl } from "@/lib/site";

export function RestaurantJsonLd() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Grottan La Cueva",
    alternateName: ["La Cueva", "Grottan"],
    image: `${base}/main.png`,
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
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "18:00",
        closes: "01:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "14:00",
        closes: "01:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
