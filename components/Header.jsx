"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "../config/siteConfig";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const isLanding = siteConfig.siteType === "landing";

  return (
    <header className="header shadow-sm">
      <nav className="navbar navbar-expand-lg container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/images/logoBookNeo_sfb.webp"
            alt={siteConfig.name}
            width={80}
            height={80}
            priority
          />
        </Link>
        {/* <div>
          <span style={{fontSize:"10px"}}>El Lugar Correcto, el Momento Exacto...</span>
        </div> */}

        {/* HAMBURGUESA */}
        <button
          className="navbar-toggler m-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto ">

            {siteConfig.pages.map((page) => {
              let href = "/";

              if (page.path === "") {
                href = "/";
              } else if (isLanding) {
                // 👉 landing → anchors
                href = `/#${page.path.replace("/", "")}`;
              } else {
                // 👉 multipágina → rutas reales
                href = page.path;
              }

              const isActive =
                (!isLanding && pathname === href) ||
                (isLanding && page.path === "" && pathname === "/");

              return (
                <li key={page.path} className="nav-item ms-2">
                  <a
                    className={`nav-link ${isActive ? "active" : ""}`}
                    href={href}
                  >
                    {page.label}
                  </a>
                </li>
              );
            })}

          </ul>
        </div>

      </nav>
    </header>
  );
}