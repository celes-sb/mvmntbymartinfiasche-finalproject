import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import ModalAddProgram from "./modalAddProgram.jsx";
import ModalDeleteProgram from "./modalDeleteProgram.jsx";
import ModalEditProgram from "./modalEditProgram.jsx";

export const EditPrograms = ({
    userPrograms,
    selectedProgramName,
    handleUserPrograms,
}) => {
    const { store, actions } = useContext(Context);
    const [showModalAddProgram, setShowModalAddProgram] = useState(false);
    const [showModalEditProgram, setShowModalEditProgram] = useState(false);
    const [showModalDeleteProgram, setShowModalDeleteProgram] = useState(false);
    const [selectedPoId, setSelectedPoId] = useState(null)
    const [selectedProgramId, setSelectedProgramId] = useState(null);
    const handleCloseModalAddProgram = () => setShowModalAddProgram(false);
    const handleOpenModalAddProgram = () => setShowModalAddProgram(true);
    const handleCloseModalDeleteProgram = () => setShowModalDeleteProgram(false);
    const handleCloseModalEditProgram = () => setShowModalEditProgram(false);
    const [sessionValues, setSessionValues] = useState({});

    const handleOpenModalDeleteProgram = (poId) => {
        setSelectedPoId(poId);
        setShowModalDeleteProgram(true);
    }

    const handleOpenModalEditProgram = (day, exerciseType, sessionEntries, poId) => {

        let currentValues = {
            day: day,
            type: exerciseType
        }

        sessionEntries.forEach(([sessionName, exercises], index) => {
            const exercise = exercises.find(e => e.type === exerciseType);
            if (exercise) {
                currentValues = {
                    ...currentValues,
                    [`weight_${index + 1}`]: exercise.weight,
                    [`repetitions_${index + 1}`]: exercise.repetitions,
                    [`series_${index + 1}`]: exercise.series,
                };
            }
        });

        setSelectedPoId(poId);
        setSessionValues(currentValues);
        setShowModalEditProgram(true)
    };

    useEffect(() => {
        const programData = userPrograms?.[0]?.[selectedProgramName];

        if (programData) {
            setSelectedProgramId(programData.program_id);
        }
    }, [selectedProgramName, userPrograms]);


    return (
        <>
            <div className="table-responsive">
                <button type="button" className="btn btn-success" onClick={handleOpenModalAddProgram}>Add New Exercise</button>
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
                                                <button type="button" className="btn btn-primary" onClick={() => handleOpenModalEditProgram(exerciseData.day, exerciseType, sessionEntries, exerciseData.po_id)}>Edit</button>
                                                <ModalEditProgram userPrograms={userPrograms} handleUserPrograms={handleUserPrograms} selectedProgramId={selectedProgramId} showModalEditProgram={showModalEditProgram} handleCloseModalEditProgram={handleCloseModalEditProgram} handleOpenModalEditProgram={handleOpenModalEditProgram} selectedPoId={selectedPoId} sessionValues={sessionValues} setSessionValues={setSessionValues} />
                                                <button type="button" className="btn btn-danger" onClick={() => handleOpenModalDeleteProgram(exerciseData.po_id)}>Delete</button>
                                                <ModalDeleteProgram handleUserPrograms={handleUserPrograms} showModalDeleteProgram={showModalDeleteProgram} handleCloseModalDeleteProgram={handleCloseModalDeleteProgram} selectedPoId={selectedPoId} />
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
