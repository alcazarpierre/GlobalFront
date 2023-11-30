import React from "react";
import "./CardNews.modules.css";

const CardNews = ({ image, title, description, location, date }) => {
  return (
    <div className="cards-news-container">
      <div className="card-news-container">
        <div className="card-news-image">
          <img src={image} alt={title} />
        </div>

        <div className="card-news-content">
          <h2 className="card-news-title">{title}</h2>
          <p className="card-news-description">{description}</p>
          <div className="card-news-details">
            <h3 className="card-news-location">{location}</h3>
            <p className="card-news-date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
