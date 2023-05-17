import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const EditMeasures = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const [dataUser, setDataUser] = useState(store.userData)

    const [levelOfTraining, setLevelOfTraining] = useState(dataUser.level_training);
    const [otherSports, setOtherSports] = useState(dataUser.other_sports);
    const [eatingHabits, setEatingHabits] = useState(dataUser.eating_habits);
    const [injuries, setInjuries] = useState(dataUser.injuries);
    const [availability, setAvailability] = useState(dataUser.availability);
    const [gymAccess, setGymAccess] = useState(dataUser.access_gym)

    const navigate = useNavigate();

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    const obj = {
        "level_training": levelOfTraining,
        "other_sports": otherSports,
        "eating_habits": eatingHabits,
        "access_gym": gymAccess,
        injuries,
        availability
    }

    const handleEditUser = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.editUser(obj); // call login action
        if (response.ok) {
            alert("Cambio exitoso");
            navigate("/user/measures")
        } else {
            alert("Cambio fallido, intente nuevamente");
        }
    }

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
                                value={levelOfTraining}
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
                                value={otherSports}
                                onChange={(e) => {
                                    setOtherSports(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Hábitos Alimenticios"
                                className="form-control"
                                value={eatingHabits}
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
                                value={injuries}
                                onChange={(e) => {
                                    setInjuries(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Disponibilidad Semanal"
                                className="form-control"
                                value={availability}
                                onChange={(e) => {
                                    setAvailability(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Acceso a un gimnasio (sí/no)"
                                className="form-control"
                                value={gymAccess}
                                onChange={(e) => {
                                    setGymAccess(e.target.value);
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
                            <Link to="/user/measures">
                                <button type="button" className="btn btn-outline-danger w-100 font-weight-bold mt-2">
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

export default EditMeasures;