import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const EditTermGoals = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link3");
    const [dataUser, setDataUser] = useState(store.userData)

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const [threeMonthsGoal, setThreeMonthsGoal] = useState(dataUser.three_months_goal);
    const [sixMonthsGoal, setSixMonthsGoal] = useState(dataUser.six_months_goal);
    const [twelveMonthsGoal, setTwelveMonthsGoal] = useState(dataUser.twelve_months_goal);

    const navigate = useNavigate();

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    const obj = {
        "three_months_goal": threeMonthsGoal,
        "six_months_goal": sixMonthsGoal,
        "twelve_months_goal": twelveMonthsGoal
    }

    const handleEditUser = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.editUser(obj); // call login action
        if (response.ok) {
            alert("Cambio exitoso");
            navigate("/user/term-goals")
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
            <h4 className="mt-2 mb-2">3 meses</h4>
            <div className="form-floating mb-2">
                <textarea
                    className="form-control"
                    placeholder="Contame qué te gustaría lograr en 3 meses...."
                    value={threeMonthsGoal}
                    id="floatingTextarea1"
                    style={{ height: "100px" }}
                    onChange={(e) => {
                        setThreeMonthsGoal(e.target.value);
                    }}
                ></textarea>
                <label htmlFor="floatingTextarea1">Contame qué te gustaría lograr en 3 meses....</label>
            </div>
            <h4 className="mt-2 mb-2">6 meses</h4>
            <div className="form-floating mb-2">
                <textarea
                    className="form-control"
                    placeholder="Contame qué te gustaría lograr en 6 meses..."
                    value={sixMonthsGoal}
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    onChange={(e) => {
                        setSixMonthsGoal(e.target.value);
                    }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Contame qué te gustaría lograr en 6 meses....</label>
            </div>
            <h4 className="mt-2 mb-2">12 meses</h4>
            <div className="form-floating mb-2">
                <textarea
                    className="form-control"
                    placeholder="Contame qué te gustaría lograr en un año..."
                    value={twelveMonthsGoal}
                    id="floatingTextarea3"
                    style={{ height: "100px" }}
                    onChange={(e) => {
                        setTwelveMonthsGoal(e.target.value);
                    }}
                ></textarea>
                <label htmlFor="floatingTextarea3">Contame qué te gustaría lograr en un año....</label>
            </div>

            <div className="pb-2 mt-4">
                <button
                    type="button"
                    className="btn btn-outline-primary w-100 font-weight-bold"
                    onClick={handleEditUser}
                >
                    Guardar Cambios
                </button>
                <Link to="/user/term-goals">
                    <button type="button" className="btn btn-outline-danger w-100 font-weight-bold mt-2">
                        Cancelar
                    </button>
                </Link>
            </div>
        </div>
    </>)
}

export default EditTermGoals;