import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/home.css";

export const ModalEditProgram = ({
    userPrograms,
    handleUserPrograms,
    handleCloseModalEditProgram,
    showModalEditProgram,
    selectedProgramId,
    selectedPoId,
    sessionValues,
    setSessionValues
}) => {
    const { store, actions } = useContext(Context);

    const [allExercises, setAllExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [searchText, setSearchText] = useState("");

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedExercise(value === "" ? null : value);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        setSelectedExercise(null);
    };

    const handleEditExercise = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.useFetch(`/programorganizer/${selectedPoId}`, sessionValues, "PUT"); // call login action
        if (response.ok) {
            alert("Editado exitosamente");
            handleCloseModalEditProgram();
            handleUserPrograms();
        } else {
            alert("Hubo un error, intente nuevamente");
        }
    };

    const filteredExercises = allExercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchText.toLowerCase()) ||
        exercise.category.toLowerCase().includes(searchText.toLowerCase()) ||
        exercise.description.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/getexercises");
            if (response.ok) {
                setAllExercises(respuestaJson);
            } else {
                console.log("Fetch fallido");
            }
        };
        cargaDatos();
    }, []);

    useEffect(() => {
        setSessionValues((prevState) => ({
            ...prevState,
            exercise_id: selectedExercise,
        }));
    }, [selectedExercise]);

    useEffect(() => {
        setSessionValues((prevState) => ({
            ...prevState,
            program_id: selectedProgramId,
        }));
    }, [selectedProgramId]);


    return (
        <div
            className={`modal${showModalEditProgram ? " show" : ""}`}
            tabIndex="-1"
            style={{ display: showModalEditProgram ? "block" : "none" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Añadir Nuevo Ejercicio</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleCloseModalEditProgram}
                        ></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <input className="mb-2" type="text" value={searchText} onChange={handleInputChange} placeholder="Search exercises..." />
                            <br />
                            <select value={selectedExercise || ""} onChange={handleSelectChange}>
                                <option value="">Select an exercise...</option>
                                {filteredExercises.map((exercise) => (
                                    <option key={exercise.id} value={exercise.id}>
                                        {exercise.name} - {exercise.category}
                                    </option>
                                ))}
                            </select>
                            <div className="d-flex">
                                <div className="col mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Day (Day 1, Day 2...)"
                                        aria-label="Program day"
                                        name="day"
                                        value={sessionValues.day}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, day: e.target.value });
                                        }}
                                        required
                                    />
                                </div>

                                <div className="col mt-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Type (A1, A2...)"
                                        aria-label="Program type"
                                        name="type"
                                        value={sessionValues.type}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, type: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="col mt-2">
                                    Session 1
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Weight 1"
                                        aria-label="Weight 1"
                                        name="weight_1"
                                        value={sessionValues.weight_1}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, weight_1: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repetitions 1"
                                        aria-label="Repetitions 1"
                                        name="repetitions_1"
                                        value={sessionValues.repetitions_1}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, repetitions_1: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 1"
                                        aria-label="Series 1"
                                        name="series_1"
                                        value={sessionValues.series_1}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, series_1: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="col mt-2">
                                    Session 2
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Weight 2"
                                        aria-label="Weight 2"
                                        name="weight_2"
                                        value={sessionValues.weight_2}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, weight_2: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repetitions 2"
                                        aria-label="Repetitions 2"
                                        name="repetitions_2"
                                        value={sessionValues.repetitions_2}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, repetitions_2: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 2"
                                        aria-label="Series 2"
                                        name="series_2"
                                        value={sessionValues.series_2}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, series_2: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="col mt-2">
                                    Session 3
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Weight 3"
                                        aria-label="Weight 3"
                                        name="weight_3"
                                        value={sessionValues.weight_3}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, weight_3: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repetitions 3"
                                        aria-label="Repetitions 3"
                                        name="repetitions_3"
                                        value={sessionValues.repetitions_3}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, repetitions_3: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 3"
                                        aria-label="Series 3"
                                        name="series_3"
                                        value={sessionValues.series_3}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, series_3: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="col mt-2">
                                    Session 4
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Weight 4"
                                        aria-label="Weight 4"
                                        name="weight_4"
                                        value={sessionValues.weight_4}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, weight_4: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repetitions 4"
                                        aria-label="Repetitions 4"
                                        name="repetitions_4"
                                        value={sessionValues.repetitions_4}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, repetitions_4: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 4"
                                        aria-label="Series 4"
                                        name="series_4"
                                        value={sessionValues.series_4}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, series_4: e.target.value });
                                        }}
                                        required
                                    />
                                </div>

                            </div>

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleCloseModalEditProgram}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleEditExercise}

                            >
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditProgram;