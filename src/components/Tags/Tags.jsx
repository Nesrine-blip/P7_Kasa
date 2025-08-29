import PropTypes from "prop-types";

const Tags = ({ text }) => (
    <span className="tags">{text}</span>
);

Tags.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tags;