import React, { Component } from "react";
//import { Context } from "../store/appContext";
import mapIcon from "../../images/map-icon.png";
import fotoGimnasio from "../../images/foto-gimnasio.jpeg";

export const Contact = () => {
    return (
        <>
            <section className="contact-us">
                <div className="container">
                    <div className="contact-us-content">
                        <div className="left-content">
                            <h2>Contáctanos</h2>
                            <div className="form">
                                <div className="row">
                                    <div className="row-c">
                                        <label for="fname">Nombre</label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="fname"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="row-c">
                                        <label for="lname">Apellido</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <label className="color" for="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    className="input-sec"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />

                                <label className="color" for="message">
                                    Mensaje
                                </label>
                                <textarea
                                    name="msg"
                                    id="message"
                                    placeholder="Enter your message"
                                ></textarea>

                                <button className="btn"> ENVIAR</button>
                            </div>
                        </div>
                        <div className="right-content">
                            <img className="img-1" src={fotoGimnasio} alt="" />
                            <img className="img-2" src={dotOrnament} alt="" />
                            <div className="text">
                                <img src={mapIcon} alt="" />
                                <p>Av. Belgrano 342, Buenos Aires, Argentina</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;