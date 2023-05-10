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
            <div className="container-fluid">
                <h1>Mis Programas</h1>
                <p>A tener en cuenta antes de empezar:</p>
                <ul>
                    <li>Entendé cómo leer tu programa:</li>
                    <iframe className="border border-primary m-3" width="560" height="315" src="https://www.youtube.com/embed/3yEWQmkkKYE" title="Como leer tu programa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    <li>Entrada en calor sugerida antes de entrenar:</li>
                    <iframe className="border border-primary m-3" width="560" height="315" src="https://www.youtube.com/embed/vldVP3I9tos" title="Entrada en calor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    <li>A1: Cat camel x 10 repeticiones</li>
                    <li>A2: Rotación torácica x 10 repeticiones</li>
                    <li>A3: Bird Dog x 10 repeticiones totales</li>
                    <li>A4: Plancha Prono x 20 segundos</li>
                    <li><strong>x 3 series</strong></li>
                </ul>
                <div>
                    <label htmlFor="programSelect">Select a program:</label>
                    <select id="programSelect" value={selectedProgramName} onChange={handleProgramChange}>
                        {Object.keys(userPrograms).map((programName) => (
                            <option key={programName} value={programName}>{programName}</option>
                        ))}
                    </select>
                </div>
                <div className="table-responsive">
                    {userPrograms && Object.keys(userPrograms).length > 0 ? (
                        <>
                            {Object.entries(userPrograms[selectedProgramName]).map(([day, data]) => {
                                const workoutEntries = Object.entries(data["workout"]);
                                const sessionEntries = Object.entries(data["sessions"]);

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
                                                        <strong>Exercise name:</strong> {exerciseData.exercise_name}<br />
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
                        <><h1>Loading</h1></>
                    )}
                </div>
            </div>
        </>
    );
};

export default Programs;
