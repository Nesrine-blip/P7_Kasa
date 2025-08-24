import { NavLink } from "react-router-dom"
import LogoFooter from "../../assets/image/logo_footer.svg"

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img 
          src={LogoFooter} 
          alt="Logo de Kasa" 
          className="footer__img" 
        />
      </NavLink>

      <p className="footer__text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer
