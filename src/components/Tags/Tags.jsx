import PropTypes from "prop-types";

// render single tag
const Tags = ({ text }) => (
  <span className="tags">{text}</span>
);

// prop validation
Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
