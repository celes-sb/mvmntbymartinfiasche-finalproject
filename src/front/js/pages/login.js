import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Login = () => {
  const { store, actions } = useContext(Context);

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
                      type="email"
                      placeholder="Ingresa tu email o usuario"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <br></br>
                  <div className="form-group pb-3">
                    <input
                      type="password"
                      placeholder="Ingresá tu contraseña"
                      className="form-control"
                      id="exampleInputPassword1"
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
                      type="submit"
                      className="btn btn-warning w-100 font-weight-bold mt-2"
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
