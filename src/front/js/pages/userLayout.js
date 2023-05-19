import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Sidebar } from "../component/sidebar";
import { AdminSidebar } from "../component/adminSidebar";
import "../../styles/index.css";

export const UserLayout = ({ children }) => {
    const { store, actions } = useContext(Context);
    const [userData, setUserData] = useState(store.userData)

    useEffect(() => {
        setUserData(store.userData);
    }, [store.userData]);

    return (
        <>
            <div className="user-layout d-flex">
                {userData.role == "admin" ? <AdminSidebar /> : <Sidebar />}

                <div className="main-content" style={{ marginTop: "80px" }}>{children}</div>
            </div>
        </>
    );
};

export default UserLayout;
