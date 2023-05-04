import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Measures = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [levelOfTraining, setLevelOfTraining] = useState("");
    const [otherSports, setOtherSports] = useState("");
    const [eatingHabits, setEatingHabits] = useState("");
    const [injuries, setInjuries] = useState("");
    const [availability, setAvailability] = useState("");
    const [gymAccess, setGymAccess] = useState(null)

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
                                type="float"
                                placeholder="Altura"
                                className="form-control"
                                aria-describedby="Height"
                                onChange={(e) => {
                                    setHeight(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="float"
                                placeholder="Peso"
                                className="form-control"
                                aria-describedby="Weight"
                                onChange={(e) => {
                                    setWeight(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Nivel de Entrenamiento"
                                className="form-control"
                                aria-describedby="Level of Training"
                                onChange={(e) => {
                                    setLevelOfTraining(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Otros Deportes"
                                className="form-control"
                                aria-describedby="Other Sports"
                                onChange={(e) => {
                                    setOtherSports(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Habitos Alimenticios"
                                className="form-control"
                                onChange={(e) => {
                                    setEatingHabits(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Lesiones"
                                className="form-control"
                                onChange={(e) => {
                                    setInjuries(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Disponibilidad"
                                className="form-control"
                                onChange={(e) => {
                                    setAvailability(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Acceso a un Gimnasio"
                                className="form-control"
                                onChange={(e) => {
                                    setGymAccess(e.target.value);
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

export default Measures;