import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  const alumnoPalos =
    "http://drive.google.com/uc?export=view&id=1uoqtCrQmFyAN2uHUzNR83d1APTfghA2z";

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent form from submitting
    const response = await actions.sendMessage(name, lastName, email, comments); // call sendMessage action
    console.log(response);
    if (response.ok) {
      setName("");
      setLastName("");
      setEmail("");
      setComments("");
      const btn = document.querySelector("button[type='submit']");
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
      btn.textContent = "¡Tu mensaje ha sido enviado con éxito!";
    }
  };

  https: return (
    <>{
      <section
        className="container-fluid customer-says p-5 mb-0 mt-5 pt-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${alumnoPalos})`,
          backgroundSize: "100% cover",
        }}
      >
        <div className="container mb-3 border border-warning bg-white bg-opacity-75 rounded p-5 text-center">
          <div className="top mb-4">
            <h2>Escribime y sumate al movimiento</h2>
          </div>
          <div className="bottom">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4 text-start">

                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  placeholder="Nombre"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group mb-4 text-start">

                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  placeholder="Apellido"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className="form-group mb-4 text-start">

                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group mb-4 text-start">

                <textarea
                  className="form-control"
                  id="comments"
                  rows="3"
                  value={comments}
                  placeholder="Escribí acá tu comentario o consulta"
                  onChange={(event) => setComments(event.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3 mb-2">
                ¡Hablemos!
              </button>
            </form>
          </div>
        </div>
      </section>
    }
    </>
  );
};

export default Contact;
