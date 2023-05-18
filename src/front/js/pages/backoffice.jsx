import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const Backoffice = () => {
    const { store, actions } = useContext(Context);

    return (<>
        <div className="backofficeWelcome1 jumbotron mt-0 m-3">
            <h1 className="display-4">¡Hola!</h1>
            <p className="lead">Bienvenidx al programa de entrenamiento a distancia.</p>
            <hr className="my-4" />
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item border border-primary m-3 ms-md-5" src="https://www.youtube.com/embed/dwqfIca_1mY" title="Bienvenido Personalizado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <p>Seguramente estás acá porque ya te ha llegado tu primer programa de trabajo y espero que te sea de mucha utilidad para conseguir tus objetivos.</p>
            <h3>Puntos importantes a tener en cuenta:</h3>
            <ul className="list ps-3 pe-3 list-unstyled">
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Esto es un proceso de entrenamiento, cada programa, rutina y ejercicio tienen algo para enseñar. El aprendizaje es la construcción que vas a ir haciendo recopilando toda esa experiencia.</li>
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Estoy acá para que me consultes todo lo que necesites en relación a tu entrenamiento, para acompañar y para guiar con mi experiencia: pero los resultados serán el fruto de tu constancia.</li> Tené <strong>paciencia</strong>. No vamos a ver resultados en poco tiempo. Pero sí te puedo asegurar que rápidamente vas a ver pequeños progresos en la dirección que buscás.
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Estudiá los programas. No es solo cuestión de hacer. Hacete cargo de tu proceso. Entendé lo que estás haciendo, compará, evaluá, y preguntame lo que necesites.</li>
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Los videos de demostración son material de estudio. Filmá y compará tu ejecución con las de los videos que te envié. Intentá que sea lo más parecido posible. Cada serie cuenta.</li>
            </ul>
            <h3>Pasos a seguir:</h3>
            <ul className="list ps-3 pe-3 list-unstyled">
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Mirá este video detenidamente:</li>
                <iframe className="videoBackoffice embed-responsive-item border border-primary m-3 ms-md-5" src="https://www.youtube.com/embed/n0N5aSVwU4M" title="Proceso inicial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Creá una carpeta en Drive con el nombre del mes en el que iniciás</li>
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Dentro de ella creá dos carpetas con los nombres SEMANA1 y SEMANA4.</li>
                <li><i className="far fa-check-circle ms-2 ps-1"></i> SEMANA1 y SEMANA4 van a tener dentro cinco carpetas llamadas DIA1, DIA2, DIA3, VERTI y MOVILIDAD en donde vas a subir las ejecuciones así yo puedo ir estudiando tu trabajo en forma cronológica y analizar que cosas dan resultado y cuáles no a partir de ir entendiendo el proceso.</li>
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Cuando subís TODO el material de la Semana 1 o Semana 4 según corresponda, copiá el link de Drive en "Enviar programa" ubicado en la sección Programas de esta plataforma.</li>
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Te mandaré una devolución sobre tus videos lo antes posible.</li>
            </ul>
            <h3>Enlaces útiles:</h3>
            <ul className="list-unstyled ps-3 pe-3 pt-2 pb-3">
                <li><i className="fab fa-whatsapp"></i> <a href="https://chat.whatsapp.com/IWmzug4euFt7qpWu7iUWSl">Comunidad para alumnxs del programa de entrenamiento en Whatsapp</a></li>
                <li><i className="fa-brands fa-discord"></i> <a href="https://discord.gg/GdyEMZQ3">Comunidad para alumnxs del programa de entrenamiento en Discord</a></li>
                <li><i className="fa-brands fa-google-drive"></i> <a href="https://drive.google.com/drive/folders/1TUqJ9HWKGu939RP0H748KWq5-ASAR1qB?usp=sharing">Biblioteca de Contenidos</a></li>
            </ul>
            <hr />
            <p className="lead mt-3 mb-3">
                Ya estás listx para la siguiente etapa: el diagnóstico. Hacé click en el botón azul que te llevará a la sección de diagnóstico donde realizarás unos tests iniciales que me ayudarán a hacer que tu programa sea lo más personalizado posible.
                <Link to="/user/diagnostico" className="btn btn-outline-primary mt-3 w-100" role="button">Comenzá el diagnóstico</Link>
            </p>
        </div>
    </>)
}

export default WithAuth(Backoffice);