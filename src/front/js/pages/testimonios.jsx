import React, { Component } from "react";
//import { Context } from "../store/appContext";
import previousButton from "../../images/Previous-Button.png";
import shalimaHayden from "../../images/Shalima-Hayden.png";
import nextButton from "../../images/Next-Button.png";

export const Testimonios = () => {
    return (
        <>
            <section className="customer-says">
                <div className="container">
                    <div className="customer-says-content">
                        <div className="top">
                            <h2>Lo que dicen mis alumnos:</h2>
                        </div>
                        <div className="bottom">
                            <img className="cursor" src={previousButton} alt="" />
                            <div className="middle">
                                <img src={shalimaHayden} alt="" />
                                <p>
                                    "Trabajar con un seguimiento, con objetivos claros hace que se
                                    vean las mejoras. Eso me sucede entrenando con Martín y su
                                    método. Totalmente agradecida por la entrega en su trabajo y
                                    el compromiso brindando.""
                                </p>
                                <h5>Sol Pérez Gallardo</h5>
                                <h6>Alumna desde 2019</h6>
                            </div>
                            <img className="cursor" src={nextButton} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonios;