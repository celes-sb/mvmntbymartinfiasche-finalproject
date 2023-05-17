import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  const martinVerti = "http://drive.google.com/uc?export=view&id=1YFASZ4Kvi-fwN9SaDl-mVn6BzL6kOACl";

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  let obj = {
    message: `Nombre: ${name}, Apellido: ${lastName}, Email: ${email}, Comments: ${comments}`,
    to: "davidbravoml@gmail.com",
    subject: "Nuevo Lead"
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent form from submitting
    const { respuestaJson, response } = await actions.useFetch("/correo", obj, "POST"); // call sendMessage action
    console.log(response);
    if (response.ok) {
      const btn = document.getElementById("contactButton");
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
      btn.textContent = "¡Tu mensaje ha sido enviado con éxito!";
      setName("");
      setLastName("");
      setEmail("");
      setComments("");

    }
  };

  https: return (
    <>
      <section className="contact container-fluid p-5 mt-0 border border-warning rounded" style={{
        backgroundImage: `url(${martinVerti})`,
        backgroundSize: "cover",
      }}>
        <div className="container-contact container border border-warning bg-white bg-opacity-75 rounded p-5 w-75 w-sm-100 text-center">
          <div className="top mb-4">
            <h2>Escribime y sumate al movimiento</h2>
          </div>
          <div className="bottom">
            <form onSubmit={handleSubmit}>
              <div className="form-group text-start mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  placeholder="Nombre"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group text-start mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  placeholder="Apellido"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className="form-group text-start mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group text-start mb-3">
                <textarea
                  className="form-control"
                  id="comments"
                  rows="3"
                  value={comments}
                  placeholder="Escribí acá tu comentario o consulta"
                  onChange={(event) => setComments(event.target.value)}
                ></textarea>
              </div>
              <div className="text-center">
                <button id="contactButton" type="button" className="btn btn-primary mt-3 mb-2" onClick={handleSubmit}>
                  ¡Hablemos!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
