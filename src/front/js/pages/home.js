import React, { useEffect } from "react";
import "../../styles/home.css";
import trendingUpOutline from "../../images/TrendingUpOutline.png";
import clipboardList from "../../images/ClipboardList.png";
import cash from "../../images/Cash.png";
import shooTharMien from "../../images/Shoo-Thar-Mien.png";
import shooPratMhan from "../../images/Shoo-Prat-Mhan.png";
import shooYhanTho from "../../images/Shoo-Yhan-Tho.png";
import shooBroTho from "../../images/Shoo-Bro-Tho.png";
import shooMharNo from "../../images/Shoo-Mhar-No.png";
import shooMhanTho from "../../images/Shoo-Mhan-Tho.png";
import previousButton from "../../images/Previous-Button.png";
import shalimaHayden from "../../images/Shalima-Hayden.png";
import nextButton from "../../images/Next-Button.png";
import dotOrnament from "../../images/Dot-Ornament.png";
import servicio2 from "../../images/Servicio-2.jpeg";
import servicio3 from "../../images/Servicio-3.jpeg";
import servicio4 from "../../images/Servicio-4.jpeg";
import fullBody from "../../images/Full-Body-STRETCHING.jpeg";
import martinbw from "/workspace/mvmnt-finalproject/src/front/images/Martin.jpg"

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

  return (
    <>
      <div className="container-fluid">
        <section className="header" style={{ backgroundImage: "url(https://martinfiasche.com.ar/wp-content/uploads/2021/06/DSC_0628-2-scaled.jpg)", position: "relative", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain" }}>
          <div className="hero">
            <div className="hero-content ms-3">
              <div className="hero-content-text bg-success bg-opacity-50 p-5 rounded">
                <h1>
                  Estás listo para empezar a entrenar?
                </h1>
                <h2>Conocé una nueva forma integral de trabajar con tu cuerpo</h2>
                <h3>Explorá los márgenes del movimiento. Aprendé a disfrutar el proceso. <span>Rompé con el molde</span> y sumate al nuevo paradigma del entrenamiento físico.</h3>
                <button type="button" className="btn btn-success btn-large">Empieza ya! link a INDIVIDUALIZADO</button>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us" style={{ marginTop: "100px" }}>
          <div className="container" style={{ display: "flex", alignItems: "center" }}>
            <div className="about-us-content" style={{ display: "flex", alignItems: "center" }}>
              <div className="content-left" style={{ flex: "1", paddingRight: "20px" }}>
                <div className="hero-content-photo">
                  <div className="animation" style={{ position: "relative", height: "100%" }}>
                    <div className="circle"></div>
                    <div className="circle-yellow"></div>
                    <div className="circle-gredient"></div>
                  </div>
                </div>
                <img className="about-us-img border border-warning" src={martinbw} alt="Martin blanco y negro" style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="content-right" style={{ flex: "1", paddingLeft: "20px" }}>
                <h2>Quién es Martin Fiasche?</h2>
                <h4>
                  Docente curioso e inquieto de cualquier posibilidad que pueda ofrecer el cuerpo.
                  Mi búsqueda es explorar las opciones de movimiento para nutrirme de su contenido sin asumir los costos de la especialización. Interpretar cuáles son los requisitos para construir un sistema abierto que permita acercar a todas las personas a una práctica que enriquezca sus posibilidades a partir de sus necesidades y no adiestrar a una persona a las condiciones de una práctica.

                  Considero fundamental abordar el mejoramiento de las cualidades físicas que, aunque lo contiene, es mucho más amplio que el trabajo de fuerza y acondicionamiento – para preparar el cuerpo para los desafíos que presentan los múltiples escenarios de movimiento.
                  Para esto, vamos a trabajar con el peso corporal en anillas u otros elementos, vamos a usar cargas libres, vamos a pararnos sobre las manos, a balancear sobre una superficie irregular o trabajar patrones rítmicos y coordinativos hasta sentir que tu cuerpo responde ante las órdenes que vos emitís.
                  Preparar el cuerpo no es sólo poder sostener un esfuerzo desde lo metabólico, articular y muscular; sino registrar y conocer las funciones del cuerpo que te brinda todas las posibilidades.

                  La propuesta esta destinada para aquellos que pretendan desarrollar su disponibilidad corporal desde un cambio de paradigma que implique estar a la misma distancia de todas las posibilidades: la intensidad, la sensibilidad, la repetición, la precisión, el arriba y el abajo, el centro y los extremos, las manos y los pies... trascendiendo una dicotomía de éxito o fracaso para abrazar un camino a recorrer como una experiencia que nos permita conocernos a nosotros mismos.

                  Todas las herramientas pueden ser una opción cuando conocés cuál es el paradigma que estás persiguiendo.
                </h4>
                <h4>
                  <ul>Servicios
                    <li>Fuerza y Acondicionamiento</li>
                    <li>Movilidad, Flexibilidad y Control</li>
                    <li>El cuerpo en el  tiempo, el  espacio y los objetos</li>
                    <li>Ritmo y Coordinación</li>
                    <li>Balance</li>
                    <li>Acrobacia</li>
                    <li>Parada de Manos</li></ul>
                </h4>
                <h4>
                  <ul>
                    Clases grupales
                    Clases particulares
                    Entrenamiento a distancia
                    Seminarios y Workshops
                  </ul>
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
      </div >
    </>
  );
};
