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
                        <h5 className="modal-title">Agregar Nuevo Ejercicio</h5>
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
                                        value={sessionValues.day}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, day: e.target.value });
                                        }}
                                        required
                                    />
                                </div>

                                <div className="col mt-2 gx-2 mt-2 mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Bloque (A1, B1, C1...)"
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
                                        value={sessionValues.weight_1}
                                        onChange={(e) => {
                                            setSessionValues({ ...sessionValues, weight_1: e.target.value });
                                        }}
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Repeticiones 1"
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
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 2
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 2"
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
                                        placeholder="Repeticiones 2"
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
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 3
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 3"
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
                                        placeholder="Repes 3"
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
                                <div className="col mt-2 gx-2 mb-2">
                                    Semana 4
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Peso 4"
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
                                        placeholder="Repes 4"
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
                                className="btn btn-outline-primary"
                                onClick={handleEditExercise}

                            >
                                Guardar cambios
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handleCloseModalEditProgram}
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

export default ModalEditProgram;