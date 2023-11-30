import React from "react";
import Stories from "./Historias/CardsStoriesContainer/StoriesContainer"
import "./Nosotros.modules.css";
import bgnos2 from "../../../assets/Images/General/bgnos2.jpeg";
import manos from "../../../assets/Images/Icons/manos.png";
import stars from "../../../assets/Images/Icons/stars.png";
import cog from "../../../assets/Images/Icons/cog.png";
import imgfooter from "../../../assets/Images/General/imgfooter.png";
import { Link } from "react-router-dom";

const Nosotros = () => {

  const handleLoad = () => {
    window.scrollTo(0.0);
  };  

  return (
    <div className="nosotros-container">
      <img className="bgnos" src={bgnos2} alt="bgnos" />
      <div className="txt-container">
        <h1 className="titulonos">
          ¿Qué es <strong>Global Shapers Community?</strong>
          <br></br>
          <br></br>
          Se trata de una iniciativa del <strong>Foro Económico Mundial</strong> nacida en el año
          2011, con el objetivo de generar una <strong>red global de jóvenes líderes </strong>
          motivadxs por <strong>cambiar el futuro</strong> de sus comunidades. 
          <br></br>
          <br></br>
          En Shapers Córdoba promovemos el cambio social a través de la innovación y abordando los desafíos que plantean los Objetivos de Desarrollo Sostenible.
        </h1>
      <div className="circulosnos">
        <div className="circulonos">
          <p className="circle-text-nos">10,240 Shapers</p>
        </div>
        <div className="circulonos">
          <p className="circle-text-nos">481 Hubs</p>
        </div>
        <div className="circulonos">
          <p className="circle-text-nos">150 Países</p>
        </div>
        <div className="circulonos">
          <p className="circle-text-nos">4,134 Alumni</p>
        </div>
      </div>
      <div className="noselementos">
        <div className="logoytexto">
          <img className="logosnos" src={manos} alt="logomanomundo" />
          <p className="nos">
            Promovemos el <strong>cambio social</strong> a través de la <strong>innovación</strong> y abordando
            los desafíos que plantean los <strong>Objetivos de Desarrollo Sostenible</strong>.
          </p>
        </div>
        <div className="logoytexto">
          <img className="logosnos" src={stars} alt="logopersonaestrellas" />
          <p className="nos">
            Facilitamos <strong>espacios de participación activa</strong> en el contexto local,
            potenciando los <strong>liderazgos jóvenes</strong>.
          </p>
        </div>
        <div className="logoytexto">
          <img className="logosnos" src={cog} alt="logo" />
          <p className="nos">
             <strong>Trabajamos en comunidad</strong> articulando con organizaciones y actores
            claves.
          </p>
        </div>
      </div>
      <div>
      </div>
        <h1 className="historia">NUESTRA HISTORIA</h1>
        <p className="historiatexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat.</p>
        <h1 className="historia">HISTORIAS DE ÉXITO</h1>
      </div>
      <div>
        <Stories/>  
      </div>
        <Link to="/proyectos" onClick={handleLoad}>
          <button className="botonplanonos">
            <strong>CONOCE TODAS NUESTRAS ACTIVIDADES</strong>
          </button>
        </Link>      
        <img className="waves" src={imgfooter} alt="olas" />
    </div>
  );
};

export default Nosotros;