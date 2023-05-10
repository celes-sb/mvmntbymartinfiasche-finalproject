import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Backoffice = () => {
    const { store, actions } = useContext(Context);

    return (<>
        <div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">¡Hola!</h1>
            <p className="lead">¡Bienvenidx al programa de entrenamiento a distancia!</p>
            <hr className="my-4" />
            <iframe className="border border-primary m-3" width="560" height="315" src="https://www.youtube.com/embed/dwqfIca_1mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Seguramente estás acá porque ya te ha llegado tu primer programa de trabajo y espero que te sea de mucha utilidad para conseguir tus objetivos.</p>
            <h3>Puntos importantes a tener en cuenta:</h3>
            <ul className="ps-3 pe-3">
                <li>Esto es un proceso de entrenamiento, cada programa, rutina y ejercicio tienen algo para enseñar. El aprendizaje es la construcción que vas a ir haciendo recopilando toda esa experiencia.</li>
                <li>Estoy acá para que me consultes todo lo que necesites en relación a tu entrenamiento, para acompañar y para guiar con mi experiencia: pero los resultados serán el fruto de tu constancia.</li> Tené <strong>paciencia</strong>. No vamos a ver resultados en poco tiempo. Pero sí te puedo asegurar que rápidamente vas a ver pequeños progresos en la dirección que buscás.
                <li>Estudiá los programas. No es solo cuestión de hacer. Hacete cargo de tu proceso. Entendé lo que estás haciendo, compará, evaluá, y preguntame lo que necesites.</li>
                <li>Los videos de demostración son material de estudio. Filmá y compará tu ejecución con las de los videos que te envié. Intentá que sea lo más parecido posible. Cada serie cuenta.</li>
            </ul>
            <h3>Pasos a seguir:</h3>
            <ul className="ps-3 pe-3">
                <li>Mirá este video detenidamente:</li>
                <iframe className="border border-primary m-3" width="560" height="315" src="https://www.youtube.com/embed/n0N5aSVwU4M" title="Proceso inicial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                <li>Entendé cómo leer tu programa:</li>
                <iframe className="border border-primary m-3" width="560" height="315" src="https://www.youtube.com/embed/3yEWQmkkKYE" title="Como leer tu programa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                <li>Creá una carpeta en Drive con el nombre del mes en el que iniciás</li>
                <li>Dentro de ella creá dos carpetas con los nombres SEMANA1 y SEMANA4.</li>
                <li>SEMANA1 y SEMANA4 van a tener dentro cinco carpetas llamadas DIA1, DIA2, DIA3, VERTI y MOVILIDAD en donde vas a subir las ejecuciones así yo puedo ir estudiando tu trabajo en forma cronológica y analizar que cosas dan resultado y cuáles no a partir de ir entendiendo el proceso.</li>
                <li>Cuando subís TODO el material de la Semana 1 o Semana 4 según corresponda, copiá el link de Drive en "Enviar programa" ubicado en la sección Programas de esta plataforma.</li>
                <li>Te mandaré una devolución sobre tus videos lo antes posible.</li>
                <li>Entrada en calor sugerida antes de entrenar:</li>
                <iframe className="border border-primary m-3" width="560" height="315" src="https://www.youtube.com/embed/vldVP3I9tos" title="Entrada en calor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                <li>A1: Cat camel x 10 repeticiones</li>
                <li>A2: Rotación torácica x 10 repeticiones</li>
                <li>A3: Bird Dog x 10 repeticiones totales</li>
                <li>A4: Plancha Prono x 20 segundos</li>
                <li><strong>x 3 series</strong></li>
            </ul>
            <h3>Enlaces útiles:</h3>
            <ul className="ps-3 pe-3">
                <li>Comunidad para alumnxs del programa de entrenamiento en Whatsapp: https://chat.whatsapp.com/IWmzug4euFt7qpWu7iUWSl</li>
                <li>Comunidad para alumnxs del programa de entrenamiento en Discord: https://discord.gg/GdyEMZQ3</li>
                <li>Biblioteca de Contenidos: https://drive.google.com/drive/folders/1TUqJ9HWKGu939RP0H748KWq5-ASAR1qB?usp=sharing</li>
            </ul>
            <hr />
            <p className="lead">
                <p>Ya estás listx para la siguiente etapa: el diagnóstico. Hacé click en el botón azul que te llevará a la sección de diagnóstico donde realizarás unos tests iniciales que me ayudarán a hacer que tu programa sea lo más personalizado posible.</p>
                <Link to="/user/diagnostico" className="btn btn-primary btn-sm" role="button">Comenzá el diagnóstico</Link>
            </p>
        </div >
    </>)
}

export default Backoffice; 