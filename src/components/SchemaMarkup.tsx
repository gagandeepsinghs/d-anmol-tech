export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "D Anmol Tech",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo.png`, // Assuming logo exists or will exist
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8900", // Replace with real phone
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/danmoltech", // Replace with real links
      "https://twitter.com/danmoltech"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D Anmol Tech",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/opengraph-image`, 
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}`,
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "telephone": "+1-234-567-8900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Lane",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
