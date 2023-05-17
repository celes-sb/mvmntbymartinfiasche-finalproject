import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const EmergencyContact = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link2");

    const [dataUser, setDataUser] = useState(store.userData)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [relationship, setRelationship] = useState("");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    useEffect(() => {
        setDataUser(store.userData);
    }, [store.userData]);

    return (<>
        <div className="backofficeEmergencyContact">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={linkClass("Active")} onClick={() => handleClick("Active")} to="/user/profile">
                        Datos Personales
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link")} onClick={() => handleClick("Link")} to="/user/measures">
                        Info Entrenamiento
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link3")} onClick={() => handleClick("Link3")} to="/user/term-goals">
                        Objetivos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link2")} onClick={() => handleClick("Link2")} to="/user/emergency-contact">
                        Contacto de Emergencia
                    </Link>
                </li>
            </ul>
            <div className="col-md-9 p-3">
                <div className="form-style">
                    <form>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="form-control"
                                aria-describedby="Nombre"
                                value={dataUser.emergency_contact_name}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Teléfono"
                                className="form-control"
                                value={dataUser.emergency_contact_number}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Relación con el estudiante"
                                className="form-control"
                                value={dataUser.emergency_contact_relationship}
                                disabled
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <Link to="/user/edit-emergency-contact">
                                <button type="button" className="btn btn-outline-primary w-100 font-weight-bold mt-2">
                                    Editar Información
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default WithAuth(EmergencyContact);