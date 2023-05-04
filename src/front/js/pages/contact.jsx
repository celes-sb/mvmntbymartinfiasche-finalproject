import React, { Component, useState } from "react";
//import { Context } from "../store/appContext";

export const Contact = () => {
  const contactoManos =
    "http://drive.google.com/uc?export=view&id=1fYc_uMZtdSOR-i7E0ckCs6IB4pz-i3xY";

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your code to handle form submission
  };

  https: return (
    <>
      <section
        className="customer-says border border-warning rounded"
        style={{
          backgroundImage: `url(${contactoManos})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container customer-says-content bg-white bg-opacity-75 rounded p-5">
          <div className="top">
            <h2>Escribime y sumate al movimiento</h2>
          </div>
          <div className="bottom">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comentarios o consultas</label>
                <textarea
                  className="form-control"
                  id="comments"
                  rows="3"
                  value={comments}
                  onChange={(event) => setComments(event.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                ¡Hablemos!
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
