import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";

// render site header with logo and navigation links
function Header() {
  return (
    <header>
      
      {/* logo link to home */}
      <NavLink to="/">
        <img src={Logo} alt="Logo de Kasa" />
      </NavLink>
      
      {/* navigation links */}
      <nav className="navbar__links">
        <NavLink 
          to="/" 
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Accueil
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
