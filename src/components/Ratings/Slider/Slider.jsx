import React, { useState, useEffect } from 'react';
import '../Ratings.css'

const Slider = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevSlideIndex) => prevSlideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) { 
      setSlideIndex(slides.length);
    }

  }

  return (
    <div>
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mySlides fade"
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
          >
            <div className="duRating">
              {slide}
            </div>
          </div>
        ))}
        <button className='prev fa-solid fa-angle-left' onClick={() => plusSlides(-1)}></button>
        <button className='next fa-solid fa-angle-right' onClick={() => plusSlides(1)}></button>


        <div className="dot-navigation">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot${slideIndex === index + 1 ? ' active' : ''}`}
              onClick={() => currentSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Slider;