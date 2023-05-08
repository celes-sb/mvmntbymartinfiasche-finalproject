import React, { Component } from "react";
//import { Context } from "../store/appContext";

export const Movimiento = () => {
  const movimientoAlumnos =
    "http://drive.google.com/uc?export=view&id=1VysyBuyJw2YzrKf1zmzgSVf81IVXfcWN";
  const movimientoMartin =
    "http://drive.google.com/uc?export=view&id=1VysyBuyJw2YzrKf1zmzgSVf81IVXfcWN";
  const teaserMovimiento =
    "http://drive.google.com/uc?export=view&id=101vIpcHyHaTaMZUPGPQlS6JnE16bsXW3";
  const bgGrupoSquat =
    "http://drive.google.com/uc?export=view&id=1GZoTJC-LYiAJkyJnM9D7aLrK4q24sDjl";

  return (
    <>
      <div className="container-fluid p-5 mt-5 pt-5 border border-warning rounded" style={{
        backgroundImage: `url(${bgGrupoSquat})`,
        backgroundSize: "100% 100%",
      }}>
        <div className="mvmt-content bg-white bg-opacity-75 p-5 border border-warning rounded text-center">
          <section className="mvmt-0">
            <h1 className="text pb-3">¿Qué significa practicar movimiento?</h1>
            <p className="text pb-3">TEXTO PENDIENTE Q MANDE MARTIN</p>
            <iframe className="embeddedVideo border border-warning" width="800" height="450" src={teaserMovimiento} title="Entrenamiento Individualizado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h1 className="pt-5 pb-4 text-start">Más texto...?</h1>
          </section >
        </div>
      </div>
    </>
  );
};

export default Movimiento;
