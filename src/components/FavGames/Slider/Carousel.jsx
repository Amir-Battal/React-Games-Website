import React, { useEffect, useRef, useState } from 'react';


let timeoutId;
const Carousel = ({ children }) => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector('.card').offsetWidth;
    setCardWidth(firstCardWidth);

    const autoPlay = () => {
      if (window.innerWidth < 600 || window.innerWidth < 414) return;
      // Autoplay the carousel after every 5000 ms
      timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1000);
    };
    autoPlay();

    const autoPlayInterval = setInterval(autoPlay, 1000);

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if(carousel.scrollLeft === 0) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
          carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.offsetWidth;
          carousel.classList.remove("no-transition");
      }
  
      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if(!wrapper.matches(":hover")) autoPlay();
  }

  carousel.addEventListener("scroll", infiniteScroll);


    return () => {
      clearInterval(autoPlayInterval);
    };
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;