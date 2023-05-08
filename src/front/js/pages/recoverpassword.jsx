import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const RecoverPassword = (props) => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const recover = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { respuestaJson, response } = await actions.recover(email); // call login action
        if (response.ok) {
            alert("Se te ha enviado un correo")
          }
    }
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
                                <form>
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
                                            type="button"
                                            className="btn btn-warning w-100 font-weight-bold mt-2"
                                            onClick={recover}
                                        >
                                            Enviar enlace de inició de sesión
                                        </button>
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