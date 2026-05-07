import { getPageSeo } from "../lib/getPageSeo";

export async function generateMetadata() {
    return getPageSeo("/reservas-servicios");
}

export default function ReservasServicios() {
    return (
        <section className="container mt-5 mb-5">

            <h1>Reservas de Servicios y Actividades</h1>

            <p className="text-muted">
                BookNeo permite gestionar reservas de servicios, actividades y experiencias en tiempo real.
                Controlá la disponibilidad, evitá sobre reservas y mejorá la organización de tu negocio.
            </p>

            <h2>Reservas centralizadas</h2>
            <p className="text-muted">
                Administrá todas tus reservas desde un solo sistema, sin importar el tipo de servicio o actividad que ofrezcas.
            </p>

            <h2>Experiencia mejorada para tus clientes</h2>
            <p className="text-muted">
                Ofrecé una experiencia moderna y profesional permitiendo reservas online simples y rápidas.
            </p>

        </section>
    );
}