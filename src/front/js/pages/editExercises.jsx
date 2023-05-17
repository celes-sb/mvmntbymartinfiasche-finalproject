import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/home.css";
import AdminWithAuth from "../component/Auth/adminWithAuth";

export const EditExercises = () => {
    const { store, actions } = useContext(Context);
    const [exercises, setExercises] = useState();
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    const cargaDatos = async () => {
        let { respuestaJson, response } = await actions.useFetch(`/getexercises/${params.exerciseId}`)
        if (response.ok) {
            setExercises(respuestaJson)
        } else {
            alert("hubo un error")
            navigate("/admin/exercises")
        }
    }

    let obj = {
        name,
        "url_youtube": url,
        description,
        category
    }

    const editExercise = async () => {
        let { respuestaJson, response } = await actions.useFetch(`/editexercises/${params.exerciseId}`, obj, "PUT")
        if (response.ok) {
            alert("Se ha editado el ejercicio exitosamente");
            navigate("/admin/exercises")
        } else {
            alert("Hubo un error, intente de nuevo");
        }
    }

    useEffect(() => {
        cargaDatos()
    }, [])

    useEffect(() => {
        if (exercises) {
            setName(exercises.name);
            setUrl(exercises.url_youtube);
            setCategory(exercises.category);
            setDescription(exercises.description);
        }
    }, [exercises]);

    return (<>
        <Link to="/admin/exercises">Volver</Link>
        <h2>Editar Ejercicio</h2>
        <div className="form-style">
            <br></br>
            <form>
                <div className="form-group pb-2">
                    <input
                        type="text"
                        placeholder="Nombre del Ejercicio"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={name}
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
                        value={category}
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
                        value={description}
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
                        value={url}
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
                        onClick={editExercise}
                    >
                        Editar Ejercicio
                    </button>
                </div>
            </form>
        </div>
    </>)
}

export default AdminWithAuth(EditExercises);