// components/Footer.jsx

import Image from "next/image";
import { siteConfig } from "../config/siteConfig";
import { FacebookIcon, InstagramIcon, TikTokIcon, XIcon } from "./SocialIcons";

export default function Footer() {
    const { name, contact, social, poweredby } = siteConfig;

    return (
        <footer className="footer" style={{ fontSize: "14px" }}>
            <div className="container py-5">
                <div className="row">

                    {/* LOGO */}
                    <div className="col-md-4 mb-4 text-center text-md-start">
                        <Image
                            src="/images/logoBookNeo_sfb.webp"
                            alt="LogoBookNeoFooter"
                            width={100}
                            height={100}
                            priority
                        />
                        <h5 className="mt-3">{name}</h5>
                    </div>

                    {/* CONTACTO */}
                    <div className="col-md-4 mb-4 text-center text-md-start">
                        <h6>Contacto</h6>

                        <p className="mb-1">{contact.address}</p>

                        <p className="mb-1"> <span>{`Tel/WhatsApp: `}</span>
                            <a href={`https://wa.me/${contact.phone}`} target="_blank">
                                {contact.phone}
                            </a>
                        </p>

                        <p className="mb-1">
                            <a href={`mailto:${contact.email}`}>
                                {contact.email}
                            </a>
                        </p>

                        <p>
                            <a href={contact.web} target="_blank">
                                {contact.web}
                            </a>
                        </p>
                    </div>

                    {/* REDES */}
                    <div className=" col-md-4 text-center ">
                        <h6>Seguinos</h6>

                        <div className="d-flex justify-content-center gap-3">

                            <a href={social.instagram} className="social-icon" target="_blank">
                                <InstagramIcon />
                            </a>

                            <a href={social.facebook} className="social-icon" target="_blank">
                                <FacebookIcon />
                            </a>

                            {/* <a href={social.tiktok} className="social-icon" target="_blank" >
                                    <TikTokIcon />
                                </a>

                                <a href={social.x} className="social-icon" target="_blank" >
                                    <XIcon />
                                </a> */}

                        </div>
                    </div>
                    {/* POWERED BY */}
                    <div className="col-md-12 text-center mt-4">
                        <a href={poweredby} target="_blank">

                            <div>
                                <span style={{ fontSize: "12px", color: "#a6a7a9", fontWeight: "500" }}>
                                    Desarrollado por
                                </span>
                            </div>

                            <div style={{ width: "160px", margin: "0 auto" }}>{/* margin: "0 auto" centra el div en el ancho del layout (pantalla) */}
                                <Image
                                    src="/images/logoCalamuchitar.webp"
                                    alt="CalamuchitAr"
                                    width={1136}
                                    height={148}
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }}
                                    priority
                                />
                            </div>

                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}