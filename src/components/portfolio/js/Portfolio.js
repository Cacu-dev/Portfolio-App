import "../css/portfolio.css";
import "../css/media-querys-portfolio.css";
function Portfolio() {
  return (
    <div className="background-porfolio">
      <div className="portfolio-h2 text-center">
        <h2>Portfolio</h2>
      </div>
      <div className="contenedor-portfolio d-flex justify-content-around">
        <div className="contenedor-img">
          <a
            href="https://apego.vercel.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="imagen-uno"
              src="https://res.cloudinary.com/ddlokqonz/image/upload/v1623772499/portfolio/APEGOO_qe2qso.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="contenedor-img contenedor-img2">
          <a
            href="https://sin-generacion-store-vercel.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="imagen-dos"
              src="https://res.cloudinary.com/ddlokqonz/image/upload/v1623772499/portfolio/IMG_0120_xoshov.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="contenedor-img contenedor-img-tres">
          <a
            href="https://virtual-store.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="imagen-tres"
              src="https://res.cloudinary.com/ddlokqonz/image/upload/v1617296844/notebooks/Dell2_seotau.webp"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="button-style">
        <a
          href="https://drive.google.com/file/d/1TWxnbfsIMpBZczfWYVyETUgir1sRiqpM/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-light letter-style">CV</button>
        </a>
      </div>
    </div>
  );
}
export default Portfolio;
