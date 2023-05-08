import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Programs = () => {
    const { store, actions } = useContext(Context);
    const [userPrograms, setUserPrograms] = useState(store.userPrograms);
    console.log(userPrograms)

    return (
        <>
            <div className="table-responsive">
                {userPrograms && userPrograms.length > 0 ? (
                    <>
                        {userPrograms.map((item, index) => {
                            return Object.entries(item).map(([workout, sessions]) => {
                                const sessionEntries = Object.entries(sessions);
                                const maxExercises = Math.max(...sessionEntries.map(([_, exercises]) => exercises.length));

                                return (
                                    <table key={`${workout}`} className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>{workout}</th>
                                                {sessionEntries.map(([sessionName, _], sessionIndex) => (
                                                    <th key={`${workout}-${sessionName}`}>{sessionName}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: maxExercises }, (_, i) => i).map((_, exerciseIndex) => (
                                                <tr key={`${workout}-${exerciseIndex}`}>
                                                    <td>
                                                        {sessionEntries[0][1][exerciseIndex] && (
                                                            <>
                                                                <strong>Exercise name:</strong> {sessionEntries[0][1][exerciseIndex].exercise_name}<br />
                                                                <strong>URL:</strong> {sessionEntries[0][1][exerciseIndex].url_youtube}<br />
                                                                <strong>Description:</strong> {sessionEntries[0][1][exerciseIndex].description}<br />
                                                                <strong>Type:</strong> {sessionEntries[0][1][exerciseIndex].type}<br />
                                                            </>
                                                        )}
                                                    </td>
                                                    {sessionEntries.map(([sessionName, exercises], sessionIndex) => {
                                                        const exercise = exercises[exerciseIndex];
                                                        if (exercise) {
                                                            return (
                                                                <td key={`${workout}-${sessionName}-${exerciseIndex}`}>
                                                                    <strong>Weight:</strong> {exercise.weight}<br />
                                                                    <strong>Repetitions:</strong> {exercise.repetitions}<br />
                                                                    <strong>Series:</strong> {exercise.series}
                                                                </td>
                                                            );
                                                        } else {
                                                            return <td key={`${workout}-${sessionName}-${exerciseIndex}`}></td>;
                                                        }
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                );
                            });
                        })}
                    </>)
                    : (<><h1>Loading</h1></>)}
            </div>
        </>
    );
};

export default Programs;
