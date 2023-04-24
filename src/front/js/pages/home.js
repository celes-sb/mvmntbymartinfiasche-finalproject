import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import trendingUpOutline from "../../images/TrendingUpOutline.png";
import clipboardList from "../../images/ClipboardList.png";
import cash from "../../images/Cash.png";
import previousButton from "../../images/Previous-Button.png";
import nextButton from "../../images/Next-Button.png";
import dotOrnament from "../../images/Dot-Ornament.png";
import servicio1 from "../../images/Servicio-1.jpeg";
import servicio2 from "../../images/Servicio-2.jpeg";
import servicio3 from "../../images/Servicio-3.jpeg";
import servicio4 from "../../images/Servicio-4.jpeg";
import fullBody from "../../images/Full-Body-STRETCHING.jpeg";

/* 
recordatorios para mi (david para vos tmb ya que estas si te interesa jaja)
- cambiar iconos de entrenamientos
- cambiar imagenes de entrenamiento
- cuando se hayan conectado los pages y se rendericen bien, eliminar las secciones del home.js
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
      <div className="container-fluid m-5">
        <section className="header">
          <div className="hero">
            <div className="bg"></div>
            <div className="hero-content m-5">
              <div className="hero-content-text text-dark">
                <h1>
                  Estás listo para empezar a entrenar?
                </h1>
                <h2>Conocé una nueva forma integral de trabajar con tu cuerpo</h2>
                <h3>Explorá los márgenes del movimiento. Aprendé a disfrutar el proceso. <span>Rompé con el molde</span> y sumate al nuevo paradigma del entrenamiento físico.</h3>
                <button type="button" className="btn btn-large">Empieza ya! link a INDIVIDUALIZADO</button>
              </div>
              <div className="hero-content-photo">
                <img src="https://i.pinimg.com/originals/4e/c8/76/4ec87619593c299f8f50623ed2e7cb25.png" alt="" />
                <div className="circle"></div>
                <div className="circle-yellow"></div>
                <div className="circle-gredient"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us">
          <div className="container">
            <div className="about-us-content">
              <div className="content-left">
                <img src={servicio1} alt="" />
              </div>
              <div className="content-right">
                <h2>Sobre mí</h2>
                <h4>
                  <span>MVMNT by Martin Fiasche</span> es un centro de
                  entrenamiento presencial y en línea que combina distintas
                  disciplinas como calistenia, weightlifting y movimiento.
                </h4>
                <h4>
                  La idea nace con nuestro fundador Martin Fiasche durante la
                  pandemia de COVID-19 en el año 2020. Su idea principal es que
                  las personas mejoren la relación con su cuerpo a través del
                  movimiento.
                </h4>
                <h4>
                  Nuestro objetivo es facilitar todo el saber transitado durante
                  los últimos 20 años para ayudar los alumnos y alumnas a
                  vincularse mejor con su cuerpo.
                </h4>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="service">
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
                    <img src={clipboardList} alt="" />
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
                    <img src={cash} alt="" />
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
                    <img src={trendingUpOutline} alt="" />
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
                <img src={servicio4} alt="" /> <img src={fullBody} alt="" />{" "}
                <img src={servicio3} alt="" /> <img src={servicio2} alt="" />{" "}
                <img className="dot" src={dotOrnament} alt="" />
                <img className="dot dot1" src={dotOrnament} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="customer-says">
          <div className="container">
            <div className="customer-says-content">
              <div className="top">
                <h2>Lo que dicen nuestros alumnos</h2>
              </div>
              <div className="bottom">
                <img className="cursor" src={previousButton} alt="" onClick={handlePreviousClick} />
                <div className="middle">
                  <img src={currentTestimonial.image} alt="" />
                  <p>
                    {currentTestimonial.text}
                  </p>
                  <h5>{currentTestimonial.name}</h5>
                  <h6>{currentTestimonial.year}</h6>
                </div>
                <img className="cursor" src={nextButton} alt="" onClick={handleNextClick} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-us">
          <div className="container">
            <div className="contact-us-content">
              <div className="left-content">
                <h2>Contacto</h2>
                <div className="form">
                  <div className="row">
                    <div className="row-c">
                      <label for="fname">Nombre<span className="text-danger"> *</span></label>
                      <input
                        className="input-sec"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Ingresá tu nombre"
                      />
                    </div>
                    <div className="row-c">
                      <label for="lname">Apellido<span className="text-danger"> *</span></label>
                      <input
                        className="input-sec"
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Ingresá tu apellido"
                      />
                    </div>
                  </div>

                  <label className="color" for="email">
                    Correo Electrónico<span className="text-danger"> *</span></label>
                  <input
                    className="input-sec"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresá tu correo electrónico"
                  />

                  <label className="color" for="message">
                    Comentario o consulta<span className="text-danger"> *</span></label>
                  <textarea
                    className="input-sec"
                    name="msg"
                    id="message"
                    placeholder="Escribí tus consultas o comentarios"
                  ></textarea>

                  <button className="btn">ENVIAR</button>
                </div>
              </div>
              <div className="right-content">
                <img className="img-1" alt="Contact Form Image CambiarPorLoQueDeMartin" style={{ width: "400px", height: "500px" }} src="https://c0.wallpaperflare.com/preview/821/40/875/levitation-beauty-smoke-circus.jpg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
