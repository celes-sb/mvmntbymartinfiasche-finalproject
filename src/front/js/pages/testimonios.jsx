import React, { useState, useContext, Component } from "react";
import { Context } from "../store/appContext";

export const Testimonios = () => {
  const grupoTestimoniosColor = "http://drive.google.com/uc?export=view&id=1a3j2GRq-UUxbwPzwryf_P2_dWZIPdUq5";
  const previousButton = "http://drive.google.com/uc?export=view&id=1BOY8MUYO5QEMBGu6c2BB3WH-eiNcutSL";
  const nextButton = "http://drive.google.com/uc?export=view&id=1ZX6WMe85ASLT8QWZ2Z5U8V-ov2cSckwK";

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
        className="customer-says border border-warning rounded mt-5 p-5 mb-0"
        style={{
          backgroundImage: `url(${grupoTestimoniosColor})`,
          backgroundSize: "cover",
        }}
      >
        <div className="customer-says-content bg-white bg-opacity-75 rounded border border-warning p-5 m-3">
          <div className="top">
            <h2>Lo que dicen mis alumnos</h2>
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
              {currentTestimonial.videoUrl ? (
                <>
                  <iframe
                    className="embeddedVideo border border-warning"
                    width="518"
                    height="292"
                    src={currentTestimonial.videoUrl}
                    title="Testimonio Patricio"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </>
              ) : (
                <></>
              )}
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
