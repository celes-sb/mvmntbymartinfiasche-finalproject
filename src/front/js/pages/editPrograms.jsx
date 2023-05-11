import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const EditPrograms = ({
    userPrograms,
    selectedProgramName,
}) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="table-responsive">
                {userPrograms && userPrograms[0][selectedProgramName] ? (
                    <>
                        {Object.entries(userPrograms[0][selectedProgramName]).map(([day, data]) => {
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
        </>
    );
};

export default EditPrograms;
