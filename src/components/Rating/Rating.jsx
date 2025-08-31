import PropTypes from "prop-types"; 
import starActiveSvg from "../../assets/image/starActive.svg"; 
import starInactiveSvg from "../../assets/image/starInactive.svg";

function Rating({ rating }) {
  // maximum number of stars
  const maxStars = 5; 

  // render stars
  return (
    <>
      {Array.from({ length: maxStars }, (_, i) => (
        <img
          key={i} 
          className={i < rating ? "starActive" : "starInactive"} 
          src={i < rating ? starActiveSvg : starInactiveSvg} 
          alt={i < rating ? "active star" : "inactive star"} 
        />
      ))}
    </>
  );
}

// prop validation
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
