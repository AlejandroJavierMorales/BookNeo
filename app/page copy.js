// app/page.js

import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import Services from "../components/Services";
import Location from "../components/Location";
import Contact from "../components/Contact";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";
import { getPageSeo } from "./lib/getPageSeo";

/* export const metadata = getPageSeo(""); */
export async function generateMetadata() {
  return getPageSeo("");
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />
      {/* GENERAL */}
      <section id="general" className="mt-5">
        <div className="text-center mt-5 mb-5 pb-4 p-2">
          <h3 style={{ fontSize: "16px" }}>El Lugar Correcto, el Momento Exacto</h3>
          <p className="text-muted">
            Próximamente estará disponible el Sistema de Turnos, Reservas y Gestión de Servicios que te llevará al siguiente nivel!
          </p>
          <p className="text-muted">No más sobre reservas ni turnos vacíos, mejorá la experiencia de tus clientes y gestioná todo desde un mismo lugar...</p>
          <p className="text-muted">Prestadores de servicios de salud, deportivos, turisticos, recreativos y de cualquier atividad contarán con una Herramienta de Nueva Generación que viene a revolucionar la manera en la que gestionan Turnos, Reservas, Servicios y Actividades.</p>
          <p className="text-muted">Online, simple, óptimo : BookNeo</p>
        </div>
      </section>

      {/* HABITACIONES */}
      {/* <section id="habitaciones">
        <div className="text-center mt-5">
          <h2>Habitaciones</h2>
          <p className="text-muted">
            Elegí la opción ideal para tu estadía en Embalse
          </p>
        </div>
        <Rooms />
      </section> */}

      {/* SERVICIOS */}
      {/* <section id="servicios">
        <Services />
      </section> */}

      {/* UBICACIÓN */}
      {/*  <section id="ubicacion">
        <Location />
      </section> */}

      {/* CONTACTO */}
      <section id="contacto">
        <Contact />
      </section>

      {/* FOOTER */}
      <section id="footer">
        <Footer />
      </section>

      {/* BOTÓN WHATSAPP */}
      <WhatsAppFloat />
    </>
  );
}