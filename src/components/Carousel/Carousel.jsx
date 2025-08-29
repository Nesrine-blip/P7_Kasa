import PropTypes from "prop-types";
import { useState } from "react";
import arrowLeft from "../../assets/image/arrowleft.svg";
import arrowRight from "../../assets/image/arrowright.svg";

const Carousel = ({ slides }) => {
  // État pour stocker l'index (position) de l'image affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction : aller à l'image précédente
  const goToPreviousSlide = () => {
    // si on est sur la première image (index 0)
    if (currentIndex === 0) {
      // on retourne à la dernière image
      setCurrentIndex(slides.length - 1);
    } else {
      // sinon on recule d'une image
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Fonction : aller à l'image suivante
  const goToNextSlide = () => {
    // si on est sur la dernière image
    if (currentIndex === slides.length - 1) {
      // on retourne à la première image
      setCurrentIndex(0);
    } else {
      // sinon on avance d'une image
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Récupérer l'image affichée en fonction de currentIndex
  const currentSlide = slides[currentIndex];

  // Vérifier s'il y a plusieurs images (sinon pas besoin d'afficher flèches + numéro)
  const hasMultipleSlides = slides.length > 1;

  return (
    <div className="logement__carousel">
      {/* Image affichée */}
      <img
        className="logement__carousel--slider"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      />

      {/* Si plusieurs images, on affiche les flèches et l'indicateur */}
      {hasMultipleSlides && (
        <>
          <img
            className="logement__carousel__arrowleft"
            src={arrowLeft}
            alt="Précédent"
            onClick={goToPreviousSlide} // au clic, on appelle la fonction
          />
          <img
            className="logement__carousel__arrowright"
            src={arrowRight}
            alt="Suivant"
            onClick={goToNextSlide} // au clic, on appelle la fonction
          />
          <div className="logement__carousel__slide-indicator">
            {/* Indiquer le numéro de l'image actuelle + le total */}
            {`${currentIndex + 1} / ${slides.length}`}
          </div>
        </>
      )}
    </div>
  );
};

// On précise que slides doit être un tableau de chaînes de caractères (URLs des images)
Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
