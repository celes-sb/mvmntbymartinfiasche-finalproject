import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault(); // prevent form from submitting
    let { respuestaJson, response } = await actions.login(emailOrUsername, password); // call login action
    if (response.ok) {
      navigate("/user/backoffice"); // redirect to home and/or do whatever we want
    } else {
      alert("Login failed")
    }
  };
  return (
    <div className="container">
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
              <h3 className="pb-3 text-center">Ingresá en tu cuenta</h3>
              <div className="form-style">
                <br></br>
                <form>
                  <div className="form-group pb-3">
                    <input
                      type="text"
                      placeholder="Ingresa tu email o usuario"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        setEmailOrUsername(e.target.value);
                      }}
                    />
                  </div>
                  <br></br>
                  <div className="form-group pb-3">
                    <input
                      type="password"
                      placeholder="Ingresá tu contraseña"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <br></br>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input name="" type="checkbox" value="" />
                      <span className="pl-2 font-weight-bold">Recordame</span>
                    </div>
                    <div>
                      <a href="#">No recuerdo mi contraseña</a>
                    </div>
                  </div>
                  <br></br>
                  <div className="pb-2">
                    <button
                      type="button"
                      className="btn btn-warning w-100 font-weight-bold mt-2"
                      onClick={handleLogin}
                    >
                      Entrar
                    </button>
                  </div>
                </form>
                <br></br>

                <div className="pt-4 text-center">
                  {" "}
                  ¿No tenés cuenta? <br></br>
                  <Link to="/signup">Registrate</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
