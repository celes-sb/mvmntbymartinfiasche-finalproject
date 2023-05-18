import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../pages/signup.jsx";
import { Navigate } from "react-router-dom";

export const AdminSidebar = () => {

    const logoMartin =
        "http://drive.google.com/uc?export=view&id=1FMRd1hRzG_go40brsVGBzQe_Zc5uxu1a";

    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Crear Programas");
    const navigate = useNavigate();

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link link-dark";
    };

    const handleLogout = async () => {
        const { response } = await actions.adminLogout();
        if (response.ok) {
            navigate("/admin/login");
        }
    };

    const profilePic =
        "http://drive.google.com/uc?export=view&id=157-QtUkfD1HbR5SiFRoSZUWUoE-Kig8G";

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 mt-5" style={{ width: "280px", marginTop: "80px" }}>
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-primary text-decoration-none">
                    <div className="dropdown dropdown mt-3 mb-3">
                        <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profilePic} alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>{store.userData.first_name} {store.userData.last_name}</strong>
                        </Link>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><Link className="dropdown-item" to="/user/profile">Perfil</Link></li>
                            <li><Link className="dropdown-item" to="/user/settings">Configuración</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <button type="button" className="dropdown-item" onClick={handleLogout}> Cerrar Sesión</button>
                        </ul>
                    </div>
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">

                    <li>
                        <Link to="/admin/add-programs" className={linkClass("Crear Programas")} onClick={() => handleClick("Crear Programas")}>
                            <i className="fa-solid fa-microscope"></i>
                            <span className="ms-3">Crear Programas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/exercises" className={linkClass("Diagnostico")} onClick={() => handleClick("Diagnostico")}>
                            <i className="fa-solid fa-microscope"></i>
                            <span className="ms-3">Ejercicios</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/programs" className={linkClass("Programas")} onClick={() => handleClick("Programas")}>
                            <i className="fas fa-dumbbell"></i>
                            <span className="ms-3">Programas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/papers" className={linkClass("Papers")} onClick={() => handleClick("Papers")}>
                            <i className="fas fa-scroll"></i>
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
            </div >
        </>
    );
};
