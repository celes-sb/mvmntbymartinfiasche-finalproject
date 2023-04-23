import React, { useEffect } from "react";
import "../../styles/home.css";
import iphoneMockup from "../../images/iphone-mockup.png";
import trendingUpOutline from "../../images/TrendingUpOutline.png";
import clipboardList from "../../images/ClipboardList.png";
import cash from "../../images/Cash.png";
import speakerphoneOutline from "../../images/SpeakerphoneOutline.png";
import shooTharMien from "../../images/Shoo-Thar-Mien.png";
import shooPratMhan from "../../images/Shoo-Prat-Mhan.png";
import shooYhanTho from "../../images/Shoo-Yhan-Tho.png";
import shooBroTho from "../../images/Shoo-Bro-Tho.png";
import shooMharNo from "../../images/Shoo-Mhar-No.png";
import shooMhanTho from "../../images/Shoo-Mhan-Tho.png";
import previousButton from "../../images/Previous-Button.png";
import shalimaHayden from "../../images/Shalima-Hayden.png";
import nextButton from "../../images/Next-Button.png";
import mapIcon from "../../images/map-icon.png";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import dotOrnament from "../../images/Dot-Ornament.png";
import whiteLogo from "../../images/logo-white.png";
import servicio1 from "../../images/Servicio-1.jpeg";
import servicio2 from "../../images/Servicio-2.jpeg";
import servicio3 from "../../images/Servicio-3.jpeg";
import servicio4 from "../../images/Servicio-4.jpeg";
import fullBody from "../../images/Full-Body-STRETCHING.jpeg";
import fotoGrupo from "../../images/group-picture.jpeg";
import fotoGimnasio from "../../images/foto-gimnasio.jpeg";

export const Home = () => {

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
                <img src={iphoneMockup} alt="" />
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
                <h2>Nosotros</h2>
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
                  <li>
                    <img src={clipboardList} alt="" />
                    <div className="text">
                      <h3>Calistenia</h3>
                      <p>
                        La calistenia se puede practicar en cualquier lugar y no
                        requiere equipo especializado, lo que la convierte en una
                        excelente manera de mantenerse en forma.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <div className="text">
                      <h3>Weightlifting</h3>
                      <p>
                        Desarrolla fuerza y resistencia muscular, reduce tu estrés
                        y mejora la calidad del sueño.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={speakerphoneOutline} alt="" />
                    <div className="text">
                      <h3>Movimiento</h3>
                      <p>
                        Tendencia que ayuda a la fuerza, movilidad y equilibrio.
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

        <section className="our-success">
          <div className="container">
            <div className="our-success-content">
              <div className="content-left">
                <img className="img" src={fotoGrupo} alt="" />
              </div>
              <div className="content-right">
                <h2>Planes</h2>
                <p>
                  Tenemos nuestros planes presenciales y en línea disponibles para
                  ti 24/7
                </p>
                <h4 className="first">
                  +100
                  <br />
                  <span>Entrenamientos</span>
                </h4>
                <h4 className="second col">
                  +500
                  <br />
                  <span className="col-s">Alumnos activos</span>
                </h4>
                <h4 className="col">
                  4
                  <br />
                  <span className="col-s">Sedes</span>
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="our-team">
          <div className="container">
            <div className="our-team-content">
              <div className="text-content">
                <h2>Our Awesome Team</h2>
              </div>
              <div className="team">
                <div className="person">
                  <img src={shooTharMien} alt="" />
                  <p className="p-1">Hi! My Name</p>
                  <h3>Martin Fiasche</h3>
                  <p className="p-2">Fundador</p>
                </div>
                <div className="person">
                  <img src={shooPratMhan} alt="" />
                  <p className="p-1">Hi! My Name</p>
                  <h3>Celeste Bareiro</h3>
                  <p className="p-2">Frontend Developer</p>
                </div>
                <div className="person">
                  <img src={shooYhanTho} alt="" />
                  <p className="p-1">Hi! My Name</p>
                  <h3>David Bravo</h3>
                  <p className="p-2">Frontend Developer</p>
                </div>
                <div className="person">
                  <img src={shooBroTho} alt="" />
                  <p className="p-1">Hi! My Name</p>
                  <h3>Juan Pinto</h3>
                  <p className="p-2">Backend Developer</p>
                </div>
                <div className="person">
                  <img src={shooMharNo} alt="" />
                  <p className="p-1">Hi! My Name</p>
                  <h3>Sebastian Bonilla</h3>
                  <p className="p-2">Backend Developer</p>
                </div>
                <div className="person">
                  <img src={shooMhanTho} alt="" />
                  <p className="p-1">Hi! My Name</p>
                  <h3>Más Equipo</h3>
                  <p className="p-2">Creative Director</p>
                </div>
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
                <img className="cursor" src={previousButton} alt="" />
                <div className="middle">
                  <img src={shalimaHayden} alt="" />
                  <p>
                    Trabajar con un seguimiento, con objetivos claros hace que se
                    vean las mejoras. Eso me sucede entrenando con Martín y su
                    método. Totalmente agradecida por la entrega en su trabajo y
                    el compromiso brindando.
                  </p>
                  <h5>Sol Pérez Gallardo</h5>
                  <h6>Alumna desde 2019</h6>
                </div>
                <img className="cursor" src={nextButton} alt="" />
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
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="row-c">
                      <label for="lname">Apellido<span className="text-danger"> *</span></label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Enter your last name"
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
                    placeholder="Enter your email"
                  />

                  <label className="color" for="message">
                    Comentario o consulta<span className="text-danger"> *</span></label>
                  <textarea
                    name="msg"
                    id="message"
                    placeholder="Escribí tus consultas o comentarios"
                  ></textarea>

                  <button className="btn">ENVIAR</button>
                </div>
              </div>
              <div className="right-content">
                <img className="img-1" src={fotoGimnasio} alt="" />
                <img className="img-2" src={dotOrnament} alt="" />
                <div className="text">
                  <img src={mapIcon} alt="" />
                  <p>Av. Belgrano 342, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="logo-title">
                <img src={whiteLogo} alt="" />
                <p>
                  MVMNT es un centro de entrenamiento presencial y en línea que
                  combina distintas disciplinas como calistenia, weightlifting y
                  movimiento.
                </p>
              </div>
              <div className="get-in-touch">
                <h4>Contacto</h4>
                <span className="mrg">
                  <img src={emailIcon} alt="" />
                  <p>yourmail@hello.com</p>
                </span>
                <span>
                  <img src={phoneIcon} alt="" />
                  <p>+1 386-688-3295</p>
                </span>
              </div>
              <div className="social-media">
                <h4>Redes Sociales</h4>
                <div>
                  <a href="#">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="#">
                    <img className="mrg" src={twitter} alt="" />
                  </a>
                  <a href="#">
                    <img src={facebook} alt="" />
                  </a>
                </div>
              </div>
              <div className="newsletter">
                <h4>Suscríbete al Newsletter</h4>
                <label for="email-sec">Correo Electrónico</label>
                <input
                  className="test"
                  type="email"
                  id="email-sec"
                  name="email"
                  placeholder="Enter your email"
                />
                <button type="submit">Subscribirse</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
