import "./NavBarWPG.modules.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

// Importaciones de imagenes
import logo from "../../../assets/Images/General/Isologo1.png";

const NavBarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoad = () => {
    window.scrollTo(0.0);
  }

  return (
    <nav className="navbarWPG">
      <div className="left-container">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="right-container">
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={handleLoad}>Home</Link></li>
            <li><Link to="/nosotrxs" onClick={handleLoad}>Nosotrxs</Link></li>
            <li><Link to="/proyectos" onClick={handleLoad}>Proyectos</Link></li>
            <li><Link to="/equipo" onClick={handleLoad}>Equipo</Link></li>
            <li><Link to="/novedades" onClick={handleLoad}>Novedades</Link></li>
            <li><Link to="/FAQS" onClick={handleLoad}>FAQS</Link></li>
            <li><ScrollLink to="webpage-contact-form" smooth={true} duration={500} offset={-100}>Contacto</ScrollLink></li>
          </ul>
        <Link to="/colaborar" onClick={handleLoad}>
          <button className="collaborate-button">Quiero colaborar</button>
        </Link>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default NavBarHome;