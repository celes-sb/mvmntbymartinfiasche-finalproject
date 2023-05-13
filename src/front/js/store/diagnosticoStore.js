export const diagnosticoStore = {

    diagnosticoData: [
        {
            name: "Test de Movilidad General",
            text: "Realizá una repetición de cada ejercicio y sostené la amplitud lograda por 3-5 segundos. En caso de que sea unilateral, realizá el ejercicio en cada pierna en el mismo plano que se muestra en el video. Grabá los 3 ejercicios del video.",
            videoUrl: "https://www.youtube.com/embed/AqP5vKBnjBw"
        },
        {
            name: "Test de Dorsiflexión",
            text: "Realizá una repetición de cada pie y sostené la posición final durante 3-5 segundos.",
            videoUrl: "https://www.youtube.com/embed/lebDX66HF94"
        },
        {
            name: "Test de Hombros",
            text: "Seguir las instrucciones del video.",
            videoUrl: "https://www.youtube.com/embed/BQU2irfBR5I"
        },
        {
            name: "Test de Postura y Resistencia",
            text: "Seguir las instrucciones del video.",
            videoUrl: "https://www.youtube.com/embed/NUEhgmj-pOY"
        },
        {
            name: "Test de Equilibrio en Vertical",
            text: "Seguir las instrucciones del video.",
            videoUrl: "https://www.youtube.com/embed/WiFQfafGtEo"
        },
        {
            name: "Test de Fuerza",
            text: "Vas a realizar todas las repeticiones posibles que te salgan prolijas técnicamente.",
            videoUrl: "https://www.youtube.com/embed/wkqA-V0O2nA"
        },
        {
            name: "Test de Fuerza 1: Push Up",
            text: "Vas a realizar todas las repeticiones posibles que te salgan prolijas técnicamente. La última repetición es la que no podés mantener la espalda neutra.",
            videoUrl: "https://www.youtube.com/embed/wkqA-V0O2nA"
        },
        {
            name: "Test de Fuerza 2: Remo/Dominadas",
            text: "Vas a realizar todas las repeticiones posibles que te salgan prolijas técnicamente. La última repetición es la que no podés tocar la barra/bastón/anillas con el pecho.",
            videoUrl: "https://www.youtube.com/embed/pXO8LYpH308"
        },
        {
            name: "Test de Fuerza 3: Pistolas",
            text: "Vas a realizar todas las repeticiones posibles que te salgan prolijas técnicamente. La última repetición es la que no podés mantener el rango de movimiento que elegiste.",
            videoUrl: "https://www.youtube.com/embed/-uptX7NE6A4"
        },
    ],

};

//aca es testimonial actions? o lo cambio a diagnosticoActions.. quiero la mimsma funcionalidad
export function diagnosticoActions(getStore, getActions, setStore) {
    return {
        exampleFunction: async () => {
            //console.log("Soy una función del archivo ejemploStore que se ejecuta desde el flux.js")
            return true;
        },
    };
}
