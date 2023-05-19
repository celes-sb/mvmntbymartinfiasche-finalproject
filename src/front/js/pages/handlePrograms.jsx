import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import AdminWithAuth from "../component/Auth/adminWithAuth";

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
            <div className="d-flex justify-content-start ms-2">
                <Link to="/admin/add-programs">
                    <button type="button" className="btn btn-outline-success mb-3">Agregar Programa</button>
                </Link>
            </div>

            <div className="table-responsive p-3">
                {programs && programs.length > 0 && users && users.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Categoría</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Acciones</th>
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
                                        <td>{user ? `${user.first_name} ${user.last_name} - ${user.username} - ${user.email}` : "Usuario desconocido"}</td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <Link to={"/admin/edit-programs/" + item.id}><button type="button" className="btn btn-sm btn-outline-primary me-1">Editar</button></Link>
                                                <button type="button" className="btn btn-sm btn-outline-danger ms-1" onClick={() => deleteProgram(item.id)}>Borrar</button>
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
        </>

    );
};

export default AdminWithAuth(HandlePrograms);
