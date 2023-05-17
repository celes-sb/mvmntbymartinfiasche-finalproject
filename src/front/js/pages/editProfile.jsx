import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";
import { Card } from "@mui/material";
import CropEasy from '../component/crop/cropeasy';

export const EditProfile = () => {
    const { store, actions } = useContext(Context);
    const [activeLink, setActiveLink] = useState("Active");
    const [dataUser, setDataUser] = useState(store.userData)
    const [name, setName] = useState(dataUser.first_name);
    const [lastname, setLastName] = useState(dataUser.last_name);
    const [username, setUsername] = useState(dataUser.username);
    const [email, setEmail] = useState(dataUser.email);
    const [phone, setPhone] = useState(dataUser.phone);
    const [country, setCountry] = useState(dataUser.country);
    const [openCrop, setOpenCrop] = useState(false)
    const [file, setFile] = useState(null);
    var currentUser = store.userData;
    const [photoURL, setPhotoURL] = useState(currentUser?.photoURL);
    const navigate = useNavigate();
    const obj = {
        "first_name": name,
        "last_name": lastname,
        username,
        phone,
        country
    }
    const handleEditUser = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.editUser(obj); // call login action
        if (response.ok) {
            alert("Cambio exitoso");
            navigate("/user/profile")
        } else {
            alert("Cambio fallido, intente nuevamente");
        }
    }

    const handleClick = (linkName) => {
        setActiveLink(linkName);
    };

    const linkClass = (linkName) => {
        return activeLink === linkName ? "nav-link active" : "nav-link";
    };
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setPhotoURL(URL.createObjectURL(file));
            setOpenCrop(true);
        }
    };
    return (!openCrop ? (<>
        <div className="backofficeEditProfile">
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
                <li className="nav-item">
                    <Link className={linkClass("Link3")} onClick={() => handleClick("Link3")} to="/user/term-goals">
                        Objetivos
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
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}

                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Apellido"
                                className="form-control"
                                aria-describedby="Apellido"
                                value={lastname}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="Username"
                                className="form-control"
                                aria-describedby="Username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                aria-describedby="Email"
                                value={email}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <input
                                type="text"
                                placeholder="País"
                                className="form-control"
                                value={country}
                                onChange={(e) => {
                                    setCountry(e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                                type="text"
                                placeholder="Teléfono"
                                className="form-control"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Imagen de perfil</label>
                            <input
                                className="form-control" type="file" id="formFile"
                                onChange={handleChange}
                            />
                            <img
                                src={photoURL}
                                sx={{ width: 75, height: 75, cursor: 'pointer' }}
                            />
                            {file && (
                                <Card />
                            )}
                        </div>
                        <br />
                        <div className="pb-1">
                            <button
                                type="button"
                                className="btn btn-outline-primary w-100 font-weight-bold"
                                onClick={handleEditUser}
                            >
                                Guardar Cambios
                            </button>
                            <Link to="/user/profile">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger w-100 font-weight-bold mt-2"

                                >
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>) : (<CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />))
}

export default WithAuth(EditProfile);