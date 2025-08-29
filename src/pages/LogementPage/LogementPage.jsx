import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Rating from "../../components/Rating/Rating.jsx"; 
import { logementsGetById } from "../../services/API.js";

const LogementPage = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const data = await logementsGetById(id);
        setLogement(data);
      } catch (error) {
        console.error("Erreur lors du chargement du logement:", error);
      }
    };
    
    fetchLogement();
  }, [id]);

  if (!logement) return <div>Chargement...</div>;

  return (
    <div className="logement-page">
      <Carousel slides={logement.pictures} />
      
      <div className="logement-info">
        <h1 className="logement-title">{logement.title}</h1>
        <p className="logement-location">{logement.location}</p>
        
        <div className="logement-tags">
          {logement.tags.map((tag, index) => (
            <Tags key={index} text={tag} />
          ))}
        </div>
        
        <div className="logement-host-rating-block">
          <div className="logement-host-info">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">
            <Rating rating={Number(logement.rating)} />
          </div>
        </div>
      </div>

      <div className="logement-details">
        <div className="logement-description">
          <h2>Description</h2>
          <p>{logement.description}</p>
        </div>

        <div className="logement-equipments">
          <h2>Équipements</h2>
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogementPage;