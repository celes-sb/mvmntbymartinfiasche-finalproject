import React, { Component } from "react";
//import { Context } from "../store/appContext";
import servicio1 from "../../images/Servicio-1.jpeg";

export const About = () => {
    return (
        <>
            <h1>Ya hay algo de esto en el landing page.. homogeneizar eso con el texto que mando martin
            </h1>
            <section className="about-us">
                <div className="container">
                    <div className="about-us-content">
                        <div className="content-left">
                            <img src={servicio1} alt="" />
                        </div>
                        <div className="content-right">
                            <h2>Quién es Martin Fiasche? / o Quien soy? / o Sobre mi... primera o tercera persona?</h2>
                            <h4>
                                <span>MVMNT by Martin Fiasche</span> es un centro de
                                entrenamiento presencial y en línea que combina distintas
                                disciplinas como calistenia, weightlifting y movimiento.
                            </h4>
                            <h4>
                                La idea nace con nuestro fundador Martin Fiasche durante la
                                pandemia de COVID-19 en el año 2020. Su idea principal es que
                                las personas mejoren la relación con su cuerpo a través del
                                movimiento.
                            </h4>
                            <h4>
                                Nuestro objetivo es facilitar todo el saber transitado durante
                                los últimos 20 años para ayudar los alumnos y alumnas a
                                vincularse mejor con su cuerpo.
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
