import React, { Component } from "react";
//import { Context } from "../store/appContext";
//QUE ACROBACIA Y MOVIMIENTO SEAN LINKS Q LLEVEN A LAS SECCIONES CORRESPONDIENTES
//A DEFINIR IGUAL, ESPEREN A QUE TERMINE DE DISENAR TODO
//RECORDATORIO: SACAR DE LA PAGINA OFICIAL QUE TIENE MUCHO CONTENIDO

export const Individualizado = () => {
  const vertiEstudiantesx3 =
    "http://drive.google.com/uc?export=view&id=1xha1VxiXzaxeHKFmrVmfuT1OPiaFC2vV";
  const rickyMeathook1 =
    "http://drive.google.com/uc?export=view&id=1e2hDD8X_O3vNU5Je0TGH9-GBXoJzTXk-";
  const homeManosPalos =
    "http://drive.google.com/uc?export=view&id=1btEgS-YApCjojathrlABP-PSRfjVLVHc";
  const homeSentadilla =
    "http://drive.google.com/uc?export=view&id=1OWhobIHvijLwv6UFGV9Bjp8ewMG4b2-h";
  const martinSquatPastoColor =
    "http://drive.google.com/uc?export=view&id=1-lc60dKkD4CxJ8L1sLK_iJ4JckELH5dq";

  https: return (
    <>
      <div
        className="container-fluid ps-0 pt-5 mt-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${martinSquatPastoColor})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container service-content bg-white bg-opacity-75 rounded p-5">
          <h1>Entrenamiento Individualizado</h1>
          <p>
            ¿Te gustaria tener disponibilidad para elegir como moverte? <br />
            Hay movimientos que requieren fuerza, movilidad y equilibrio, que
            probablemente quieras realizar <br />
            ¡Entrenemos juntos para que tengas las herramientas necesarias para
            resolverlos! <br /> Vos manejás tu agenda, nosotros nos adaptamos.
            Evaluamos tu estado físico, elaboramos un plan tallado a medida de
            tus necesidades, te acompañamos en el proceso, y juntos, mes a mes,
            evaluamos los resultados.
          </p>
          <iframe
            className="embeddedVideo border border-warning"
            width="518"
            height="292"
            src="https://www.youtube.com/embed/387gIc7tLVo"
            title="Entrenamiento Individualizado"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <section className="service mt-5 pt-5">
            <div className="container">
              <div className="content">
                <div className="content-left">
                  <h2>Otros caminos para explorar:</h2>
                  <ul>
                    <li>
                      <i className="fas fa-running"></i>
                      <div className="text">
                        <h3>Movimiento</h3>
                        <p>
                          Lorem impsum lorem ipsum lorem ipsum lorem ipsum lorem
                          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                          lorem ipsum lorem ipsum lorem ipsum
                        </p>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-shoe-prints"></i>
                      <div className="text">
                        <h3>Acrobacia</h3>
                        <p>
                          Construímos las acciones acrobáticas abordando los
                          fundamentos de la practica. Para facilitar el
                          entrenamiento a personas de todos los niveles.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="content-right">
                  <img
                    className="border border-warning rounded"
                    src={rickyMeathook1}
                    alt="Foto blanco y negro de un alumno haciendo un meathook en anillas"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={vertiEstudiantesx3}
                    alt="Foto blanco y negro de tres personas haciendo vertical"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={homeManosPalos}
                    alt="Foto blanco y negro de varios pares de manos sosteniendo un palo"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={homeSentadilla}
                    alt="Foto blanco y negro de un alumno de espaldas haciendo sentadilla con una barra olímpica y discos"
                  />
                  {""}
                </div>
              </div>
            </div>
          </section>
          <li>
            <i className="fas fa-running"></i>
            <div className="text">
              <h3>Servicios</h3>
              <p>
                <li>Fuerza y Acondicionamiento</li>
                <li>Movilidad, Flexibilidad y Control</li>
                <li>El cuerpo en el tiempo, el espacio y los objetos</li>
                <li>Ritmo y Coordinación</li>
                <li>Balance</li>
                <li>Acrobacia</li>
                <li>Parada de Manos</li>
                <li>
                  Clases grupales Clases particulares Entrenamiento a distancia
                </li>
                <li>Seminarios y Workshops</li>
              </p>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default Individualizado;
