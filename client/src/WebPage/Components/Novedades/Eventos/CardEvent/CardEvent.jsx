import React from "react";
import "./CardEvent.modules.css";

const CardEvent = ({
  title,
  image,
  description,
  location,
  date,
  projectCategoryId,
}) => {
  return (
    <div className="cards-events-containers">
      <div className="card-event-container">
        <div className="card-event-image">
          <img src={image} alt={title} />
        </div>

        <div className="card-event-content">
          <h2 className="card-event-title">{title}</h2>
          <p className="card-event-description">{description}</p>
          <div className="card-event-details">
            <h3 className="card-event-location">{location}</h3>
            <p className="card-event-date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
