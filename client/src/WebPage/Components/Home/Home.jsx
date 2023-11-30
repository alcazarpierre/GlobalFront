import "./Home.modules.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import bghome from "../../../assets/Images/General/bghome.gif";
import Sombrahome from "../../../assets/Images/General/Sombrahome.png";
import circulo from "../../../assets/Images/Icons/circle.png";
import headVideo from '../../../assets/Videos/bghome.mp4';
import NosotrosImage from '../../../assets/Images/General/GSFirst.png';
import AreasImage from '../../../assets/Images/General/GSSecond.png';
import EducacionIcon from '../../../assets/Images/Icons/pencil.png';
import GeneroIcon from '../../../assets/Images/Icons/diversidad.png';
import AccionIcon from '../../../assets/Images/Icons/leaf.png';
import ClubIcon from '../../../assets/Images/Icons/entrepreneur.png';
import TeamIcon from '../../../assets/Images/Icons/iteams.png';
import StorageCardContainer from "../StorageCard/StorageCardContainer";

const Home = () => {

  const handleLoad = () => {
    window.scrollTo(0.0);
  }

  return (
    <div className="home">

      <div>
      <Link to="/"><video src= {headVideo} className="background-video-home" autoPlay loop muted></video></Link>
        <p className="textohome1">
          CREEMOS EN UN <strong>MUNDO</strong> EN EL QUE LAS{" "}
          <strong>JUVENTUDES</strong> SOMOS EL <strong>MOTOR</strong> PARA{" "}
          <strong>CREAR</strong> SOLUCIONES, <strong>IMPULSAR</strong> POLÍTICAS
          Y <strong>CAMBIAR</strong> EL FUTURO.
        </p>
      </div>

      <div className='first-description-container'>
        <div className='first-container-left'>
          <h2 className='quienes-somos-title'>¿Quiénes somos?</h2>
          <p className="textohome2">
            Global Shapers Córdoba es una Fundación surgida a partir de Global
            Shapers Community, iniciativa impulsada por el Foro Económico Mundial
            con el objetivo de crear una red global de jóvenes líderes motivadxs
            por cambiar el futuro de sus comunidades. En Shapers Córdoba
            promovemos el cambio social a través de la innovación y abordando los
            desafíos que plantean los Objetivos de Desarrollo Sostenible.
          </p>

          <ScrollLink to="webpage-contact-form" smooth={true} duration={500} offset={-100}>
            <button className="botongrad">
              <strong>¡Impacta con Nosotrxs!</strong>
            </button>
          </ScrollLink>
        </div>

        <div className='first-container-right'>
          <img className='first-container-image' src={NosotrosImage} alt="" />
        </div>
      </div>

      <div className='second-description-container'>
        <div className='second-container-left'>
          <img className='second-container-image' src={AreasImage} alt="" />
        </div>

        <div className='second-container-right'>
        <h2 className='que-hacemos-title'>¿Qué hacemos?</h2>
          <div className='impact-areas'>
            <div className='icons-home-container'>
              <img id='web-action-icons' className='educacion-icon' src={EducacionIcon} />
              <p>EDUCACIÓN</p>
            </div>
            <div className='icons-home-container'>
              <img id='web-action-icons' className='genero-icon' src={GeneroIcon} />
              <p>GÉNERO Y DIVERSIDADES</p>
            </div>
            <div className='icons-home-container'>
              <img id='web-action-icons' className='accion-icon' src={AccionIcon} />
              <p>ACCIÓN CLIMATICA</p>
            </div>
            <div className='icons-home-container'>
              <img id='web-action-icons' className='emprendedor-icon' src={ClubIcon} />
              <p>CLUB DE EMPRENDEDORES</p>
            </div>
            <div className='icons-home-container'>
              <img id='web-action-icons' className='team-icon' src={TeamIcon} />
              <p>I-TEAM CORDOBA</p>
            </div>
          </div>

          <Link to='/proyectos' onClick={handleLoad} >
            <button className='button-impact-areas'>
                <strong>Conoce nuestros proyectos</strong>
              </button>
          </Link>
        </div>
      </div>

      <div className="impacto">
        <div className="listadeimpactos">
          <h2 className="tituloimpacto">NUESTRO IMPACTO EN 8 AÑOS</h2>
          <div className="circulos">
            <div className="circulo">
              <p className='circle-text'>+14 Proyectos impulsados</p>
            </div>
            <div className="circulo">
              <p className='circle-text'>+17.500 Personas alcanzadas</p>
            </div>
            <div className="circulo">
              <p className='circle-text'>+100 Articulaciones</p>
            </div>
            <div className="circulo">
              <p className='circle-text'>+35.000 Horas de voluntariado</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Basado en tus intereses, te recomendamos esta información:</h3>
        <StorageCardContainer/>
      </div>

    </div>
  );
};

export default Home;