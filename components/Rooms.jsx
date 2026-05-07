"use client";

import { useState } from "react";
import Image from "next/image";
import Icons from "./Icons";

const rooms = [
    {
        name: "Habitación Standard",
        img: "/images/hab-standar.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Habitación Superior",
        img: "/images/hab-superior.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Suite Familiar",
        img: "/images/suite-familiar.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Suite Premium",
        img: "/images/hab-standar.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

export default function Rooms() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="section container ">
            <div className="row">
                {rooms.map((room, i) => (
                    <div className="col-12 col-md-6 col-lg-3 mb-4 room-col" key={i}>
                        <div className="card h-100 shadow-sm room-card">

                            {/* IMAGE */}
                            <div className="room-img-wrapper">
                                <Image
                                    src={room.img}
                                    alt={room.name}
                                    width={400}
                                    height={250}
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }}
                                />
                            </div>

                            <div className="card-body text-center">
                                <h5>{room.name}</h5>

                                {/* VER MÁS */}
                                <span
                                    className="nav-link ver-mas"
                                    onClick={() =>
                                        setOpenIndex(openIndex === i ? null : i)
                                    }
                                >
                                   <Icons name="arrow" size={18} /> Ver más
                                </span>

                                <div
                                    className={`room-desc ${openIndex === i ? "open" : ""
                                        }`}
                                >
                                    <p>{room.desc}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}