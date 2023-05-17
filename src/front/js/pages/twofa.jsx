import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const Twofa = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link3");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    return (<>
        <div className="backoffice2fa">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={linkClass("Link1")} onClick={() => handleClick("Link1")} to="/user/settings">
                        Seguridad
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link2")} onClick={() => handleClick("Link2")} to="/user/payment-method">
                        Pagos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link3")} onClick={() => handleClick("Link3")} to="/user/twofa">
                        2FA
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link4")} onClick={() => handleClick("Link4")} to="/user/preferences">
                        Preferencias
                    </Link>
                </li>
            </ul>
            <div className="col-md-9 p-3">
                <div className="form-style">
                    <h5 className="font-weight-bold">¿Querés activar la Autenticación de dos pasos? <br /><br />Haz clic en el siguiente botón:</h5>
                    <br />
                    <div className="pb-2">
                        <button
                            type="button"
                            className="btn btn-outline-primary w-100 font-weight-bold mt-2"
                        >
                            Activar 2FA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default WithAuth(Twofa);