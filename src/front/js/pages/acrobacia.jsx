import React, { Component } from "react";
//import { Context } from "../store/appContext";

export const Acrobacia = () => {

  const martinPastoPuente =
    "http://drive.google.com/uc?export=view&id=1JO0oSk-2RDlNp-pzhg557opqjmAQ5iyE";
  const videoAcrobacia =
    "http://drive.google.com/uc?export=view&id=1VysyBuyJw2YzrKf1zmzgSVf81IVXfcWN";

  return (
    <>
      <section
        className="acrobacia border border-warning rounded mt-5 pt-5"
        style={{
          backgroundImage: `url(${martinPastoPuente})`,
          backgroundSize: "cover",
        }}
      >
        <div className="acrobacia bg-white bg-opacity-75 p-5 border border-warning rounded text-center">
          <h1>Entrenamiento Acrobático</h1>
          <p className="text pb-3">Construímos las acciones acrobáticas abordando los fundamentos de la practica.
            Para facilitar el entrenamiento a personas de todos los niveles.</p>
          <section className="acrobacia-0 d-flex justify-content-center align-items-center">
          </section>
          <section className="acrobacia-1 d-flex p-5">
            <iframe className="embeddedVideo border border-warning" width="450" height="450" src={videoAcrobacia} title="Entrenamiento Individualizado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="acrobacia1-right col-md-6 bg-light text-dark p-5 pb-0 text-left border border-warning">
              <div className="row opacity-75">
                <div className="col-12">
                  <h4 className="acrobacia1-titulo w-100">Algunos de los aspectos incluídos en las clases:⁣</h4>
                </div>
                <div className="col-12">
                  <p><i className="fas fa-running"></i> Herramientas para acrobacias blandas</p>
                  <p><i className="fas fa-running"></i> Disponibilidad de las articulaciones – Inteligencia de movimiento⁣</p>
                  <p><i className="fas fa-running"></i> Elementos de Locomoción para integrar Acrobacias⁣</p>
                  <p><i className="fas fa-running"></i> Preparación física y cuidado del cuerpo</p>
                </div>
                <div className="col-12">
                  <hr className="my-4 m-0 p-0" />
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="mb-0"><strong>MARTES Y JUEVES <br />16.30 a 18<br /> <i class="fas fa-map-marker-alt"></i> PARQUE CENTENARIO</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section >
    </>
  );
};

export default Acrobacia;
