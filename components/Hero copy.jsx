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
        <h1>BookNeo</h1>
        <h2 style={{fontSize:"14px"}}>Turnos Online, Reservas y Gestión de Servicios</h2>
      </div>
    </section>
  );
}