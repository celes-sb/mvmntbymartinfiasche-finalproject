import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const HandlePrograms = () => {
    const { store, actions } = useContext(Context);
    const [programs, setPrograms] = useState([]);
    const [users, setUsers] = useState([]);

    const cargaDatos = async () => {
        let { respuestaJson, response } = await actions.useFetch("/getprograms");
        if (response.ok) {
            setPrograms(respuestaJson);
        } else {
            console.log("Fetch fallido");
        }
    };

    const getUsers = async () => {
        let { respuestaJson, response } = await actions.useFetch("/getuser");
        if (response.ok) {
            setUsers(respuestaJson);
        } else {
            console.log("Fetch fallido");
        }
    };

    const deleteProgram = async (programId) => {
        if (window.confirm("¿Estás seguro de eliminar el programa? Esto eliminará también todo su contenido.")) {
            let obj = { id: programId };
            let { respuestaJson, response } = await actions.useFetch("/deleteprograms", obj, "DELETE");
            console.log(response)
            if (response.ok) {
                alert("Programa eliminado exitosamente");
                cargaDatos();
            } else {
                alert("Hubo un error, intente nuevamente");
            }
        } else {
            console.log("User cancelled the deletion");
        }
    };

    useEffect(() => {
        cargaDatos();
        getUsers();
    }, []);

    return (
        <>
            <div className="backofficeWelcome1 jumbotron m-3">
                <h1 className="display-4">Programas</h1>
                <p className="lead">Esta es la lista de programas completa.</p>
                <hr className="my-4" />
            </div>
            <Link to="/admin/add-programs">
                <button type="button" className="btn btn-success">Add New Program</button>
            </Link>

            {programs && programs.length > 0 && users && users.length > 0 ? (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs.map((item, index) => {
                                const user = users.find((user) => user.id === item.user_id);
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.program_name}</td>
                                        <td>{item.category}</td>
                                        <td>{user ? `${user.first_name} ${user.last_name} - ${user.username} - ${user.email}` : "Unknown User"}</td>
                                        <td>
                                            <Link to={"/admin/edit-programs/" + item.id}><button type="button" className="btn btn-primary">Edit</button></Link>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteProgram(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
};

export default HandlePrograms;
