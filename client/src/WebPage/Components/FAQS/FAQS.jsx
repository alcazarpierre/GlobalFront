import React from 'react';
import FaqContainer from './CardFaqContainer/FaqContainer';
import manos from "../../../assets/Images/Icons/manos.png"
import stars from "../../../assets/Images/Icons/stars.png";
import cog from "../../../assets/Images/Icons/cog.png";
import "./FAQS.modules.css";
import imagenfaqs from "../../../assets/Images/General/imagenfaqs.png";

const FAQS = () => {
  return (
    <div className='main-faq-container'>
      <h2>PREGUNTAS FRECUENTES</h2>

        <div className='info-card-container' >

          <div className='info-card'>
            <img  src={stars} alt="logopersonaestrellas" />
            <p id='faq-text'>
              Facilitamos espacios de participación activa en el contexto local,
              potenciando los liderazgos jóvenes.
            </p>
          </div>

          <div className='info-card'>
            <img  src={manos} alt="logomanomundo" />
            <p id='faq-text'>
              Promovemos el cambio social a través de la innovación y abordando
              los desafíos que plantean los Objetivos de Desarrollo Sostenible.
            </p>
          </div>

          <div className='info-card'>
            <img src={cog} alt="logo" />
            <p id='faq-text'>
              Trabajamos en comunidad articulando con organizaciones y actores
              claves.
            </p>
          </div>
          
        </div>

      <div className= "faq-component-container" >
        <div>
          <FaqContainer/>
        </div>
      </div>
    </div>
  )
};

export default FAQS;