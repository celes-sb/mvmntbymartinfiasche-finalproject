//CREO QUE X TEMAS DE SEGURIDAD DEL ALUMNX DEBERIAMOS SACAR LA FOTO MEJOR
//A MENOS QUE EL ALUMNO DE EL OK EN EL FUTURO, DEJO EL CODIGO IGUAL X LAS DUDAS
//no hay videos de testimonios x ahora respecto a los servicios que ofrece martin

export const testimonialStore = {

    testimonialData: [
        {
            //image: { anillasTestimoniosMono },
            text: "Trabajar con un seguimiento, con objetivos claros hace que se vean las mejoras. Eso me sucede entrenando con Martín y su método. Totalmente agradecida por la entrega en su trabajo y el compromiso brindando.",
            name: "Sol Pérez Gallardo",
            year: "Alumna desde 2019",
            //videoUrl: "url del video si existe"
        },
        {
            //image: { anillasTestimoniosMono },
            text: "Derriba fronteras, y estimula para un trabajo de fondo y en serio. Siempre buscando nuevas posibilidades y habilitando el crecimiento.",
            name: "Fran Gelman",
            year: "Alumno desde 2020",
            //videoUrl: "url del video si existe"
        },
        {
            //image: { anillasTestimoniosMono },
            text: "Dedicación, compromiso, conocimiento, exigencia, investigación permanente. Sobre nuestro cuerpo y el movimiento. Sin mas que decir ¡Tenés que Vivirlo para Sentir el Cambio!",
            name: "Nicolás Bregante",
            year: "Alumno desde 2020",
            //videoUrl: "url del video si existe"
        },
        {
            //image: { anillasTestimoniosMono },
            text: "Llegué a Tincho con el fin de mejorar mi entrenamiento. Siempre me aburrió mucho lo que es el entrenamiento de un gimnasio solamente con máquinas. Tincho me brindó un entrenamiento más abarcativo (...) y me ayudó a mantener un plan de entrenamiento, ir progresando de a poco y mantener esa constancia que solo me costaba bastante.",
            name: "Patricio Lespada",
            year: "Alumno desde 2020",
            videoUrl: "https://www.youtube.com/embed/soKNONNTwvE"
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
