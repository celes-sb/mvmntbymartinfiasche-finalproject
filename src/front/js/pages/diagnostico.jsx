import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

function submitUrl() {
    var url = document.getElementById("url-input").value;
    if (url !== "") {
        window.location.href = url;
    } else {
        alert("Please enter a valid URL");
    }
}

export const Diagnostico = () => {
    const { store, actions } = useContext(Context);

    return (<>
        <div class="jumbotron">
            <h1 class="display-4">Programa de entrenamiento a distancia</h1>
            <p class="lead">Diagnóstico inicial</p>
            <hr class="my-4" />
            <p>
                Bienvenidx al programa! Estamos comenzando un proceso de trabajo juntxs en donde voy a ayudarte con los objetivos que te proponés.<br />
                Todos estos movimientos me sirven para evaluar niveles de fuerza, control motor y movilidad. Hay movimientos sintéticos y analíticos.<br />
                Los ejercicios sintéticos me dan información general sobre las estrategias que usás para resolver situaciones de movimiento mientras que los analíticos me ayudan a profundizar sobre posibles necesidades que tengamos que resolver.<br />
                La manera en la que estudiás los ejercicios, ejecutás las evaluaciones y preparás los videos también es algo que evalúo.<br />
                En este proceso a distancia necesito que estés comprometidx con tu parte de la tarea y la atención y detalle que involucrás en el proceso va a marcar la diferencia en los resultados.<br />
                Ahora sí vamos a evaluar.<br />
                No es necesario que entres en calor para hacer las evaluaciones. Sólo lo mínimo para sentirte cómodx.<br />
                Practicá 2-3 veces cada movimiento antes de filmarlo.<br />
                Considerá que necesito que se vea el cuerpo entero. Si podés replicar el plano del video que yo te envío mucho mejor.<br /></p>

            <h1>Test Movilidad General</h1>
            <p>Realizá una repetición de cada ejercicio y sostené la amplitud lograda por 3-5 segundos.
                En caso de que sea unilateral, realizá el ejercicio en cada pierna en el mismo plano que se muestra en el video.
                Son 3 ejercicios. Grabá los 3 por favor.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AqP5vKBnjBw" title="Diagnóstico movilidad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>Test Dorsiflexión</h1 >
            <p>Realizá una repetición de cada pie y sostené la posición final durante 3-5 segundos</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lebDX66HF94" title="Diagnóstico dorsiflexión" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>Test Hombros</h1 >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BQU2irfBR5I" title="Diagnóstico hombros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>Postura y Resistencia</h1 >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NUEhgmj-pOY" title="Diagnóstico postura y resistencia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>Equilibrio en Vertical</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WiFQfafGtEo" title="Diagnóstico equilibrio vertical" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>Test de Fuerza</h1>
            Vas a realizar todas las repeticiones posibles que te salgan prolijas técnicamente.
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wkqA-V0O2nA" title="Diagnóstico push up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <ul>
                <h3>Push Up</h3>
                <p>La última repetición es la que no podés mantener la espalda neutra.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wkqA-V0O2nA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </ul>
            <ul>
                <h3>Remos/Dominadas</h3>
                <p>La última repetición es la que no podés tocar la barra/bastón/anillas con el pecho.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/pXO8LYpH308" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </ul>
            <ul>
                <h3>Pistola</h3>
                <p>La última repetición es la que no podés mantener el rango de movimiento que elegiste.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-uptX7NE6A4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </ul>
            <p>
                Si estás más avanzadx y podés realizar otros ejercicios te pido que los agregues en el test. Te dejo algunos ejemplos de ejercicios que me interesa ver en caso de que puedas realizarlos:
                <li>
                    <li>Planchas</li>
                    <li>Muscle Up</li>
                    <li>Sentadilla</li>
                    <li>Peso Muerto</li>
                    <li>Verticales a Fuerza</li>
                </li>
                NOTA IMPORTANTE: no te exijas a hacer algo si no sabés si estás preparadx para ejecutarlo</p>
            <p>No subo videos de referencia, porque no quiero que lo envíes si no lo venís practicando.</p>
            <p>DETALLES PERSONALES

                1- Cuantas veces por semana podes entrenar 60-75 minutos?
                Recomendado entre 3 y 6 veces

                2- Que materiales tenes a disposición (describirlo o manda fotos)

                3- alguna lesión molestia dolor que tenga que conocer?

                4- Que objetivos te planteas de aca a 3 meses en cada uno de los contenidos?

                COMUNICACION

                Creas una carpeta en google drive con tu nombre y apellido.
                Dentro de esa carpeta creas otra que se llame TEST. Ahí pones los vídeos.
                Idealmente edita para que los vídeos duren poco, tengan solo las ejecuciones, sin los tiempo de preparación.
                Adjunta las respuestas a las preguntas en un DOC o como respuesta en el mismo mail.

                Todo esto me lo compartís a esta direccion: info.martinfiasche@gmail.com</p>
            <p className="lead">
                <span id="input-field">
                    <input type=" text" id="url-input" placeholder="Link tu carpeta en Google Drive" />
                    <button className="btn btn-warning btn-sm" onClick={submitUrl}>Enviar mi diagnóstico</button>
                </span>
            </p>

        </div>
    </>)
}

export default Diagnostico;