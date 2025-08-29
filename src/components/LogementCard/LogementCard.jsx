import { Link } from "react-router-dom";



function LogementCard({ id, imageUrl, title }) {
  return (
    <Link 
      to={`/logement/${id}`}
      className="logementCard"
    >
      <img 
        src={imageUrl} 
        alt={title}
        className="logementCard__image" 
      />
      <h3 className="logementCard__title">
        {title}
      </h3>
    </Link>
  );
}

export default LogementCard;