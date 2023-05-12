import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const RecoverPassword = (props) => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { store, actions } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let { respuestaJson, response } = await actions.linkrecoverpassword(email); // call login action
        if (response.ok) {
            alert("Se te ha enviado un correo")
        }
    };
    return (
        <div className="container">
            <div
                className="d-flex flex-row flex-nowrap"
                style={{ overflowX: "scroll" }}
            >
                <div className="container">
                    <div className="row m-5 no-gutters justify-content-center">
                        <div className="col-5 bg-white p-5">
                            <h3 className="pb-3 text-center">Recupera tu contraseña</h3>
                            <div className="form-style">
                                <br></br>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group pb-3">
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            className="form-control"
                                            id="recoverpassword"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <br></br>
                                    <div className="pb-2">
                                        <button
                                            type="submit"
                                            className="btn btn-warning w-100 font-weight-bold mt-2"
                                        >
                                            Enviar enlace de inició de sesión
                                        </button>
                                        {successMessage && <p>{successMessage}</p>}
                                        {errorMessage && <p>{errorMessage}</p>}
                                    </div>
                                </form>
                                <br></br>
                                <div className="text-center">
                                    <Link to="/login">Volver al inicio de sesion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}