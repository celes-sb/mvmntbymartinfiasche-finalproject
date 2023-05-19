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
      <section className="container-fluid p-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${martinPastoPuente})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center center"
        }}
      >
        <div className="mvmt-content bg-white bg-opacity-75 p-5 border border-warning rounded text-center">
          <section className="acro-0">
            <h1 className="text pb-3">Campus Acrobático</h1>
            <p className="text pb-3">Talleres organizados a lo largo del año en los cuales construímos las acciones acrobáticas abordando los fundamentos de la práctica para facilitar el entrenamiento a personas de todos los niveles.</p>
            <div className="embed-responsive embed-responsive-16by9 mb-2">
              <iframe className="embed-responsive-item border border-warning" src={videoAcrobacia} title="Entrenamiento Individualizado" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <h2 className="pt-3 pb-4 text-center">Algunos de los aspectos incluídos en el campus:</h2>
            <div className="list text-center">
              <p><i className="fas fa-running"></i> Herramientas para acrobacias blandas</p>
              <p><i className="fas fa-running"></i> Disponibilidad de las articulaciones – Inteligencia de movimiento⁣</p>
              <p><i className="fas fa-running"></i> Elementos de Locomoción para integrar Acrobacias⁣</p>
              <p><i className="fas fa-running"></i> Preparación física y cuidado del cuerpo</p>
            </div>
            <br />
            <div className="d-flex justify-content-center mb-3">
              <h3>Un poco de lo que se vive en los encuentros:</h3>
            </div>
            <div className="row">
              <div className="colVideo1 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item border border-warning" src={campusAcro1} title="Campus Acerobatico 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
              <div className="colVideo2 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-start">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item border border-warning" src={campusAcro2} title="Campus Acrobatico 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>

            <br />
            <div className="d-flex justify-content-center">
              <Link to="/eventos"><button type="button" className="btn btn-large btn-warning p-2 align-self-end">¡Enterate de los próximos campus acá!</button></Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Acrobacia;
