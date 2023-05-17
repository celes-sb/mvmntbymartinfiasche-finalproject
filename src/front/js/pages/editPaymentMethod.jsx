import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const EditPaymentMethod = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Link2");

    const [dataUser, setDataUser] = useState(store.userData)
    const [cardNumber, setCardNumber] = useState(dataUser.credit_card ? "xxxx xxxx xxxx " + dataUser.credit_card.substring(dataUser.credit_card.length - 4) : "");
    const [expirationDate, setExpirationDate] = useState(dataUser.exp_date);

    const navigate = useNavigate();

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };

    const obj = {
        "credit_card": cardNumber,
        "exp_date": expirationDate
    }

    const handleEditUser = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.editUser(obj); // call login action
        if (response.ok) {
            alert("Cambio exitoso");
            navigate("/user/payment-method")
        } else {
            alert("Cambio fallido, intente nuevamente");
        }
    }

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
                                value={cardNumber}
                                onChange={(e) => {
                                    setCardNumber(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Fecha de Vencimiento"
                                className="form-control"
                                aria-describedby="Expiration Date"
                                value={expirationDate}
                                onChange={(e) => {
                                    setExpirationDate(e.target.value);
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
                            <Link to="/user/payment-method">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger w-100 font-weight-bold mt-2"
                                >
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

export default WithAuth(EditPaymentMethod);