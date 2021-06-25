import { Link } from "react-router-dom";
import "../css/navbar.css";
import "../css/media-querys-navBar.css";
const NavBar = () => {
  return (
    <nav className="navbar-dark position-absolute">
      <div className="width-button navBar">
        <button
          className="navbar-toggler border-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mt-2">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active letter"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active letter" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active letter" to="/Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active letter"
                  href="https://drive.google.com/file/d/1TWxnbfsIMpBZczfWYVyETUgir1sRiqpM/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cv
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
