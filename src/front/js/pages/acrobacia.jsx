import React, { Component } from "react";
//import { Context } from "../store/appContext";

export const Acrobacia = () => {

  const martinPastoPuente =
    "http://drive.google.com/uc?export=view&id=1JO0oSk-2RDlNp-pzhg557opqjmAQ5iyE";

  return (
    <>
      <section
        className="customer-says border border-warning rounded mt-5 pt-5"
        style={{
          backgroundImage: `url(${martinPastoPuente})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container customer-says-content bg-white bg-opacity-75 rounded p-5">
          <div className="top">
            <li>
              <i className="fas fa-running"></i>
              <div className="text">
                <h3>Acrobacia</h3>
                <p>Construímos las acciones acrobáticas abordando los fundamentos de la practica.
                  Para facilitar el entrenamiento a personas de todos los niveles.
                </p>
                <p>Martes y Jueves de 16:30 a 18 hs</p>
                <p>Estamos trabajando:⁣

                  Herramientas para acrobacias blandas
                  Disponibilidad de las articulaciones – Inteligencia de movimiento⁣
                  Elementos de Locomoción para integrar Acrobacias⁣
                  Preparación física y cuidado del cuerpo</p>
              </div>
            </li>
          </div>
          <div className="bottom">
            <div className="middle">
              aca poner video que tengo q subir a google drive (ver bibilioteca de contenidos)
              <p>Descripcion acro</p>
              <h5>mas sobre acro</h5>
              <h6>acro acro</h6>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Acrobacia;
