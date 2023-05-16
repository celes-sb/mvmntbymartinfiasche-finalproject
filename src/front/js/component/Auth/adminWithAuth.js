import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Navigate } from "react-router-dom"; //v.6.3.0, para versiones viejas sería <Redirect/>

const AdminWithAuth = (Component) => {
    //HOC
    const AuthRoute = () => {
        const { store, actions } = useContext(Context);

        const isAuth = store.adminLogin;
        if (isAuth) {
            return <Component />;
        } else {
            return <Navigate to="/admin/login" />;
        }
    };

    return AuthRoute;
};
export default AdminWithAuth;
