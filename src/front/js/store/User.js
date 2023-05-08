export const userStore = {
  userLogin: false

}

export function userActions(getStore, getActions, setStore) {
  return {
    signup: async (name, lastname, username, email, password, phone, country, gender) => {
      let store = getStore();
      let actions = getActions();
      let obj = {
        name: name,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        phone: phone,
        country: country,
        gender: gender
      };

      let { respuestaJson, response } = await actions.useFetch(
        "/signup",
        obj,
        "POST"
      );
      if (response.ok) {
        alert("Usuario Registrado");
      } else {
        alert("Registro fallido");
      }

      return response;
    },

    login: async (emailOrUsername, password) => {
      const store = getStore();
      let actions = getActions();
      let obj = {
        email_or_username: emailOrUsername,
        password: password
      };

      let { respuestaJson, response } = await actions.useFetch(
        "/login",
        obj,
        "POST"
      );
      if (response.ok) {
        localStorage.setItem("token", respuestaJson.token);
        sessionStorage.setItem("token", respuestaJson.token);
        let token = localStorage.getItem("token");
        setStore({ ...store, userLogin: true });
      } else {
        console.log("login fallido");
        localStorage.setItem("token", "");
        sessionStorage.setItem("token", "");
        setStore({ ...store, userLogin: false });
      }

      return { respuestaJson, response };
    },

    logout: async () => {
      const store = getStore();
      const actions = getActions();
      let body = "";
      let { respuestaJson, response } = await actions.useFetch(
        "/logout",
        body,
        "POST"
      );
      if (response.ok) {
        localStorage.setItem("token", "");
        sessionStorage.setItem("token", "");
        setStore({ ...store, userLogin: false });
      }
      return { respuestaJson, response };
    },
    recover: async (email) => {
      const store = getStore();
      const actions = getActions();
      let body = {
        message: `Has click en el siguiente enlace:
        http://192.168.1.58:3000/`,
        to: email,
        subject: "Recuperar contraseña"
      };
      let { respuestaJson, response } = await actions.useFetch(
        "/correo",
        body,
        "POST"
      );
      return { respuestaJson, response };
    }
  };
}