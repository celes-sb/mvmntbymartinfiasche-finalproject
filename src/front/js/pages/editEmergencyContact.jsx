import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const EditEmergencyContact = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link2");

    const [dataUser, setDataUser] = useState(store.userData)

    const [name, setName] = useState(dataUser.emergency_contact_name);
    const [phone, setPhone] = useState(dataUser.emergency_contact_number);
    const [relationship, setRelationship] = useState(dataUser.emergency_contact_relationship);

    const navigate = useNavigate();

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    const obj = {
        "emergency_contact_name": name,
        "emergency_contact_number": phone,
        "emergency_contact_relationship": relationship
    }

    const handleEditUser = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.editUser(obj); // call login action
        if (response.ok) {
            alert("Cambio exitoso");
            navigate("/user/emergency-contact")
        } else {
            alert("Cambio fallido, intente nuevamente");
        }
    }

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
                                value={name}
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
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Relación con el estudiante"
                                className="form-control"
                                value={relationship}
                                onChange={(e) => {
                                    setRelationship(e.target.value);
                                }}
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <button
                                type="button"
                                className="btn btn-outline-primary w-100 font-weight-bold"
                                onClick={handleEditUser}
                            >
                                Guardar Cambios
                            </button>
                            <Link to="/user/emergency-contact">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger w-100 font-weight-bold mt-2"

                                >
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default EditEmergencyContact;