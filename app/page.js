// app/page.js

import Hero from "../components/Hero";
import Contact from "../components/Contact";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";
import { getPageSeo } from "./lib/getPageSeo";
import SeoSchema from "../components/SeoSchema";

/* export const metadata = getPageSeo(""); */
export async function generateMetadata() {
  return getPageSeo("");
}

export default function Home() {
  return (
    <>
      <SeoSchema />
      {/* HERO */}
      <Hero />
      {/* GENERAL */}
      <section id="general" className="mt-5">
        <div className="container text-center mt-5 mb-5 pb-4 p-2">

          <h2>Sistema de Turnos Online para Servicios y Actividades</h2>

          <p className="text-muted">
            BookNeo es una plataforma de turnos online y gestión de reservas diseñada para organizar servicios, actividades y agendas en tiempo real.
            Ideal para alojamientos, prestadores de servicios de salud, deportivos, turísticos y cualquier negocio que necesite optimizar su disponibilidad.
          </p>

          <h3 className="mt-4">Todo en un solo sistema</h3>

          <p className="text-muted">
            Gestioná turnos, reservas y servicios sin complicaciones. Evitá sobre reservas, eliminá horarios vacíos y mejorá la experiencia de tus clientes con una herramienta moderna, simple y eficiente.
          </p>

          <h3 className="mt-4">Adaptado a cualquier tipo de negocio</h3>

          <p className="text-muted">
            Desde alojamientos turísticos hasta centros de salud, actividades recreativas, alquileres y servicios profesionales. BookNeo se adapta a tu negocio y crece con vos.
          </p>

          <h3 className="mt-4">Próximamente disponible</h3>

          <p className="text-muted">
            Estamos lanzando una nueva generación de sistemas de turnos y reservas online. Registrate y sé de los primeros en utilizar BookNeo.
          </p>

        </div>
      </section>

      <section className="mt-5">
        <div className="container text-center">

          <h2>Funciones principales de BookNeo</h2>

          <div className="row mt-4">

            <div className="col-md-4">
              <h4>Turnos Online</h4>
              <p className="text-muted">
                Permite a tus clientes reservar turnos de forma simple y rápida desde cualquier dispositivo.
              </p>
            </div>

            <div className="col-md-4">
              <h4>Gestión de Servicios</h4>
              <p className="text-muted">
                Organizá actividades, servicios y disponibilidad en un solo sistema.
              </p>
            </div>

            <div className="col-md-4">
              <h4>Reservas en Tiempo Real</h4>
              <p className="text-muted">
                Control total de tu agenda para evitar sobre reservas y optimizar la ocupación.
              </p>
            </div>

            <section className="mt-5">
              <div className="container text-center">

                <h2>¿Para quién es BookNeo?</h2>

                <p className="text-muted">
                  BookNeo está pensado para todo tipo de negocios que trabajan con turnos o reservas:
                </p>

                <ul className="text-muted" style={{ listStyle: "none", padding: 0 }}>
                  <li>Alojamientos turísticos</li>
                  <li>Prestadores de servicios de salud</li>
                  <li>Centros deportivos y recreativos</li>
                  <li>Alquiler de equipos y actividades</li>
                  <li>Profesionales independientes</li>
                </ul>

              </div>
            </section>

          </div>
        </div>
      </section>

      <section className="mt-5 text-center">
        <h2>¿Querés ser de los primeros en usar BookNeo?</h2>
        <p className="text-muted">
          Contactanos y te avisamos cuando el sistema esté disponible.
        </p>
      </section>

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