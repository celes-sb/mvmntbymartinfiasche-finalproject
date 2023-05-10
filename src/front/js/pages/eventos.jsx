import React, { Component } from "react";
//import { Context } from "../store/appContext";

export const Eventos = () => {

  const martinSquatPastoColor =
    "http://drive.google.com/uc?export=view&id=1-lc60dKkD4CxJ8L1sLK_iJ4JckELH5dq";
  const bgMartinAlumnos =
    "http://drive.google.com/uc?export=view&id=1y_K-WHHqOXsBjOufW2NmknJ4CZTNcQP7";

  return (
    <>
      <div className="container-fluid p-5 mt-5 pt-5 border border-warning rounded" style={{
        backgroundImage: `url(${bgMartinAlumnos})`,
        backgroundSize: "100% 100%",
      }}>
        <section className="our-team bg-white bg-opacity-75 p-5 border border-warning rounded">
          <div className="container">
            <div className="our-team-content">
              <div className="text-content">
                <h3>Sumate a los encuentros y conectá con la comunidad del movimiento en BA</h3>
              </div>
              <div className="team">
                <div className="person">
                  <img className="border border-warning mb-2" src={martinSquatPastoColor} alt="" />
                  <h5 className="text-center">Campus Acrobático I</h5>
                  <p className="p-2">2021</p>
                </div>
                <div className="person">
                  <img className="border border-warning mb-2" src={martinSquatPastoColor} alt="" />
                  <h5 className="text-center">Campus Acrobático II</h5>
                  <p className="p-2">2022</p>
                </div>
                <div className="person">
                  <img className="border border-warning mb-2" src={martinSquatPastoColor} alt="" />
                  <h5 className="text-center">Campus Acrobático III</h5>
                  <p className="p-2">2023 - fecha a confirmar</p>
                </div>
                <div className="person">
                  <img className="border border-warning mb-2" src={martinSquatPastoColor} alt="" />
                  <h5 className="text-center">Encuentro de Alumnos I</h5>
                  <p className="p-2">2023 - online</p>
                </div>
                <div className="person">
                  <img className="border border-warning mb-2" src={martinSquatPastoColor} alt="" />
                  <h5 className="text-center">Encuentro de Alumnos II</h5>
                  <p className="p-2">Mayo 2023 - presencial / vacantes agotadas!</p>
                </div>
                <div className="person">
                  <img className="border border-warning mb-2" src={martinSquatPastoColor} alt="" />
                  <h5 className="text-center">Encuentro de Alumnos III </h5>
                  <p className="p-2">2023 - online /fecha a confirmar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Eventos;
