import { useState } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../../assets/image/arrowleft.svg";
import arrowRight from "../../assets/image/arrowright.svg";

const Carousel = ({ slides }) => {
  // state to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // go to previous slide
  const goToPreviousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  // go to next slide
  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  // check if there is more than one slide
  const hasMultipleSlides = slides.length > 1;

  return (
    <div className="logement__carousel">
      {/* current slide image */}
      <img
        className="logement__carousel--slider"
        src={slides[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {/* show arrows + indicator only if multiple slides */}
      {hasMultipleSlides && (
        <>
          {/* left arrow */}
          <img
            className="logement__carousel__arrowleft"
            src={arrowLeft}
            alt="Previous"
            onClick={goToPreviousSlide}
          />
          {/* right arrow */}
          <img
            className="logement__carousel__arrowright"
            src={arrowRight}
            alt="Next"
            onClick={goToNextSlide}
          />
          {/* slide indicator */}
          <div className="logement__carousel__slide-indicator">
            {`${currentIndex + 1} / ${slides.length}`}
          </div>
        </>
      )}
    </div>
  );
};

// prop validation
Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
