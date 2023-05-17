import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Measures = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link");
    const [dataUser, setDataUser] = useState(store.userData)

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const [levelOfTraining, setLevelOfTraining] = useState("");
    const [otherSports, setOtherSports] = useState("");
    const [eatingHabits, setEatingHabits] = useState("");
    const [injuries, setInjuries] = useState("");
    const [availability, setAvailability] = useState("");
    const [gymAccess, setGymAccess] = useState(null)

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    useEffect(() => {
        setDataUser(store.userData);
    }, [store.userData]);

    return (<>
        <div className="backofficeMedidas">
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
                                placeholder="Nivel de Entrenamiento"
                                className="form-control"
                                aria-describedby="Level of Training"
                                value={dataUser.level_training}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Otros Deportes"
                                className="form-control"
                                aria-describedby="Other Sports"
                                value={dataUser.other_sports}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Hábitos Alimenticios"
                                className="form-control"
                                value={dataUser.eating_habits}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Lesiones"
                                className="form-control"
                                value={dataUser.injuries}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Disponibilidad Semanal"
                                className="form-control"
                                value={dataUser.availability}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Acceso a un gimnasio (sí/no)"
                                className="form-control"
                                value={dataUser.access_gym}
                                disabled
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <Link to="/user/edit-measures">
                                <button type="button" className="btn btn-outline-primary w-100 font-weight-bold">
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

export default Measures;