import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const EmergencyContact = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link2");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [relationship, setRelationship] = useState("");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    return (<>
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={linkClass("Active")} onClick={() => handleClick("Active")} to="/user/profile">
                        Datos Personales
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className={linkClass("Link")} onClick={() => handleClick("Link")} to="/user/measures">
                        Medidas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link2")} onClick={() => handleClick("Link2")} to="/user/emergency-contact">
                        Contacto de Emergencia
                    </Link>
                </li>
            </ul>
            <div className="col-md-9 p-5">
                <div className="form-style">
                    <form>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="form-control"
                                aria-describedby="Nombre"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Teléfono"
                                className="form-control"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Relacion"
                                className="form-control"
                                onChange={(e) => {
                                    setRelationship(e.target.value);
                                }}
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <button
                                type="button"
                                className="btn btn-warning w-100 font-weight-bold mt-2"
                            >
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default EmergencyContact;