import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";

export const Home = () => {

  const martinygrupocolor = "http://drive.google.com/uc?export=view&id=1i5SfPvrqY8x2EQrV1oGmJgQQRz1ZuFHK"

  return (
    <>
      <div className="container-fluid ms-0 mt-5 pb-4 ps-0">
        <section className="header">
          <img className="imgheader border border-warning rounded" src={martinygrupocolor} style={{ width: "100%", height: "100%", position: "absolute", objectFit: "cover" }} />
          <div className="hero">
            <div className="hero-content">
              <div className="hero-content-text bg-dark bg-opacity-50 p-5 rounded h-75 w-75">
                <h1>
                  ¿Entrenamos distinto?
                </h1>
                <h2>Conocé una nueva forma integral de trabajar con tu cuerpo</h2>
                <h3>Explorá los márgenes del movimiento. Aprendé a disfrutar el proceso. <strong>Rompé con el molde</strong> y sumate al nuevo paradigma del entrenamiento físico.</h3>
                <button type="button" className="btn btn-primary btn-large w-25">¡Empezá ahora!</button>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
};
