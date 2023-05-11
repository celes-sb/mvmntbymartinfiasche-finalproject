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
        <>
            <div className="mt-3">
                <input className="mb-2" type="text" value={searchText} onChange={handleInputChange} placeholder="Search users..." />
                <br />
                <select value={selectedUser || ""} onChange={handleSelectChange}>
                    <option value="">Select a user...</option>
                    {filteredUsers.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.first_name} {user.last_name} - {user.email}
                        </option>
                    ))}
                </select>
                {selectedUser ? (
                    userPrograms && userPrograms.length > 0 ? (
                        <div>
                            <h2>User Programs:</h2>
                            <select value={selectedProgramName} onChange={handleSelectAddProgram}>

                                <option>Select a program...</option>
                                {Object.keys(userPrograms[0]).map((programName, index) => (
                                    <option key={index} value={programName}>
                                        {programName}
                                    </option>

                                ))}
                                <option value="add_new_program">Add new program...</option>
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
                            ) : (<><h1>Loading</h1></>)}

                        </div>

                    ) : (
                        <div>
                            <p>No programs available for this user.</p>
                            <button onClick={handleOpenModal}>Create Program</button>
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
        </>
    );



};

export default AddPrograms;
