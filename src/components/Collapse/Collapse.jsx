import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  // --- Function to toggle open/close ---
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // --- Render ---
  return (
    <div className="collapseContainer">
      
      {/* --- Header : title + arrow --- */}
      <div 
        className={"collapseHeader " + (isOpen ? "collapseHeaderOpened" : "collapseHeaderClosed")}
        onClick={toggleCollapse}
      >
        <div>{props.title}</div>
        <div>
          
          <FontAwesomeIcon icon={faChevronUp} className="chevron" />
        </div>
      </div>

      
      {isOpen && (
        <div className="collapseContent-parent">
          <div className="collapseContent">{props.children}</div>
        </div>
      )}
    </div>
  );
}

export default Collapse;
