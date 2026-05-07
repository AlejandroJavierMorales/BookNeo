"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    { title: "Habitaciones", img: "/images/lobby-hotel.png" },
    { title: "Piscina", img: "/images/picsina-hotel.png" },
    { title: "Club-House", img: "/images/clubhouse-hotel.png" },
    { title: "Esparcimiento", img: "/images/exteriores-hotel.png" },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="text-center mb-5">Servicios</h2>

        <div className="row">
          {services.map((s, i) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4 room-col" key={i}>
              <div className="card h-100 shadow-sm text-center service-card">

                {/* IMAGE */}
                <div className="service-img-wrapper">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={400}
                    height={250}
                    style={{
                      width: "100%",
                      height: "auto"
                      
                    }}
                    className="service-img"
                  />
                </div>

                <div className="card-body">
                  <h5>{s.title}</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Non, id ipsa! Porro minima est molestiae.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}