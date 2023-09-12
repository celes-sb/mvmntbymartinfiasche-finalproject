import React, { Component } from "react";
//import { Context } from "../store/appContext";

export const About = () => {
  const martin =
    "http://drive.google.com/uc?export=view&id=1RHnFaDPPtFe7X8fJO98EkFtbxxyLQSIJ";
  const martin2 =
    "http://drive.google.com/uc?export=view&id=157-QtUkfD1HbR5SiFRoSZUWUoE-Kig8G";

  return (
    <section className="about-us container-fluid pt-3">
      <div className="container">
        <div className="row">
          <div className="imgAbout col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <img
              src={martin2}
              alt="Martin, primer plano, mirando hacia abajo"
              className="img-fluid border border-warning"
            />
          </div>
          <div className="textAbout col-lg-6 col-md-6 col-sm-12 col-12" style={{ paddingLeft: "20px" }}>
            <h2>¿Quién es Martín Fiasche?????</h2>
            <h4>
              Docente curioso e inquieto de cualquier posibilidad que pueda ofrecer el cuerpo. Mi búsqueda es explorar las opciones de movimiento para nutrirme de su contenido sin asumir los costos de la especialización. Interpretar cuáles son los requisitos para construir un sistema abierto que permita acercar a todas las personas a una práctica que enriquezca sus posibilidades a partir de sus necesidades y no adiestrar a una persona a las condiciones de una práctica.
              <br />
              Considero fundamental abordar el mejoramiento de las cualidades físicas que, aunque lo contiene, es mucho más amplio que el trabajo de fuerza y acondicionamiento – para preparar el cuerpo para los desafíos que presentan los múltiples escenarios de movimiento. Para esto, vamos a trabajar con el peso corporal en anillas u otros elementos, vamos a usar cargas libres, vamos a pararnos sobre las manos, a balancear sobre una superficie irregular o trabajar patrones rítmicos y coordinativos hasta sentir que tu cuerpo responde ante las órdenes que vos emitís.
              <br />
              Preparar el cuerpo no es sólo poder sostener un esfuerzo desde lo metabólico, articular y muscular; sino registrar y conocer las funciones del cuerpo que te brinda todas las posibilidades. La propuesta esta destinada para aquellos que pretendan desarrollar su disponibilidad corporal desde un cambio de paradigma que implique estar a la misma distancia de todas las posibilidades: la intensidad, la sensibilidad, la repetición, la precisión, el arriba y el abajo, el centro y los extremos, las manos y los pies... trascendiendo una dicotomía de éxito o fracaso para abrazar un camino a recorrer como una experiencia que nos permita conocernos a nosotros mismos.
              <br />
              Todas las herramientas pueden ser una opción cuando conocés cuál es el paradigma que estás persiguiendo.
            </h4>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
