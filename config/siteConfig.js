// config/siteConfig.js

export const siteConfig = {
    name: "BookNeo",

    siteType: "multi", // 👉 "landing" | "multi"

    poweredby: "https://www.calamuchita.ar",

    contact: {
        address: "Alberdi 1506, Los Reartes, Córdoba",
        phone: "5493546562855",
        email: "info@calamuchita.ar",
        web: "https://www.bookneo.app",
    },

    social: {
        instagram: "https://www.instagram.com/calamuchitar",
        facebook: "https://facebook.com/calamuchitar",
        /* tiktok: "https://tiktok.com/@mountainhotel",
        x: "https://x.com/mountainhotel", */
    },

    url: "https://www.bookneo.app",

    pages: [
        {
            path: "",
            label: "Inicio",
            seo: {
                title: "BookNeo | Turnos Online, Reservas y Gestión de Servicios",
                description:
                    "Bookneo es una plataforma de turnos online y gestión de reservas que permite organizar servicios, actividades y agendas en tiempo real. Ideal para alojamientos, prestadores de servicios de salud, deportivos y negocios que necesitan optimizar su disponibilidad y evitar sobre reservas.",

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

                openGraph: {
                    title: "BookNeo | Turnos Online, Reservas y Gestión de Servicios",
                    description:
                        "Bookneo es una plataforma de turnos online y gestión de reservas que permite organizar servicios, actividades y agendas en tiempo real. Ideal para alojamientos, prestadores de servicios de salud, deportivos y negocios que necesitan optimizar su disponibilidad y evitar sobre reservas.",
                    image: "/images/HeroBookNeo.png",
                },

                twitter: {
                    title: "BookNeo",
                    description: "Turnos Online, Reservas y Gestión de Servicios",
                    image: "/images/logoBookNeo.png",
                },

                robots: {
                    index: true,
                    follow: true,
                },

                canonical: "https://www.bookneo.app",
            },
        },
        {
            path: "/turnos-online",
            label: "Turnos Online",
            seo: {
                title: "Sistema de Turnos Online | BookNeo",
                description: "Gestioná turnos online de forma simple con BookNeo. Agenda digital, reservas en tiempo real y optimización de disponibilidad.",
                keywords: ["turnos online", "sistema de turnos", "agenda digital", "reservas online"],
                canonical: "/turnos-online",
            },
        },
        {
            path: "/agenda-online",
            label: "Agenda Online",
            seo: {
                title: "Agenda Online para Negocios | BookNeo",
                description: "Organizá tu agenda online con BookNeo. Sistema simple para gestionar turnos, servicios y disponibilidad.",
                keywords: ["agenda online", "gestión de agenda", "turnos digitales"],
                canonical: "/agenda-online",
            },
        },
        {
            path: "/reservas-servicios",
            label: "Reservas de Servicios | BookNeo",
            seo: {
                title: "Sistema de Reservas de Servicios | BookNeo",
                description: "Gestioná reservas de servicios y actividades en tiempo real con BookNeo. Evitá sobre reservas y optimizá tu negocio.",
                keywords: ["reservas online", "reservas de servicios", "gestión de reservas"],
                canonical: "/reservas-servicios",
            },
        },
       /*  {
            path: "/contacto",
            label: "Contacto",
            seo: {
                title: "Contacto | BookNeo",
                description:
                    "Hacé tu consulta por WhatsApp.",
            },
        }, */
    ],

    colors: {
        primary: "#25d366",
        primaryHover: "#1ebe5d",
    },
};