import { userActions, userStore } from "./User.js";
import { diagnosticoActions, diagnosticoStore } from "./diagnosticoStore.js";
import { testimonialStore, testimonialActions } from "./testimonialStore.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			...testimonialStore,
			...userStore,
			...diagnosticoStore,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const store = getStore()
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ ...store, message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			...testimonialActions(getStore, getActions, setStore),
			...diagnosticoActions(getStore, getActions, setStore),
			...userActions(getStore, getActions, setStore),
			useFetch: async (endpoint, body = "", method = "PUT") => {
				let url = "http://127.0.0.1:3001/api" + endpoint;
				let response = await fetch(url, {
					method: method,
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
					body: body ? JSON.stringify(body) : null,
				});

				let respuestaJson = await response.json();

				return { respuestaJson, response };
			},
		}
	};
};

export default getState;
