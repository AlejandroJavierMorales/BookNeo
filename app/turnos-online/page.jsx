import { getPageSeo } from "../lib/getPageSeo";

export async function generateMetadata() {
    return getPageSeo("/turnos-online");
}

export default function TurnosOnline() {
    return (
        <section className="container mt-5 mb-5">

            <h1>Sistema de Turnos Online</h1>

            <p className="text-muted">
                BookNeo es un sistema de turnos online que permite gestionar agendas, reservas y disponibilidad en tiempo real.
                Ideal para negocios que trabajan con citas, servicios o actividades programadas.
            </p>

            <h2>Gestioná tus turnos de forma simple</h2>
            <p className="text-muted">
                Permití que tus clientes reserven turnos desde cualquier dispositivo, sin llamadas ni mensajes.
                Organizá tu agenda de forma automática y evitá errores o sobre reservas.
            </p>

            <h2>Optimización total de la agenda</h2>
            <p className="text-muted">
                BookNeo evita horarios vacíos y mejora la ocupación de tu negocio, asegurando una gestión eficiente de cada turno disponible.
            </p>

        </section>
    );
}