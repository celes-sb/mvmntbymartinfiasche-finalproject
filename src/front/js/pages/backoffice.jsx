import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Backoffice = () => {
    const { store, actions } = useContext(Context);

    return (<>

        <h1>Hola soy Inicio</h1>

    </>)
}

export default Backoffice;