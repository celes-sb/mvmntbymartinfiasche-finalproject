import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Acrobacia = () => {

  const martinPastoPuente =
    "http://drive.google.com/uc?export=view&id=1JO0oSk-2RDlNp-pzhg557opqjmAQ5iyE";
  const videoAcrobacia =
    "http://drive.google.com/uc?export=view&id=1VysyBuyJw2YzrKf1zmzgSVf81IVXfcWN";
  const campusAcro1 =
    "http://drive.google.com/uc?export=view&id=109EUKNQK5sCdLBc0gjEXkcMvYkrie5-S";
  const campusAcro2 =
    "http://drive.google.com/uc?export=view&id=14OCVkuTF7htxgX4Odw7JzEwJ16dwb3kr";

  return (
    <>
      <section className="container-fluid p-5 mt-5 pt-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${martinPastoPuente})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center center"
        }}
      >
        <div className="mvmt-content bg-white bg-opacity-75 p-5 border border-warning rounded text-center">
          <section className="mvmt-0">
            <h1 className="text pb-3">Campus Acrobático</h1>
            <p className="text pb-3">Talleres organizados a lo largo del año en los cuales construímos las acciones acrobáticas abordando los fundamentos de la práctica para facilitar el entrenamiento a personas de todos los niveles.</p>
            <iframe className="embeddedVideo border border-warning" width="450" height="450" src={videoAcrobacia} title="Entrenamiento Individualizado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2 className="pt-5 pb-4 text-center">Algunos de los aspectos incluídos en el campus:</h2>
            <div className="list text-center">
              <p><i className="fas fa-running"></i> Herramientas para acrobacias blandas</p>
              <p><i className="fas fa-running"></i> Disponibilidad de las articulaciones – Inteligencia de movimiento⁣</p>
              <p><i className="fas fa-running"></i> Elementos de Locomoción para integrar Acrobacias⁣</p>
              <p><i className="fas fa-running"></i> Preparación física y cuidado del cuerpo</p>
            </div>
            <br />
            <div>
              <h3>Un poco de lo que se vive en los encuentros:
                <br />
                <br />
                <iframe className="embeddedVideo border border-warning me-3" width="270" height="450" src={campusAcro1} title="Campus Acerobatico 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="embeddedVideo border border-warning ms-3" width="270" height="450" src={campusAcro2} title="Campus Acrobatico 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </h3>
              <br />
            </div>
            <Link to="/eventos"><button type="button" className="btn btn-large btn-warning p-2 align-self-end">¡Enterate de los próximos campus acá!</button></Link>
          </section >
        </div>
      </section >
    </>
  );
};

export default Acrobacia;
