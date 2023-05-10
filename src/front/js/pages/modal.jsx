import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/home.css";

export const Modal = ({
    showModal,
    handleCloseModal,
    handleCreateNewProgram,
    setProgramName,
    setCategory,
}) => {
    return (
        <div
            className={`modal${showModal ? " show" : ""}`}
            tabIndex="-1"
            style={{ display: showModal ? "block" : "none" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Añadir Nuevo Programa</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleCloseModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="col mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Program Name"
                                aria-label="Program name"
                                onChange={(e) => {
                                    setProgramName(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="col mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Category"
                                aria-label="Category"
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleCreateNewProgram}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;