import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Preferences = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link4");

    const [dataUser, setDataUser] = useState(store.userData)
    const [emailSubscription, setEmailSubscription] = useState(null);
    const [language, setLanguage] = useState("");
    const [unitSystem, setUnitSystem] = useState("");

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
        <div className="backofficePreferences">
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
                    <form>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group"></div>
                        <div className="form-group pb-3">
                            <div className="font-weight-bold mb-2">¿Querés que te lleguen correos con nuestros anuncios, promociones y contenido informativo?</div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="correo" id="correoSi" value="si" checked={dataUser.email_subscription === true} disabled />
                                <label className="form-check-label" htmlFor="correoSi">
                                    Sí
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="correo" id="correoNo" value="no" checked={dataUser.email_subscription === false} disabled />
                                <label className="form-check-label" htmlFor="correoNo">
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="form-group pb-3">
                            <div className="font-weight-bold mb-2">¿Qué idioma preferís?</div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Language"
                                        value="Spanish"
                                        checked={dataUser.language_preference === 'Spanish'}
                                        disabled
                                    />
                                    <label className="form-check-label fs-6" htmlFor="Spanish">
                                        Español
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Language"
                                        value="English"
                                        checked={dataUser.language_preference === 'English'}
                                        disabled
                                    />
                                    <label className="form-check-label fs-6" htmlFor="English">
                                        English
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group pb-3">
                            <div className="font-weight-bold mb-2">¿Qué sistema de unidades preferís?</div>
                            <div className="input-group">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Unit System"
                                        value="Kilograms"
                                        checked={dataUser.numeric_preference === 'Kilograms'}
                                        disabled
                                    />
                                    <label className="form-check-label fs-6" htmlFor="Kilograms">
                                        Kilogramos
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="Unit System"
                                        value="Pounds"
                                        checked={dataUser.numeric_preference === 'Pounds'}
                                        disabled
                                    />
                                    <label className="form-check-label fs-6" htmlFor="Libras">
                                        Libras
                                    </label>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className="pb-2">
                            <Link to="/user/edit-preferences">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary w-100 font-weight-bold"
                                >
                                    Editar Preferencias
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>)
}

export default Preferences;