import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Orders = () => {
    const { store, actions } = useContext(Context);

    const acroJump = "http://drive.google.com/uc?export=view&id=1gCHaOZq3Oa7sPMysyfJYrtKBOAY3oeUO";

    return (
        <>
            <div className="backofficeWelcome1 jumbotron m-3">
                <h1 className="display-4">Pagos</h1>
                <p className="lead">Pagos de entrenamiento individualizado, clases de acro o encuentros de movimiento.</p>
                <hr className="my-4" />
            </div>
            <div className="d-flex flex-wrap">
                <div className="card ms-3 mt-3 text-center border border-primary" style={{ width: "18rem" }}>
                    <img src={acroJump} className="card-img-top" alt="..." style={{ height: "13rem" }} />
                    <div className="card-body">
                        <p className="card-title">Entrenamiento Individualizado</p>
                        <a href="https://buy.stripe.com/test_cN2cP146vcXq9hu5kk" className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">Pagar</a>
                    </div>
                </div>
                <div className="card ms-3 mt-3 text-center border border-primary" style={{ width: "18rem" }}>
                    <img src={acroJump} className="card-img-top" alt="..." style={{ height: "13rem" }} />
                    <div className="card-body">
                        <p className="card-title">Clases de Acrobacia Mensual</p>
                        <a href="https://buy.stripe.com/test_cN2cP146vcXq9hu5kk" className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">Pagar</a>
                    </div>
                </div>
                <div className="card ms-3 mt-3 text-center border border-primary" style={{ width: "18rem" }}>
                    <img src={acroJump} className="card-img-top" alt="..." style={{ height: "13rem" }} />
                    <div className="card-body">
                        <p className="card-title">Campus Acrobático</p>
                        <a href="https://buy.stripe.com/test_cN2cP146vcXq9hu5kk" className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">Pagar</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;