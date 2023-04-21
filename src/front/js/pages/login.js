import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
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
            <div className="col-md-6 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                className="img-fluid"
                style={{ minHeight: "100%" }}
              />
            </div>
            <div className="col-md-6 bg-white p-5">
              <h3 className="pb-3">Login Form</h3>
              <div className="form-style">
                <form>
                  <div className="form-group pb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group pb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input name="" type="checkbox" value="" />
                      <span className="pl-2 font-weight-bold">Remember Me</span>
                    </div>
                    <div>
                      <a href="#">Forget Password?</a>
                    </div>
                  </div>
                  <div className="pb-2">
                    <button
                      type="submit"
                      className="btn btn-dark w-100 font-weight-bold mt-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="sideline">OR</div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 font-weight-bold mt-2"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i> Login
                    With Facebook
                  </button>
                </div>
                <div className="pt-4 text-center">
                  Get Members Benefit. <a href="#">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
