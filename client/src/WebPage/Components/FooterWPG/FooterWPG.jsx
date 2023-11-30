import "./FooterWPG.modules.css";
import logofb from "../../../assets/Images/Icons/facebook.png";
import logomail from "../../../assets/Images/Icons/gmail.png";
import logoig from "../../../assets/Images/Icons/instagram.png";
import logolkd from "../../../assets/Images/Icons/linkedin.png";
import GSCLogo from '../../../assets/Images/General/Isologo.png'
import { Link } from "react-router-dom";
import React from 'react';
import ContactInfoContainer from "./ContactInfoComponent/ContactInfoContainer";



const año = new Date().getFullYear();

const handleLoad = () => {
  window.scrollTo(0.0);
}

const Footer = () => {


  return (

  <footer>
    <div className='footer-left-column'>
      <img className='gsc-footer-logo' src={GSCLogo} alt='gsclogo' />

      <div className='social-icons-container'>
        <a
          href="https://www.linkedin.com/company/global-shapers-cordoba/"
          target="_blank"
          rel="noopener noreferrer" >
          <img id='footer-social-icons' src={logolkd} alt="LinkedIn" />
        </a>            
        <a
          href="https://www.instagram.com/shaperscordoba/"
          target="_blank"
          rel="noopener noreferrer" >
          <img id='footer-social-icons' src={logoig} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/shaperscordoba/"
          target="_blank"
          rel="noopener noreferrer">
          <img id='footer-social-icons' src={logofb} alt="Facebook" />
        </a>
        <a 
          href="mailto:shaperscordoba@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" >
          <img id='footer-social-icons' src={logomail} alt="Facebook" />
        </a>

      </div>
      <p>{año} © Global Shapers Córdoba </p>
    </div>

    <div className='footer-center-column'>
      <ul className='footer-links-list'>
        <li><Link to="/" onClick={handleLoad}>Home</Link></li>
        <li><Link to="/nosotrxs" onClick={handleLoad}>Nosotrxs</Link></li>
        <li><Link to="/proyectos" onClick={handleLoad}>Proyectos</Link></li>
        <li><Link to="/equipo" onClick={handleLoad}>Equipo</Link></li>
        <li><Link to="/novedades" onClick={handleLoad}>Novedades</Link></li>
        <li><Link to="/FAQS" onClick={handleLoad}>FAQS</Link></li>
        <li><Link to="/login" onClick={handleLoad}>Admin Area</Link></li>
      </ul>
    </div>

    <div className='footer-right-column'>
    
        <ContactInfoContainer/>

    </div>
  </footer>
  );
};

export default Footer;
