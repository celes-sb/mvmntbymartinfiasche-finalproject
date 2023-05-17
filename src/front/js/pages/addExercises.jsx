import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import AdminWithAuth from "../component/Auth/adminWithAuth";

export const AddExercises = () => {
    const { store, actions } = useContext(Context);
    const [exercises, setExercises] = useState();
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    let obj = {
        name,
        "url_youtube": url,
        description,
        category
    }

    const addExercise = async () => {
        let { respuestaJson, response } = await actions.useFetch("/newexercises", obj, "POST")
        if (response.ok) {
            alert("Se ha agregado el ejercicio exitósamente");
            navigate("/admin/exercises")
        } else {
            alert("Hubo un error, intente de nuevo");
        }
    }

    return (
        <>
            <div className="container">
                <div className="backofficeWelcome1 jumbotron m-2">
                    <h1 className="display-4">Agregar Ejercicios</h1>
                    <p className="lead">Completar todo los campos para que el estudiante no tenga dudas.</p>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
                            <Link to="/admin/exercises">Volver</Link>
                            <div className="form-style">
                                <br />
                                <form>
                                    <div className="form-group pb-1">
                                        <input
                                            type="text"
                                            placeholder="Nombre del Ejercicio"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <br />
                                    <div className="form-group pb-1">
                                        <input
                                            type="text"
                                            placeholder="Categoría [Fuerza, Movilidad, Verticales]"
                                            className="form-control"
                                            onChange={(e) => {
                                                setCategory(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <br />
                                    <div className="form-group pb-1">
                                        <input
                                            type="text"
                                            placeholder="Descripción del Ejercicio"
                                            className="form-control"
                                            onChange={(e) => {
                                                setDescription(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <br />
                                    <div className="form-group pb-1">
                                        <input
                                            type="text"
                                            placeholder="Link de YouTube"
                                            className="form-control"
                                            onChange={(e) => {
                                                setUrl(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <br />
                                    <div className="pb-1">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary w-100 font-weight-bold"
                                            onClick={addExercise}
                                        >
                                            Agregar Ejercicio
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminWithAuth(AddExercises);