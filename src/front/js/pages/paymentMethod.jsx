import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const PaymentMethod = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link2");

    const [dataUser, setDataUser] = useState(store.userData)
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");

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
        <div className="backofficePayment">
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
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Número de Tarjeta"
                                className="form-control"
                                aria-describedby="Credit Card Number"
                                value={dataUser.credit_card ? "xxxx xxxx xxxx " + dataUser.credit_card.substring(dataUser.credit_card.length - 4) : "No Credit Card Stored"}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Fecha de Vencimiento"
                                className="form-control"
                                aria-describedby="Expiration Date"
                                value={dataUser.exp_date}
                                disabled
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <Link to="/user/edit-payment-method">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary w-100 font-weight-bold"
                                >
                                    {dataUser.credit_card ? "Editar Tarjeta" : "Añadir Tarjeta"}
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default WithAuth(PaymentMethod);