import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  // --- Function to toggle open/close ---
  const toggleCollapse = () => {
    setIsOpen(!isOpen); 
  };

  // --- Render ---
  return (
    <div className="collapseContainer" onClick={toggleCollapse}>
      
      {/* --- Header : title + arrow --- */}
      <div className={"collapseHeader " + (isOpen ? "collapseHeaderOpened" : "collapseHeaderClosed")}>
        <div>{props.title}</div>
        <div>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </div>
      </div>

      {/* --- Content : shown only if open --- */}
      {isOpen && (
        <div className="collapseContent-parent">
          <div className="collapseContent">{props.children}</div>
        </div>
      )}

    </div>
  );
}

export default Collapse;
