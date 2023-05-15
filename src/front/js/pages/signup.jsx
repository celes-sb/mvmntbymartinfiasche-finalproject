import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {

  const alumnosSpine = "http://drive.google.com/uc?export=view&id=1mqYln15hz8FMhuzOIM61qBictu1OgLu2";
  const martinEnsena = "http://drive.google.com/uc?export=view&id=16xPTHdcofBvzwPO4H_XoG2aVzMSlh-D6";
  const alumnosVerti = "http://drive.google.com/uc?export=view&id=1xha1VxiXzaxeHKFmrVmfuT1OPiaFC2vV";

  const { actions } = useContext(Context); //saqué el store me estaba dando error
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
      const btn = document.getElementById("signupButton");
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
      btn.textContent = "¡Cuenta creada con éxito!";
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <>
      <section className="signup container-fluid p-5 mt-5 pt-5 border border-warning rounded"
        style={{
          backgroundImage: `url(${martinEnsena})`,
          backgroundSize: "cover",
        }}
      >
        <div className="signup-content bg-white bg-opacity-75 border border-warning rounded text-center">

          <div className="d-flex flex-row flex-nowrap">
            <div className="container p-5">
              <div className="row gx-0">
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src={alumnosVerti}
                    className="img-fluid p-0 m-0"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6 bg-white p-5 m-0">
                  <h3 className="text-center">Registrate</h3>
                  <div className="form-style">
                    <br></br>
                    <form>
                      <div className="form-group pb-4">
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
                      <div className="form-group pb-4">
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
                      <div className="form-group pb-4">
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
                      <div className="form-group pb-4">
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
                      <div className="form-group pb-4">
                        <input
                          type="password"
                          placeholder="Contraseña"
                          className="form-control"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group pb-4">
                        <input
                          type="password"
                          placeholder="Repetir Contraseña"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group pb-4">
                        <input
                          type="text"
                          placeholder="País"
                          className="form-control"
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group pb-4">
                        <input
                          type="text"
                          placeholder="Teléfono"
                          className="form-control"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </div>
                      <div className="pb-2">
                        <button
                          id="signupButton"
                          type="button"
                          className="btn btn-primary w-100 font-weight-bold mt-2"
                          onClick={handleRegister}
                        >
                          Registrate
                        </button>
                      </div>
                    </form>
                    <div className="pt-4 text-center">
                      {" "}
                      ¿Ya tenés una cuenta? <br></br>
                      <Link to="/login">Iniciá sesión</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Signup.propTypes = {
  match: PropTypes.object,
};
