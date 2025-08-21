import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";

function Header() {
    return (
        <header>
            <NavLink to="/">
                <img src={Logo} alt="Logo de Kasa" />
            </NavLink>

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
    )
}

export default Header;
