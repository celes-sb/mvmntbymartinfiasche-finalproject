import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {

  const martinygrupocolor = "http://drive.google.com/uc?export=view&id=1i5SfPvrqY8x2EQrV1oGmJgQQRz1ZuFHK"

  return (
    <>
      <div className="container-fluid">
        <section className="header position-relative d-flex justify-content-center">
          <div className="img-container">
            <img href="/" className="imgheader border border-warning rounded" src={martinygrupocolor} alt="Header Image" />
          </div>
          <div className="home">
            <div className="home-content">
              <div className="home-content-text bg-light bg-opacity-75 p-5 rounded h-100 d-flex flex-column align-items-end align-lg-end">
                <h1 className="mb-4 text-center text-lg-end">
                  ¿Entrenamos distinto?
                </h1>
                <h3 className="mb-4 text-center text-lg-end">Conocé una nueva forma integral de trabajar con tu cuerpo. <br /> Explorá los márgenes del movimiento y aprendé a disfrutar el proceso. <br /><span>Rompé con el molde</span> y sumate al nuevo paradigma del entrenamiento físico.</h3>
                <div className="d-flex justify-content-center justify-content-lg-center">
                  <Link to="/signup"><button type="button" className="btn btn-large p-2 opacity-75">¡Empezá ahora!</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  );
};
