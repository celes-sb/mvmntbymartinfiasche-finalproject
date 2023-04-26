import React, { Component } from "react";
import Martin from "C:/Users/sebas/Documents/prueba/mvmnt-finalproject/src/front/images/Martin.jpg";
//import { Context } from "../store/appContext";
export const About = () => {
    const martin ='https://github.com/celes-sb/mvmnt-finalproject/blob/6cd408991627c262b89f456c7739cc99391dc78c/src/front/images/Martin.jpg'
    return (
        <>
            <section className="about-us" style={{ marginTop: "100px" }}>
                <div className="container" style={{ display: "flex", alignItems: "center" }}>
                    <div className="about-us-content" style={{ display: "flex", alignItems: "center" }}>
                        <div className="content-left" style={{ flex: "1", paddingRight: "20px" }}>
                            <div className="hero-content-photo">
                                <div className="animation" style={{ position: "relative", height: "100%" }}>
                                    <div className="circle"></div>
                                    <div className="circle-yellow"></div>
                                    <div className="circle-gredient"></div>
                                </div>
                            </div>
                            <img src={martin} alt="Martin haciendo un pancake en el pasto" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="content-right" style={{ flex: "1", paddingLeft: "20px" }}>
                            <h2>Quién es Martin Fiasche?</h2>
                            <h4>
                                Docente curioso e inquieto de cualquier posibilidad que pueda ofrecer el cuerpo.
                                Mi búsqueda es explorar las opciones de movimiento para nutrirme de su contenido sin asumir los costos de la especialización. Interpretar cuáles son los requisitos para construir un sistema abierto que permita acercar a todas las personas a una práctica que enriquezca sus posibilidades a partir de sus necesidades y no adiestrar a una persona a las condiciones de una práctica.

                                Considero fundamental abordar el mejoramiento de las cualidades físicas que, aunque lo contiene, es mucho más amplio que el trabajo de fuerza y acondicionamiento – para preparar el cuerpo para los desafíos que presentan los múltiples escenarios de movimiento.
                                Para esto, vamos a trabajar con el peso corporal en anillas u otros elementos, vamos a usar cargas libres, vamos a pararnos sobre las manos, a balancear sobre una superficie irregular o trabajar patrones rítmicos y coordinativos hasta sentir que tu cuerpo responde ante las órdenes que vos emitís.
                                Preparar el cuerpo no es sólo poder sostener un esfuerzo desde lo metabólico, articular y muscular; sino registrar y conocer las funciones del cuerpo que te brinda todas las posibilidades.

                                La propuesta esta destinada para aquellos que pretendan desarrollar su disponibilidad corporal desde un cambio de paradigma que implique estar a la misma distancia de todas las posibilidades: la intensidad, la sensibilidad, la repetición, la precisión, el arriba y el abajo, el centro y los extremos, las manos y los pies... trascendiendo una dicotomía de éxito o fracaso para abrazar un camino a recorrer como una experiencia que nos permita conocernos a nosotros mismos.

                                Todas las herramientas pueden ser una opción cuando conocés cuál es el paradigma que estás persiguiendo.
                            </h4>
                            <h4>
                                <ul>Servicios
                                    <li>Fuerza y Acondicionamiento</li>
                                    <li>Movilidad, Flexibilidad y Control</li>
                                    <li>El cuerpo en el  tiempo, el  espacio y los objetos</li>
                                    <li>Ritmo y Coordinación</li>
                                    <li>Balance</li>
                                    <li>Acrobacia</li>
                                    <li>Parada de Manos</li></ul>
                            </h4>
                            <h4>
                                <ul>
                                    Clases grupales
                                    Clases particulares
                                    Entrenamiento a distancia
                                    Seminarios y Workshops
                                </ul>
                            </h4>
                            <div className="rectangle"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
