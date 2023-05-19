import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import WithAuth from "../component/Auth/withAuth";

export const Programs = () => {
    const { store, actions } = useContext(Context);
    const [userPrograms, setUserPrograms] = useState(store.userPrograms);
    const [selectedProgramName, setSelectedProgramName] = useState(Object.keys(userPrograms)[0]);

    const handleProgramChange = (e) => {
        setSelectedProgramName(e.target.value);
    };

    return (
        <div className="backProgramas container">
            <div className="backofficeWelcome1 m-3">
                <h1 className="display-4">Mis Programas</h1>
                <p>
                    Al final de la página hay un instructivo para entender cómo leer tu programa y una entrada en calor sugerida.
                    <br />
                    Chequealos antes de empezar a entrenar.
                </p>
                <hr className="my-4" />
            </div>
            <div className="seleccionaPrograma ms-3">
                <label htmlFor="programSelect">Seleccioná un programa:</label>
                <br />
                <br />
                <select id="programSelect" value={selectedProgramName} onChange={handleProgramChange} className="col-md-6">
                    {Object.keys(userPrograms).map((programName) => (
                        <option key={programName} value={programName}>
                            {programName}
                        </option>
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
                            <div key={`${day}`} className="table-responsive">
                                <table className="table bg-light border align-middle mt-2 mb-2 p-3">
                                    <thead>
                                        <tr>
                                            <th className="border">{day}</th>
                                            {sessionEntries.map(([sessionName, _], sessionIndex) => (
                                                <th key={`${day}-${sessionName}`} className="border">
                                                    {sessionName}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {workoutEntries.map(([exerciseType, exerciseData], exerciseIndex) => (
                                            <tr key={`${day}-${exerciseType}`}>
                                                <td className="border">
                                                    <strong>{exerciseData.exercise_name}</strong>
                                                    <br />
                                                    <strong>URL:</strong>{" "}
                                                    <a href={exerciseData.url_youtube} target="_blank" rel="noopener noreferrer">
                                                        {exerciseData.url_youtube}
                                                    </a>
                                                    <br />
                                                    <strong>Comentarios:</strong> {exerciseData.description}
                                                    <br />
                                                    <strong>Categoría:</strong> {exerciseData.type}
                                                    <br />
                                                </td>
                                                {sessionEntries.map(([sessionName, exercises], sessionIndex) => {
                                                    const exercise = exercises.find((e) => e.type === exerciseType);
                                                    if (exercise) {
                                                        return (
                                                            <td key={`${day}-${sessionName}-${exerciseType}`} className="border">
                                                                <strong>Series:</strong> {exercise.series}
                                                                <br />
                                                                <strong>Reps:</strong> {exercise.repetitions}
                                                                <br />
                                                                <strong>Peso:</strong> {exercise.weight}
                                                            </td>
                                                        );
                                                    } else {
                                                        return <td key={`${day}-${sessionName}-${exerciseType}`} className="border"></td>;
                                                    }
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        );
                    })}
                </>
            ) : (
                <>
                    <p className="ms-2 mt-3 mb-3">
                        <strong>Iniciá sesión para ver tus programas</strong>
                    </p>
                </>
            )}
            <ul className="programasVideos list-unstyled">
                <li>
                    <i className="far fa-check-circle ms-2 ps-1"></i> Entendé cómo leer tu programa:
                </li>
                <div className="embed-responsive embed-responsive-16by9 m-3 ms-4">
                    <iframe
                        className="embed-responsive-item border border-primary"
                        src="https://www.youtube.com/embed/3yEWQmkkKYE"
                        title="Como leer tu programa"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <li>
                    <i className="far fa-check-circle ms-2 ps-1"></i> Entrada en calor sugerida antes de entrenar:
                </li>
                <div className="embed-responsive embed-responsive-16by9 m-3 ms-4">
                    <iframe
                        className="embed-responsive-item border border-primary"
                        src="https://www.youtube.com/embed/vldVP3I9tos"
                        title="Entrada en calor"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <li className="ps-5">A1: Cat camel x 10 repeticiones</li>
                <li className="ps-5">A2: Rotación torácica x 10 repeticiones</li>
                <li className="ps-5">A3: Bird Dog x 10 repeticiones totales</li>
                <li className="ps-5 pb-2">A4: Plancha Prono x 20 segundos</li>
                <li className="ps-5">
                    <strong>x 3 series</strong>
                </li>
            </ul>
        </div>
    );
};

export default WithAuth(Programs);