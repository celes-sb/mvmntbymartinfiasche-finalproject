import jwt_decode from "jwt-decode";

export const userStore = {
  userLogin: false,
  userData: {
    first_name: "",
    last_name: ""
  },
  userPrograms: [],
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
        actions.getUserData();
        actions.getUserPrograms();
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
        setStore({ ...store, userData: {} })

      }
      return { respuestaJson, response };
    },

    getUserData: async () => {
      let store = getStore();
      let actions = getActions();
      let body = ""

      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;

      let { respuestaJson, response } = await actions.useFetch(
        `/user/${userId}`,
        body,
        "GET"
      );

      if (response.ok) {
        setStore({ ...store, userData: respuestaJson });
      } else {
        console.log("fetch fallido");
      }

      return { respuestaJson, response };
    },

    editUser: async (obj) => {
      let store = getStore();
      let actions = getActions();

      const token = localStorage.getItem("token");
      if (!token) return;

      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;

      let { respuestaJson, response } = await actions.useFetch(
        `/edituser/${userId}`,
        obj,
        "PUT"
      );
      if (response.ok) {
        actions.getUserData()
      }

      return { respuestaJson, response };
    },

    getUserPrograms: async () => {
      let store = getStore();
      let actions = getActions();
      let body = ""

      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;

      let { respuestaJson, response } = await actions.useFetch(
        `/getorganizedprograms/${userId}`,
        body,
        "GET"
      );

      if (response.ok) {
        setStore({ ...store, userPrograms: respuestaJson });
      } else {
        console.log("fetch fallido");
      }

      return { respuestaJson, response };
    },

    addUserProgram: async (programId, exerciseId, day, session, weight, repetitions, series, type) => {
      let store = getStore();
      let actions = getActions();
      let obj = {
        program_id: programId,
        exercise_id: exerciseId,
        day: day,
        session: session,
        weight: weight,
        repetitions: repetitions,
        series: series,
        type: type
      };

      let { respuestaJson, response } = await actions.useFetch(
        "/programorganizer",
        obj,
        "POST"
      );
      if (response.ok) {
        alert("Programa Añadido exitosamente");
      } else {
        alert("No se pudo agregar el programa");
      }

      return response;
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