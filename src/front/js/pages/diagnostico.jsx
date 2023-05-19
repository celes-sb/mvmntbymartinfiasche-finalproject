import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const Diagnostico = () => {
    const previousButton = "http://drive.google.com/uc?export=view&id=1BOY8MUYO5QEMBGu6c2BB3WH-eiNcutSL";
    const nextButton = "http://drive.google.com/uc?export=view&id=1ZX6WMe85ASLT8QWZ2Z5U8V-ov2cSckwK";

    const { store, actions } = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [user, setUser] = useState(store.userData);
    const [linkDiagnosis, setLinkDiagnosis] = useState();

    let obj = {
        message: `Nombre: ${user.first_name} ${user.last_name}, Email: ${user.email}, Link de Google Drive: ${linkDiagnosis}`,
        to: "ignotus.sensatio@gmail.com",
        subject: "Nuevo Diagnostico"
    };

    const sendDiagnosis = async (event) => {
        event.preventDefault(); // prevent form from submitting
        const { respuestaJson, response } = await actions.useFetch("/correo", obj, "POST"); // call sendMessage action
        console.log(response);
        if (response.ok) {
            const button = document.querySelector(".enviar-diagnostico-btn");
            button.classList.remove("btn-primary");
            button.classList.add("btn-success");
            button.innerHTML = "Diagnóstico enviado";
            setLinkDiagnosis("");
        }
    };

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


    return (
        <>
            <div className="diagnostico jumbotron m-3">
                <h1 className="display-4">Programa de entrenamiento a distancia</h1>
                <p className="lead">Diagnóstico inicial</p>
                <hr className="my-4" />
                <p>
                    Todos estos movimientos me sirven para evaluar niveles de fuerza, control motor y movilidad.
                    <br />Hay movimientos sintéticos y analíticos.
                    Los ejercicios sintéticos me dan información general sobre las estrategias que usás para resolver situaciones de movimiento mientras que los analíticos me ayudan a profundizar sobre posibles necesidades que tengamos que resolver.<br />
                    La manera en la que estudiás los ejercicios, ejecutás las evaluaciones y preparás los videos también es algo que evalúo.<br />
                    En este proceso a distancia necesito que estés comprometidx con tu parte de la tarea y la atención y detalle que involucrás en el proceso va a marcar la diferencia en los resultados.<br />
                    <br />
                    Ahora sí vamos a evaluar.<br />
                    No es necesario que entres en calor para hacer las evaluaciones. Sólo lo mínimo para sentirte cómodx.<br />
                    Practicá 2-3 veces cada movimiento antes de filmarlo. Considerá que necesito que se vea el cuerpo entero. Si podés replicar el plano del video que yo te envío mucho mejor.<br />
                </p>
                <hr className="my-4" />
                <div className="diagnostico-content bg-white bg-opacity-75 rounded border border-primary p-5 m-3">
                    <div className="top text-center pb-3">
                        <h3>{currentDiagnostico.name}</h3>
                        <p>{currentDiagnostico.text}</p>
                    </div>
                    <div className="bottom d-flex justify-content-between align-items-center mt-4">
                        <img
                            className="cursor me-3"
                            src={previousButton}
                            alt="Previous button"
                            onClick={handlePreviousClick}
                        />
                        <div className="middle d-flex justify-content-center align-items-center">
                            {currentDiagnostico.videoUrl && (
                                <div className="video-container">
                                    <iframe
                                        className="embed-responsive-item border border-primary m-3 ms-md-5"
                                        src={currentDiagnostico.videoUrl}
                                        title="Tests Diagnóstico Inicial"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                        <img
                            className="cursor ms-3"
                            src={nextButton}
                            alt="Next Button"
                            onClick={handleNextClick}
                        />
                    </div>
                </div>
                <p>Si estás más avanzadx y podés realizar otros ejercicios te pido que los agregues en el test. <br />
                    Te dejo algunos ejemplos de los ejercicios que me interesa ver en caso de que puedas realizarlos:</p>
                <ul className="list-unstyled mt-2 mb-2">
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Planchas</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Muscle Up</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Sentadilla</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Peso Muerto</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Verticales a Fuerza</li>
                </ul>
                <p><strong>IMPORTANTE:</strong> no te exijas a hacer algo si no sabés si estás preparadx para ejecutarlo. <br />No subo videos de referencia, porque no quiero que lo envíes si no lo venís practicando.</p>
                <p><strong>Una vez grabados los tests, hacé lo siguiente:</strong></p>
                <ul className="list-unstyled mt-2 mb-2">
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Editá los videos de forma tal que duren lo menos posible. Remové tiempos muertos, preparación, etc., que sólo se vean las ejecuciones.</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Creá una carpeta en Google Drive con tu Nombre y Apellido.</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Dentro de esa carpeta creá otra con el nombre "TEST" donde subirás los videos.</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Clickeá en los tres puntitos que se ven en la carpeta y luego clickeá en "Compartir".</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Clickeá en "Copiar vínculo" y pegá el link aquí debajo.</li>
                    <li><i className="far fa-check-circle ms-2 ps-1"></i> Por último, clickeá en "Enviar mi diagnóstico" y listo. Estarás recibiendo tu primer programa a la brevedad.</li>
                </ul>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="text-center w-75">
                        <form>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="url-input"
                                    value={linkDiagnosis}
                                    placeholder="Link de tu carpeta en Google Drive"
                                    style={{ "fontSize": "14px" }}
                                    onChange={(e) => setLinkDiagnosis(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary enviar-diagnostico-btn mt-2" onClick={sendDiagnosis}>
                                Enviar Diagnóstico
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WithAuth(Diagnostico);