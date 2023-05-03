import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    "http://drive.google.com/uc?export=view&id=1TGRnvUqtbIuVqRk3VjJ1tbidiypKnufY";
  const martinSquatPastoColor =
    "http://drive.google.com/uc?export=view&id=1-lc60dKkD4CxJ8L1sLK_iJ4JckELH5dq";
  const cuadrupMono =
    "http://drive.google.com/uc?export=view&id=19pDJ9sS_Hk3PCntjtS-2WkA0T4hTBPam";

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
          <h1>¿Te gustaría tener disponibilidad para elegir como moverte?</h1>
          <h3>
            Hay movimientos que requieren fuerza, movilidad y equilibrio, que
            probablemente quieras realizar <br />
            ¡Entrenemos juntos para que tengas las herramientas necesarias para
            resolverlos!</h3>
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
              <div className="content d-flex flex-wrap">
                <div className="content-left w-50">
                  <h2>El proceso:</h2>
                  <ul>
                    <li className="d-flex">
                      <div className="text">
                        <h3>Modus Operandi</h3>
                        <p><i className="far fa-check-circle"></i>Hacemos una evaluación de movilidad, control motor y fuerza en función de tus intereses,
                          objetivos, frecuencia de entrenamiento posible y materiales a disposición. Luego,
                          elaboramos un plan detallado, te acompañamos en el proceso, y juntos, mes a mes,
                          evaluamos los resultados.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap">
                      <div className="text">
                        <h3>Áreas de trabajo:</h3>
                        <ul>
                          <li><i className="far fa-check-circle"></i>Fuerza</li>
                          <li><i className="far fa-check-circle"></i>Movilidad</li>
                          <li><i className="far fa-check-circle"></i>Parada de Manos</li>
                        </ul>
                      </div>
                      <div className="text">
                        <h3>Contenido:</h3>
                        <ul>
                          <li><i className="far fa-check-circle"></i>Calendario de entrenamiento,
                            rutinas diferenciadas, esquemas para progresar semana a semana
                            y videos de demostración de cada ejercicio incluyendo entrada en calor.</li>
                          <li><i className="far fa-check-circle"></i>2 instancias de devolución de la ejecución de los ejercicios (semana 1 y semana 4)</li>
                          <li><i className="far fa-check-circle"></i>Canal abierto de comunicación durante todo el mes: WhatsApp o mail para sacarte dudas en el día a día</li>
                          <li><i className="far fa-check-circle"></i>Material de estudio adicional a la programación</li>
                          <li><i className="far fa-check-circle"></i>Acceso a la plataforma de Discord donde podés conectar con otros alumnos que entrenan bajo este sistema.</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="content-right w-50">
                  <img
                    className="border border-warning rounded"
                    src={rickyMeathook1}
                    alt="Foto blanco y negro de un alumno haciendo un meathook en anillas"
                  />{" "}
                  <img
                    className="border border-warning rounded"
                    src={cuadrupMono}
                    alt="Foto blanco y negro de Martín y un alumno haciendo caminando en cuadrupedia"
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
        </div >
      </div >
    </>
  );
};

export default Individualizado;
