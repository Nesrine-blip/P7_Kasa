import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { logementsGetById } from "../../services/API.js";


const LogementPage = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  // fetch logement data by ID
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

      {/* carousel section */}
      <Carousel slides={logement.pictures} />

      {/* main info and host section */}
      <div className="logement-info">

        {/* left block: title, location, tags */}
        <div className="logement-main-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <Tags key={index} text={tag} />
            ))}
          </div>
        </div>

        {/* right block: host and rating */}
        <div className="logement-host-block">
          {/* host info: name and picture */}
          <div className="logement-host-info">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          {/* rating stars */}
          <div className="logement-rating">
            <Rating rating={Number(logement.rating)} />
          </div>
        </div>

      </div>

      {/* collapsible details section */}
      <div className="logement-details">

        {/* description collapse */}
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        {/* equipments collapse */}
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>

      </div>
    </div>
  );
};

export default LogementPage;
