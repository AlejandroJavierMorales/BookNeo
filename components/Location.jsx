export default function Location() {
  return (
    <section className="section container">
      <h2 className="text-center mb-5">Ubicación</h2>

      <div className="row">
        
        {/* MAPA */}
        <div className="col-md-8 mb-4 order-1 order-md-1">
          <iframe
            src="https://www.google.com/maps?q=embalse+cordoba&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* TEXTO */}
        <div className="col-md-4 d-flex align-items-center order-2 order-md-2">
          <p>
            Nos encontramos en una ubicación privilegiada en Embalse,
            rodeados de naturaleza y a minutos de los principales atractivos.
          </p>
        </div>

      </div>
    </section>
  );
}