import React from "react";
import { Link } from "react-router-dom";
import logoMartin from "../../images/Logo-martin.png";
import { Login } from "../pages/login";

export const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll mb-3 bg-opacity-50">
        <div className="logo ps-3">
          <img src={logoMartin} alt="Martin Fiasche Logo" style={{ width: "250px" }} />
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item active">
              <Link className="nav-link badge badge-pill badge-success text-dark" to="/">Inicio <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/sobremi">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/testimonios">Testimonios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/individualizado">Individualizado</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/movimiento">Movimiento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/acrobacia">Acrobacia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/eventos">Eventos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link badge badge-pill badge-dark text-dark" to="/escribime">Escribime</Link>
            </li>
          </ul>
          <div>
            <Link to="/signup">
              <button type="button" className="btn btn-sm btn-warning ms-5">Suscribite</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
