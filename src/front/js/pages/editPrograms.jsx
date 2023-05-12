import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import ModalAddProgram from "./modalAddProgram.jsx";

export const EditPrograms = ({
    userPrograms,
    selectedProgramName,
    handleUserPrograms,
}) => {
    const { store, actions } = useContext(Context);
    const [showModalAddProgram, setShowModalAddProgram] = useState(false);
    const [selectedProgramId, setSelectedProgramId] = useState(null);
    const handleCloseModalAddProgram = () => setShowModalAddProgram(false);
    const handleOpenModalAddProgram = () => setShowModalAddProgram(true);

    useEffect(() => {
        const programData = userPrograms?.[0]?.[selectedProgramName];

        if (programData) {
            setSelectedProgramId(programData.program_id);
        }
    }, [selectedProgramName, userPrograms]);


    return (
        <>
            <div className="table-responsive">
                <button type="button" className="btn btn-outline-primary mt-4" onClick={handleOpenModalAddProgram}>Agregar Ejercicio</button>
                <ModalAddProgram userPrograms={userPrograms} handleUserPrograms={handleUserPrograms} selectedProgramId={selectedProgramId} showModalAddProgram={showModalAddProgram} handleCloseModalAddProgram={handleCloseModalAddProgram} handleOpenModalAddProgram={handleOpenModalAddProgram} />
                {userPrograms && userPrograms[0] && userPrograms[0][selectedProgramName] ? (
                    <>
                        {Object.entries(userPrograms[0][selectedProgramName]).map(([day, data]) => {
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
                                                <td className="g-5">
                                                    <strong>Ejercicio:</strong> {exerciseData.exercise_name}<br />
                                                    <strong>URL:</strong> {exerciseData.url_youtube}<br />
                                                    <strong>Descripción:</strong> {exerciseData.description}<br />
                                                    <strong>Tipo:</strong> {exerciseData.type}<br />
                                                    <button type="button" className="btn btn-outline-primary m-2">Editar</button>
                                                    <button type="button" className="btn btn-outline-danger m-2">Borrar</button>
                                                </td>
                                                {sessionEntries.map(([sessionName, exercises], sessionIndex) => {
                                                    const exercise = exercises.find(e => e.type === exerciseType);
                                                    if (exercise) {
                                                        return (
                                                            <td key={`${day}-${sessionName}-${exerciseType}`}>
                                                                <strong>Series:</strong> {exercise.series}<br />
                                                                <strong>Repeticiones:</strong> {exercise.repetitions}<br />
                                                                <strong>Peso:</strong> {exercise.weight}
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
                    <><h1>Cargando...</h1></>
                )}
            </div>
        </>
    );
};

export default EditPrograms;
