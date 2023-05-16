import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

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
            alert("Se ha agregado el ejercicio exitosamente");
            navigate("/admin/exercises")
        } else {
            alert("Hubo un error, intente de nuevo");
        }
    }

    return (<>
        <Link to="/admin/exercises">Volver</Link>
        <h2>Agregar un nuevo Ejercicio</h2>
        <div className="form-style">
            <br></br>
            <form>
                <div className="form-group pb-2">
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
                <br></br>
                <div className="form-group pb-2">
                    <input
                        type="text"
                        placeholder="Categoría del Ejercicio"
                        className="form-control"
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    />
                </div>
                <br></br>
                <div className="form-group pb-2">
                    <input
                        type="text"
                        placeholder="Descripcion del Ejercicio"
                        className="form-control"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                <br></br>
                <div className="form-group pb-2">
                    <input
                        type="text"
                        placeholder="URL del Ejercicio"
                        className="form-control"
                        onChange={(e) => {
                            setUrl(e.target.value);
                        }}
                    />
                </div>
                <br />
                <div className="pb-2">
                    <button
                        type="button"
                        className="btn btn-primary w-100 font-weight-bold"
                        onClick={addExercise}
                    >
                        Agregar Ejercicio
                    </button>
                </div>
            </form>
        </div>
    </>)
}

export default AddExercises;