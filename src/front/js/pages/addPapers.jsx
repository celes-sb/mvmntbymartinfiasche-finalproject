import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const AddPapers = () => {
    const { store, actions } = useContext(Context);
    const [papers, setPapers] = useState();
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    let obj = {
        name,
        url,
        description
    }

    const addPaper = async () => {
        let { respuestaJson, response } = await actions.useFetch("/newpaper", obj, "POST")
        if (response.ok) {
            alert("Se ha agregado el paper exitosamente");
            navigate("/admin/papers")
        } else {
            alert("Hubo un error, intente de nuevo");
        }
    }

    return (
        <>
            <div className="container">
                <div>
                    <Link to="/admin/papers">Volver</Link>
                    <h2>Agregar un nuevo Paper</h2>
                    <div className="form-style">
                        <br />
                        <form>
                            <div className="form-group pb-2">
                                <input
                                    type="text"
                                    placeholder="Nombre del Paper"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <br />
                            <div className="form-group pb-2">
                                <input
                                    type="text"
                                    placeholder="Descripcion del Paper"
                                    className="form-control"
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </div>
                            <br />
                            <div className="form-group pb-2">
                                <input
                                    type="text"
                                    placeholder="URL del Paper"
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
                                    className="btn btn-outline-primary w-100 font-weight-bold"
                                    onClick={addPaper}
                                >
                                    Agregar Paper
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPapers;