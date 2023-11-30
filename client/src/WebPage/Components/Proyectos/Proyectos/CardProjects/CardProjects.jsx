import React from "react";
import "./CardProjects.modules.css"

const CardProjects = ({ image, title, description, location, projectCategoryId, projectCategory }) => {
  return (
    <div className="card-projects-container">
      <div className="card-projects-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-projects-content">
        <h2 className="card-projects-title">{title}</h2>
        <p className="card-projects-description">{description}</p>
      </div>

      <div className="card-projects-details">
        <h3 className="card-projects-category">{projectCategory.name}</h3>
        <h3 className="card-projects-location">{location}</h3>
      </div>
      
    </div>
  );
};

export default CardProjects;