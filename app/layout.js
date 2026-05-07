// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';


import './globals.css';
import Header from '../components/Header';


export const metadata = {
  metadataBase: new URL("https://www.cabanasecosdelvalle.com.ar"),

  title: {
    default: "BookNeo | Turnos Online, Reservas y Gestión de Servicios",
    template: "%s | BookNeo",
  },

  description:
    "Bookneo es una plataforma de turnos online y gestión de reservas que permite organizar servicios, actividades y agendas en tiempo real. Ideal para alojamientos, prestadores de servicios de salud, deportivos y negocios que necesitan optimizar su disponibilidad y evitar sobre reservas.",
  siteName: "BookNeo",

  keywords: [
    "turnos online",
    "sistema de turnos",
    "agenda online",
    "reservas online",
    "gestión de turnos",
    "reservas de actividades",
    "software de reservas",
    "agenda para negocios",
    "reservas turismo",
    "turnero online"
  ],

  authors: [{ name: "BookNeo" }],
  creator: "BookNeo",
  publisher: "BookNeo",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/BookNeo_B.ico?v=3",
    shortcut: "/BookNeo_B.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.bookneo.app",
    title: "BookNeo | Turnos Online, Reservas y Gestión de Servicios",
    description:
      "Bookneo es una plataforma de turnos online y gestión de reservas que permite organizar servicios, actividades y agendas en tiempo real. Ideal para alojamientos, prestadores de servicios de salud, deportivos y negocios que necesitan optimizar su disponibilidad y evitar sobre reservas.",
    siteName: "BookNeo",
    images: [
      {
        url: "/images/logoBookNeo_slogan.webp",
        width: 512,
        height: 512,
        alt: "BookNeo | Turnos Online, Reservas y Gestión de Servicios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BookNeo | Turnos Online, Reservas y Gestión de Servicios",
    description:
      "Bookneo es una plataforma de turnos online y gestión de reservas que permite organizar servicios, actividades y agendas en tiempo real. Ideal para alojamientos, prestadores de servicios de salud, deportivos y negocios que necesitan optimizar su disponibilidad y evitar sobre reservas.",
    images: ["/images/HeroBookNeo.png", "/images/logoBookNeo_slogan.webp"],
  },

  alternates: {
    canonical: "https://www.bookneo.app",
  },

  category: "tourism",

  verification: {
    google: "VqRInrBZ4IajevmaJhqHKJOMEMP6hb5xbrIw6Or6f9s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />

        <main style={{ marginTop: '80px' }}>
          {children}
        </main>

        {/* 🔥 SEO LOCAL (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "BookNeo",
              description:
                "Bookneo es una plataforma de turnos online y gestión de reservas que permite organizar servicios, actividades y agendas en tiempo real. Ideal para alojamientos, prestadores de servicios de salud, deportivos y negocios que necesitan optimizar su disponibilidad y evitar sobre reservas.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Reartes",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              telephone: "+5493546562855",
              url: "https://www.bookneo.app",
              image: "https://www.bookneo.app/images/logoBookNeo_slogan.webp",
            }),
          }}
        />
      </body>
    </html>
  );
}