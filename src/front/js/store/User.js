export function contactActions(getStore, getActions, setStore) {
    return {
      getContact: (obj)=>{
        let store = getStore();
        store.listaContactos=obj
  
      },
  
      addContact: async (obj) => {
        let store = getStore();
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        })
          .then((response) => response.json())
          .then((obj) => console.log(obj))
          .catch((error) => console.error(error));
        return store.listaContactos;
      },
  
      deleteContact: (indice) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${indice}`, {
        method: "DELETE",
      })
      },
  
      editContact: (indice, obj) => {
        let store = getStore();
        fetch(`https://assets.breatheco.de/apis/fake/contact/${store.listaContactos[indice].id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        })
          .then((response) => response.json())
          .then((obj) => console.log(obj))
          .catch((error) => console.error(error));
  
        return store.listaContactos;
      },
    };
  }