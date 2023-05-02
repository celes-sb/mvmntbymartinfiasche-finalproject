//CREO QUE X TEMAS DE SEGURIDAD DEL ALUMNX DEBERIAMOS SACAR LA FOTO MEJOR
//A MENOS QUE EL ALUMNO DE EL OK EN EL FUTURO, DEJO EL CODIGO IGUAL X LAS DUDAS

export const testimonialStore = {

    testimonialData: [
        {
            //image: { anillasTestimoniosMono },
            text: "Trabajar con un seguimiento, con objetivos claros hace que se vean las mejoras. Eso me sucede entrenando con Martín y su método. Totalmente agradecida por la entrega en su trabajo y el compromiso brindando.",
            name: "Sol Pérez Gallardo",
            year: "Alumna desde 2019",
            videoUrl: "url del video si existe"
        },
        {
            //image: { anillasTestimoniosMono },
            text: "Derriba fronteras, y estimula para un trabajo de fondo y en serio. Siempre buscando nuevas posibilidades y habilitando el crecimiento.",
            name: "Fran Gelman",
            year: "Alumno desde 2020",
            videoUrl: "url del video si existe"
        },
        {
            //image: { anillasTestimoniosMono },
            text: "Dedicación, compromiso, conocimiento, exigencia, investigación permanente. Sobre nuestro cuerpo y el movimiento. Sin mas que decir ¡Tenés que Vivirlo para Sentir el Cambio!",
            name: "Nicolás Bregante",
            year: "Alumno desde 2020",
            videoUrl: "url del video si existe"
        },
        // Add more testimonials 
    ],

};

export function testimonialActions(getStore, getActions, setStore) {
    return {
        exampleFunction: async () => {
            //console.log("Soy una función del archivo ejemploStore que se ejecuta desde el flux.js")
            return true;
        },
    };
}
