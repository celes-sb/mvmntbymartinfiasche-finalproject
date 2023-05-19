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
      <>
        <section className="testimonios border border-warning rounded p-5" style={{ backgroundImage: `url(${grupoTestimoniosColor})`, backgroundSize: "cover" }}>
          <div className="testimonios-content bg-white bg-opacity-75 rounded border border-warning p-5">
            <div className="top text-center pb-3">
              <h2>Lo que dicen mis alumnos</h2>
            </div>
            <div className="bottom d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-center">
              <img className="cursor mb-3" src={previousButton} alt="previousButton" onClick={handlePreviousClick} />
              <div className="middle text-center">
                <img src={currentTestimonial.image} alt="" />
                {currentTestimonial.videoUrl && (
                  <div className="video-container mb-4">
                    <iframe
                      className="embeddedVideo border border-warning"
                      src={currentTestimonial.videoUrl}
                      title="Testimonio Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                )}
                <p className="text-center">{currentTestimonial.text}</p>
                <h5>{currentTestimonial.name}</h5>
                <h6>{currentTestimonial.year}</h6>
              </div>
              <div className="d-flex">
                <img className="cursor mt-3" src={nextButton} alt="next Button" onClick={handleNextClick} />
              </div>
              {currentTestimonial.videoUrl ? (
                <></>
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
      </>

    </>

  );
};

export default Testimonios;
