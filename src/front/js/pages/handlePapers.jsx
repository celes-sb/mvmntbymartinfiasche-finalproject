import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import AdminWithAuth from "../component/Auth/adminWithAuth";

export const HandlePapers = () => {
    const { store, actions } = useContext(Context);
    const [papers, setPapers] = useState();

    const cargaDatos = async () => {
        let { respuestaJson, response } = await actions.useFetch("/getpapers");
        if (response.ok) {
            setPapers(respuestaJson);
        } else {
            console.log("Fetch fallido");
        }
    };

    const deletePaper = async (paperId) => {
        let obj = { id: paperId };
        let { respuestaJson, response } = await actions.useFetch("/deletepapers", obj, "DELETE");
        if (response.ok) {
            alert("Paper eliminado exitosamente");
            cargaDatos();
        } else {
            alert("Hubo un error, intente nuevamente")
        }
    }

    useEffect(() => {
        cargaDatos();
    }, []);

    return (
        <>
            <div className="backofficeWelcome1 jumbotron m-3">
                <h1 className="display-4">Papers</h1>
                <p className="lead">Conocé la ciencia detrás del entrenamiento.</p>
                <hr className="my-4" />
            </div>
            <div className="d-flex justify-content-start ms-3">
                <Link to="/admin/add-papers">
                    <button type="button" className="btn btn-outline-success mb-3">Agregar Paper</button>
                </Link>
            </div>

            <div className="table-responsive">
                {papers && papers.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">URL</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {papers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-sm btn-outline-danger mt-3" onClick={() => deletePaper(item.id)}>Borrar</button>
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

export default AdminWithAuth(HandlePapers);