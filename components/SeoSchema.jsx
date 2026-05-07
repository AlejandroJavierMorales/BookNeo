export default function SeoSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BookNeo",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
            "Plataforma de turnos online, reservas y gestión de servicios para negocios, alojamientos y prestadores.",
        url: "https://www.bookneo.app",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "ARS",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}