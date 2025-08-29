import PropTypes from "prop-types"; 
import starActiveSvg from "../../assets/image/starActive.svg"; 
import starInactiveSvg from "../../assets/image/starInactive.svg";



function Rating({ rating }) {
    const maxStars = 5; 

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

// ------ Prop validation ------
Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
