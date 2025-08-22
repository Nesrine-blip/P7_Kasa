// Import React hooks and components
import { useEffect, useState } from "react"
import LogementCard from "../LogementCard/LogementCard.jsx"
import { logementsGetAll } from "../../services/API.js"


function LogementGallery() {
  // State: store all logements
  const [logements, setLogements] = useState([])

  // Effect: load logements when component mounts
  useEffect(() => {
    logementsGetAll()
      .then(setLogements) // save data in state
      .catch((error) => console.error(error)) 
  }, [])

  // Render: list of LogementCard components
  return (
    <div className="logement-gallery">
      {logements.map((logement) => (
        <LogementCard
          key={logement.id}       
          id={logement.id}
          title={logement.title}
          imageUrl={logement.cover}
        />
      ))}
    </div>
  )
}


export default LogementGallery
