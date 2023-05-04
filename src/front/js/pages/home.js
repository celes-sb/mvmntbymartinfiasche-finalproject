import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {

  const martinygrupocolor = "http://drive.google.com/uc?export=view&id=1i5SfPvrqY8x2EQrV1oGmJgQQRz1ZuFHK"

  return (
    <>
      <div className="container-fluid ms-0 pt-5 pb-1 mb-0 ps-0">
        <section className="header position-relative mt-5">
          <img href="/" className="imgheader border border-warning rounded" src={martinygrupocolor} style={{ width: "100%", height: "100%", position: "absolute", objectFit: "cover" }} />
          <div className="hero">
            <div className="hero-content">
              <div className="hero-content-text text-dark bg-light bg-opacity-75 p-5 rounded h-100 d-flex flex-column justify-content-end align-items-end">
                <h1 className="mb-4">
                  ¿Entrenamos distinto?
                </h1>
                <h3 className="mb-4">Conocé una nueva forma integral de trabajar con tu cuerpo. <br /> Explorá los márgenes del movimiento y aprendé a disfrutar el proceso. <br /><span>Rompé con el molde</span> y sumate al nuevo paradigma del entrenamiento físico.</h3>
                <Link to="/signup"><button type="button" className="btn btn-large p-2 opacity-75 align-self-end">¡Empezá ahora!</button></Link>
              </div>
            </div>
          </div>
        </section>

      </div >
    </>
  );
};
