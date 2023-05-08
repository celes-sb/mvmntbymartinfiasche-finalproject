import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const AddPrograms = () => {
    const { store, actions } = useContext(Context);
    const [allUsers, setAllUsers] = useState([]);
    const [userPrograms, setUserPrograms] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchText, setSearchText] = useState("");

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
        const handleUserPrograms = async () => {
            if (selectedUser) {
                let { respuestaJson, response } = await actions.useFetch(`/getorganizedprograms/${selectedUser}`);
                console.log(respuestaJson);
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
        handleUserPrograms();
    }, [selectedUser, actions]);

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedUser(value === "" ? null : value);
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
                            <select>
                                <option value="">Select a program...</option>
                                {Object.keys(userPrograms[0]).map((programName, index) => (
                                    <option key={index} value={programName}>
                                        {programName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div>
                            <p>No programs available for this user.</p>
                            <button>Create Program</button>
                        </div>
                    )
                ) : null}
            </div>
        </>
    );



};

export default AddPrograms;
