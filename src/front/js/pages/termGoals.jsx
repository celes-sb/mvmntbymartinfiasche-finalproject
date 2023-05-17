import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const TermGoals = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link3");
    const [dataUser, setDataUser] = useState(store.userData)

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const [threeMonthsGoal, setThreeMonthsGoal] = useState("");
    const [sixMonthsGoal, setSixMonthsGoal] = useState("");
    const [twelveMonthsGoal, setTwelveMonthsGoal] = useState("");

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
            <h4 className="mt-2">Objetivos a 3 meses</h4>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    value={dataUser.three_months_goal}
                    id="floatingTextarea1"
                    style={{ height: "100px" }}
                    disabled
                ></textarea>
                <label htmlFor="floatingTextarea1">Comentarios</label>
            </div>
            <h4 className="mt-2">Objetivos a 6 meses</h4>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    value={dataUser.six_months_goal}
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    disabled
                ></textarea>
                <label htmlFor="floatingTextarea2">Comentarios</label>
            </div>
            <h4 className="mt-2">Objetivos a 12 meses</h4>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    value={dataUser.twelve_months_goal}
                    id="floatingTextarea3"
                    style={{ height: "100px" }}
                    disabled
                ></textarea>
                <label htmlFor="floatingTextarea3">Comentarios</label>
            </div>

            <div className="pb-2 mt-4">
                <Link to="/user/edit-term-goals">
                    <button type="button" className="btn btn-outline-primary w-100 font-weight-bold">
                        Editar Información
                    </button>
                </Link>
            </div>
        </div>
    </>)
}

export default WithAuth(TermGoals);