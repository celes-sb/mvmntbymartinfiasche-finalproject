import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../pages/signup.jsx";
import { Navigate } from "react-router-dom";

export const Sidebar = () => {

    
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Inicio");
    const [dataUser, setDataUser] = useState(store.userData)
    const logoMartin =
    "http://drive.google.com/uc?export=view&id=1FMRd1hRzG_go40brsVGBzQe_Zc5uxu1a";
    const navigate = useNavigate();
    
    useEffect(() => {
        setDataUser(store.userData);
    }, [store.userData]);


    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link link-dark";
    };

    const handleLogout = async () => {
        const { response } = await actions.logout();
        if (response.ok) {
            navigate("/login");
        }
    };

    const martin2 = store.userData.image_profile;

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "280px", marginTop: "80px" }}>
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-primary text-decoration-none">
                    <div className="dropdown dropdown mt-3 mb-3">
                        <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={martin2} alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>{store.userData.first_name} {store.userData.last_name}{console.log(dataUser)}</strong>
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
                        <Link to="/user/backoffice" className={linkClass("Inicio")} onClick={() => handleClick("Inicio")}>
                            <i className="fas fa-home"></i>
                            <span className="ms-3">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/diagnostico" className={linkClass("Diagnostico")} onClick={() => handleClick("Diagnostico")}>
                            <i className="fa-solid fa-microscope"></i>
                            <span className="ms-3">Diagnóstico inicial</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/programs" className={linkClass("Programas")} onClick={() => handleClick("Programas")}>
                            <i className="fas fa-dumbbell"></i>
                            <span className="ms-3">Programas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/orders" className={linkClass("Ordenes")} onClick={() => handleClick("Ordenes")}>
                            <i className="fas fa-file-invoice"></i>
                            <span className="ms-3">Pagos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/nutrition" className={linkClass("Nutricion")} onClick={() => handleClick("Nutricion")}>
                            <i className="fab fa-nutritionix"></i>
                            <span className="ms-3">Nutricion</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/papers" className={linkClass("Papers")} onClick={() => handleClick("Papers")}>
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
