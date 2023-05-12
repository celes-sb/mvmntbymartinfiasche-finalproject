import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Programs = () => {
    const { store, actions } = useContext(Context);
    const [userPrograms, setUserPrograms] = useState(store.userPrograms);
    const [selectedProgramName, setSelectedProgramName] = useState(Object.keys(userPrograms)[0]);

    const handleProgramChange = (e) => {
        setSelectedProgramName(e.target.value);
    };

    return (
        <>
            <div className="backofficeWelcome1 jumbotron m-3">
                <h1 className="display-4">Mis Programas</h1>
                <p>Al final de la página hay un instructivo para entender cómo leer tu programa y una entrada en calor sugerida. <br />Chequealos antes de empezar a entrenar.</p>
                <hr className="my-4" />
            </div>
            <div>
                <label htmlFor="programSelect">Seleccioná un programa:</label><br /><br />
                <select id="programSelect" value={selectedProgramName} onChange={handleProgramChange}>
                    {Object.keys(userPrograms).map((programName) => (
                        <option key={programName} value={programName}>{programName}</option>
                    ))}
                </select>
            </div>

            {userPrograms && userPrograms[selectedProgramName] ? (
                <>
                    {Object.entries(userPrograms[selectedProgramName]).map(([day, data]) => {
                        if (day === "program_id") {
                            return null;
                        }
                        const workoutEntries = data["workout"] ? Object.entries(data["workout"]) : [];
                        const sessionEntries = data["sessions"] ? Object.entries(data["sessions"]) : [];

                        return (
                            <table key={`${day}`} className="table align-middle">
                                <thead>
                                    <tr>
                                        <th>{day}</th>
                                        {sessionEntries.map(([sessionName, _], sessionIndex) => (
                                            <th key={`${day}-${sessionName}`}>{sessionName}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {workoutEntries.map(([exerciseType, exerciseData], exerciseIndex) => (
                                        <tr key={`${day}-${exerciseType}`}>
                                            <td>
                                                {exerciseData.exercise_name}<br />
                                                <strong>URL:</strong> {exerciseData.url_youtube}<br />
                                                <strong>Description:</strong> {exerciseData.description}<br />
                                                <strong>Type:</strong> {exerciseData.type}<br />
                                            </td>
                                            {sessionEntries.map(([sessionName, exercises], sessionIndex) => {
                                                const exercise = exercises.find(e => e.type === exerciseType);
                                                if (exercise) {
                                                    return (
                                                        <td key={`${day}-${sessionName}-${exerciseType}`}>
                                                            <strong>Weight:</strong> {exercise.weight}<br />
                                                            <strong>Repetitions:</strong> {exercise.repetitions}<br />
                                                            <strong>Series:</strong> {exercise.series}
                                                        </td>
                                                    );
                                                } else {
                                                    return <td key={`${day}-${sessionName}-${exerciseType}`}></td>;
                                                }
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        );
                    })}
                </>
            ) : (
                <><p className="mt-5 mb-5">Cargando...</p></>
            )}
            <ul className="list-unstyled">
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Entendé cómo leer tu programa:</li>
                <iframe className="border border-primary m-3 ms-5" width="560" height="315" src="https://www.youtube.com/embed/3yEWQmkkKYE" title="Como leer tu programa" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                <li><i className="far fa-check-circle ms-2 ps-1"></i> Entrada en calor sugerida antes de entrenar:</li>
                <iframe className="border border-primary m-3 ms-5" width="560" height="315" src="https://www.youtube.com/embed/vldVP3I9tos" title="Entrada en calor" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                <li className="ps-5">A1: Cat camel x 10 repeticiones</li>
                <li className="ps-5">A2: Rotación torácica x 10 repeticiones</li>
                <li className="ps-5">A3: Bird Dog x 10 repeticiones totales</li>
                <li className="ps-5 pb-2">A4: Plancha Prono x 20 segundos</li>
                <li className="ps-5"><strong>x 3 series</strong></li>
            </ul>
        </>
    );
};

export default Programs;