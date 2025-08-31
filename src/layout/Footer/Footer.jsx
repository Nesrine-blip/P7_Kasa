import { NavLink } from "react-router-dom";
import LogoFooter from "../../assets/image/logo_footer.svg";

// render footer with logo and copyright
function Footer() {
  return (
    <footer className="footer">
      
      {/* logo link to home */}
      <NavLink to="/">
        <img 
          src={LogoFooter} 
          alt="Logo de Kasa" 
          className="footer__img" 
        />
      </NavLink>
      
      {/* copyright text */}
      <p className="footer__text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
