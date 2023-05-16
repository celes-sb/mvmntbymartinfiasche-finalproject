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
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center center"
      }}>
        <div className="mvmt-content bg-white bg-opacity-75 p-5 border border-warning rounded text-center">
          <section className="mvmt-0">
            <h1 className="text pb-3">¿Qué es el movimiento?</h1>
            <p className="text text-start ps-5 pb-3">El movimiento es un cambio de paradigma en la Cultura Física.<br />
              En este enfoque el sujeto está en el centro de la escena en donde buscamos mejorar la relación con el cuerpo a través de la práctica física.<br />
              La intención es nutrirnos de las mejores herramientas practicando de forma diversa para profundizar en saberes corporales sin estancarnos en la especialización
              a la que nos invitan muchas disciplinas tradicionales.
              <br />
              <br /><strong>La vida es Movimiento. Estás en Movimiento</strong></p>
            <iframe className="embeddedVideo border border-warning" width="800" height="450" src={teaserMovimiento} title="Entrenamiento Individualizado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <br />
            <br />
            <p className="text text-start ps-5 pb-3"><strong>Ido Portal</strong> es la principal influencia de esta corriente y desde 2015 pude estudiar en diferentes workshops:</p>
            <ul className="text text-start list-unstyled ps-5 pb-3">
              <li><i className="fas fa-running"></i> Movement X</li>
              <li><i className="fas fa-running"></i> Juggernaut</li>
              <li><i className="fas fa-running"></i> Motion</li>
              <li><i className="fas fa-running"></i> European Movement Meeting</li>
              <li><i className="fas fa-running"></i> Varios Movement Camps</li>
              <li><i className="fas fa-running"></i> Plataforma de Online Coaching de Ido Portal</li>
            </ul>
            <p className="text text-start ps-5 pb-3">Continuo mi formación aprendiendo de <strong>Marcello Palozzo</strong> quien profundiza la propuesta de Movimiento en entornos urbanos (Environmental Movement Practice)</p>
            <br />
            <h3>¿Queres empezar una práctica de movimiento? Te guío en el proceso.</h3>
          </section >
        </div>
      </div>
    </>
  );
};

export default Movimiento;