import React from "react";
import "./CardAchievements.modules.css";

const CardAchievements = ({ image, title, description, location, date }) => {
  return (
    <div className="card-achievements-container">

        <div className="card-achievements-content">
        <h2 className="card-achievements-title">{title}</h2>
        <p className="card-achievements-description">{description}</p>
      </div>
      
      <div className="card-achievements-details">
        <h3 className="card-achievements-location">{location}</h3>
        <p className="card-achievements-date">{date}</p>
      </div>
      
      <div className="card-achievements-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default CardAchievements;
