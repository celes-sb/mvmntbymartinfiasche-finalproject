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
                <h2>Eventos pasados</h2>
              </div>
              <div className="team">
                <div className="person">
                  <img className="border border-warning" src={martinSquatPastoColor} alt="" />
                  <h3>Evento</h3>
                  <p className="p-2">Info Evento</p>
                </div>
                <div className="person">
                  <img className="border border-warning" src={martinSquatPastoColor} alt="" />
                  <h3>Evento</h3>
                  <p className="p-2">Info Evento</p>
                </div>
                <div className="person">
                  <img className="border border-warning" src={martinSquatPastoColor} alt="" />
                  <h3>Evento</h3>
                  <p className="p-2">Info Evento</p>
                </div>
                <div className="person">
                  <img className="border border-warning" src={martinSquatPastoColor} alt="" />
                  <h3>Evento</h3>
                  <p className="p-2">Info Evento</p>
                </div>
                <div className="person">
                  <img className="border border-warning" src={martinSquatPastoColor} alt="" />
                  <h3>Evento</h3>
                  <p className="p-2">Info Evento</p>
                </div>
                <div className="person">
                  <img className="border border-warning" src={martinSquatPastoColor} alt="" />
                  <h3>Evento</h3>
                  <p className="p-2">Info Evento</p>
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
