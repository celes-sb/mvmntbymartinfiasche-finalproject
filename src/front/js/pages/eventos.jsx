import React, { Component } from "react";

export const Eventos = () => {

  const martinSquatPastoColor =
    "http://drive.google.com/uc?export=view&id=1-lc60dKkD4CxJ8L1sLK_iJ4JckELH5dq";
  const eventoOnline =
    "http://drive.google.com/uc?export=view&id=1ymyclCsFfJ0tXWhTYlM0oICQxuaL8bOS";
  const bgMartinAlumnos =
    "http://drive.google.com/uc?export=view&id=1y_K-WHHqOXsBjOufW2NmknJ4CZTNcQP7";
  const flyerCampus1 =
    "http://drive.google.com/uc?export=view&id=1gwz0sSnUCYZ6mXH5rHnhSmM7qruUXM2F";
  const flyerCampus2 =
    "http://drive.google.com/uc?export=view&id=1JKPsolnKkhtt2RWhu-9Lbb1AFXflkGiI";
  const flyerCampus3 =
    "http://drive.google.com/uc?export=view&id=1uF6IhK4xB2zGim3h61LjN0taDwufyyPL";


  return (
    <>
      <div className="container-fluid p-5 border border-warning rounded" style={{
        backgroundImage: `url(${bgMartinAlumnos})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center center"
      }}>
        <section className="eventos bg-white bg-opacity-75 p-5 border border-warning rounded">
          <div className="container">
            <div className="eventos-content">
              <div className="text-content">
                <h3 className="text-center">Sumate a los encuentros y conectá con la comunidad del movimiento en BA</h3>
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="eventoSingle">
                    <div className="square-image">
                      <img className="border border-warning img-fluid" src={flyerCampus1} alt="Foto para campus Acrobático 1" />
                    </div>
                    <h5 className="text-center mt-2">Campus Acrobático I</h5>
                    <p className="text-center mt-2">Noviembre 2019</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="eventoSingle">
                    <div className="square-image">
                      <img className="border border-warning img-fluid" src={flyerCampus2} alt="Flyer Campus Acrobático 2" />
                    </div>
                    <h5 className="text-center mt-2">Campus Acrobático II</h5>
                    <p className="text-center mt-2">Junio 2022</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="eventoSingle">
                    <div className="square-image">
                      <img className="border border-warning img-fluid" src={flyerCampus3} alt="Flyer Campis Acrobático 3" />
                    </div>
                    <h5 className="text-center mt-2">Campus Acrobático III</h5>
                    <p className="text-center mt-2">Diciembre 2022</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="eventoSingle">
                    <div className="square-image">
                      <img className="border border-warning img-fluid" src={eventoOnline} alt="" />
                    </div>
                    <h5 className="text-center mt-2">Encuentro de Alumnos I</h5>
                    <p className="text-center mt-2">2023 - online</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="eventoSingle">
                    <div className="square-image">
                      <img className="border border-warning img-fluid" src={eventoOnline} alt="" />
                    </div>
                    <h5 className="text-center mt-2">Encuentro de Alumnos II</h5>
                    <p className="text-center mt-2">Mayo 2023 - presencial / vacantes agotadas!</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="eventoSingle">
                    <div className="square-image">
                      <img className="border border-warning img-fluid" src={eventoOnline} alt="" />
                    </div>
                    <h5 className="text-center mt-2">Encuentro de Alumnos III</h5>
                    <p className="text-center mt-2">2023 - online / fecha a confirmar</p>
                  </div>
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
