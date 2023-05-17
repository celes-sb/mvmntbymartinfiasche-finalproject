import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/home.css";

export const EditSingleProgram = () => {
    const { store, actions } = useContext(Context);
    const [programs, setPrograms] = useState();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [userId, setUserId] = useState("")
    const [user, setUser] = useState("");
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userUsername, setUserUsername] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const navigate = useNavigate();
    const params = useParams();

    const cargaDatos = async () => {
        let { respuestaJson, response } = await actions.useFetch(`/getprograms/${params.programId}`)
        if (response.ok) {
            setPrograms(respuestaJson)
            setUserId(respuestaJson.user_id)
        } else {
            alert("hubo un error")
            navigate("/admin/programs")
        }
    }

    const getUser = async () => {
        let { respuestaJson, response } = await actions.useFetch(`/user/${userId}`);
        if (response.ok) {
            console.log(respuestaJson)
            setUser(respuestaJson);
        } else {
            console.log("Fetch fallido");
        }
    }

    let obj = {
        program_name: name,
        category
    }

    const editProgram = async () => {
        let { respuestaJson, response } = await actions.useFetch(`/editprograms/${params.programId}`, obj, "PUT")
        if (response.ok) {
            alert("Se ha editado el programa exitosamente");
            navigate("/admin/programs")
        } else {
            alert("Hubo un error, intente de nuevo");
        }
    }

    useEffect(() => {
        cargaDatos()
    }, [])

    useEffect(() => {
        if (programs) {
            setName(programs.program_name);
            setCategory(programs.category);
        }
    }, [programs]);

    useEffect(() => {
        if (userId) {
            getUser()
        }
    }, [userId]);

    useEffect(() => {
        if (user) {
            setUserFirstName(user.first_name);
            setUserLastName(user.last_name);
            setUserEmail(user.email);
            setUserUsername(user.username);
        }
    }, [user]);

    return (
        <>
            <Link to="/admin/programs">Volver</Link>
            <h2>Editar Programa</h2>
            <div className="form-style">
                <br></br>
                <form>
                    <div className="form-group pb-2">
                        <input
                            type="text"
                            placeholder="Nombre del Programa"
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
                            placeholder="Usuario"
                            className="form-control"
                            value={`${userFirstName} ${userLastName} - ${userUsername} - ${userEmail}`}
                            disabled
                        />
                    </div>
                    <br />
                    <div className="pb-2">
                        <button
                            type="button"
                            className="btn btn-outline-primary w-100 font-weight-bold"
                            onClick={editProgram}
                        >
                            Editar Ejercicio
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}

export default EditSingleProgram;