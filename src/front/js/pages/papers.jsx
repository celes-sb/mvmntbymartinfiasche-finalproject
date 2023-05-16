import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Papers = () => {
    const { store, actions } = useContext(Context);
    const [papers, setPapers] = useState()

    const alumnosSpine = "http://drive.google.com/uc?export=view&id=1mqYln15hz8FMhuzOIM61qBictu1OgLu2";

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/getpapers");
            if (response.ok) {
                setPapers(respuestaJson);
            } else {
                console.log("Fetch fallido");
            }
        };
        cargaDatos();
    }, []);

    return (<>

        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Papers</h1>
            <p className="lead">Conocé la ciencia detrás del entrenamiento.</p>
            <hr className="my-4" />
        </div>
        {papers && papers.length > 0 ? (
            <>
                <div className="d-flex flex-wrap">
                    {papers.map((item, index) => {
                        return (
                            <div className="card ms-3 mt-3 text-center border border-primary" style={{ width: "18rem" }} key={index}>
                                <img src={alumnosSpine} className="card-img-top" alt="Alumnos Extensión Torácica" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href={item.url} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">Leé este paper</a>

                                </div>
                            </div>

                        )
                    })}
                </div>
            </>
        )
            : (<h1>Loading</h1>)
        }
    </>)
}

export default Papers;