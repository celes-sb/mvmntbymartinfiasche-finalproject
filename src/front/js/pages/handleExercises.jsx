import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const HandleExercises = () => {
    const { store, actions } = useContext(Context);
    const [exercises, setExercises] = useState();

    const cargaDatos = async () => {
        let { respuestaJson, response } = await actions.useFetch("/getexercises");
        if (response.ok) {
            setExercises(respuestaJson);
        } else {
            console.log("Fetch fallido");
        }
    };

    const deleteExercise = async (exerciseId) => {
        let obj = { id: exerciseId };
        let { respuestaJson, response } = await actions.useFetch("/deleteexercises", obj, "DELETE");
        if (response.ok) {
            alert("Ejercicio eliminado exitosamente");
            cargaDatos();
        } else {
            alert("Hubo un error, intente nuevamente")
        }
    }

    useEffect(() => {
        cargaDatos();
    }, []);

    return (<>

        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Ejercicios</h1>
            <p className="lead">Esta es la lista de ejercicios completa.</p>
            <hr className="my-4" />
        </div>
        <Link to="/admin/add-exercises">
            <button type="button" className="btn btn-success">Add New Exercise</button>
        </Link>

        {exercises && exercises.length > 0 ? (
            <>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((item, index) => {
                            return (<>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td><a href={item.url_youtube} target="_blank" rel="noopener noreferrer">{item.url_youtube}</a></td>
                                    <Link to={"/admin/edit-exercises/" + item.id}><button type="button" className="btn btn-primary">Edit</button></Link>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteExercise(item.id)}>Delete</button>
                                </tr>

                            </>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
            : (<h1>Loading</h1>)
        }
    </>)
}

export default HandleExercises;