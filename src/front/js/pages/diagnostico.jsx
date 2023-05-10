import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Diagnostico = () => {
    const previousButton = "http://drive.google.com/uc?export=view&id=1BOY8MUYO5QEMBGu6c2BB3WH-eiNcutSL";
    const nextButton = "http://drive.google.com/uc?export=view&id=1ZX6WMe85ASLT8QWZ2Z5U8V-ov2cSckwK";

    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + store.diagnosticoData.length) %
                store.diagnosticoData.length
        );
    };

    const handleNextClick = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % store.diagnosticoData.length
        );
    };

    const currentDiagnostico = store.diagnosticoData[currentIndex];
    function submitUrl() {
        var url = document.getElementById("url-input").value;
        if (url !== "") {
            window.location.href = url;
        } else {
            alert("Please enter a valid URL");
        }
    }

    return (<>
        <div class="diagnostico jumbotron m-3">
            <h1 class="display-4">Programa de entrenamiento a distancia</h1>
            <p class="lead">Diagnóstico inicial</p>
            <hr class="my-4" />
            <div className="diagnostico-content bg-white bg-opacity-75 rounded border border-warning p-5 m-3">
                <div className="top">
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
                </div>
                <div className="bottom">
                    <img
                        className="cursor"
                        src={previousButton}
                        alt=""
                        onClick={handlePreviousClick}
                    />
                    <div className="middle">
                        <img src={currentDiagnostico.image} alt="" />
                        {currentDiagnostico.videoUrl ? (
                            <>
                                <iframe
                                    className="embeddedVideo border border-primary"
                                    width="518"
                                    height="292"
                                    src={currentDiagnostico.videoUrl}
                                    title="Tests Diagnóstico Inicial"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                            </>
                        ) : (
                            <></>
                        )}
                        <h5>{currentDiagnostico.name}</h5>
                        <p>{currentDiagnostico.text}</p>
                    </div>
                    <img
                        className="cursor"
                        src={nextButton}
                        alt=""
                        onClick={handleNextClick}
                    />
                </div>
            </div>
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