import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";


export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Active");
    const [dataUser, setDataUser] = useState(store.userData)
    const [openCrop, setOpenCrop] = useState(false)
    const [file, setFile] = useState(null);
    var currentUser = store.userData;
    const [photoURL, setPhotoURL] = useState(currentUser?.photoURL);
    useEffect(() => {
        setDataUser(store.userData);
    }, [store.userData]);
    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };
    return (<>
        <div className="backofficeProfile">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className={linkClass("Active")} onClick={() => handleClick("Active")} to="/user/profile">
                        Datos Personales
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className={linkClass("Link")} onClick={() => handleClick("Link")} to="/user/measures">
                        Info Entrenamiento
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={linkClass("Link2")} onClick={() => handleClick("Link2")} to="/user/emergency-contact">
                        Contacto de Emergencia
                    </Link>
                </li>
            </ul>
            <div className="col-md-9 p-3">
                <div className="form-style">
                    <form>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="form-control"
                                aria-describedby="Nombre"
                                value={dataUser.first_name}
                                disabled

                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Apellido"
                                className="form-control"
                                aria-describedby="Apellido"
                                value={dataUser.last_name}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Nombre de usuario"
                                className="form-control"
                                aria-describedby="Username"
                                value={dataUser.username}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                aria-describedby="Email"
                                value={dataUser.email}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="País"
                                className="form-control"
                                value={dataUser.country}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Teléfono"
                                className="form-control"
                                value={dataUser.phone}
                                disabled
                            />
                        </div>
                        <br />
                        <div className="pb-2">
                            <Link to="/user/edit-profile">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary w-100 font-weight-bold mt-2"

                                >
                                    Editar Información
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Profile;