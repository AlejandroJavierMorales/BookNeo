import { getPageSeo } from "../lib/getPageSeo";

export async function generateMetadata() {
    return getPageSeo("/agenda-online");
}

export default function AgendaOnline() {
    return (
        <section className="container mt-5 mb-5">

            <h1 className="mt-5">Agenda Online para Negocios</h1>

            <p className="text-muted">
                Con BookNeo podés gestionar tu agenda online de forma simple, rápida y eficiente.
                Organizá turnos, servicios y disponibilidad en un solo sistema accesible desde cualquier lugar.
            </p>

            <h2>Acceso en tiempo real</h2>
            <p className="text-muted">
                Visualizá tu agenda actualizada en todo momento y permití a tus clientes reservar en función de tu disponibilidad real.
            </p>

            <h2>Ideal para múltiples rubros</h2>
            <p className="text-muted">
                BookNeo se adapta a centros de salud, actividades deportivas, turismo, alquileres y todo tipo de servicios.
            </p>

        </section>
    );
}