// components/Header.jsx
"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Header() {

      useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <header className="header shadow-sm">
      <nav className="navbar navbar-expand-lg container">

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Image
            src="/images/logo120x60.png"
            alt="Logo"
            width={144}   // ajustá según tu logo
            height={72}
            priority
          />
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habitaciones">Habitaciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ubicacion">Ubicación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}