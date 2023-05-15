import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/home.css";

export const ModalAddProgram = ({
    userPrograms,
    handleUserPrograms,
    handleCloseModalAddProgram,
    showModalAddProgram,
    selectedProgramId
}) => {
    const { store, actions } = useContext(Context);

    const [allExercises, setAllExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [searchText, setSearchText] = useState("");
    const initialFormState = {
        program_id: selectedProgramId,
        day: "",
        type: "",
        weight_1: 0,
        repetitions_1: 0,
        series_1: 0,
        weight_2: 0,
        repetitions_2: 0,
        series_2: 0,
        weight_3: 0,
        repetitions_3: 0,
        series_3: 0,
        weight_4: 0,
        repetitions_4: 0,
        series_4: 0,
    }
    const [inputValues, setInputValues] = useState(initialFormState);


    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedExercise(value === "" ? null : value);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        setSelectedExercise(null);
    };

    const handleCreateNewExercise = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.useFetch("/programorganizer", inputValues, "POST"); // call login action
        if (response.ok) {
            alert("Ejercicio agregado con éxito");
            handleCloseModalAddProgram();
            handleUserPrograms();
            setInputValues(initialFormState);
            setSelectedExercise(null);
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
        setInputValues((prevState) => ({
            ...prevState,
            exercise_id: selectedExercise,
        }));
    }, [selectedExercise]);

    useEffect(() => {
        setInputValues((prevState) => ({
            ...prevState,
            program_id: selectedProgramId,
        }));
    }, [selectedProgramId]);


    return (
        <div
            className={`modal${showModalAddProgram ? " show" : ""}`}
            tabIndex="-1"
            style={{ display: showModalAddProgram ? "block" : "none" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Nuevo Ejercicio</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleCloseModalAddProgram}
                        ></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <input className="mb-2" type="text" value={searchText} onChange={handleInputChange} placeholder="Search exercises..." />
                            <br />
                            <select className="mt-2 mb-2" value={selectedExercise || ""} onChange={handleSelectChange}>
                                <option value="">Seleccionar un ejercicio...</option>
                                {filteredExercises.map((exercise) => (
                                    <option key={exercise.id} value={exercise.id}>
                                        {exercise.name} - {exercise.category}
                                    </option>
                                ))}
                            </select>
                            <div className="row gy-2 mt-2 mb-2">
                                <div className="col mt-2 gx-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="DIA (Día 1, Día 2, Día 3)"
                                        aria-label="Program day"
                                        name="day"
                                        value={inputValues.day}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, day: e.target.value });
                                        }}
                                        required
                                    />
                                </div>

                                <div className="col mt-2 gx-2 mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Bloque (A1, B1, C1...)"
                                        aria-label="Program type"
                                        name="type"
                                        value={inputValues.type}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, type: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row gy-1">
                                <div className="col mt-2">
                                    <br />
                                    <p>Peso:</p>
                                    <p>Repes:</p>
                                    <p>Series:</p>
                                </div>
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 1
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 1"
                                        aria-label="Weight 1"
                                        name="weight_1"
                                        value={inputValues.weight_1}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, weight_1: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repes 1"
                                        aria-label="Repetitions 1"
                                        name="repetitions_1"
                                        value={inputValues.repetitions_1}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, repetitions_1: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 1"
                                        aria-label="Series 1"
                                        name="series_1"
                                        value={inputValues.series_1}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, series_1: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 2
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 2"
                                        aria-label="Weight 2"
                                        name="weight_2"
                                        value={inputValues.weight_2}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, weight_2: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repes 2"
                                        aria-label="Repetitions 2"
                                        name="repetitions_2"
                                        value={inputValues.repetitions_2}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, repetitions_2: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 2"
                                        aria-label="Series 2"
                                        name="series_2"
                                        value={inputValues.series_2}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, series_2: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 3
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 3"
                                        aria-label="Weight 3"
                                        name="weight_3"
                                        value={inputValues.weight_3}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, weight_3: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repes 3"
                                        aria-label="Repetitions 3"
                                        name="repetitions_3"
                                        value={inputValues.repetitions_3}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, repetitions_3: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 3"
                                        aria-label="Series 3"
                                        name="series_3"
                                        value={inputValues.series_3}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, series_3: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 4
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 4"
                                        aria-label="Weight 4"
                                        name="weight_4"
                                        value={inputValues.weight_4}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, weight_4: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repes 4"
                                        aria-label="Repetitions 4"
                                        name="repetitions_4"
                                        value={inputValues.repetitions_4}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, repetitions_4: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Series 4"
                                        aria-label="Series 4"
                                        name="series_4"
                                        value={inputValues.series_4}
                                        onChange={(e) => {
                                            setInputValues({ ...inputValues, series_4: e.target.value });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={handleCreateNewExercise}

                            >
                                Guardar Cambios
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handleCloseModalAddProgram}
                            >
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalAddProgram;