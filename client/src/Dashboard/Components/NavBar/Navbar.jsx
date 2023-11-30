import React from "react";
import "./Navbar.modules.css";
import { Link } from "react-router-dom";
// Importaciones de imagenes
import logo from "../../../assets/Images/General/Isologo1.png";
// import homeimg from "../../../assets/Images/Icons/home.png";
import teamimg from "../../../assets/Images/Icons/stars.png";
import projectsimg from "../../../assets/Images/Icons/manos.png";
import donationsimg from "../../../assets/Images/Icons/handshake.png";
import newsimg from "../../../assets/Images/Icons/entrepreneur.png";
import aboutimg from "../../../assets/Images/Icons/diversidad.png";

const NavBarDashboard = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li>
          {/* <img src={homeimg} alt="Team" className="navbar-icon" /> */}
          <Link to="/admin">HOME</Link>
        </li>
        <li>
          <img src={teamimg} alt="Team" className="navbar-icon" />
          <a href="/admin/equipo">EQUIPO</a>
        </li>
        <li>
          <img src={projectsimg} alt="Projects" className="navbar-icon" />
          <Link to="/admin/proyectos">PROYECTOS</Link>
        </li>
        <li>
          <img src={newsimg} alt="News" className="navbar-icon" />
          <Link to="/admin/novedades">NOVEDADES</Link>
        </li>
        <li>
          <img src={aboutimg} alt="Faqs" className="navbar-icon" />
          <Link to="/admin/faqs">FAQS</Link>
        </li>
        <li>
          <img src={donationsimg} alt="About" className="navbar-icon" />
          <Link to="/admin/nosotros">NOSOTROS</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarDashboard;
