import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import "./StorageCard.modules.css";

const StorageCard = ({ id, image, title, categories, projectcategory }) => {
  const isDonationCategory = categories === 'Proyectos';
  const handleLoad = () => {
    window.scrollTo(0.0);
  }
  return (
    <div className="storageCard">
      <Link to="/proyectos" onClick={handleLoad}>
      <div className="storageCard-imageContainer">
            <img src={image} alt={title} className="storageCard-image" />
      </div>
      </Link>

      <div className="storageCard-content">
        <Link to="/proyectos" onClick={handleLoad}>
        <h3 className="category-storageCard-content">{categories} en {projectcategory}</h3>
        </Link>
        <h3 className='storageCard-title'>{title}</h3>
        
        {isDonationCategory ? (
          <Link to="/colaborar" onClick={handleLoad}>
            <button className="donation-storageCard-button">¡Quiero Donar!</button>
          </Link>
        ) : (
          <ScrollLink
            to="webpage-contact-form"
            smooth={true}
            duration={500}
            offset={-100}
            className="storageCard-button"
          >
            ¡Quiero Participar!
          </ScrollLink>
        )}
      </div>
    </div>
  );
}

export default StorageCard;
