import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../pages/signup.jsx";
import logoMartin from "../../images/Logo-martin.png";
import { Navigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const handleLogout = async () => {
    const { response } = await actions.logout();
    if (response.ok) {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll mb-4 bg-opacity-50">
        <div className="logo ps-3">
          <Link className="nav-link badge badge-pill badge-success text-dark" to="/"><img src={logoMartin} alt="Martin Fiasche Logo" style={{ width: "250px" }} /></Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {
          store.userLogin == false ? (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-5">
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/sobremi">Sobre mí</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/testimonios">Testimonios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/individualizado">Individualizado</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/movimiento">Movimiento</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/acrobacia">Acrobacia</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/eventos">Eventos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link badge badge-pill text-dark" to="/escribime">Escribime</Link>
                </li>
              </ul>
              <div>
                <Link to="/signup">
                  <button type="button" className="nav-btn btn btn-sm btn-warning ms-5">Suscribite</button>
                </Link>
              </div>
            </div>
          ) : (<>
            <h1>Bienvenid@, {store.userData.first_name}</h1>
            <div>
              <button type="button" className="nav-btn btn btn-sm btn-danger ms-5" onClick={handleLogout
              }>Cerrar Sesión</button>
            </div>
          </>)}
      </nav>
    </>
  );
};
