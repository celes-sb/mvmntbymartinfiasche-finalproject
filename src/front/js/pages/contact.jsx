import React, { Component } from "react";
//import { Context } from "../store/appContext";
import mapIcon from "../../images/map-icon.png";

export const Contact = () => {
    return (
        <>
            <section className="contact-us">
                <div className="container">
                    <div className="contact-us-content">
                        <div className="left-content">
                            <h2>Contacto</h2>
                            <div className="form">
                                <div className="row">
                                    <div className="row-c">
                                        <label for="fname">Nombre<span className="text-danger"> *</span></label>
                                        <input
                                            className="input-sec"
                                            type="text"
                                            id="fname"
                                            name="fname"
                                            placeholder="Ingresá tu nombre"
                                        />
                                    </div>
                                    <div className="row-c">
                                        <label for="lname">Apellido<span className="text-danger"> *</span></label>
                                        <input
                                            className="input-sec"
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            placeholder="Ingresá tu apellido"
                                        />
                                    </div>
                                </div>

                                <label className="color" for="email">
                                    Correo Electrónico<span className="text-danger"> *</span></label>
                                <input
                                    className="input-sec"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresá tu correo electrónico"
                                />

                                <label className="color" for="message">
                                    Comentario o consulta<span className="text-danger"> *</span></label>
                                <textarea
                                    className="input-sec"
                                    name="msg"
                                    id="message"
                                    placeholder="Escribí tus consultas o comentarios"
                                ></textarea>

                                <button className="btn">ENVIAR</button>
                            </div>
                        </div>
                        <div className="right-content">
                            <img className="img-1" alt="Contact Form Image CambiarPorLoQueDeMartin" style={{ width: "400px", height: "500px" }} src="https://c0.wallpaperflare.com/preview/821/40/875/levitation-beauty-smoke-circus.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;