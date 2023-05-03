import React from "react";
import { Sidebar } from "../component/sidebar";
import "../../styles/index.css";

export const UserLayout = ({ children }) => {
    return (
        <>
            <div className="user-layout d-flex">
                <Sidebar />
                <div className="main-content" style={{ marginTop: "80px" }}>{children}</div>
            </div>
        </>
    );
};

export default UserLayout;
