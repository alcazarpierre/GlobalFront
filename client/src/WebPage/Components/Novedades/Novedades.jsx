import React from "react";
import EventContainer from "./Eventos/CardsEventContainer/EventContainer";
import NewsContainer from "./Noticias/CardsNewsContainer/NewsContainer";
import StorageCardContainer from "../StorageCard/StorageCardContainer";
import "./Novedades.modules.css";



const Novedades = () => {

  return (
    <div className="novedades-web-container">

        <div>
            <div>
                <h2 className="eventos-title">EVENTOS</h2>
            </div>
            <div>
                <EventContainer/>
            </div>
        </div>

        <div className="storageCardContainer-novedades-web-container">
            <h3 className="StorageCard-h3">Quizás también te interese esto:</h3>
            <StorageCardContainer/>
        </div>
       
        <div>
            <div>
                <h2 className="noticias-title">NOTICIAS</h2>
            </div>
            <div>
                <NewsContainer/>
            </div>
        </div>
       
  
    </div>

  );
};

export default Novedades;
