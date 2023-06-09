import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../pages/signup.jsx";
import { Navigate } from "react-router-dom";

export const Navbar = () => {

  const logoMartin =
    "http://drive.google.com/uc?export=view&id=1FMRd1hRzG_go40brsVGBzQe_Zc5uxu1a";

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
      <nav className="navbar navbar-expand-md navbar-expand-sm navbar-expand-xs">
        <div className="logo ps-3">
          <Link className="nav-link text-dark" to="/">
            <img src={logoMartin} alt="Martín Fiasche Logo" style={{ width: "250px" }} />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button >
        <div className="collapse navbar-collapse" id="navbarNav">
          {store.userLogin === false ? (
            <ul className="navbar-nav ms-auto ms-5">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/sobremi"
                >
                  Sobre mí
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/testimonios"
                >
                  Testimonios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/individualizado"
                >
                  Individualizado
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/movimiento"
                >
                  Movimiento
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/acrobacia"
                >
                  Acrobacia
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/eventos"
                >
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark mb-2 mb-md-0"
                  to="/escribime"
                >
                  Escribime
                </Link>
              </li>
            </ul>
          ) : (
            <>
              <h3 className="backoffice-navtext">Hola, {store.userData.first_name}!</h3>
            </>
          )}
          {store.userLogin === false && (
            <div className="dropdown position-relative ms-auto">
              <button
                className="nav-btn btn btn-sm dropdown-toggle smaller-button"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accedé a la plataforma
              </button>
              <ul className="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
                <li>
                  <Link className="dropdown-item" to="/signup">
                    Registrate
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/login">
                    Iniciá sesión
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {store.userLogin && (
            <div>
              <button
                type="button"
                className="backoffice-navbtn nav-btn btn btn-sm btn-danger ms-5"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </nav >
    </>
  );
};