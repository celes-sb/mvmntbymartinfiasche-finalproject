import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";


export const Login = () => {
  const martinVerti = "http://drive.google.com/uc?export=view&id=1YFASZ4Kvi-fwN9SaDl-mVn6BzL6kOACl";

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
    <section className="container-fluid p-5 mt-5 pt-5 border border-warning rounded"
      style={{
        backgroundImage: `url(${martinVerti})`,
        backgroundSize: "cover",
      }}
    >
      <div className="acrobacia bg-white bg-opacity-75 border border-warning rounded text-center">
        <div className="login-container container-fluid">
          <div
            className="login-container2 d-flex flex-row flex-nowrap"
            style={{ overflowX: "scroll" }}
          >
            <div className="login-content container">
              <div className="row m-5 gx-0">
                <div className="col-md-6 d-none d-md-block h-100">
                  <img
                    src={martinVerti}
                    className="img-fluid"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
                <div className="col-md-6 bg-white p-5">
                  <h3 className="pb-3 text-center">Ingresá en tu cuenta</h3>
                  <div className="form-style">
                    <br></br>
                    <form>
                      <div className="form-group pb-2">
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
                      <div className="form-group pb-2">
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
                      <br />
                      <div className="pb-2">
                        <button
                          type="button"
                          className="btn btn-primary w-100 font-weight-bold"
                          onClick={handleLogin}
                        >
                          Entrar
                        </button>
                      </div>
                    </form>
                    <br />
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to="/recoverpassword">No recuerdo mi contraseña</Link>
                    </div>
                    <br />
                    <div className="text-center">
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
      </div>
    </section>
  );
};
