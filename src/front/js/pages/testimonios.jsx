import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext";
import previousButton from "../../images/Previous-Button.png";
import nextButton from "../../images/Next-Button.png";

/*
Martin dice que tiene unos videos de gente dando testimonios
podemos no solo hacer un carousel de testimonios como el del template que ya tenemos sino que tmb
podemos agregar los videos =) yo creo que puede quedar bien. PARA SEGUIR PENSANDO
*/

export const Testimonios = () => {
  const grupoTestimoniosColor =
      "http://drive.google.com/uc?export=view&id=1a3j2GRq-UUxbwPzwryf_P2_dWZIPdUq5";

  const { store, actions } = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + store.testimonialData.length) %
        store.testimonialData.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % store.testimonialData.length
    );
  };

  const currentTestimonial = store.testimonialData[currentIndex];

  return (
    <>
      <section
        className="customer-says mt-5 pt-5 mb-0 pb-0 border border-warning rounded"
        style={{
          backgroundImage: `url(${grupoTestimoniosColor})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container customer-says-content bg-white bg-opacity-75 rounded p-5">
          <div className="top">
            <h2>Lo que dicen mis alumnos:</h2>
          </div>
          <div className="bottom">
            <img
              className="cursor"
              src={previousButton}
              alt=""
              onClick={handlePreviousClick}
            />
            <div className="middle">
              <img src={currentTestimonial.image} alt="" />
              <p>{currentTestimonial.text}</p>
              <h5>{currentTestimonial.name}</h5>
              <h6>{currentTestimonial.year}</h6>
            </div>
            <img
              className="cursor"
              src={nextButton}
              alt=""
              onClick={handleNextClick}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonios;
