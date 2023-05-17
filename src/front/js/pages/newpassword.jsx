import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

export const NewPassword = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { token } = useParams();
    const { store, actions } = useContext(Context);

    const acroJump = "http://drive.google.com/uc?export=view&id=1gCHaOZq3Oa7sPMysyfJYrtKBOAY3oeUO";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no son idénticas');
            return;
        }
        let { respuestaJson, response } = await actions.recover(password, token); // call login action

        if (response.ok) {
            alert("Contraseña cambiada con éxito.")
            const btn = document.getElementById("resetPasswordButton");
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-success");
            btn.textContent = "Contraseña cambiada con éxito.";
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }
    };
    return (
        <section className="newPass container-fluid p-5 border border-warning rounded" style={{ backgroundImage: `url(${acroJump})`, backgroundSize: "cover" }}>
            <div className="bg-white bg-opacity-75 border border-warning rounded text-center p-5">
                <div className="container-fluid">
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <div className="col-lg-5 col-md-8 col-sm-10 col-12 bg-white p-5">
                            <h3 className="pb-3 text-center">Creá una contraseña nueva</h3>
                            {message && <div className="alert alert-danger">{message}</div>}
                            <form onSubmit={handleSubmit} className="text-start">
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        id="password"
                                        placeholder="Ingresá tu nueva contraseña"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        id="confirmPassword"
                                        placeholder="Repetí la misma contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                                        required
                                    />
                                </div>
                                <button id="resetPasswordButton" type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
                                    Resetear Contraseña
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewPassword;