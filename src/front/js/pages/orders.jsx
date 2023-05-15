import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Orders = () => {
    const { store, actions } = useContext(Context);

    const martinSquatPastoColor =
        "http://drive.google.com/uc?export=view&id=1-lc60dKkD4CxJ8L1sLK_iJ4JckELH5dq";
    const martinPastoPuente =
        "http://drive.google.com/uc?export=view&id=1JO0oSk-2RDlNp-pzhg557opqjmAQ5iyE";
    const bgMartinAlumnos =
        "http://drive.google.com/uc?export=view&id=1y_K-WHHqOXsBjOufW2NmknJ4CZTNcQP7";

    return (<>
        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Historial de Pagos</h1>
            <p className="lead">texto texto</p>
            <hr className="my-4" />
        </div>
        <div className="d-flex flex-wrap">
            <div className="card ms-3 mt-3" style={{ width: "20rem" }}>
                <img src={martinSquatPastoColor} className="card-img-top" alt="..." style={{ height: "15rem" }} />
                <div className="card-body">
                    <h5 className="card-title">Programa Individualizado</h5>
                    <a href="https://buy.stripe.com/test_cN2cP146vcXq9hu5kk" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Pagar</a>

                </div>
            </div>
            <div className="card ms-3 mt-3" style={{ width: "20rem" }}>
                <img src={martinPastoPuente} className="card-img-top" alt="..." style={{ height: "15rem" }} />
                <div className="card-body">
                    <h5 className="card-title">Programa Online</h5>
                    <a href="https://buy.stripe.com/test_cN2cP146vcXq9hu5kk" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Pagar</a>

                </div>
            </div>
            <div className="card ms-3 mt-3" style={{ width: "20rem" }}>
                <img src={bgMartinAlumnos} className="card-img-top" alt="..." style={{ height: "15rem" }} />
                <div className="card-body">
                    <h5 className="card-title">Programa Presencial</h5>
                    <a href="https://buy.stripe.com/test_cN2cP146vcXq9hu5kk" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Pagar</a>

                </div>
            </div>
        </div>
    </>)
}

export default Orders;