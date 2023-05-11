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
            <div>
                <label htmlFor="programSelect">Select a program:</label>
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

        </>
    );
};

export default Programs;
