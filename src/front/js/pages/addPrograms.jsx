import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Modal from "./modal.jsx";
import EditPrograms from "./editPrograms.jsx";
import ModalAddProgram from "./modalAddProgram.jsx";

export const AddPrograms = () => {
    const { store, actions } = useContext(Context);
    const [allUsers, setAllUsers] = useState([]);
    const [userPrograms, setUserPrograms] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [programName, setProgramName] = useState("");
    const [category, setCategory] = useState("");
    const [selectedProgramName, setSelectedProgramName] = useState();
    const [numPrograms, setNumPrograms] = useState(0);

    let obj = {
        user_id: selectedUser,
        program_name: programName,
        category: category
    };

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const handleCreateNewProgram = async (e) => {
        e.preventDefault(); // prevent form from submitting
        let { response } = await actions.useFetch("/newprogram", obj, "POST"); // call login action
        if (response.ok) {
            alert("Programa agregado exitosamente");
            handleCloseModal();
            setNumPrograms(numPrograms + 1);
        } else {
            alert("Hubo un error, intente nuevamente");
        }
    };

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedUser(value === "" ? null : value);
    };

    const handleSelectAddProgram = (event) => {
        if (event.target.value === "add_new_program") {
            setShowModal(true);
        } else {
            setSelectedProgramName(event.target.value);
        }

    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        setSelectedUser(null);
    };

    const filteredUsers = allUsers.filter((user) =>
        user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleUserPrograms = async () => {
        if (selectedUser) {
            let { respuestaJson, response } = await actions.useFetch(`/getorganizedprograms/${selectedUser}`);
            if (response.ok) {
                if (Object.keys(respuestaJson).length > 0) {
                    setUserPrograms([respuestaJson]);
                } else {
                    setUserPrograms(null);
                }
            } else {
                console.log("Fetch fallido");
            }
        } else {
            setUserPrograms([]);
        }
    };

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/getuser");
            if (response.ok) {
                setAllUsers(respuestaJson);
            } else {
                console.log("Fetch fallido");
            }
        };
        cargaDatos();
    }, []);

    useEffect(() => {

        handleUserPrograms();
    }, [selectedUser, actions, numPrograms]);

    return (
        <><div className="backofficeWelcome1 jumbotron m-3">
            <h1 className="display-4">Agregar Programas</h1>
            <p className="lead">Seleccioná el nombre de usuario al que le quieras crear un programa.</p>
            <hr className="my-4" />
            <div className="mt-5">
                <input className="mb-2" type="text" value={searchText} onChange={handleInputChange} placeholder="Buscar usuario..." />
                <br />
                <select value={selectedUser || ""} onChange={handleSelectChange}>
                    <option value="">Selecccioná un usuario...</option>
                    {filteredUsers.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.first_name} {user.last_name} - {user.email}
                        </option>
                    ))}
                </select>
                {selectedUser ? (
                    userPrograms && userPrograms.length > 0 ? (
                        <div>
                            <h2 className="mt-3 mb-3">Programas del usuario:</h2>
                            <select value={selectedProgramName} onChange={handleSelectAddProgram}>

                                <option className="mt-3 mb-3">Seleccioná un programa...</option>
                                {Object.keys(userPrograms[0]).map((programName, index) => (
                                    <option key={index} value={programName}>
                                        {programName}
                                    </option>

                                ))}
                                <option value="add_new_program">Agregar un programa nuevo...</option>
                            </select>
                            <Modal
                                showModal={showModal}
                                handleCloseModal={handleCloseModal}
                                handleCreateNewProgram={handleCreateNewProgram}
                                setProgramName={setProgramName}
                                setCategory={setCategory}
                            />

                            {selectedProgramName ? (
                                <EditPrograms userPrograms={userPrograms} handleUserPrograms={handleUserPrograms} showModal={showModal} setShowModal={setShowModal} handleCloseModal={handleCloseModal} selectedProgramName={selectedProgramName} />
                            ) : (<><h3 className="mt-3 mb-3">Cargando...</h3></>)}

                        </div>

                    ) : (
                        <div>
                            <p className="mt-3 mb-3">Este usuario no tiene programas cargados.</p>
                            <button className="btn btn-outline-primary" onClick={handleOpenModal}>Crear Programa</button>
                            <Modal
                                showModal={showModal}
                                handleCloseModal={handleCloseModal}
                                handleCreateNewProgram={handleCreateNewProgram}
                                setProgramName={setProgramName}
                                setCategory={setCategory}
                            />
                        </div>
                    )
                ) : null}
            </div >
        </div>
        </>
    );



};

export default AddPrograms;
