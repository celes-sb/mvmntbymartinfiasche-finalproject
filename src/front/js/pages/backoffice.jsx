import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Backoffice = () => {
    const { store, actions } = useContext(Context);

    return (<>
        <div class="jumbotron">
            <h1 class="display-4">Hola!</h1>
            <p class="lead">Bienvenidx al programa de entrenamiento a distancia</p>
            <hr class="my-4" />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dwqfIca_1mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Te envio tu primer programa de trabajo y espero que te sea de mucha utilidad para conseguir tus objetivos.<br />
                Algunas consideraciones que te recomiendo:<br />
                Esto es un proceso de entrenamiento, cada programa, rutina y ejercicio tienen algo para enseñar. El aprendizaje es la construcción que vas a ir haciendo recopilando toda esa experiencia.<br />
                Estoy acá para que me consultes todo lo que necesites en relación a tu entrenamiento, para acompañar y para guiar con mi experiencia: pero los resultados serán el fruto de tu constancia.<br />
                Tené <strong>paciencia</strong>. No vamos a ver resultados en poco tiempo. Pero sí te puedo asegurar que rápidamente vas a ver pequeños progresos en la dirección que buscás.
                Estudiá los programas. No es solo cuestión de hacer. Hacete cargo de tu proceso. Entendé lo que estás haciendo, compará, evaluá, y preguntame lo que necesites.<br />

                Antes de seguir con los detalles:<br />
                Te dejo el enlace para sumarte a la comunidad para alumnos/as del programa de entrenamiento en Whatsapp: <br />
                https://chat.whatsapp.com/IWmzug4euFt7qpWu7iUWSl <br />
                Yendo a una cuestion técnica: los videos de demostración son material de estudio. Filmá y compará tu ejecución con las de los videos que te envié.<br />
                Intentá que sea lo más parecido posible. Cada serie cuenta.<br />
                Creá una carpeta en Drive con el nombre del mes en el que iniciás, dentro de ella creás dos carpetas con los nombres SEMANA1 y SEMANA4. <br />
                Dentro de cada una de esas carpetas vas a organizar los videos en otras carpetas con los siguientes nombres: DIA1, DIA2,DIA3, VERTI y MOVILIDAD y ahí vas subiendo tus ejecuciones así yo puedo ir estudiando tu trabajo en forma cronológica y analizar que cosas dan resultado y cuáles no a partir de ir entendiendo el proceso.<br />

                En el video de COMUNICACION dentro del programa vas a encontrar la explicación en detalle para preparar el material.<br />

                Cuando subís TODO el material de la Semana 1, copiá el link de Drive y enviámelo a este mismo mail ( info.martinfiasche@gmail.com ) así me llega la notificación y reviso lo antes posible el trabajo.<br />

                Enviame las dudas que te surjan!</p>
            <p class="lead">
                <Link to="/user/diagnostico" className="btn btn-warning btn-sm" role="button">Comenzá el diagnóstico</Link>
            </p>
        </div>
    </>)
}

export default Backoffice;