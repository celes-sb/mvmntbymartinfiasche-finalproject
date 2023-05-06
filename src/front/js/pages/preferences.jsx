import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Preferences = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link4");

    const [emailSubscription, setEmailSubscription] = useState(null);
    const [language, setLanguage] = useState("");
    const [unitSystem, setUnitSystem] = useState("");

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
            <div className="col-md-9 p-5">
                <div className="form-style">
                    <form>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                        </div>
                        <div className="form-group pb-3">
                            <div className="font-weight-bold mb-2">¿Quieres que te lleguen correos con nuestros anuncios, promociones y contenido informativo?</div>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                            <label className="btn btn-outline-primary" for="btnradio1">Sí</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="btnradio2">No</label>
                        </div>
                        <div className="form-group pb-3">
                            <div className="font-weight-bold mb-2">¿Qué idioma prefieres?</div>
                            <div className="input-group">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Language"
                                        value="Spanish"
                                        onChange={(e) => {
                                            setLanguage(e.target.value);
                                        }}
                                        defaultChecked
                                    />
                                    <label className="form-check-label fs-6 " htmlFor="Masculino">
                                        Español
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Language"
                                        value="English"
                                        onChange={(e) => {
                                            setLanguage(e.target.value);
                                        }}
                                    />
                                    <label className="form-check-label fs-6" htmlFor="Femenino">
                                        English
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group pb-3">
                            <div className="font-weight-bold mb-2">¿Qué sistema de unidades prefieres?</div>
                            <div className="input-group">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Unit System"
                                        value="Kilograms"
                                        onChange={(e) => {
                                            setUnitSystem(e.target.value);
                                        }}
                                        defaultChecked
                                    />
                                    <label className="form-check-label fs-6 " htmlFor="Masculino">
                                        Kilogramos
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Unit System"
                                        value="Pounds"
                                        onChange={(e) => {
                                            setUnitSystem(e.target.value);
                                        }}
                                    />
                                    <label className="form-check-label fs-6" htmlFor="Femenino">
                                        Libras
                                    </label>
                                </div>
                            </div>
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

export default Preferences;