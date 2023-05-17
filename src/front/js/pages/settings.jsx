import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const Settings = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link1");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    const updatePassword = async (e) => {
        e.preventDefault();
        let { response } = await actions.updatePassword(currentPassword, newPassword);
        if (response.ok) {
            alert("Contraseña cambiada con éxito.")
            setCurrentPassword("");
            setNewPassword("");
        } else {
            alert("Hubo un error, intente nuevamente.")
        }
    };

    return (<>
        <div className="backofficeSettings">
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
                    <form onSubmit={updatePassword}>
                        <div className="form-group pb-3">
                            <input
                                type="password"
                                placeholder="Contraseña Actual"
                                className="form-control"
                                aria-describedby="Current Password"
                                value={currentPassword}
                                onChange={(e) => {
                                    setCurrentPassword(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Nueva Contraseña"
                                className="form-control"
                                aria-describedby="New Password"
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                }}
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <button
                                type="submit"
                                className="btn btn-outline-primary w-100 font-weight-bold"
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

export default WithAuth(Settings);
