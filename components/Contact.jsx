"use client";

import { useState } from "react";
import { siteConfig } from "../config/siteConfig";

export default function Contact() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const {
      pasajeros,
      ninos,
      ingreso,
      egreso,
      whatsapp,
      obs,
    } = form;

    if (!pasajeros || !ingreso || !egreso || !whatsapp) {
      alert("Completá los datos obligatorios");
      return;
    }

    const text = `
Hola! Quiero consultar disponibilidad:

Pasajeros: ${pasajeros}
Niños: ${ninos}
Ingreso: ${ingreso}
Egreso: ${egreso}
Tel: ${whatsapp}
Obs: ${obs}
`;

    const url = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <h2 className="text-center mb-5">Contacto</h2>

        <div className="col-md-6 mx-auto">

          <input className="form-control mb-3" name="nombre" placeholder="Nombre" onChange={handleChange} />
          {/* <input className="form-control mb-3" name="ninos" placeholder="Niños" onChange={handleChange} /> */}
          {/* <input type="date" className="form-control mb-3" name="ingreso" onChange={handleChange} />
          <input type="date" className="form-control mb-3" name="egreso" onChange={handleChange} /> */}
          <input className="form-control mb-3" name="whatsapp" placeholder="Tu WhatsApp" onChange={handleChange} />
          <textarea className="form-control mb-3" name="obs" placeholder="Tu Consulta Aquí" onChange={handleChange}></textarea>

          <button className="btn btn-primary-custom w-100" onClick={sendWhatsApp}>
            Consultar por WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}