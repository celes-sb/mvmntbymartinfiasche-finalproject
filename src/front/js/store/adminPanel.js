import jwt_decode from "jwt-decode";

export const adminPanelStore = {
    adminLogin: false
}

export function adminPanelActions(getStore, getActions, setStore) {
    return {

        adminLogin: async (emailOrUsername, password) => {
            const store = getStore();
            let actions = getActions();
            let obj = {
                email_or_username: emailOrUsername,
                password: password
            };

            let { respuestaJson, response } = await actions.useFetch(
                "/admin-login",
                obj,
                "POST"
            );
            if (response.ok) {
                localStorage.setItem("token", respuestaJson.token);
                sessionStorage.setItem("token", respuestaJson.token);
                let token = localStorage.getItem("token");
                setStore({ ...store, adminLogin: true });
                actions.getUserData();
                actions.getUserPrograms();
            } else {
                console.log("login fallido");
                localStorage.setItem("token", "");
                sessionStorage.setItem("token", "");
                setStore({ ...store, adminLogin: false });
            }

            return { respuestaJson, response };
        },

        adminLogout: async () => {
            const store = getStore();
            const actions = getActions();
            let body = "";
            let { respuestaJson, response } = await actions.useFetch(
                "/admin-logout",
                body,
                "POST"
            );
            if (response.ok) {
                localStorage.setItem("token", "");
                sessionStorage.setItem("token", "");
                setStore({ ...store, adminLogin: false });
                setStore({ ...store, userData: {} })

            }
            return { respuestaJson, response };
        },
    };
}
