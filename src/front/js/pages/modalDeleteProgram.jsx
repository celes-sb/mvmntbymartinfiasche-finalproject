import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/home.css";

export const ModalDeleteProgram = ({
    showModalDeleteProgram,
    handleUserPrograms,
    handleCloseModalDeleteProgram,
    selectedPoId,
}) => {
    const { store, actions } = useContext(Context);

    let obj = {
        id: selectedPoId
    }

    const handleDeleteProgram = async (e) => {
        let { response } = await actions.useFetch("/programorganizer", obj, "DELETE");
        if (response.ok) {
            alert("Eliminado exitosamente");
            handleCloseModalDeleteProgram();
            handleUserPrograms();
        } else {
            alert("Hubo un error, intente nuevamente");
        }
    };

    return (
        <div
            className={`modal${showModalDeleteProgram ? " show" : ""}`}
            tabIndex="-1"
            style={{ display: showModalDeleteProgram ? "block" : "none" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Eliminar Ejercicio</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleCloseModalDeleteProgram}
                        ></button>
                    </div>
                    <div className="modal-body mt-3 mb-3">
                        ¿Estás seguro que querés eliminar este ejercicio?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleDeleteProgram}
                        >
                            Eliminar
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={handleCloseModalDeleteProgram}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModalDeleteProgram;