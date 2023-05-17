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

    return (<>

        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Papers</h1>
            <p className="lead">Conocé la ciencia detrás del entrenamiento.</p>
            <hr className="my-4" />
        </div>
        <Link to="/admin/add-papers">
            <button type="button" className="btn btn-success">Add New Paper</button>
        </Link>

        {papers && papers.length > 0 ? (
            <>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {papers.map((item, index) => {
                            return (<>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                                    <button type="button" className="btn btn-danger" onClick={() => deletePaper(item.id)}>Delete</button>
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

export default AdminWithAuth(HandlePapers);