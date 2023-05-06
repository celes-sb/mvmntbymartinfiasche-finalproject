import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const paperstyle = {
  width: "500px",
  marginTop: "20px",
  border: "0",
  borderColor: "lightgrey",
  borderStyle: "solid",
  background: "#fff",
  boxShadow: "0px 0px 10px 3px lightgrey",
  paddingVertical: "30px",
  fontSize: "30px",
};
const color = {
  color: "grey",
  fontSize: 15,
};
const links = {
  textDecoration: "none",
};
export const Signup = (props) => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("")
  const params = useParams();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // prevent form from submitting
    const response = await actions.signup(name, lastname, username, email, password, phone, country, gender); // call register action
    console.log(response)
    if (response.ok) {
      navigate("/login"); // redirect to wherever we want component
    }
  };

  return (
    <>
      <div className="container-fluid p-5 mt-5 pt-5 border border-warning rounded">
        <div
          className="d-flex flex-row flex-nowrap"
          style={{ overflowX: "scroll" }}
        >
          <div className="container">
            <div className="row m-5 no-gutters shadow-lg">
              <div className="col-md-6 d-none d-md-block h-100">
                <img
                  src={""}
                  className="img-fluid"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              <div className="col-md-6 bg-white p-5">
                <h3 className="pb-3 text-center">Registrate</h3>
                <div className="form-style">
                  <br></br>
                  <form>
                    <div className="form-group pb-3">
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        aria-describedby="Nombre"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="text"
                        placeholder="Apellido"
                        className="form-control"
                        aria-describedby="Apellido"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        aria-describedby="Username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        aria-describedby="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="password"
                        placeholder="Contraseña"
                        className="form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="password"
                        placeholder="Repetir Contraseña"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="text"
                        placeholder="País"
                        className="form-control"
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        type="text"
                        placeholder="Teléfono"
                        className="form-control"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <p className="m-0" style={color}>
                      Género
                    </p>
                    <div className="input-group">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Genero"
                          value="Masculino"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label className="form-check-label fs-6 " htmlFor="Masculino">
                          Masculino
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Genero"
                          value="Femenino"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label className="form-check-label fs-6" htmlFor="Femenino">
                          Femenino
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Genero"
                          value="NoBinario"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label className="form-check-label fs-6" htmlFor="NoBinario">
                          No Binario
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Genero"
                          value="Anonimo"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <label className="form-check-label fs-6" htmlFor="Anonimo">
                          Prefiero no decirlo
                        </label>
                      </div>
                    </div>
                    <br />
                    <div className="pb-2">
                      <button
                        type="button"
                        className="btn btn-warning w-100 font-weight-bold mt-2"
                        onClick={handleRegister}
                      >
                        Registrar
                      </button>
                    </div>
                  </form>
                  <br></br>

                  <div className="pt-4 text-center">
                    {" "}
                    ¿Ya tenés una cuenta? <br></br>
                    <Link to="/login">Iniciá Sesión</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Signup.propTypes = {
  match: PropTypes.object,
};
