// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      {/* <Image
        src="/images/HeroBookNeo.png"
        alt="Cabañas en Embalse"
        fill
        priority
        sizes="80vw"
        style={{ objectFit: "cover" }}
      /> */}

      <div className="overlay">
        <h1>Sistema de Turnos Online y Reservas de Servicios</h1>
        <h2>BookNeo: gestioná turnos, reservas y actividades desde un solo lugar</h2>
      </div>
    </section>
  );
}