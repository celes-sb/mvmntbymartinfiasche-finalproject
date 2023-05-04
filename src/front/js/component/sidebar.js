import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../pages/signup.jsx";
import logoMartin from "../../images/Logo-martin.png";

export const Sidebar = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Inicio");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link link-dark";
    };


    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px", marginTop: "80px" }}>
                <Link to="/user/backoffice" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <i class="fas fa-compress fa-2x"></i>
                    <span className="fs-4 ms-2">MVMNT</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/user/backoffice" className={linkClass("Inicio")} onClick={() => handleClick("Inicio")}>
                            <i className="fas fa-home"></i>
                            <span className="ms-3">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/programs" className={linkClass("Programas")} onClick={() => handleClick("Programas")}>
                            <i class="fas fa-dumbbell"></i>
                            <span className="ms-3">Programas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/orders" className={linkClass("Ordenes")} onClick={() => handleClick("Ordenes")}>
                            <i class="fas fa-file-invoice"></i>
                            <span className="ms-3">Ordenes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/nutrition" className={linkClass("Nutricion")} onClick={() => handleClick("Nutricion")}>
                            <i class="fab fa-nutritionix"></i>
                            <span className="ms-3">Nutricion</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/papers" className={linkClass("Papers")} onClick={() => handleClick("Papers")}>
                            <i class="fas fa-scroll"></i>
                            <span className="ms-3">Papers</span>
                        </Link>
                    </li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </Link>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                        <li><Link className="dropdown-item" to="#">Configuración</Link></li>
                        <li><Link className="dropdown-item" to="#">Perfil</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#">Cerrar Sesión</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};
