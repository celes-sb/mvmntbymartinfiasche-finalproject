import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import AdminWithAuth from "../component/Auth/adminWithAuth";

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
        <div className="d-flex justify-content-start">
            <Link to="/admin/add-exercises">
                <button type="button" className="btn btn-outline-success ms-3 mb-3">Agregar Ejercicio</button>
            </Link>
        </div>

        <div className="table-responsive-lg table-responsive-md table-responsive-sm ms-3">
            {exercises && exercises.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">URL</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td><a href={item.url_youtube} target="_blank" rel="noopener noreferrer">{item.url_youtube}</a></td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <Link to={"/admin/edit-exercises/" + item.id}><button type="button" className="btn btn-sm btn-outline-primary me-1">Editar</button></Link>
                                            <button type="button" className="btn btn-sm btn-outline-danger ms-1" onClick={() => deleteExercise(item.id)}>Borrar</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <h3>Cargando...</h3>
            )}
        </div>
    </>)
}

export default AdminWithAuth(HandleExercises);