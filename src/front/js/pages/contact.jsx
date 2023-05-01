import React, { Component } from "react";
//import { Context } from "../store/appContext";

export const Contact = () => {
  const contactoManos =
    "http://drive.google.com/uc?export=view&id=1fYc_uMZtdSOR-i7E0ckCs6IB4pz-i3xY";

  https: return (
    <>
      <section
        className="container-fluid contact-us ps-0 pt-5 pb-5 mb-5mt-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${contactoManos})`,
          backgroundSize: "cover",
        }}
        alt="Manos haciendo contacto, blanco y negro"
      >
        <div className="container">
          <div className="contact-us-content">
            <div className="left-content">
              <h2>Hablemos</h2>
              <h4>¡Escribime y sumate al movimiento!</h4>
              <div className="form">
                <div className="row">
                  <div className="row-c">
                    <label for="fname">
                      Nombre<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input-sec"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Ingresá tu nombre"
                    />
                  </div>
                  <div className="row-c">
                    <label for="lname">
                      Apellido<span className="text-danger"> *</span>
                    </label>
                    <input
                      className="input-sec"
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Ingresá tu apellido"
                    />
                  </div>
                </div>

                <label className="row-c" for="email">
                  Correo Electrónico<span className="text-danger"> *</span>
                </label>
                <input
                  className="input-sec"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingresá tu correo electrónico"
                />

                <label className="color" for="message">
                  Comentario o consulta
                  <span className="text-danger"> *</span>
                </label>
                <textarea
                  className="input-sec"
                  name="msg"
                  id="message"
                  placeholder="Escribí tus consultas o comentarios"
                ></textarea>

                <button className="btn">ENVIAR</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
