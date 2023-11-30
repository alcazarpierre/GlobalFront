import React from "react";
import "./CardStories.modules.css";

const CardStories = ({ image, title, description, location, date }) => {
  return (
    <div className="card-stories-container">
      <div className="card-stories-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-stories-content">
        <h2 className="card-stories-title">{title}</h2>
        <p className="card-stories-description">{description}</p>
        <div className="card-stories-details">
        <h3 className="card-stories-location">{location}</h3>
        <p className="card-stories-date">{date}</p>
      </div>
      </div>    
    </div>
  );
};

export default CardStories;
