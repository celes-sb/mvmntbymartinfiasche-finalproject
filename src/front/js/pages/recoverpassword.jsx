import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const RecoverPassword = (props) => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const martinVerti = "http://drive.google.com/uc?export=view&id=1YFASZ4Kvi-fwN9SaDl-mVn6BzL6kOACl";
    const { store, actions } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let { respuestaJson, response } = await actions.linkrecoverpassword(email); // call login action
        if (response.ok) {
            alert("Se te ha enviado un correo")
            const btn = document.getElementById("recoverPasswordButton");
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-success");
            btn.textContent = "¡Se te ha enviado un correo!";
        }
    };
    return (
        <section className="container-fluid p-5 border border-warning rounded" style={{ backgroundImage: `url(${martinVerti})`, backgroundSize: "cover" }}>
            <div className="recoverPass bg-white bg-opacity-75 border border-warning rounded text-center pt-5 mt-4 pb-5">
                <div className="login-container container-fluid">
                    <div className="login-container2 d-flex flex-row flex-nowrap" style={{ overflowX: "auto" }}>
                        <div className="login-content container">
                            <div className="container">
                                <div className="row m-5 justify-content-center">
                                    <div className="col-lg-5 col-md-8 col-sm-10 col-12 bg-white p-5">
                                        <h3 className="pb-3 text-center">Recuperá tu contraseña</h3>
                                        <div className="form-style">
                                            <br />
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group pb-3">
                                                    <input
                                                        type="text"
                                                        placeholder="Ingresá tu email"
                                                        className="form-control"
                                                        id="recoverpassword"
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }}
                                                    />
                                                </div>
                                                <br />
                                                <div className="pb-2">
                                                    <button
                                                        id="recoverPasswordButton"
                                                        type="submit"
                                                        className="btn btn-primary w-100 font-weight-bold"
                                                    >
                                                        Enviar enlace de inicio de sesión
                                                    </button>
                                                    {successMessage && <p>{successMessage}</p>}
                                                    {errorMessage && <p>{errorMessage}</p>}
                                                </div>
                                            </form>
                                            <br />
                                            <div className="text-center">
                                                <Link to="/login">Iniciar sesión</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecoverPassword