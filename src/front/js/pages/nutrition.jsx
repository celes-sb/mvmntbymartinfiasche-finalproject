import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Nutrition = () => {
    const { store, actions } = useContext(Context);

    const videoUltraprocesados = "http://drive.google.com/uc?export=view&id=1tcbBtUmk1nTFPHHAMLKD7V2w7G0MHgMz";
    const mayonesaZanahoria = "http://drive.google.com/uc?export=view&id=1NMnrpXEBq6PjlWSY3HeJcO_Q72THRp85";

    return (<>
        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Nutrición</h1>
            <p className="lead">De la mano de Gisela Baiardo (nutricionista especializada en deporte) aprendemos a nutrir a nuestro cuerpo para que no sólo rinda mejor a la hora de entrenar sino que esté saludable y con energía para todas las actividades del día.<br />
                Aquí se irán subiendo recetas y videos informativos.</p>
            <hr className="my-4" />
            <div className="nutricion-content text-center">
                <h3>Aprendiendo sobre nutrición</h3>
                <br />
                <iframe className="border border-primary" src="https://drive.google.com/file/d/1tcbBtUmk1nTFPHHAMLKD7V2w7G0MHgMz/preview" width="640" height="480" allow="autoplay"></iframe>
                <br />
                <br />
                <h3>Receta para hacer en casa</h3>
                <br />
                <iframe className="border border-primary" src="https://drive.google.com/file/d/1NMnrpXEBq6PjlWSY3HeJcO_Q72THRp85/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        </div>

    </>)
}

export default Nutrition;