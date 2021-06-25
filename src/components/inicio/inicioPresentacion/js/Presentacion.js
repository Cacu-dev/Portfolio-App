import "../css/presentacion.css";
import "../css/media-querys-presentacion.css";
function Presentacion() {
  return (
    <div className="presentacion">
      <h1>
        <span>Facundo</span> Manresa
      </h1>
      <p>
        Desarrollador <span>Front End</span>
      </p>
      <div className="position-320px">
        <a
          href="https://www.linkedin.com/in/Facundo-Manresa-Dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt=""
          />
        </a>
        <a href="https://github.com/Cacu-dev" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
export default Presentacion;
