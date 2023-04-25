import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import previousButton from "../../images/Previous-Button.png";
import nextButton from "../../images/Next-Button.png";
import vertiEstudiantesx3 from "/workspace/mvmnt-finalproject/src/front/images/vertiEstudiantesx3.jpg"
import rickyMeathook1 from "/workspace/mvmnt-finalproject/src/front/images/rickyMeathook1.jpg"
import homeSentadilla from "/workspace/mvmnt-finalproject/src/front/images/homeSentadilla.jpg"
import homeManosPalos from "/workspace/mvmnt-finalproject/src/front/images/homeManosPalos.jpg"
import martinygrupo2 from "/workspace/mvmnt-finalproject/src/front/images/martinygrupo2.jpg"

/* 
recordatorios para mi (david para vos tmb ya que estas si te interesa jaja)
- cambiar iconos de entrenamientos
- cambiar imagenes de entrenamiento
- SAQUE LA PARTE DE OUR AWESOME TEAM PORQUE martin es el solo... pero dejo el codigo comentado
  en el page de <<<eventos.jsx>>> porque creo que ese grid puede ser usado para poner eventos... o usarlo
  en otra parte.. me gusto el grid =P
*/
export const Home = () => {
  const { store, actions } = useContext(Context);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + store.testimonialData.length) % store.testimonialData.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % store.testimonialData.length);
  };

  const currentTestimonial = store.testimonialData[currentIndex];

  return (
    <>
      <div className="container-fluid">
        <section className="header mb-5">
          <img className="imgheader border border-warning rounded" src={martinygrupo2} style={{ width: "95%", height: "95%", position: "absolute", objectFit: "cover" }} />
          <div className="hero">
            <div className="hero-content ms-3">
              <div className="hero-content-text bg-dark bg-opacity-50 p-5 rounded h-75 mb-5">
                <h1>
                  Estás listo para empezar a entrenar?
                </h1>
                <h2>Conocé una nueva forma integral de trabajar con tu cuerpo</h2>
                <h3>Explorá los márgenes del movimiento. Aprendé a disfrutar el proceso. <strong>Rompé con el molde</strong> y sumate al nuevo paradigma del entrenamiento físico.</h3>
                <button type="button" className="btn btn-primary btn-large w-25">Empieza ya! link a INDIVIDUALIZADO</button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="service mt-5">
          <div className="container">
            <div className="content">
              <div className="content-left">
                <h2>Entrenamientos</h2>
                <p>
                  Adaptamos las rutinas de entrenamiento que más te gusten para
                  que disfrutes todo el proceso
                </p>
                <ul>
                  <li>
                    <i class="fas fa-dumbbell"></i>
                    <div className="text">
                      <h3>Individualizado</h3>
                      <p>
                        Lorem impsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                      </p>
                    </div>
                  </li>
                  <li>
                    <i class="fas fa-running"></i>
                    <div className="text">
                      <h3>Movimiento</h3>
                      <p>
                        Lorem impsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                      </p>
                    </div>
                  </li>
                  <li>
                    <i class="far fa-shoe-prints"></i>
                    <div className="text">
                      <h3>Acrobacia</h3>
                      <p>
                        Construímos las acciones acrobáticas abordando los
                        fundamentos de la practica. Para facilitar el
                        entrenamiento a personas de todos los niveles.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content-right">
                <img className="border border-warning rounded" src={rickyMeathook1} alt="Foto blanco y negro de un alumno haciendo un meathook en anillas" /> <img className="border border-warning rounded" src={vertiEstudiantesx3} alt="Foto blanco y negro de tres personas haciendo vertical" />{" "}
                <img className="border border-warning rounded" src={homeManosPalos} alt="Foto blanco y negro de varios pares de manos sosteniendo un palo" /> <img className="border border-warning rounded" src={homeSentadilla} alt="Foto blanco y negro de un alumno de espaldas haciendo sentadilla con una barra olímpica y discos" />{""}
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
};
