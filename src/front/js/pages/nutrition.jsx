import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Nutrition = () => {
    const { store, actions } = useContext(Context);

    return (<>
        <h1>Hola soy Nutricion</h1>
    </>)
}

export default Nutrition;