import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
export const NewPassword = (props) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const {token} = useParams();
    const { store, actions } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        let { respuestaJson, response } = await actions.recover(password,token); // call login action
    };
    return (
        <div>
            <h1>Reset Password</h1>
            {message && <div className="alert alert-danger">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Reset Password
                </button>
            </form>
        </div>
    );
};
